import React, { useState } from 'react'

const Reports = () => {
  const [timePeriod, setTimePeriod] = useState('monthly')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 7))
  const [selectedOffice, setSelectedOffice] = useState('all')

  const reportData = [
    { item: 'Syringes 5ml', beginning: 500, received: 200, issued: 250, ending: 450, unit: 'pcs' },
    { item: 'Gauze Pads (4x4)', beginning: 150, received: 50, issued: 80, ending: 120, unit: 'packs' },
    { item: 'Alcohol Swabs', beginning: 100, received: 0, issued: 65, ending: 35, unit: 'boxes' },
    { item: 'Bandages (Assorted)', beginning: 300, received: 100, issued: 200, ending: 200, unit: 'boxes' },
    { item: 'Needles 21G', beginning: 600, received: 300, issued: 400, ending: 500, unit: 'pcs' },
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

  const totalSupplies = reportData.reduce((sum, item) => sum + item.ending, 0)
  const totalSupplyTypes = reportData.length
  const lowStockItems = 3
  const outOfStockItems = 1
  const expiringIn30Days = 5

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
              <div className="stat-value">{totalSupplies.toLocaleString()} items</div>
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

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Inventory Summary Table</h2>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Item Description</th>
                  <th style={{ width: '10%' }}>Unit</th>
                  <th style={{ width: '15%' }}>Beginning</th>
                  <th style={{ width: '15%' }}>Received</th>
                  <th style={{ width: '15%' }}>Issued</th>
                  <th style={{ width: '15%' }}>Ending Balance</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.item}</td>
                    <td>{item.unit}</td>
                    <td className="number-cell">{item.beginning.toLocaleString()}</td>
                    <td className="number-cell">{item.received.toLocaleString()}</td>
                    <td className="number-cell">{item.issued.toLocaleString()}</td>
                    <td className="number-cell">{item.ending.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                    <td>{totalSupplies.toLocaleString()} items</td>
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

            <table className="report-table">
              <thead>
                <tr>
                  <th rowSpan="2" style={{ width: '30%' }}>Item Description</th>
                  <th rowSpan="2" style={{ width: '10%' }}>Unit</th>
                  <th colSpan="3" style={{ borderBottom: '1px solid #000' }}>Stock Movement</th>
                  <th rowSpan="2" style={{ width: '15%' }}>Ending Balance</th>
                </tr>
                <tr>
                  <th style={{ width: '15%' }}>Beginning</th>
                  <th style={{ width: '15%' }}>Received</th>
                  <th style={{ width: '15%' }}>Issued</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.item}</td>
                    <td>{item.unit}</td>
                    <td className="number-cell">{item.beginning.toLocaleString()}</td>
                    <td className="number-cell">{item.received.toLocaleString()}</td>
                    <td className="number-cell">{item.issued.toLocaleString()}</td>
                    <td className="number-cell">{item.ending.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>

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

      <style jsx>{`
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
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 24px;
        }

        .stat-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          min-height: 100px;
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
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

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
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

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 20px;
          }

          .stat-icon {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }

          .stat-value {
            font-size: 24px;
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
