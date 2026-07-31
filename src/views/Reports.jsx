/**
 * Reports Page
 * Features:
 * - Generate weekly, monthly, yearly inventory reports
 * - Filter by office
 * - Visual reports with charts and graphs
 * - Printable formal reports with signature blocks
 */

import React, { useEffect, useState } from 'react'
import Icon from '../components/Icon'

import totalSuppliesIcon from '../assets/icons/reports/total-supplies.svg'
import supplyTypesIcon from '../assets/icons/reports/types.svg'
import lowStockIcon from '../assets/icons/reports/low-stock.svg'
import outOfStockIcon from '../assets/icons/reports/out-of-stock.svg'
import expiringIcon from '../assets/icons/reports/expiring.svg'
import printerIcon from '../assets/icons/reports/printer.svg'

const Reports = () => {
  const isWip = false // WIP / cover mode
  const [timePeriod, setTimePeriod] = useState('monthly') // 'weekly', 'monthly', 'yearly'
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 7))
  const [selectedOffice, setSelectedOffice] = useState('all')
  const [statsPage, setStatsPage] = useState(0)
  const [statsPerPage, setStatsPerPage] = useState(3)
  const [graphData, setGraphData] = useState(() => ({
    supplyRequests: [
      { department: 'Hemodialysis', submitted: 12, approved: 10, rejected: 1, pending: 1 },
      { department: 'Clinical Laboratory', submitted: 8, approved: 7, rejected: 0, pending: 1 },
      { department: 'Radiology', submitted: 6, approved: 5, rejected: 1, pending: 0 },
      { department: 'Admin Office', submitted: 4, approved: 3, rejected: 0, pending: 1 },
    ],
    inventoryStatus: [
      { name: 'Available', value: 82, color: '#10b981' },
      { name: 'Low Stock', value: 12, color: '#f59e0b' },
      { name: 'Critical', value: 4, color: '#ef4444' },
      { name: 'Out of Stock', value: 2, color: '#6b7280' },
    ],
    requestsOverTime: [
      { label: 'Jan', count: 28 },
      { label: 'Feb', count: 35 },
      { label: 'Mar', count: 42 },
      { label: 'Apr', count: 38 },
      { label: 'May', count: 45 },
      { label: 'Jun', count: 52 },
    ],
    topItems: [
      { name: 'Syringes 5ml', count: 45 },
      { name: 'Gauze Pads (4x4)', count: 32 },
      { name: 'Alcohol Swabs', count: 28 },
      { name: 'Bandages (Assorted)', count: 22 },
      { name: 'Needles 21G', count: 18 },
    ],
  }))
  const [isGraphUpdating, setIsGraphUpdating] = useState(false)

  const inventoryItems = [
    {
      id: 1,
      sku: 'MED-001',
      name: 'Syringes 5ml',
      location: 'Shelf A-12',
      minStock: 100,
      unit: 'pcs',
      batches: [
        { batchId: 'B-001', brand: 'BD Medical', supplier: 'Medical Supply Co', stockNumber: 'SN-001', expiryDate: null, office: 'Hemodialysis', stock: 250 },
        { batchId: 'B-002', brand: 'BD Medical', supplier: 'Medical Supply Co', stockNumber: 'SN-002', expiryDate: null, office: 'Clinical Laboratory', stock: 320 },
        { batchId: 'B-003', brand: 'BD Medical', supplier: 'Medical Supply Co', stockNumber: 'SN-003', expiryDate: null, office: 'Hemodialysis', stock: 200 }
      ]
    },
    {
      id: 2,
      sku: 'MED-002',
      name: 'Gauze Pads (4x4)',
      location: 'Shelf B-05',
      minStock: 50,
      unit: 'packs',
      batches: [
        { batchId: 'B-004', brand: 'Johnson & Johnson', supplier: 'Healthcare Plus', stockNumber: 'SN-004', expiryDate: '2026-07-15', office: 'Radiology', stock: 80 },
        { batchId: 'B-005', brand: 'Johnson & Johnson', supplier: 'Healthcare Plus', stockNumber: 'SN-005', expiryDate: '2027-03-20', office: 'Radiology', stock: 40 }
      ]
    },
    {
      id: 3,
      sku: 'MED-003',
      name: 'Alcohol Swabs',
      location: 'Shelf C-02',
      minStock: 200,
      unit: 'boxes',
      batches: [
        { batchId: 'B-006', brand: 'CVS', supplier: 'Pharmacy Supply Co', stockNumber: 'SN-006', expiryDate: '2026-06-30', office: 'Admin Office', stock: 50 }
      ]
    },
    {
      id: 4,
      sku: 'MED-004',
      name: 'Bandages (Assorted)',
      location: 'Shelf B-10',
      minStock: 30,
      unit: 'boxes',
      batches: [
        { batchId: 'B-007', brand: 'Band-Aid', supplier: 'Healthcare Plus', stockNumber: 'SN-007', expiryDate: null, office: 'Hemodialysis', stock: 60 }
      ]
    },
    {
      id: 5,
      sku: 'MED-005',
      name: 'Needles 21G',
      location: 'Shelf A-15',
      minStock: 100,
      unit: 'pcs',
      batches: [
        { batchId: 'B-008', brand: 'BD Medical', supplier: 'Medical Supply Co', stockNumber: 'SN-008', expiryDate: '2026-08-01', office: 'Clinical Laboratory', stock: 45 }
      ]
    }
  ]

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const dateParts = `${selectedDate}`.split('-')
  const year = dateParts[0] || `${new Date().getFullYear()}`
  const month = dateParts[1] || '01'
  const monthName = monthNames[parseInt(month, 10) - 1] || monthNames[0]

  const handlePrint = () => {
    window.print()
  }

  const isNearExpiry = (expiryDate) => {
    if (!expiryDate) return false
    const today = new Date()
    const expiry = new Date(expiryDate)
    const diffTime = expiry - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 30 && diffDays > 0
  }

  const isExpired = (expiryDate) => {
    if (!expiryDate) return false
    const today = new Date()
    const expiry = new Date(expiryDate)
    return expiry < today
  }

  const getTotalStock = (item) => {
    return item.batches.reduce((sum, batch) => sum + batch.stock, 0)
  }

  const isLowStock = (item) => {
    return getTotalStock(item) < item.minStock
  }

  const isOutOfStock = (item) => {
    return getTotalStock(item) === 0
  }

  // Calculate dynamic stats
  const totalSupplies = inventoryItems.reduce((sum, item) => sum + getTotalStock(item), 0)
  const totalSupplyTypes = inventoryItems.length
  const lowStockItems = inventoryItems.filter(isLowStock).length
  const outOfStockItems = inventoryItems.filter(isOutOfStock).length
  const expiringIn30Days = inventoryItems.reduce((count, item) => {
    const itemHasExpiring = item.batches.some(batch => isNearExpiry(batch.expiryDate))
    return count + (itemHasExpiring ? 1 : 0)
  }, 0)

  const stats = [
    { label: 'Total Supplies in Inventory', value: totalSupplies.toLocaleString(), icon: totalSuppliesIcon, bgColor: '#dbeafe' },
    { label: 'Total Different Supply Types', value: totalSupplyTypes.toString(), icon: supplyTypesIcon, bgColor: '#e0e7ff' },
    { label: 'Low Stock Items', value: lowStockItems.toString(), icon: lowStockIcon, bgColor: '#fef3c7' },
    { label: 'Out of Stock Items', value: outOfStockItems.toString(), icon: outOfStockIcon, bgColor: '#fee2e2' },
    { label: 'Expiring Within 30 Days', value: expiringIn30Days.toString(), icon: expiringIcon, bgColor: '#fce7f3' },
  ]

  useEffect(() => {
    const resolve = () => {
      const width = window.innerWidth
      const next = width >= 1280 ? 3 : width >= 1024 ? 2 : 1
      setStatsPerPage(next)
    }
    resolve()
    window.addEventListener('resize', resolve)
    return () => window.removeEventListener('resize', resolve)
  }, [])

  const statsTotalPages = Math.ceil(stats.length / statsPerPage)

  useEffect(() => {
    if (statsPage > statsTotalPages - 1) {
      setStatsPage(Math.max(0, statsTotalPages - 1))
    }
  }, [statsPage, statsTotalPages])

  const statsPages = Array.from({ length: statsTotalPages }, (_, i) => {
    const start = i * statsPerPage
    return stats.slice(start, start + statsPerPage)
  })

  useEffect(() => {
    const hashSeed = (value) => {
      let h = 2166136261
      for (let i = 0; i < value.length; i++) {
        h ^= value.charCodeAt(i)
        h = Math.imul(h, 16777619)
      }
      return h >>> 0
    }

    const createRng = (seed) => {
      let s = seed >>> 0
      return () => {
        s = (Math.imul(1664525, s) + 1013904223) >>> 0
        return s / 4294967296
      }
    }

    const selectedOfficeLabel = (() => {
      if (selectedOffice === 'all') return null
      if (selectedOffice === 'hemodialysis') return 'Hemodialysis'
      if (selectedOffice === 'clinical-laboratory') return 'Clinical Laboratory'
      if (selectedOffice === 'radiology') return 'Radiology'
      if (selectedOffice === 'admin-office') return 'Admin Office'
      return null
    })()

    const seed = hashSeed(`${timePeriod}|${selectedDate}|${selectedOffice}`)
    const rng = createRng(seed)

    const supplyRequests = ['Hemodialysis', 'Clinical Laboratory', 'Radiology', 'Admin Office'].map((department) => {
      const officeBoost = selectedOfficeLabel === department ? 1.2 : 1
      const submitted = Math.max(1, Math.round((6 + rng() * 12) * officeBoost))
      const rejected = Math.min(submitted, Math.floor(rng() * 3))
      const approved = Math.max(0, submitted - rejected - Math.floor(rng() * 4))
      const pending = Math.max(0, submitted - approved - rejected)
      return { department, submitted, approved, rejected, pending }
    })

    const inventoryStatusRaw = [
      { name: 'Available', value: 70 + rng() * 22, color: '#10b981' },
      { name: 'Low Stock', value: 7 + rng() * 12, color: '#f59e0b' },
      { name: 'Critical', value: 2 + rng() * 7, color: '#ef4444' },
      { name: 'Out of Stock', value: 1 + rng() * 5, color: '#6b7280' },
    ]
    const rawSum = inventoryStatusRaw.reduce((sum, s) => sum + s.value, 0)
    const normalized = inventoryStatusRaw.map((s) => ({ ...s, value: Math.max(0, Math.round((s.value / rawSum) * 100)) }))
    const normalizedSum = normalized.reduce((sum, s) => sum + s.value, 0)
    normalized[normalized.length - 1] = { ...normalized[normalized.length - 1], value: Math.max(0, normalized[normalized.length - 1].value + (100 - normalizedSum)) }

    const makeLabels = () => {
      if (timePeriod === 'yearly') {
        const baseYear = parseInt(year, 10) || new Date().getFullYear()
        return Array.from({ length: 6 }, (_, i) => `${baseYear - (5 - i)}`)
      }
      if (timePeriod === 'weekly') {
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
      const base = new Date((parseInt(year, 10) || new Date().getFullYear()), (parseInt(month, 10) || 1) - 1, 1)
      return Array.from({ length: 6 }, (_, i) => {
        const d = new Date(base)
        d.setMonth(base.getMonth() - (5 - i))
        return monthNames[d.getMonth()].slice(0, 3)
      })
    }

    const requestLabels = makeLabels()
    const requestsOverTime = requestLabels.map((label) => ({
      label,
      count: Math.round(18 + rng() * 50),
    }))

    const topItems = [
      'Syringes 5ml',
      'Gauze Pads (4x4)',
      'Alcohol Swabs',
      'Bandages (Assorted)',
      'Needles 21G',
    ].map((name) => ({
      name,
      count: Math.round(10 + rng() * 55),
    })).sort((a, b) => b.count - a.count)

    setGraphData({
      supplyRequests,
      inventoryStatus: normalized,
      requestsOverTime,
      topItems,
    })

    setIsGraphUpdating(true)
    const t = window.setTimeout(() => setIsGraphUpdating(false), 360)
    return () => window.clearTimeout(t)
  }, [timePeriod, selectedDate, selectedOffice, year, month])

  const getPeriodLabel = () => {
    if (timePeriod === 'weekly') return 'Week of June 24 - June 30, 2026'
    if (timePeriod === 'monthly') return `${monthName} ${year}`
    return `${year}`
  }

  const getReportTitle = () => {
    return `${timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)} Inventory Report`
  }

  const getPurpose = () => {
    if (timePeriod === 'weekly') return 'Monitor day-to-day operations.'
    if (timePeriod === 'monthly') return 'Track monthly inventory trends.'
    return 'Analyze annual inventory performance.'
  }

  return (
    <div className="reports">
      {isWip ? (
        <div className="reports-wip-overlay">
          <div className="reports-wip-card">
            <div className="reports-wip-badge">WIP</div>
            <div className="reports-wip-title">Reports</div>
            <div className="reports-wip-subtitle">Under construction</div>
            <div className="reports-wip-anim-row">
              <div className="reports-wip-spinner" aria-hidden="true" />
              <div className="reports-wip-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="reports-wip-tape" aria-hidden="true">
              <div className="reports-wip-tape-inner" />
            </div>
            <div className="reports-wip-note">
              This section is being built. Inventory and Requisition features are ready to use.
            </div>
          </div>
        </div>
      ) : null}

      <div className={`screen-view no-print ${isWip ? 'reports-wip-blur' : ''}`}>
        <div className="page-header">
          <div>
            <h1 className="page-title">{getReportTitle()}</h1>
            <p className="page-subtitle">Purpose: {getPurpose()}</p>
          </div>
          <div className="header-actions">
            <button className="btn-primary" onClick={handlePrint}>
              <span className="btn-icon">
                <Icon src={printerIcon} alt="Print" size={18} />
              </span>
              Print Report
            </button>
          </div>
        </div>

        <div className="filters-bar">
          <div className="filter-group">
            <label>Time Period</label>
            <select
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              className="form-input"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div className="filter-group">
            <label>{timePeriod === 'monthly' ? 'Month' : timePeriod === 'yearly' ? 'Year' : 'Week'}</label>
            <input
              type={timePeriod === 'monthly' ? 'month' : timePeriod === 'yearly' ? 'number' : 'date'}
              value={timePeriod === 'yearly' ? year : selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="filter-group">
            <label>Office</label>
            <select
              value={selectedOffice}
              onChange={(e) => setSelectedOffice(e.target.value)}
              className="form-input"
            >
              <option value="all">All Offices</option>
              <option value="hemodialysis">Hemodialysis</option>
              <option value="clinical-laboratory">Clinical Laboratory</option>
              <option value="radiology">Radiology</option>
              <option value="admin-office">Admin Office</option>
            </select>
          </div>
        </div>

        <div className="stats-carousel">
          <div className="stats-viewport">
            <div
              className="stats-track"
              style={{ transform: `translateX(-${statsPage * 100}%)` }}
            >
              {statsPages.map((page, pageIndex) => (
                <div
                  key={pageIndex}
                  className="stats-page"
                  style={{ gridTemplateColumns: `repeat(${statsPerPage}, minmax(0, 1fr))` }}
                >
                  {page.map((stat) => (
                    <div key={stat.label} className="stat-card">
                      <div className="stat-icon" style={{ background: stat.bgColor }}>
                        <Icon src={stat.icon} alt={stat.label} size={32} />
                      </div>
                      <div className="stat-content">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {statsTotalPages > 1 ? (
            <div className="stats-dots">
              {Array.from({ length: statsTotalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`stats-dot ${i === statsPage ? 'is-active' : ''}`}
                  onClick={() => setStatsPage(i)}
                  aria-label={`Stats page ${i + 1}`}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex-container" style={{ display: 'flex', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <div className="card" style={{ flex: 1, minWidth: 0 }}>
            <div className="card-header">
              <h2 className="card-title">Inventory Status</h2>
            </div>
            <div className={`reports-graph ${isGraphUpdating ? 'is-updating' : ''}`} style={{ display: 'flex', justifyContent: 'center', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
              <svg width="200" height="200" viewBox="0 0 200 200" style={{ transform: 'rotate(-90deg)' }}>
                {(() => {
                  let currentAngle = 0
                  return (graphData?.inventoryStatus || []).map((status, index) => {
                    const angle = (status.value / 100) * 2 * Math.PI
                    const x1 = 100 + 90 * Math.cos(currentAngle)
                    const y1 = 100 + 90 * Math.sin(currentAngle)
                    const x2 = 100 + 90 * Math.cos(currentAngle + angle)
                    const y2 = 100 + 90 * Math.sin(currentAngle + angle)
                    const largeArc = angle > Math.PI ? 1 : 0
                    const d = `M 100 100 L ${x1} ${y1} A 90 90 0 ${largeArc} 1 ${x2} ${y2} Z`
                    currentAngle += angle
                    return <path key={index} d={d} fill={status.color} />
                  })
                })()}
                <circle cx="100" cy="100" r="50" fill="white" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '150px' }}>
                {(graphData?.inventoryStatus || []).map((status, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: status.color }} />
                      <span style={{ fontSize: '14px', color: '#374151' }}>{status.name}</span>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937' }}>{status.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card" style={{ flex: 1, minWidth: 0 }}>
            <div className="card-header">
              <h2 className="card-title">{timePeriod === 'weekly' ? 'Weekly Supply Requests' : timePeriod === 'yearly' ? 'Yearly Supply Requests' : 'Monthly Supply Requests'}</h2>
            </div>
            <div className={`reports-graph ${isGraphUpdating ? 'is-updating' : ''}`} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '180px', padding: '12px 0' }}>
              {(() => {
                const list = graphData?.requestsOverTime || []
                const maxCount = Math.max(1, ...list.map(item => item.count))
                return list.map((item, index) => (
                  <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '40px', background: '#1e40af', borderRadius: '4px 4px 0 0', transition: 'height 0.3s ease', height: `${(item.count / maxCount) * 140}px`, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '8px' }}>
                      <span style={{ color: 'white', fontWeight: '600', fontSize: '12px' }}>{item.count}</span>
                    </div>
                    <span style={{ fontSize: '13px', color: '#4b5563', fontWeight: '500' }}>{item.label}</span>
                  </div>
                ))
              })()}
            </div>
          </div>
        </div>

        <div className="flex-container" style={{ display: 'flex', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <div className="card" style={{ flex: 1, minWidth: 0 }}>
            <div className="card-header">
              <h2 className="card-title">Supply Requests by Department</h2>
            </div>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Department</th>
                    <th className="number-cell">Request Submitted</th>
                    <th className="number-cell">Approved</th>
                    <th className="number-cell">Pending</th>
                  </tr>
                </thead>
                <tbody>
                  {(graphData?.supplyRequests || []).map((dept, index) => (
                    <tr key={index}>
                      <td>{dept.department}</td>
                      <td className="number-cell">{dept.submitted}</td>
                      <td className="number-cell">{dept.approved}</td>
                      <td className="number-cell">{dept.pending}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card" style={{ flex: '0 0 300px', minWidth: 0 }}>
            <div className="card-header">
              <h2 className="card-title">Request Distribution</h2>
            </div>
            <div className={`reports-graph ${isGraphUpdating ? 'is-updating' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <svg width="220" height="220" viewBox="0 0 220 220" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="110" cy="110" r="100" fill="none" stroke="#dbeafe" strokeWidth="20" />
                {(() => {
                  const list = graphData?.supplyRequests || []
                  const total = list.reduce((sum, d) => sum + d.submitted, 0)
                  let currentAngle = 0
                  const colors = ['#1e40af', '#10b981', '#f59e0b', '#8b5cf6']
                  return list.map((dept, index) => {
                    const angle = (dept.submitted / total) * 2 * Math.PI
                    const x1 = 110 + 100 * Math.cos(currentAngle)
                    const y1 = 110 + 100 * Math.sin(currentAngle)
                    const x2 = 110 + 100 * Math.cos(currentAngle + angle)
                    const y2 = 110 + 100 * Math.sin(currentAngle + angle)
                    const largeArc = angle > Math.PI ? 1 : 0
                    const d = `M 110 110 L ${x1} ${y1} A 100 100 0 ${largeArc} 1 ${x2} ${y2} Z`
                    currentAngle += angle
                    return <path key={index} d={d} fill={colors[index]} />
                  })
                })()}
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                {(graphData?.supplyRequests || []).map((dept, index) => {
                  const colors = ['#1e40af', '#10b981', '#f59e0b', '#8b5cf6']
                  const total = (graphData?.supplyRequests || []).reduce((sum, d) => sum + d.submitted, 0) || 1
                  const percent = ((dept.submitted / total) * 100).toFixed(0)
                  return (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: colors[index] }} />
                        <span style={{ fontSize: '14px', color: '#374151' }}>{dept.department}</span>
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937' }}>{percent}%</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Top 5 Most Requested Items</h2>
          </div>
          <div className={`reports-graph ${isGraphUpdating ? 'is-updating' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(() => {
              const list = graphData?.topItems || []
              const maxCount = Math.max(1, ...list.map(item => item.count))
              const colors = ['#1e40af', '#3730a3', '#4338ca', '#4f46e5', '#6366f1']
              return list.map((item, index) => (
                <div key={index} className="bar-graph-item" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div className="bar-graph-label" style={{ width: '180px', minWidth: '180px', fontSize: '14px', color: '#374151', fontWeight: '500' }}>
                    {item.name}
                  </div>
                  <div style={{ flex: 1, height: '32px', background: '#f3f4f6', borderRadius: '8px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${(item.count / maxCount) * 100}%`,
                        height: '100%',
                        background: colors[index],
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: '12px',
                        transition: 'width 0.3s ease'
                      }}
                    >
                      <span style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>{item.count}</span>
                    </div>
                  </div>
                </div>
              ))
            })()}
          </div>
        </div>
      </div>

      <div className={`print-view ${isWip ? 'reports-wip-hidden' : ''}`}>
        <div className="print-container">
          <div className="report">
            <div className="report-header">
              <div className="report-header-top">
                <div className="clinic-logo">🏥</div>
                <div className="clinic-info">
                  <h2>BPDACC Inventory Management</h2>
                  <p>{getReportTitle().toUpperCase()}</p>
                </div>
              </div>
              <div className="report-period">
                For the {timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)} of <span className="period-highlight">{getPeriodLabel()}</span>
              </div>
            </div>

            <div className="print-summary-section">
              <table className="summary-table">
                <thead>
                  <tr>
                    <th>Statistic</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Total Supplies in Inventory</td>
                    <td>{totalSupplies.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Total Different Supply Types</td>
                    <td>{totalSupplyTypes}</td>
                  </tr>
                  <tr>
                    <td>Low Stock Items</td>
                    <td>{lowStockItems}</td>
                  </tr>
                  <tr>
                    <td>Out of Stock Items</td>
                    <td>{outOfStockItems}</td>
                  </tr>
                  <tr>
                    <td>Expiring Within 30 Days</td>
                    <td>{expiringIn30Days}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ marginTop: '32px', marginBottom: '16px', color: '#1f2937' }}>Inventory Status</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', alignItems: 'center', marginBottom: '32px' }}>
              <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: 'rotate(-90deg)' }}>
                {(() => {
                  let currentAngle = 0
                  return (graphData?.inventoryStatus || []).map((status, index) => {
                    const angle = (status.value / 100) * 2 * Math.PI
                    const x1 = 80 + 70 * Math.cos(currentAngle)
                    const y1 = 80 + 70 * Math.sin(currentAngle)
                    const x2 = 80 + 70 * Math.cos(currentAngle + angle)
                    const y2 = 80 + 70 * Math.sin(currentAngle + angle)
                    const largeArc = angle > Math.PI ? 1 : 0
                    const d = `M 80 80 L ${x1} ${y1} A 70 70 0 ${largeArc} 1 ${x2} ${y2} Z`
                    currentAngle += angle
                    return <path key={index} d={d} fill={status.color} />
                  })
                })()}
                <circle cx="80" cy="80" r="40" fill="white" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '130px' }}>
                {(graphData?.inventoryStatus || []).map((status, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: status.color }} />
                      <span>{status.name}</span>
                    </div>
                    <span style={{ fontWeight: '600' }}>{status.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '32px', marginBottom: '32px', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ marginTop: 0, marginBottom: '16px', color: '#1f2937' }}>Supply Requests by Department</h3>
                <table className="report-table">
                  <thead>
                    <tr>
                      <th>Department</th>
                      <th className="number-cell">Request Submitted</th>
                      <th className="number-cell">Approved</th>
                      <th className="number-cell">Pending</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(graphData?.supplyRequests || []).map((dept, index) => (
                      <tr key={index}>
                        <td>{dept.department}</td>
                        <td className="number-cell">{dept.submitted}</td>
                        <td className="number-cell">{dept.approved}</td>
                        <td className="number-cell">{dept.pending}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ flex: '0 0 200px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '16px', color: '#1f2937' }}>Request Distribution</h3>
                <svg width="180" height="180" viewBox="0 0 180 180" style={{ transform: 'rotate(-90deg)', marginBottom: '16px' }}>
                  <circle cx="90" cy="90" r="80" fill="none" stroke="#dbeafe" strokeWidth="16" />
                  {(() => {
                    const list = graphData?.supplyRequests || []
                    const total = list.reduce((sum, d) => sum + d.submitted, 0)
                    let currentAngle = 0
                    const colors = ['#1e40af', '#10b981', '#f59e0b', '#8b5cf6']
                    return list.map((dept, index) => {
                      const angle = (dept.submitted / total) * 2 * Math.PI
                      const x1 = 90 + 80 * Math.cos(currentAngle)
                      const y1 = 90 + 80 * Math.sin(currentAngle)
                      const x2 = 90 + 80 * Math.cos(currentAngle + angle)
                      const y2 = 90 + 80 * Math.sin(currentAngle + angle)
                      const largeArc = angle > Math.PI ? 1 : 0
                      const d = `M 90 90 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`
                      currentAngle += angle
                      return <path key={index} d={d} fill={colors[index]} />
                    })
                  })()}
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {(graphData?.supplyRequests || []).map((dept, index) => {
                    const colors = ['#1e40af', '#10b981', '#f59e0b', '#8b5cf6']
                    const total = (graphData?.supplyRequests || []).reduce((sum, d) => sum + d.submitted, 0) || 1
                    const percent = ((dept.submitted / total) * 100).toFixed(0)
                    return (
                      <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: colors[index] }} />
                          <span>{dept.department}</span>
                        </div>
                        <span style={{ fontWeight: '600' }}>{percent}%</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <h3 style={{ marginTop: '32px', marginBottom: '16px', color: '#1f2937' }}>Top 5 Most Requested Items</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
              {(() => {
                const list = graphData?.topItems || []
                const maxCount = Math.max(1, ...list.map(item => item.count))
                const colors = ['#1e40af', '#3730a3', '#4338ca', '#4f46e5', '#6366f1']
                return list.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '160px', fontSize: '12px', color: '#374151', fontWeight: '500' }}>
                      {item.name}
                    </div>
                    <div style={{ flex: 1, height: '24px', background: '#f3f4f6', borderRadius: '6px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${(item.count / maxCount) * 100}%`,
                          height: '100%',
                          background: colors[index],
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          paddingRight: '8px'
                        }}
                      >
                        <span style={{ color: 'white', fontWeight: '600', fontSize: '12px' }}>{item.count}</span>
                      </div>
                    </div>
                  </div>
                ))
              })()}
            </div>

            <div className="report-signatures">
              <div className="signature-block">
                <div className="signature-line"></div>
                <div className="signature-label">Prepared By</div>
                <div className="signature-sub">Signature over Printed Name</div>
              </div>
              <div className="signature-block">
                <div className="signature-line"></div>
                <div className="signature-label">Checked By</div>
                <div className="signature-sub">Signature over Printed Name</div>
              </div>
              <div className="signature-block">
                <div className="signature-line"></div>
                <div className="signature-label">Approved By</div>
                <div className="signature-sub">Signature over Printed Name</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .reports {
          padding: 0;
          position: relative;
          min-height: 420px;
        }

        .screen-view {
        }

        .reports-wip-overlay {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 220px;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(245, 247, 250, 0.92);
          backdrop-filter: blur(2px);
        }

        @media (max-width: 768px) {
          .reports-wip-overlay {
            left: 0;
          }
        }

        .reports-wip-card {
          width: min(680px, 100%);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(229, 231, 235, 0.8);
          border-radius: 16px;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          animation: reportsWipPop 280ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reports-wip-badge {
          align-self: flex-start;
          background: #111827;
          color: #fff;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.14em;
          padding: 6px 10px;
          border-radius: 999px;
        }

        .reports-wip-title {
          font-size: 22px;
          font-weight: 800;
          color: #111827;
          line-height: 1.1;
        }

        .reports-wip-subtitle {
          font-size: 14px;
          font-weight: 600;
          color: #4b5563;
        }

        .reports-wip-anim-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 6px;
          padding-bottom: 4px;
        }

        .reports-wip-spinner {
          width: 20px;
          height: 20px;
          border-radius: 999px;
          border: 3px solid #d1d5db;
          border-top-color: #1e40af;
          animation: reportsWipSpin 900ms linear infinite;
          flex: 0 0 auto;
        }

        .reports-wip-dots {
          display: inline-flex;
          gap: 6px;
          align-items: center;
          height: 20px;
        }

        .reports-wip-dots span {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #111827;
          opacity: 0.2;
          animation: reportsWipDots 1200ms ease-in-out infinite;
        }

        .reports-wip-dots span:nth-child(2) {
          animation-delay: 160ms;
        }

        .reports-wip-dots span:nth-child(3) {
          animation-delay: 320ms;
        }

        .reports-wip-tape {
          height: 14px;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .reports-wip-tape-inner {
          width: 200%;
          height: 100%;
          background: repeating-linear-gradient(
            135deg,
            #f59e0b 0px,
            #f59e0b 12px,
            #111827 12px,
            #111827 24px
          );
          animation: reportsWipTape 900ms linear infinite;
        }

        .reports-wip-note {
          color: #374151;
          font-size: 13px;
          line-height: 1.35;
        }

        .reports-wip-blur {
          filter: blur(4px);
          opacity: 0.25;
          pointer-events: none;
          user-select: none;
        }

        .reports-wip-hidden {
          display: none;
        }

        @keyframes reportsWipSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes reportsWipDots {
          0%, 100% { transform: translateY(0); opacity: 0.2; }
          50% { transform: translateY(-4px); opacity: 0.9; }
        }

        @keyframes reportsWipTape {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes reportsWipPop {
          from { transform: translateY(6px) scale(0.985); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          gap: 16px;
        }

        .page-title {
          font-size: 32px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 16px;
          font-style: italic;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .btn-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }

        .filters-bar {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .filter-group label {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
        }

        .form-input {
          padding: 10px 14px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          background: white;
          outline: none;
        }

        .form-input:focus {
          border-color: #1e40af;
        }

        .stats-carousel {
          margin-bottom: 32px;
        }

        .stats-viewport {
          overflow: hidden;
        }

        .stats-track {
          display: flex;
          transition: transform 320ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .stats-page {
          flex: 0 0 100%;
          display: grid;
          gap: 20px;
        }

        .stat-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          min-width: 0;
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-content {
          min-width: 0;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.2;
        }

        .stats-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 12px;
        }

        .stats-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: none;
          padding: 0;
          background: #cbd5e1;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .stats-dot.is-active {
          width: 20px;
          background: #1e40af;
        }

        .reports-graph {
          transform-origin: center;
        }

        .reports-graph.is-updating {
          animation: reportsGraphRefresh 360ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes reportsGraphRefresh {
          from {
            opacity: 0.7;
            transform: translateY(2px) scale(0.99);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
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

        .table-container {
          overflow-x: auto;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        .data-table th,
        .data-table td {
          border: 1px solid #e5e7eb;
          padding: 12px;
          text-align: left;
        }

        .data-table th {
          background: #f9fafb;
          font-weight: 600;
          font-size: 13px;
          color: #4b5563;
        }

        .number-cell {
          text-align: right;
        }

        .print-view {
          display: none;
        }

        .print-container {
          background: white;
          padding: 40px;
        }

        .report {
          max-width: 950px;
          margin: 0 auto;
        }

        .report-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .report-header-top {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .clinic-logo {
          font-size: 48px;
        }

        .clinic-info h2 {
          font-size: 20px;
          font-weight: 700;
          color: #1e40af;
          margin-bottom: 4px;
        }

        .clinic-info p {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
        }

        .report-period {
          font-size: 16px;
          color: #4b5563;
        }

        .period-highlight {
          font-weight: 700;
          color: #1f2937;
          font-size: 18px;
        }

        .print-summary-section {
          margin-bottom: 32px;
        }

        .summary-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
        }

        .summary-table th,
        .summary-table td {
          border: 1px solid #000;
          padding: 12px;
          text-align: left;
        }

        .summary-table th {
          background: #f3f4f6;
          font-weight: 700;
        }

        .report-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 40px;
        }

        .report-table th,
        .report-table td {
          border: 1px solid #000;
          padding: 12px;
          text-align: left;
        }

        .report-table th {
          background: #f9fafb;
          font-weight: 600;
          font-size: 13px;
          color: #1f2937;
        }

        .report-signatures {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .signature-block {
          text-align: center;
        }

        .signature-line {
          border-bottom: 1px solid #000;
          margin-bottom: 8px;
          margin-top: 40px;
        }

        .signature-label {
          font-size: 13px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .signature-sub {
          font-size: 11px;
          color: #6b7280;
        }

        @media (max-width: 900px) {
          .flex-container {
            flex-direction: column;
          }
        }

        @media (max-width: 1024px) {
          .report-signatures {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-primary {
            width: 100%;
          }

          .page-title {
            font-size: 24px;
          }

          .filters-bar {
            flex-direction: column;
          }

          .form-input {
            width: 100%;
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

          .bar-graph-item {
            flex-direction: column;
            gap: 8px;
          }

          .bar-graph-label {
            width: 100% !important;
            min-width: unset !important;
          }

          .report-signatures {
            grid-template-columns: 1fr;
          }
        }

        @media print {
          .reports-wip-overlay {
            position: static !important;
            inset: auto !important;
            background: white !important;
            backdrop-filter: none !important;
            padding: 0 !important;
          }

          .no-print {
            display: none !important;
          }

          .print-view {
            display: none !important;
          }

          .print-container {
            box-shadow: none;
            padding: 20px;
          }

          body {
            background: white;
          }
        }
      `}</style>
    </div>
  )
}

export default Reports
