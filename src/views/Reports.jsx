/**
 * Reports Page
 * Features:
 * - Generate weekly, monthly, yearly inventory reports
 * - Filter by office
 * - Visual reports with charts and graphs
 * - Printable formal reports with signature blocks
 */

import React, { useState } from 'react'

const Reports = () => {
  const [timePeriod, setTimePeriod] = useState('monthly') // 'weekly', 'monthly', 'yearly'
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 7))
  const [selectedOffice, setSelectedOffice] = useState('all')

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

  const supplyRequests = [
    { department: 'Hemodialysis', submitted: 12, approved: 10, rejected: 1, pending: 1 },
    { department: 'Clinical Laboratory', submitted: 8, approved: 7, rejected: 0, pending: 1 },
    { department: 'Radiology', submitted: 6, approved: 5, rejected: 1, pending: 0 },
    { department: 'Admin Office', submitted: 4, approved: 3, rejected: 0, pending: 1 },
  ]

  const topItems = [
    { name: 'Syringes 5ml', count: 45 },
    { name: 'Gauze Pads (4x4)', count: 32 },
    { name: 'Alcohol Swabs', count: 28 },
    { name: 'Bandages (Assorted)', count: 22 },
    { name: 'Needles 21G', count: 18 },
  ]

  const inventoryStatus = [
    { name: 'Available', value: 82, color: '#10b981' },
    { name: 'Low Stock', value: 12, color: '#f59e0b' },
    { name: 'Critical', value: 4, color: '#ef4444' },
    { name: 'Out of Stock', value: 2, color: '#6b7280' },
  ]

  const monthlyRequests = [
    { month: 'Jan', count: 28 },
    { month: 'Feb', count: 35 },
    { month: 'Mar', count: 42 },
    { month: 'Apr', count: 38 },
    { month: 'May', count: 45 },
    { month: 'Jun', count: 52 },
  ]

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const [year, month] = selectedDate.split('-')
  const monthName = monthNames[parseInt(month) - 1]

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
      <div className="screen-view no-print">
        <div className="page-header">
          <div>
            <h1 className="page-title">{getReportTitle()}</h1>
            <p className="page-subtitle">Purpose: {getPurpose()}</p>
          </div>
          <div className="header-actions">
            <button className="btn-primary" onClick={handlePrint}>🖨️ Print Report</button>
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

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#dbeafe', color: '#1e40af' }}>📦</div>
            <div>
              <div className="stat-value">{totalSupplies.toLocaleString()}</div>
              <div className="stat-label">Total Supplies in Inventory</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#e0e7ff', color: '#3730a3' }}>📋</div>
            <div>
              <div className="stat-value">{totalSupplyTypes}</div>
              <div className="stat-label">Total Different Supply Types</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#fef3c7', color: '#92400e' }}>⚠️</div>
            <div>
              <div className="stat-value">{lowStockItems}</div>
              <div className="stat-label">Low Stock Items</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#fee2e2', color: '#991b1b' }}>⛔</div>
            <div>
              <div className="stat-value">{outOfStockItems}</div>
              <div className="stat-label">Out of Stock Items</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#fce7f3', color: '#be185d' }}>⏰</div>
            <div>
              <div className="stat-value">{expiringIn30Days}</div>
              <div className="stat-label">Expiring Within 30 Days</div>
            </div>
          </div>
        </div>

        <div className="flex-container" style={{ display: 'flex', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <div className="card" style={{ flex: 1, minWidth: 0 }}>
            <div className="card-header">
              <h2 className="card-title">Inventory Status</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
              <svg width="200" height="200" viewBox="0 0 200 200" style={{ transform: 'rotate(-90deg)' }}>
                {(() => {
                  let currentAngle = 0
                  return inventoryStatus.map((status, index) => {
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
                {inventoryStatus.map((status, index) => (
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
              <h2 className="card-title">Monthly Supply Requests</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '180px', padding: '12px 0' }}>
              {(() => {
                const maxCount = Math.max(...monthlyRequests.map(item => item.count))
                return monthlyRequests.map((item, index) => (
                  <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '40px', background: '#1e40af', borderRadius: '4px 4px 0 0', transition: 'height 0.3s ease', height: `${(item.count / maxCount) * 140}px`, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '8px' }}>
                      <span style={{ color: 'white', fontWeight: '600', fontSize: '12px' }}>{item.count}</span>
                    </div>
                    <span style={{ fontSize: '13px', color: '#4b5563', fontWeight: '500' }}>{item.month}</span>
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
                    <th className="number-cell">Rejected</th>
                    <th className="number-cell">Pending</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyRequests.map((dept, index) => (
                    <tr key={index}>
                      <td>{dept.department}</td>
                      <td className="number-cell">{dept.submitted}</td>
                      <td className="number-cell">{dept.approved}</td>
                      <td className="number-cell">{dept.rejected}</td>
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <svg width="220" height="220" viewBox="0 0 220 220" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="110" cy="110" r="100" fill="none" stroke="#dbeafe" strokeWidth="20" />
                {(() => {
                  const total = supplyRequests.reduce((sum, d) => sum + d.submitted, 0)
                  let currentAngle = 0
                  const colors = ['#1e40af', '#10b981', '#f59e0b', '#8b5cf6']
                  return supplyRequests.map((dept, index) => {
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
                {supplyRequests.map((dept, index) => {
                  const colors = ['#1e40af', '#10b981', '#f59e0b', '#8b5cf6']
                  const total = supplyRequests.reduce((sum, d) => sum + d.submitted, 0)
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(() => {
              const maxCount = Math.max(...topItems.map(item => item.count))
              const colors = ['#1e40af', '#3730a3', '#4338ca', '#4f46e5', '#6366f1']
              return topItems.map((item, index) => (
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

      <div className="print-view">
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
                  return inventoryStatus.map((status, index) => {
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
                {inventoryStatus.map((status, index) => (
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
                      <th className="number-cell">Rejected</th>
                      <th className="number-cell">Pending</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supplyRequests.map((dept, index) => (
                      <tr key={index}>
                        <td>{dept.department}</td>
                        <td className="number-cell">{dept.submitted}</td>
                        <td className="number-cell">{dept.approved}</td>
                        <td className="number-cell">{dept.rejected}</td>
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
                    const total = supplyRequests.reduce((sum, d) => sum + d.submitted, 0)
                    let currentAngle = 0
                    const colors = ['#1e40af', '#10b981', '#f59e0b', '#8b5cf6']
                    return supplyRequests.map((dept, index) => {
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
                  {supplyRequests.map((dept, index) => {
                    const colors = ['#1e40af', '#10b981', '#f59e0b', '#8b5cf6']
                    const total = supplyRequests.reduce((sum, d) => sum + d.submitted, 0)
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
                const maxCount = Math.max(...topItems.map(item => item.count))
                const colors = ['#1e40af', '#3730a3', '#4338ca', '#4f46e5', '#6366f1']
                return topItems.map((item, index) => (
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
        }

        .screen-view {
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

        .stats-grid {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-card {
          background: white;
          padding: 14px 16px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          flex: 1;
          min-width: 0;
          max-width: 300px;
        }

        .stat-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .stat-value {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
        }

        .stat-label {
          font-size: 12px;
          color: #6b7280;
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

        /* Responsive for smaller screens */
        @media (max-width: 1200px) {
          .stats-grid {
            flex-wrap: wrap;
          }

          .stat-card {
            flex: 0 0 calc(33.333% - 8px);
            max-width: calc(33.333% - 8px);
          }
        }

        @media (max-width: 900px) {
          .flex-container {
            flex-direction: column;
          }
        }

        @media (max-width: 1024px) {
          .stat-card {
            flex: 0 0 calc(50% - 6px);
            max-width: calc(50% - 6px);
          }

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
            flex: 0 0 100%;
            max-width: 100%;
            padding: 14px 16px;
          }

          .stat-icon {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }

          .stat-value {
            font-size: 20px;
          }

          .stat-label {
            font-size: 12px;
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
          .no-print {
            display: none !important;
          }

          .print-view {
            display: block !important;
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
