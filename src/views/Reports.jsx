import React, { useState, useEffect } from 'react'
import { supabaseDb } from '../utils/apiDb'
import PrintableRSMI from '../components/PrintableRSMI'
import Icon from '../components/Icon'
import reportsIcon from '../assets/icons/reports/file-chart-column.svg'

const MONTHS = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' }
]

const Reports = () => {
  const currentDate = new Date()
  const [activeTab, setActiveTab] = useState('rsmi') // 'rsmi' or 'custom'
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear())
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth() + 1)

  // Header Inputs
  const [entityName, setEntityName] = useState('')
  const [fundCluster, setFundCluster] = useState('')
  const [serialNo, setSerialNo] = useState('')
  
  // Automatic Date
  const autoDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  // Fetch RSMI report data whenever Month or Year changes
  const fetchReportData = async () => {
    setLoading(true)
    try {
      const data = await supabaseDb.getRsmiReportData(selectedYear, selectedMonth)
      setItems(data || [])
    } catch (err) {
      console.error('Error fetching RSMI report data:', err)
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (activeTab === 'rsmi') {
      fetchReportData()
    }
  }, [selectedYear, selectedMonth, activeTab])

  // Handle accounting user inputs (Unit Cost & Amount)
  const handleUnitCostChange = (idx, value) => {
    setItems(prev => {
      const updated = [...prev]
      updated[idx] = { ...updated[idx], unitCost: value }
      return updated
    })
  }

  const handleAmountChange = (idx, value) => {
    setItems(prev => {
      const updated = [...prev]
      updated[idx] = { ...updated[idx], amount: value }
      return updated
    })
  }

  const handlePrint = () => {
    window.print()
  }

  const selectedMonthName = MONTHS.find(m => m.value === Number(selectedMonth))?.label || ''

  return (
    <div className="reports-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Reports</h1>
          <p className="page-subtitle">Generate, view, and print official inventory reports</p>
        </div>
        {activeTab === 'rsmi' && (
          <div className="header-actions">
            <button className="btn btn-secondary" onClick={fetchReportData} disabled={loading}>
              {loading ? 'Loading...' : 'Refresh Data'}
            </button>
            <button className="btn btn-primary" onClick={handlePrint}>
              Print RSMI Report
            </button>
          </div>
        )}
      </div>

      {/* Navigation Tabs */}
      <div className="tabs-container no-print">
        <button 
          className={`tab-btn ${activeTab === 'rsmi' ? 'active' : ''}`}
          onClick={() => setActiveTab('rsmi')}
        >
          RSMI Report
        </button>
        <button 
          className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
          onClick={() => setActiveTab('custom')}
        >
          RPCI Report
        </button>
      </div>

      {/* RSMI REPORT TAB CONTENT */}
      {activeTab === 'rsmi' && (
        <>
          {/* Control Bar for Monthly Filter */}
          <div className="card filter-card">
            <div className="filter-title">
              <Icon src={reportsIcon} alt="Report" size={20} />
              <span>Report Configuration & Period</span>
            </div>
            <div className="filter-controls">
              <div className="form-group">
                <label>Select Month</label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(Number(e.target.value))}
                  className="select-input"
                >
                  {MONTHS.map(m => (
                    <option key={m.value} value={m.value}>{m.label}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Select Year</label>
                <input
                  type="number"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(Number(e.target.value))}
                  className="text-input year-input"
                  min="2020"
                  max="2035"
                />
              </div>
            </div>
          </div>

          {/* RSMI Form Card - Matching RIS Form Aesthetic */}
          <div className="ris-card">
            {/* Header logos & agency title */}
            <div className="ris-header">
              <div className="header-text-block">
                <p className="agency-line">Republic of the Philippines</p>
                <p className="province-line">PROVINCE OF BOHOL</p>
                <p className="city-line">City of Tagbilaran</p>
                <p className="office-line">Provincial Health Office</p>
                <p className="center-line">BOHOL PROVINCIAL DIAGNOSTIC &amp; AMBULATORY CARE CENTER</p>
              </div>
            </div>

            {/* Form Main Title */}
            <div className="rsmi-title-banner">
              Report of Supplies and Materials Issued
              <span className="month-subtitle">For the Month of {selectedMonthName} {selectedYear}</span>
            </div>

            {/* Header Inputs Section: Left (Entity Name, Fund Cluster) & Right (Serial No., Date) */}
            <div className="meta-fields-grid">
              <div className="meta-column left">
                <div className="field-group">
                  <label>Entity Name:</label>
                  <input
                    type="text"
                    value={entityName}
                    onChange={(e) => setEntityName(e.target.value)}
                    placeholder="Enter Entity Name"
                    className="ris-input"
                  />
                </div>
                <div className="field-group">
                  <label>Fund Cluster:</label>
                  <input
                    type="text"
                    value={fundCluster}
                    onChange={(e) => setFundCluster(e.target.value)}
                    placeholder="Enter Fund Cluster"
                    className="ris-input"
                  />
                </div>
              </div>

              <div className="meta-column right">
                <div className="field-group">
                  <label>Serial No.:</label>
                  <input
                    type="text"
                    value={serialNo}
                    onChange={(e) => setSerialNo(e.target.value)}
                    placeholder="Enter Serial No."
                    className="ris-input"
                  />
                </div>
                <div className="field-group">
                  <label>Date (Automatic):</label>
                  <input
                    type="text"
                    value={autoDate}
                    disabled
                    className="ris-input disabled"
                  />
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="table-wrapper">
              <table className="rsmi-items-table">
                <thead>
                  <tr className="division-header-row">
                    <th colSpan={6} className="division-header supply-header">
                      To be filled up by the Supply and/or Property Division/Unit
                    </th>
                    <th colSpan={2} className="division-header acct-header">
                      To be filled up by the Accounting Division/Unit
                    </th>
                  </tr>
                  <tr className="column-header-row">
                    <th style={{ width: '13%' }}>RIS No.</th>
                    <th style={{ width: '15%' }}>Responsibility Center Code</th>
                    <th style={{ width: '12%' }}>Stock No.</th>
                    <th style={{ width: '24%' }}>Item</th>
                    <th style={{ width: '8%' }}>Unit</th>
                    <th style={{ width: '10%' }}>Quantity Issued</th>
                    <th style={{ width: '9%' }}>Unit Cost</th>
                    <th style={{ width: '9%' }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={8} className="text-center py-4">Loading monthly issued report data...</td>
                    </tr>
                  ) : items.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="text-center py-4 text-muted">
                        No supplies and materials issued for {selectedMonthName} {selectedYear}.
                      </td>
                    </tr>
                  ) : (
                    items.map((item, idx) => (
                      <tr key={item.id || idx}>
                        <td className="text-center font-semibold">{item.risNo}</td>
                        <td className="text-center">{item.batchId || '-'}</td>
                        <td className="text-center font-mono">{item.sku || '-'}</td>
                        <td>{item.itemName}</td>
                        <td className="text-center">{item.unit}</td>
                        <td className="text-center font-semibold">{item.quantityIssued}</td>
                        {/* User Inputs for Accounting Division */}
                        <td>
                          <input
                            type="text"
                            value={item.unitCost ?? ''}
                            onChange={(e) => handleUnitCostChange(idx, e.target.value)}
                            placeholder="0.00"
                            className="table-input text-right"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={item.amount ?? ''}
                            onChange={(e) => handleAmountChange(idx, e.target.value)}
                            placeholder="Current Bal."
                            title="Current balance of batch"
                            className="table-input text-right"
                          />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Hidden Printable RSMI component rendered for browser print dialog */}
          <PrintableRSMI
            reportData={{ items }}
            headerInfo={{
              entityName,
              fundCluster,
              serialNo,
              date: autoDate
            }}
          />
        </>
      )}

      {/* SECONDARY REPORT TAB CONTENT */}
      {activeTab === 'custom' && (
        <div className="card custom-report-card">
          <div className="custom-report-header">
            <div className="wip-icon">
              <Icon src={reportsIcon} alt="Reports" size={32} />
            </div>
            <div>
              <h2 className="custom-report-title">Report on the Physical Count of Inventories</h2>
              <p className="custom-report-subtitle">
                This tab is ready for your secondary report structure.
              </p>
            </div>
          </div>
          <div className="placeholder-table-container">
            <div className="placeholder-info">
              <span className="placeholder-badge">Awaiting Table Format</span>
              <p>To be made later after setting xampp db.</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .reports-page {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          gap: 16px;
        }

        .page-title {
          font-size: 26px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 4px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 14px;
        }

        .tabs-container {
          display: flex;
          gap: 8px;
          border-bottom: 2px solid #e2e8f0;
          margin-bottom: 24px;
        }

        .tab-btn {
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 600;
          color: #64748b;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
        }

        .tab-btn:hover {
          color: #2563eb;
        }

        .tab-btn.active {
          color: #2563eb;
          border-bottom-color: #2563eb;
        }

        .header-actions {
          display: flex;
          gap: 10px;
        }

        .btn {
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
        }

        .btn-primary {
          background: #2563eb;
          color: white;
        }

        .btn-primary:hover {
          background: #1d4ed8;
        }

        .btn-secondary {
          background: #e5e7eb;
          color: #374151;
        }

        .btn-secondary:hover {
          background: #d1d5db;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          border: 1px solid #e5e7eb;
        }

        .filter-card {
          margin-bottom: 24px;
        }

        .filter-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .filter-controls {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 600;
          color: #4b5563;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .select-input, .text-input {
          padding: 8px 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
          background: white;
          min-width: 160px;
        }

        .year-input {
          min-width: 100px;
        }

        /* Custom Report Placeholder Card */
        .custom-report-card {
          padding: 30px;
        }

        .custom-report-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .wip-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .custom-report-title {
          font-size: 18px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 4px;
        }

        .custom-report-subtitle {
          font-size: 14px;
          color: #6b7280;
        }

        .placeholder-table-container {
          border: 2px dashed #cbd5e1;
          border-radius: 12px;
          padding: 40px 20px;
          text-align: center;
          background: #f8fafc;
        }

        .placeholder-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: #64748b;
        }

        .placeholder-badge {
          background: #e0e7ff;
          color: #3730a3;
          font-weight: 700;
          font-size: 12px;
          padding: 4px 12px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* RIS Card Layout */
        .ris-card {
          background: white;
          border: 1px solid #000;
          padding: 24px;
          margin-bottom: 30px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .ris-header {
          text-align: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e5e7eb;
        }

        .agency-line { font-size: 12px; color: #374151; margin: 0 0 2px 0; }
        .province-line { font-size: 13px; font-weight: bold; color: #111827; margin: 0 0 2px 0; }
        .city-line { font-size: 11px; color: #4b5563; margin: 0 0 2px 0; }
        .office-line { font-size: 13px; font-weight: bold; color: #1e3a8a; margin: 0 0 2px 0; }
        .center-line { font-size: 12px; font-weight: bold; color: #1f2937; margin: 0; }

        .rsmi-title-banner {
          border: 1px solid #000;
          background: #f8fafc;
          padding: 12px;
          text-align: center;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: #0f172a;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .month-subtitle {
          font-size: 13px;
          font-weight: 500;
          color: #475569;
        }

        .meta-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          border: 1px solid #000;
          padding: 16px;
          margin-bottom: 20px;
          background: #fafafa;
        }

        .meta-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .field-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .field-group label {
          font-size: 13px;
          font-weight: 700;
          min-width: 110px;
          color: #1e293b;
        }

        .ris-input {
          flex: 1;
          padding: 6px 10px;
          border: 1px solid #94a3b8;
          border-radius: 4px;
          font-size: 13px;
          background: white;
        }

        .ris-input.disabled {
          background: #f1f5f9;
          color: #64748b;
          cursor: not-allowed;
        }

        .table-wrapper {
          overflow-x: auto;
        }

        .rsmi-items-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #000;
        }

        .rsmi-items-table th, .rsmi-items-table td {
          border: 1px solid #000;
          padding: 8px 10px;
          font-size: 13px;
        }

        .division-header-row th {
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          padding: 8px;
          letter-spacing: 0.5px;
        }

        .supply-header {
          background: #eff6ff;
          color: #1e40af;
        }

        .acct-header {
          background: #f0fdf4;
          color: #166534;
        }

        .column-header-row th {
          background: #f8fafc;
          font-weight: 700;
          color: #1e293b;
          text-align: center;
        }

        .table-input {
          width: 100%;
          padding: 4px 6px;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          font-size: 12px;
          background: #fff;
          box-sizing: border-box;
        }

        .table-input:focus {
          border-color: #2563eb;
          outline: none;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
        }

        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .font-semibold { font-weight: 600; }
        .font-mono { font-family: monospace; }
        .py-4 { padding-top: 16px; padding-bottom: 16px; }
        .text-muted { color: #64748b; }

        @media (max-width: 768px) {
          .meta-fields-grid {
            grid-template-columns: 1fr;
          }
          
          .page-header {
            flex-direction: column;
            align-items: stretch;
          }

          .header-actions {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  )
}

export default Reports
