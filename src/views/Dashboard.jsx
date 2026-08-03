import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { supabaseDb } from '../utils/apiDb'
import { useUserRole } from '../context/UserRoleContext'

// Import dashboard icons from assets folder
import totalItemsIcon from '../assets/icons/dashboard/dashboard-totalitems-icon.svg'
import lowStockIcon from '../assets/icons/dashboard/dashboard-lowstock-icon.svg'
import pendingIcon from '../assets/icons/dashboard/dashboard-pending-icon.svg'
import issuedIcon from '../assets/icons/dashboard/dashboard-issued-icon.svg'
import activityIssuedIcon from '../assets/icons/dashboard/dashboard-activityissued-icon.svg'
import activityExpiredIcon from '../assets/icons/dashboard/dashboard-activityexpired-icon.svg'
import activityNearExpiryIcon from '../assets/icons/dashboard/dashboard-activitynearexpiry-icon.svg'
import activityAllocatedIcon from '../assets/icons/dashboard/dashboard-activityallocated-icon.svg'
import activityAddedIcon from '../assets/icons/dashboard/dashboard-activityadded-icon.svg'
import searchIcon from '../assets/icons/inventory/search-icon.svg'
import lowStockAlertIcon from '../assets/icons/dashboard/low-stock-alert-icon.svg'
import nearExpiryAlertIcon from '../assets/icons/dashboard/near-expiry-alert-icon.svg'

/**
 * Dashboard page - Home page showing overview of inventory system
 * Displays:
 * - Key statistics (total items, low stock, pending reqs, issued today)
 * - Recent activity feed
 * - Donut chart showing inventory by office
 */
const Dashboard = () => {
  const { userOffice, isAdmin, userOfficeId } = useUserRole()
  const [inventoryItems, setInventoryItems] = useState([])
  const [activities, setActivities] = useState([])
  const [requisitions, setRequisitions] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('newest') // 'newest' or 'oldest'
  const [selectedOffice, setSelectedOffice] = useState(isAdmin ? 'All' : userOffice)
  const [showExpiredDetails, setShowExpiredDetails] = useState(true)
  const [showNearExpiryDetails, setShowNearExpiryDetails] = useState(true)
  const [showLowStockDetails, setShowLowStockDetails] = useState(true)

  const loadData = async () => {
    setLoading(true)
    try {
      const officeToFetch = isAdmin ? selectedOffice : userOffice
      const items = await supabaseDb.getItems(officeToFetch, isAdmin, userOfficeId)
      const acts = await supabaseDb.getActivities(isAdmin, officeToFetch)
      const reqs = await supabaseDb.getRequisitions()
      setInventoryItems(items)
      setActivities(acts)
      setRequisitions(reqs)
    } catch (e) {
      console.error('Failed to load dashboard data', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [isAdmin, userOffice, selectedOffice, userOfficeId])

  // Filter and sort activities
  const processedActivities = [...activities].filter(activity => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      activity.item?.toLowerCase().includes(query) ||
      activity.office?.toLowerCase().includes(query) ||
      activity.action?.toLowerCase().includes(query)
    )
  }).sort((a, b) => {
    const dateA = new Date(a.created_at || a.time)
    const dateB = new Date(b.created_at || b.time)
    if (sortOrder === 'newest') {
      return dateB - dateA
    } else {
      return dateA - dateB
    }
  })

  const items = inventoryItems
  const acts = activities
  const reqs = requisitions

  // Helper functions for expiry checks in Dashboard.jsx
  const isNearExpiry = (expiryDate) => {
    if (!expiryDate) return false
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const expiry = new Date(expiryDate)
    const twoMonthsBefore = new Date(expiry)
    twoMonthsBefore.setMonth(twoMonthsBefore.getMonth() - 2)
    return today >= twoMonthsBefore && today <= expiry
  }

  const isExpired = (expiryDate) => {
    if (!expiryDate) return false
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const expiry = new Date(expiryDate)
    return expiry < today
  }

  // Calculate statistics
  const totalStock = items.reduce((sum, item) => 
    sum + item.batches.reduce((batchSum, batch) => batchSum + batch.stock, 0)
  , 0)
  const lowStockCount = items.filter(item => {
    const total = item.batches.reduce((sum, b) => sum + b.stock, 0)
    return total < item.minStock
  }).length

  const officeFilter = isAdmin ? selectedOffice : userOffice

  const pendingCount = reqs.filter(r => {
    const matchesOffice = officeFilter === 'All' || (r.office && r.office.name === officeFilter)
    return r.status === 'Pending' && matchesOffice
  }).length

  const todayStr = new Date().toDateString()
  const issuedTodayCount = reqs.filter(r => {
    const matchesOffice = officeFilter === 'All' || (r.office && r.office.name === officeFilter)
    return r.status === 'Approved' && 
           matchesOffice && 
           r.updatedAt && 
           new Date(r.updatedAt).toDateString() === todayStr
  }).length

  // Statistics cards data
  const stats = [
    { label: 'Total Stock', value: totalStock.toLocaleString(), icon: totalItemsIcon, bgColor: '#e8f0fe' },
    { label: 'Low Stock', value: lowStockCount.toString(), icon: lowStockIcon, bgColor: '#fff799ff' },
    { label: 'Pending Requisitions', value: pendingCount.toString(), icon: pendingIcon, bgColor: '#f9e49eff' },
    { label: 'Issued Today', value: issuedTodayCount.toString(), icon: issuedIcon, bgColor: '#e6f9e6' },
  ]

  // Calculate expired, nearing expiry, and low stock items list for notifications
  const expiredItemsList = []
  const nearExpiryItemsList = []

  items.forEach(item => {
    item.batches.forEach(batch => {
      if (batch.stock > 0) {
        if (isExpired(batch.expiryDate)) {
          expiredItemsList.push({
            id: `${item.id}-${batch.id}`,
            sku: item.sku,
            name: item.name,
            batchId: batch.batchId,
            stock: batch.stock,
            unit: item.unit,
            expiryDate: batch.expiryDate,
            office: batch.office || 'Unallocated'
          })
        } else if (isNearExpiry(batch.expiryDate)) {
          nearExpiryItemsList.push({
            id: `${item.id}-${batch.id}`,
            sku: item.sku,
            name: item.name,
            batchId: batch.batchId,
            stock: batch.stock,
            unit: item.unit,
            expiryDate: batch.expiryDate,
            office: batch.office || 'Unallocated'
          })
        }
      }
    })
  })

  const lowStockItemsList = items.filter(item => {
    const total = item.batches.reduce((sum, b) => sum + b.stock, 0)
    return total < item.minStock
  })

  // Recent activity feed data
  const recentActivity = processedActivities.map(act => ({
    id: act.id,
    item: act.item,
    office: act.office,
    action: act.action,
    time: act.time,
    type: act.type,
    icon: act.type === 'expired' ? activityExpiredIcon 
      : act.type === 'warning' ? activityNearExpiryIcon 
      : act.type === 'allocated' ? activityAllocatedIcon 
      : act.type === 'approved' ? activityAllocatedIcon 
      : act.type === 'requisitioned' ? activityAddedIcon 
      : act.type === 'added' ? activityAddedIcon 
      : act.type === 'restocked' ? activityAddedIcon
      : activityIssuedIcon,
    bgColor: act.type === 'expired' ? '#ffe6e6' 
      : act.type === 'warning' ? '#fff3cd' 
      : act.type === 'allocated' ? '#eac7ffff' 
      : act.type === 'approved' ? '#d4f8e8' 
      : act.type === 'requisitioned' ? '#e0f2ff' 
      : act.type === 'added' ? '#e6f9e6' 
      : act.type === 'restocked' ? '#dbeafe'
      : '#e6fff3ff'
  }))

  /**
   * Calculate total inventory stock per office
   * Returns totals object with office names as keys
   */
  const calculateOfficeTotals = () => {
    const totals = {
      'Hemodialysis': 0,
      'Clinical Laboratory': 0,
      'Radiology': 0,
      'Admin Office': 0,
      'Unallocated': 0,
    }

    // Sum stock from all batches for each office
    items.forEach(item => {
      item.batches.forEach(batch => {
        if (totals.hasOwnProperty(batch.office)) {
          totals[batch.office] += batch.stock
        }
      })
    })

    return totals
  }

  // Calculate various totals for display
  const officeTotals = calculateOfficeTotals()
  const totalAllocated = Object.values(officeTotals).reduce((sum, val) => sum + val, 0) - officeTotals.Unallocated
  const totalUnallocated = officeTotals.Unallocated
  const totalOverall = Object.values(officeTotals).reduce((sum, val) => sum + val, 0)

  // Chart data for donut chart visualization
  const chartData = [
    { name: 'Hemodialysis', value: officeTotals.Hemodialysis, color: '#3b82f6' },
    { name: 'Clinical Laboratory', value: officeTotals['Clinical Laboratory'], color: '#10b981' },
    { name: 'Radiology', value: officeTotals.Radiology, color: '#f59e0b' },
    { name: 'Admin Office', value: officeTotals['Admin Office'], color: '#8b5cf6' },
    { name: 'Unallocated', value: officeTotals.Unallocated, color: '#9ca3af' },
  ]

  /**
   * Calculate percentage-based segments for the donut chart
   */
  const calculateDonutSegments = () => {
    const segments = []
    let cumulativePercent = 0

    chartData.forEach((item, index) => {
      const percent = item.value / totalOverall
      segments.push({
        ...item,
        startPercent: cumulativePercent,
        endPercent: cumulativePercent + percent,
      })
      cumulativePercent += percent
    })

    return segments
  }

  const segments = calculateDonutSegments()

  /**
   * Convert polar coordinates to Cartesian for SVG arc drawing
   * Used to draw the donut chart segments
   */
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    }
  }

  /**
   * Generate SVG arc path data for donut chart
   * Creates curved segments for each office's inventory
   */
  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle)
    const end = polarToCartesian(x, y, radius, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

    const d = [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(' ')

    return d
  }

  return (
    <div className="dashboard">
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Welcome back! Here's what's happening.</p>
        </div>
        {isAdmin && (
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label style={{ fontSize: '14px', fontWeight: '500', color: '#4b5563' }}>Filter Office:</label>
            <select 
              value={selectedOffice} 
              onChange={(e) => setSelectedOffice(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                background: 'white',
                fontSize: '14px',
                outline: 'none',
                minWidth: '180px'
              }}
            >
              <option value="All">All Offices & Unallocated</option>
              <option value="Hemodialysis">Hemodialysis</option>
              <option value="Clinical Laboratory">Clinical Laboratory</option>
              <option value="Radiology">Radiology</option>
              <option value="Admin Office">Admin Office</option>
            </select>
          </div>
        )}
      </div>

      {/* Alert Notifications */}
      {(expiredItemsList.length > 0 || nearExpiryItemsList.length > 0 || lowStockItemsList.length > 0) && (
        <div className="alerts-container">
          {expiredItemsList.length > 0 && (
            <div className="alert-card alert-danger">
              <div className="alert-header">
                <div className="alert-header-left">
                  <span className="alert-icon">
                    <Icon src={activityExpiredIcon} alt="Expired Alert" size={24} />
                  </span>
                  <div className="alert-title-group">
                    <span className="alert-title">Expired Inventory Detected</span>
                    <span className="alert-subtitle">{expiredItemsList.length} batch(es) have expired and should be removed.</span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowExpiredDetails(!showExpiredDetails)} 
                  className="alert-toggle-btn"
                >
                  {showExpiredDetails ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
              {showExpiredDetails && (
                <div className="alert-body">
                  <div className="alert-item-grid">
                    {expiredItemsList.map(item => (
                      <div key={item.id} className="alert-item-row">
                        <span className="alert-item-name">{item.name}</span>
                        <span className="alert-item-meta">
                          Batch: <strong>{item.batchId}</strong> • Qty: <strong>{item.stock} {item.unit}</strong> • Expired: <strong style={{ color: '#ef4444' }}>{new Date(item.expiryDate).toLocaleDateString()}</strong> • Office: <strong>{item.office}</strong>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {nearExpiryItemsList.length > 0 && (
            <div className="alert-card alert-warning">
              <div className="alert-header">
                <div className="alert-header-left">
                  <span className="alert-icon">
                    <Icon src={nearExpiryAlertIcon} alt="Near Expiry Alert" size={24} />
                  </span>
                  <div className="alert-title-group">
                    <span className="alert-title">Nearing Expiry Warning</span>
                    <span className="alert-subtitle">{nearExpiryItemsList.length} batch(es) will expire soon (within 2 months).</span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowNearExpiryDetails(!showNearExpiryDetails)} 
                  className="alert-toggle-btn"
                >
                  {showNearExpiryDetails ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
              {showNearExpiryDetails && (
                <div className="alert-body">
                  <div className="alert-item-grid">
                    {nearExpiryItemsList.map(item => (
                      <div key={item.id} className="alert-item-row">
                        <span className="alert-item-name">{item.name}</span>
                        <span className="alert-item-meta">
                          Batch: <strong>{item.batchId}</strong> • Qty: <strong>{item.stock} {item.unit}</strong> • Expires: <strong style={{ color: '#d97706' }}>{new Date(item.expiryDate).toLocaleDateString()}</strong> • Office: <strong>{item.office}</strong>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {lowStockItemsList.length > 0 && (
            <div className="alert-card alert-info">
              <div className="alert-header">
                <div className="alert-header-left">
                  <span className="alert-icon">
                    <Icon src={lowStockAlertIcon} alt="Low Stock Alert" size={24} />
                  </span>
                  <div className="alert-title-group">
                    <span className="alert-title">Low Stock Alert</span>
                    <span className="alert-subtitle">{lowStockItemsList.length} item(s) are running below minimum stock level.</span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowLowStockDetails(!showLowStockDetails)} 
                  className="alert-toggle-btn"
                >
                  {showLowStockDetails ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
              {showLowStockDetails && (
                <div className="alert-body">
                  <div className="alert-item-grid">
                    {lowStockItemsList.map(item => {
                      const currentStock = item.batches.reduce((sum, b) => sum + b.stock, 0)
                      return (
                        <div key={item.id} className="alert-item-row">
                          <span className="alert-item-name">{item.name}</span>
                          <span className="alert-item-meta">
                            SKU: <strong>{item.sku}</strong> • Current Stock: <strong style={{ color: '#ef4444' }}>{currentStock}</strong> / {item.minStock} {item.unit}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ background: stat.bgColor }}>
              <Icon src={stat.icon} alt={stat.label} size={32} />
            </div>
            <div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="column-wrapper">
          {/* Filters bar for Recent Activity */}
          <div className="filters-bar">
            <div className="search-box">
              <span className="search-icon">
                <Icon src={searchIcon} alt="Search" size={20} />
              </span>
              <input
                type="text"
                placeholder="Search activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select 
              className="select-input" 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
          
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Recent Activity</h2>
              <a href="#" className="card-link">View All</a>
            </div>
            <div className="activity-list">
              {recentActivity.map((activity) => (
                <div key={activity.id} className={`activity-item ${activity.type ? activity.type : ''}`} style={{ background: activity.bgColor }}>
                  <div className="activity-icon">
                    <Icon src={activity.icon} alt={activity.action} size={28} />
                  </div>
                  <div className="activity-details">
                    <div className="activity-item-name">{activity.item}</div>
                    <div className="activity-meta">
                      <span className="facility-tag">{activity.office}</span>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                  <span className={`activity-status ${activity.action.toLowerCase().replace(/ /g, '-')}`}>
                    {activity.action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Inventory Overview</h2>
          </div>
          <div className="donut-chart-container">
            <div className="donut-chart-wrapper">
              <svg width="240" height="240" viewBox="0 0 240 240">
                <g transform="translate(120, 120)">
                  {segments.map((segment, index) => {
                    if (segment.value === 0) return null

                    const startAngle = segment.startPercent * 360
                    const endAngle = segment.endPercent * 360
                    const path = describeArc(0, 0, 100, startAngle, endAngle)

                    return (
                      <path
                        key={index}
                        d={path}
                        stroke={segment.color}
                        strokeWidth="40"
                        fill="none"
                      />
                    )
                  })}
                </g>
              </svg>
              <div className="donut-center">
                <div className="donut-center-value">{totalAllocated}</div>
                <div className="donut-center-label">Allocated</div>
              </div>
            </div>
            <div className="donut-legend">
              {chartData.map((item, index) => (
                <div key={index} className="legend-item">
                  <span className="legend-color" style={{ background: item.color }}></span>
                  <span className="legend-name">{item.name}</span>
                  <span className="legend-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          gap: 16px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 14px;
        }

        .header-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
        }

        .column-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .filters-bar {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 0 16px;
          gap: 10px;
          min-width: 200px;
        }

        .search-icon {
          font-size: 18px;
        }

        .search-box input {
          flex: 1;
          border: none;
          padding: 12px 0;
          font-size: 14px;
          outline: none;
        }

        .select-input {
          padding: 12px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          background: white;
          cursor: pointer;
          min-width: 150px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .card-link {
          font-size: 14px;
          color: #3b82f6;
          text-decoration: none;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-height: 400px;
          overflow-y: auto;
          padding-right: 8px;
        }

        /* Custom scrollbar styling for activity list */
        .activity-list::-webkit-scrollbar {
          width: 6px;
        }
        .activity-list::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 4px;
        }
        .activity-list::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .activity-list::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        /* Alerts Container & Card styles */
        .alerts-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .alert-card {
          border-radius: 12px;
          border-left: 6px solid;
          padding: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          transition: all 0.2s ease;
        }

        .alert-danger {
          background: #fef2f2;
          border-left-color: #ef4444;
          border-top: 1px solid #fee2e2;
          border-right: 1px solid #fee2e2;
          border-bottom: 1px solid #fee2e2;
        }

        .alert-warning {
          background: #fffbeb;
          border-left-color: #f59e0b;
          border-top: 1px solid #fef3c7;
          border-right: 1px solid #fef3c7;
          border-bottom: 1px solid #fef3c7;
        }

        .alert-info {
          background: #eff6ff;
          border-left-color: #3b82f6;
          border-top: 1px solid #dbeafe;
          border-right: 1px solid #dbeafe;
          border-bottom: 1px solid #dbeafe;
        }

        .alert-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .alert-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .alert-icon {
          font-size: 24px;
        }

        .alert-title-group {
          display: flex;
          flex-direction: column;
        }

        .alert-title {
          font-weight: 700;
          font-size: 15px;
          color: #1f2937;
        }

        .alert-subtitle {
          font-size: 13px;
          color: #4b5563;
          margin-top: 2px;
        }

        .alert-toggle-btn {
          background: transparent;
          border: none;
          color: #4b5563;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .alert-toggle-btn:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .alert-body {
          margin-top: 12px;
          border-top: 1px dashed rgba(0, 0, 0, 0.08);
          padding-top: 12px;
        }

        .alert-item-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-height: 160px;
          overflow-y: auto;
          padding-right: 6px;
        }

        .alert-item-grid::-webkit-scrollbar {
          width: 4px;
        }

        .alert-item-grid::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.15);
          border-radius: 2px;
        }

        .alert-item-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          padding: 6px 10px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 6px;
          gap: 12px;
        }

        .alert-item-name {
          font-weight: 600;
          color: #1f2937;
        }

        .alert-item-meta {
          color: #4b5563;
          text-align: right;
          font-size: 12px;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
        }

        .activity-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .activity-details {
          flex: 1;
          min-width: 0;
        }

        .activity-item-name {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .activity-meta {
          display: flex;
          gap: 8px;
          align-items: center;
          flex-wrap: wrap;
        }

        .facility-tag {
          font-size: 12px;
          padding: 4px 10px;
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 12px;
          white-space: nowrap;
        }

        .activity-time {
          font-size: 12px;
          color: #9ca3af;
        }

        .activity-status {
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 6px;
          white-space: nowrap;
        }

        .activity-status.issued {
          background: #dcfce7;
          color: #166534;
        }

        .activity-status.requisitioned {
          background: #fef3c7;
          color: #92400e;
        }

        .activity-status.restocked {
          background: #dbeafe;
          color: #1e40af;
        }

        .activity-status.allocated {
          background: #ede9fe;
          color: #6d28d9;
        }

        .activity-status.added {
          background: #dcfce7;
          color: #166534;
        }

        .activity-status.about-to-expire {
          background: #fef3c7;
          color: #92400e;
        }

        .activity-status.expired {
          background: #fee2e2;
          color: #991b1b;
        }



        /* Donut Chart Styles */
        .donut-chart-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .donut-chart-wrapper {
          position: relative;
          width: 240px;
          height: 240px;
        }

        .donut-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .donut-center-value {
          font-size: 36px;
          font-weight: 700;
          color: #1f2937;
        }

        .donut-center-label {
          font-size: 14px;
          color: #6b7280;
        }

        .donut-legend {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .legend-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          font-size: 14px;
          color: #4b5563;
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 6px;
          flex-shrink: 0;
        }

        .legend-name {
          flex: 1;
        }

        .legend-value {
          font-weight: 600;
          color: #1f2937;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .header-actions {
            width: 100%;
          }

          .select-input {
            flex: 1;
          }

          .page-title {
            font-size: 24px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 20px;
          }

          .stat-icon {
            width: 48px;
            height: 48px;
          }

          .stat-value {
            font-size: 24px;
          }

          .activity-item {
            flex-wrap: wrap;
          }

          .activity-status {
            width: 100%;
            text-align: center;
          }

          .donut-legend {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .legend-item {
            width: 48%;
          }
        }
      `}</style>
    </div>
  )
}

export default Dashboard
