import React from 'react'
import Icon from '../components/Icon'

// Import dashboard icons
import totalItemsIcon from '../assets/icons/dashboard/dashboard-totalitems-icon.svg'
import lowStockIcon from '../assets/icons/dashboard/dashboard-lowstock-icon.svg'
import pendingIcon from '../assets/icons/dashboard/dashboard-pending-icon.svg'
import issuedIcon from '../assets/icons/dashboard/dashboard-issued-icon.svg'
import activityIssuedIcon from '../assets/icons/dashboard/dashboard-activityissued-icon.svg'
import activityExpiredIcon from '../assets/icons/dashboard/dashboard-activityexpired-icon.svg'
import activityNearExpiryIcon from '../assets/icons/dashboard/dashboard-activitynearexpiry-icon.svg'
import activityAllocatedIcon from '../assets/icons/dashboard/dashboard-activityallocated-icon.svg'
import activityAddedIcon from '../assets/icons/dashboard/dashboard-activityadded-icon.svg'

const Dashboard = () => {
  const stats = [
    { label: 'Total Items', value: '1,247', icon: totalItemsIcon, bgColor: '#e8f0fe' },
    { label: 'Low Stock', value: '23', icon: lowStockIcon, bgColor: '#fff799ff' },
    { label: 'Pending Requisitions', value: '8', icon: pendingIcon, bgColor: '#f9e49eff' },
    { label: 'Issued Today', value: '45', icon: issuedIcon, bgColor: '#e6f9e6' },
  ]

  const recentActivity = [
    { id: 1, item: 'Syringes 5ml', office: 'Hemodialysis', action: 'Issued', time: '2 hours ago', icon: activityIssuedIcon, bgColor: '#e6fff3ff' },
    { id: 2, item: 'Alcohol Swabs', office: 'Admin Office', action: 'Expired', time: '3 hours ago', type: 'expired', icon: activityExpiredIcon, bgColor: '#ffe6e6' },
    { id: 3, item: 'Gauze Pads (4x4)', office: 'Radiology', action: 'About to Expire', time: '4 hours ago', type: 'warning', icon: activityNearExpiryIcon, bgColor: '#fff3cd' },
    { id: 4, item: 'Bandages (Assorted)', office: 'Hemodialysis', action: 'Allocated', time: '5 hours ago', icon: activityAllocatedIcon, bgColor: '#eac7ffff' },
    { id: 5, item: 'Needles 21G', office: 'Clinical Laboratory', action: 'Added', time: '6 hours ago', type: 'added', icon: activityAddedIcon, bgColor: '#e6f9e6' },
  ]

  // Inventory data for the donut chart
  const inventoryItems = [
    {
      id: 1,
      sku: 'MED-001',
      name: 'Syringes 5ml',
      brand: 'BD Medical',
      location: 'Shelf A-12',
      minStock: 100,
      unit: 'pcs',
      batches: [
        { batchId: 'B-001', expiryDate: null, office: 'Hemodialysis', stock: 450 },
        { batchId: 'B-002', expiryDate: null, office: 'Clinical Laboratory', stock: 320 },
        { batchId: 'B-003', expiryDate: null, office: 'Hemodialysis', stock: 200 },
      ],
    },
    {
      id: 2,
      sku: 'MED-002',
      name: 'Gauze Pads (4x4)',
      brand: 'Johnson & Johnson',
      location: 'Shelf B-05',
      minStock: 50,
      unit: 'packs',
      batches: [
        { batchId: 'B-004', expiryDate: '2026-07-15', office: 'Radiology', stock: 80 },
        { batchId: 'B-005', expiryDate: '2027-03-20', office: 'Radiology', stock: 40 },
      ],
    },
    {
      id: 3,
      sku: 'MED-003',
      name: 'Alcohol Swabs',
      brand: 'Kendall',
      location: 'Shelf C-08',
      minStock: 100,
      unit: 'boxes',
      batches: [
        { batchId: 'B-006', expiryDate: '2026-06-30', office: 'Admin Office', stock: 35 },
        { batchId: 'B-007', expiryDate: '2026-08-10', office: 'Hemodialysis', stock: 40 },
      ],
    },
    {
      id: 4,
      sku: 'MED-004',
      name: 'Bandages (Assorted)',
      brand: '3M',
      location: 'Shelf B-10',
      minStock: 150,
      unit: 'boxes',
      batches: [
        { batchId: 'B-008', expiryDate: null, office: 'Hemodialysis', stock: 150 },
        { batchId: 'B-009', expiryDate: null, office: 'Unallocated', stock: 50 },
      ],
    },
    {
      id: 5,
      sku: 'MED-005',
      name: 'Needles 21G',
      brand: 'BD Medical',
      location: 'Shelf A-15',
      minStock: 200,
      unit: 'pcs',
      batches: [
        { batchId: 'B-010', expiryDate: '2028-12-01', office: 'Clinical Laboratory', stock: 500 },
      ],
    },
  ]

  // Calculate office totals
  const calculateOfficeTotals = () => {
    const totals = {
      'Hemodialysis': 0,
      'Clinical Laboratory': 0,
      'Radiology': 0,
      'Admin Office': 0,
      'Unallocated': 0,
    }

    inventoryItems.forEach(item => {
      item.batches.forEach(batch => {
        if (totals.hasOwnProperty(batch.office)) {
          totals[batch.office] += batch.stock
        }
      })
    })

    return totals
  }

  const officeTotals = calculateOfficeTotals()
  const totalAllocated = Object.values(officeTotals).reduce((sum, val) => sum + val, 0) - officeTotals.Unallocated
  const totalUnallocated = officeTotals.Unallocated
  const totalOverall = Object.values(officeTotals).reduce((sum, val) => sum + val, 0)

  // Chart data
  const chartData = [
    { name: 'Hemodialysis', value: officeTotals.Hemodialysis, color: '#3b82f6' },
    { name: 'Clinical Laboratory', value: officeTotals['Clinical Laboratory'], color: '#10b981' },
    { name: 'Radiology', value: officeTotals.Radiology, color: '#f59e0b' },
    { name: 'Admin Office', value: officeTotals['Admin Office'], color: '#8b5cf6' },
    { name: 'Unallocated', value: officeTotals.Unallocated, color: '#9ca3af' },
  ]

  // Calculate donut chart segments
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

  // Convert percentage to degrees
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    }
  }

  // Create SVG arc path
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
        <div className="header-actions">
          <select className="select-input">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
          <select className="select-input">
            <option>All Offices</option>
            <option>Hemodialysis</option>
            <option>Clinical Laboratory</option>
            <option>Radiology</option>
            <option>Admin Office</option>
          </select>
        </div>
      </div>

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

      <style jsx>{`
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

        .select-input {
          padding: 10px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          background: white;
          cursor: pointer;
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
