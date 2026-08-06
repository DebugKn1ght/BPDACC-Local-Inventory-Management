import React, { useState, useEffect } from 'react'
import { supabaseDb } from '../utils/apiDb'
import PrintableRSMI from '../components/PrintableRSMI'
import PrintableRPCI from '../components/PrintableRPCI'
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

  // ========== RPCI State ==========
  const [rpciYear, setRpciYear] = useState(currentDate.getFullYear())
  const [rpciItems, setRpciItems] = useState([])
  const [rpciLoading, setRpciLoading] = useState(false)

  // RPCI Header Inputs
  const [rpciFundCluster, setRpciFundCluster] = useState('')
  const [rpciInventoryType, setRpciInventoryType] = useState('')
  const [rpciAsAt, setRpciAsAt] = useState('')
  const [rpciForWhich1, setRpciForWhich1] = useState('')
  const [rpciForWhich2, setRpciForWhich2] = useState('')
  const [rpciForWhich3, setRpciForWhich3] = useState('')
  const [rpciAssumedOn, setRpciAssumedOn] = useState('')

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

  // Fetch RPCI report data whenever rpciYear changes
  const fetchRpciData = async () => {
    setRpciLoading(true)
    try {
      const data = await supabaseDb.getRpciReportData(rpciYear)
      // Add editable user-input fields to each item
      const enriched = (data || []).map(item => ({
        ...item,
        article: '',
        onHandPerCount: '',
        shortageQty: '',
        shortageValue: '',
        remarks: ''
      }))
      setRpciItems(enriched)
    } catch (err) {
      console.error('Error fetching RPCI report data:', err)
      setRpciItems([])
    } finally {
      setRpciLoading(false)
    }
  }

  useEffect(() => {
    if (activeTab === 'rsmi') {
      fetchReportData()
    }
  }, [selectedYear, selectedMonth, activeTab])

  useEffect(() => {
    if (activeTab === 'custom') {
      fetchRpciData()
    }
  }, [rpciYear, activeTab])

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

  // RPCI editable field handler
  const handleRpciFieldChange = (idx, field, value) => {
    setRpciItems(prev => {
      const updated = [...prev]
      updated[idx] = { ...updated[idx], [field]: value }
      return updated
    })
  }

  const handlePrint = () => {
    window.print()
  }

  // ========== XLS Export ==========
  const handleExportXls = () => {
    // Build the HTML table string for XLS
    let html = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">'
    html += '<head><meta charset="utf-8"><style>td, th { border: 1px solid #000; padding: 4px 6px; font-family: Arial; font-size: 11px; } th { background: #f2f2f2; font-weight: bold; }</style></head>'
    html += '<body>'

    // Title rows
    html += '<table>'
    html += '<tr><td colspan="10" style="text-align:center;font-weight:bold;font-size:14px;border:none;">REPORT ON THE PHYSICAL COUNT OF INVENTORIES</td></tr>'
    html += `<tr><td colspan="10" style="text-align:center;border:none;"><u>${rpciInventoryType || ''}</u></td></tr>`
    html += '<tr><td colspan="10" style="text-align:center;font-style:italic;font-size:10px;border:none;">(Type of Inventory Item)</td></tr>'
    html += `<tr><td colspan="10" style="text-align:center;border:none;">As at <u>${rpciAsAt || ''}</u></td></tr>`
    html += '<tr><td colspan="10" style="border:none;"></td></tr>'

    // Meta info
    html += `<tr><td colspan="10" style="border:none;">Fund Cluster: <u>${rpciFundCluster || ''}</u></td></tr>`
    html += `<tr><td colspan="10" style="border:none;">For which <u>${rpciForWhich1 || ''}</u>, <u>${rpciForWhich2 || ''}</u>, <u>${rpciForWhich3 || ''}</u>, is accountable, having assumed such accountability on <u>${rpciAssumedOn || ''}</u></td></tr>`
    html += '<tr><td colspan="10" style="border:none;"></td></tr>'

    // Table header
    html += '<tr>'
    html += '<th>Article</th>'
    html += '<th>Description</th>'
    html += '<th>Stock Number</th>'
    html += '<th>Unit of Measure</th>'
    html += '<th>Unit Value</th>'
    html += '<th>Balance Per Card</th>'
    html += '<th>On Hand Per Count</th>'
    html += '<th>Shortage/Overage Quantity</th>'
    html += '<th>Shortage/Overage Value</th>'
    html += '<th>Remarks</th>'
    html += '</tr>'

    // Table body
    for (const item of rpciItems) {
      html += '<tr>'
      html += `<td>${item.article || ''}</td>`
      html += `<td>${item.itemName || ''}</td>`
      html += `<td>${item.sku || ''}</td>`
      html += `<td>${item.unit || ''}</td>`
      html += `<td style="text-align:right;">${item.unitValue > 0 ? Number(item.unitValue).toFixed(2) : ''}</td>`
      html += `<td style="text-align:right;">${item.balancePerCard != null ? item.balancePerCard : ''}</td>`
      html += `<td style="text-align:right;">${item.onHandPerCount || ''}</td>`
      html += `<td style="text-align:right;">${item.shortageQty || ''}</td>`
      html += `<td style="text-align:right;">${item.shortageValue || ''}</td>`
      html += `<td>${item.remarks || ''}</td>`
      html += '</tr>'
    }

    // Spacer
    html += '<tr><td colspan="10" style="border:none;"></td></tr>'

    // Signatures
    html += '<tr>'
    html += '<td colspan="3" style="border:1px solid #000;vertical-align:top;font-weight:bold;">Certified Correct By:<br/><br/><br/><br/><center>_________________________________<br/><span style="font-size:10px;font-weight:normal;font-style:italic;">Signature Over Printed Name of Inventory Committee Chair and Members</span></center></td>'
    html += '<td colspan="3" style="border:1px solid #000;vertical-align:top;font-weight:bold;">Approved By:<br/><br/><br/><br/><center>_________________________________<br/><span style="font-size:10px;font-weight:normal;font-style:italic;">Signature Over Printed Name of Head of Agency/Entity or Authorized Representative</span></center></td>'
    html += '<td colspan="4" style="border:1px solid #000;vertical-align:top;font-weight:bold;">Verified By:<br/><br/><br/><br/><center>_________________________________<br/><span style="font-size:10px;font-weight:normal;font-style:italic;">Signature over Printed Name of COA Representative</span></center></td>'
    html += '</tr>'

    html += '</table></body></html>'

    // Create blob and trigger download
    const blob = new Blob([html], { type: 'application/vnd.ms-excel' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `RPCI_Report_${rpciYear}.xls`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const selectedMonthName = MONTHS.find(m => m.value === Number(selectedMonth))?.label || ''

  // Compute Recapitulation for RSMI
  const recapMap = {}
  items.forEach(item => {
    const rawSku = item.sku ? String(item.sku).trim() : ''
    const rawName = item.itemName ? String(item.itemName).trim() : ''
    const key = (rawSku && rawSku !== '-') ? rawSku : (rawName || 'Unlisted')

    const qty = parseFloat(item.quantityIssued) || 0
    const cost = parseFloat(item.unitCost) || 0

    if (!recapMap[key]) {
      recapMap[key] = {
        sku: (rawSku && rawSku !== '-') ? rawSku : (rawName || '-'),
        totalQuantity: 0,
        highestUnitCost: 0,
        hasCost: false
      }
    }

    recapMap[key].totalQuantity += qty

    if (!isNaN(cost) && cost > 0) {
      if (!recapMap[key].hasCost || cost > recapMap[key].highestUnitCost) {
        recapMap[key].highestUnitCost = cost
        recapMap[key].hasCost = true
      }
    }
  })

  const recapItems = Object.values(recapMap).map(entry => {
    const totalCost = entry.hasCost ? entry.totalQuantity * entry.highestUnitCost : 0
    return {
      sku: entry.sku,
      totalQuantity: entry.totalQuantity,
      unitCost: entry.hasCost ? entry.highestUnitCost : null,
      totalCost: entry.hasCost ? totalCost : null,
      uacsCode: ''
    }
  })

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
        {activeTab === 'custom' && (
          <div className="header-actions">
            <button className="btn btn-secondary" onClick={fetchRpciData} disabled={rpciLoading}>
              {rpciLoading ? 'Loading...' : 'Refresh Data'}
            </button>
            <button className="btn btn-export" onClick={handleExportXls}>
              Export as XLS
            </button>
            <button className="btn btn-primary" onClick={handlePrint}>
              Print RPCI Report
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

                  {/* Recapitulation Section */}
                  {items.length > 0 && (
                    <>
                      {/* Spacer Row */}
                      <tr className="recap-spacer-row">
                        <td colSpan={8} style={{ height: '16px', background: '#f8fafc', border: '1px solid #000' }}></td>
                      </tr>

                      {/* Recapitulation Header Row */}
                      <tr className="recap-header-row">
                        <td className="recap-blank-cell"></td>
                        <th colSpan={2} className="text-center recap-group-header">Recapitulation:</th>
                        <td colSpan={2} className="recap-blank-cell"></td>
                        <th colSpan={3} className="text-center recap-group-header">Recapitulation:</th>
                      </tr>

                      {/* Recapitulation Column Header Row */}
                      <tr className="recap-col-header-row">
                        <td className="recap-blank-cell"></td>
                        <th className="text-center">Stock No.</th>
                        <th className="text-center">Quantity</th>
                        <td colSpan={2} className="recap-blank-cell"></td>
                        <th className="text-right">Unit Cost</th>
                        <th className="text-right">Total Cost</th>
                        <th className="text-center">UACS Object Code</th>
                      </tr>

                      {/* Recapitulation Data Rows */}
                      {recapItems.map((recap, idx) => (
                        <tr key={`recap-${idx}`}>
                          <td className="recap-blank-cell"></td>
                          <td className="text-center font-mono font-semibold">{recap.sku}</td>
                          <td className="text-center font-semibold">{recap.totalQuantity}</td>
                          <td colSpan={2} className="recap-blank-cell"></td>
                          <td className="text-right font-medium">
                            {recap.unitCost !== null && recap.unitCost > 0 ? recap.unitCost.toFixed(2) : '-'}
                          </td>
                          <td className="text-right font-semibold text-emerald-700">
                            {recap.totalCost !== null && recap.totalCost > 0 ? recap.totalCost.toFixed(2) : '-'}
                          </td>
                          <td className="text-center"></td>
                        </tr>
                      ))}
                    </>
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

      {/* RPCI REPORT TAB CONTENT */}
      {activeTab === 'custom' && (
        <>
          {/* Control Bar for Yearly Filter */}
          <div className="card filter-card">
            <div className="filter-title">
              <Icon src={reportsIcon} alt="Report" size={20} />
              <span>RPCI Report Configuration & Year</span>
            </div>
            <div className="filter-controls">
              <div className="form-group">
                <label>Select Year</label>
                <input
                  type="number"
                  value={rpciYear}
                  onChange={(e) => setRpciYear(Number(e.target.value))}
                  className="text-input year-input"
                  min="2020"
                  max="2035"
                />
              </div>
            </div>
          </div>

          {/* RPCI Form Card */}
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
            <div className="rsmi-title-banner rpci-title-banner">
              Report on the Physical Count of Inventories
              <div className="rpci-type-input-row">
                <input
                  type="text"
                  value={rpciInventoryType}
                  onChange={(e) => setRpciInventoryType(e.target.value)}
                  placeholder="Enter type of inventory item"
                  className="rpci-underline-input"
                />
              </div>
              <span className="rpci-type-label">(Type of Inventory Item)</span>
              <div className="rpci-as-at-row">
                <span className="as-at-text">As at</span>
                <input
                  type="text"
                  value={rpciAsAt}
                  onChange={(e) => setRpciAsAt(e.target.value)}
                  placeholder="Enter date"
                  className="rpci-underline-input rpci-as-at-input"
                />
              </div>
            </div>

            {/* Meta Fields: Fund Cluster & Accountability */}
            <div className="rpci-meta-section">
              <div className="rpci-meta-row">
                <label>Fund Cluster:</label>
                <input
                  type="text"
                  value={rpciFundCluster}
                  onChange={(e) => setRpciFundCluster(e.target.value)}
                  placeholder="Enter Fund Cluster"
                  className="ris-input"
                />
              </div>
              <div className="rpci-accountability-row">
                <span>For which</span>
                <input
                  type="text"
                  value={rpciForWhich1}
                  onChange={(e) => setRpciForWhich1(e.target.value)}
                  placeholder=""
                  className="rpci-inline-input"
                />
                <span>,</span>
                <input
                  type="text"
                  value={rpciForWhich2}
                  onChange={(e) => setRpciForWhich2(e.target.value)}
                  placeholder=""
                  className="rpci-inline-input"
                />
                <span>,</span>
                <input
                  type="text"
                  value={rpciForWhich3}
                  onChange={(e) => setRpciForWhich3(e.target.value)}
                  placeholder=""
                  className="rpci-inline-input"
                />
                <span>, is accountable, having assumed such accountability on</span>
                <input
                  type="text"
                  value={rpciAssumedOn}
                  onChange={(e) => setRpciAssumedOn(e.target.value)}
                  placeholder=""
                  className="rpci-inline-input"
                />
              </div>
            </div>

            {/* Table Section */}
            <div className="table-wrapper">
              <table className="rsmi-items-table rpci-items-table">
                <thead>
                  <tr className="column-header-row">
                    <th style={{ width: '7%' }}>Article</th>
                    <th style={{ width: '18%' }}>Description</th>
                    <th style={{ width: '10%' }}>Stock Number</th>
                    <th style={{ width: '8%' }}>Unit of Measure</th>
                    <th style={{ width: '9%' }}>Unit Value</th>
                    <th style={{ width: '10%' }}>Balance Per Card</th>
                    <th style={{ width: '10%' }}>On Hand Per Count</th>
                    <th colSpan={2} style={{ width: '14%' }}>Shortage/Overage</th>
                    <th style={{ width: '14%' }}>Remarks</th>
                  </tr>
                  <tr className="column-subheader-row">
                    <th colSpan={7}></th>
                    <th style={{ width: '7%' }}>Quantity</th>
                    <th style={{ width: '7%' }}>Value</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {rpciLoading ? (
                    <tr>
                      <td colSpan={10} className="text-center py-4">Loading RPCI report data...</td>
                    </tr>
                  ) : rpciItems.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="text-center py-4 text-muted">
                        No inventory items found for {rpciYear}.
                      </td>
                    </tr>
                  ) : (
                    rpciItems.map((item, idx) => (
                      <tr key={item.id || idx}>
                        <td>
                          <input
                            type="text"
                            value={item.article || ''}
                            onChange={(e) => handleRpciFieldChange(idx, 'article', e.target.value)}
                            className="table-input text-center"
                            placeholder=""
                          />
                        </td>
                        <td className="font-semibold">{item.itemName}</td>
                        <td className="text-center font-mono">{item.sku || '-'}</td>
                        <td className="text-center">{item.unit}</td>
                        <td className="text-right">
                          {item.unitValue > 0 ? Number(item.unitValue).toFixed(2) : ''}
                        </td>
                        <td className="text-right font-semibold">
                          {item.balancePerCard != null ? item.balancePerCard : ''}
                        </td>
                        <td>
                          <input
                            type="text"
                            value={item.onHandPerCount || ''}
                            onChange={(e) => handleRpciFieldChange(idx, 'onHandPerCount', e.target.value)}
                            className="table-input text-right"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={item.shortageQty || ''}
                            onChange={(e) => handleRpciFieldChange(idx, 'shortageQty', e.target.value)}
                            className="table-input text-right"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={item.shortageValue || ''}
                            onChange={(e) => handleRpciFieldChange(idx, 'shortageValue', e.target.value)}
                            className="table-input text-right"
                            placeholder=""
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={item.remarks || ''}
                            onChange={(e) => handleRpciFieldChange(idx, 'remarks', e.target.value)}
                            className="table-input"
                            placeholder=""
                          />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Signatures Section */}
            <div className="rpci-signatures-section">
              <div className="rpci-sig-block">
                <p className="rpci-sig-title">Certified Correct By:</p>
                <div className="rpci-sig-space"></div>
                <p className="rpci-sig-line">_______________________________________</p>
                <p className="rpci-sig-label">Signature Over Printed Name of Inventory Committee Chair and Members</p>
              </div>
              <div className="rpci-sig-block">
                <p className="rpci-sig-title">Approved By:</p>
                <div className="rpci-sig-space"></div>
                <p className="rpci-sig-line">_______________________________________</p>
                <p className="rpci-sig-label">Signature Over Printed Name of Head of Agency/Entity or Authorized Representative</p>
              </div>
              <div className="rpci-sig-block">
                <p className="rpci-sig-title">Verified By:</p>
                <div className="rpci-sig-space"></div>
                <p className="rpci-sig-line">_______________________________________</p>
                <p className="rpci-sig-label">Signature over Printed Name of COA Representative</p>
              </div>
            </div>
          </div>

          {/* Hidden Printable RPCI component rendered for browser print dialog */}
          <PrintableRPCI
            reportData={{ items: rpciItems }}
            headerInfo={{
              fundCluster: rpciFundCluster,
              inventoryType: rpciInventoryType,
              asAt: rpciAsAt,
              forWhich1: rpciForWhich1,
              forWhich2: rpciForWhich2,
              forWhich3: rpciForWhich3,
              assumedOn: rpciAssumedOn
            }}
          />
        </>
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

        .btn-export {
          background: #059669;
          color: white;
        }

        .btn-export:hover {
          background: #047857;
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

        .recap-blank-cell {
          border: 1px solid #000;
          background: #f8fafc;
        }

        .recap-group-header {
          background: #e2e8f0 !important;
          color: #0f172a !important;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .recap-col-header-row th {
          background: #f1f5f9;
          font-weight: 700;
          color: #1e293b;
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

        .column-subheader-row th {
          background: #f8fafc;
          font-weight: 600;
          color: #475569;
          text-align: center;
          font-size: 12px;
          padding: 4px 6px;
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

        /* ========== RPCI Specific Styles ========== */

        .rpci-title-banner {
          gap: 6px;
        }

        .rpci-type-input-row {
          display: flex;
          justify-content: center;
          margin-top: 4px;
        }

        .rpci-underline-input {
          border: none;
          border-bottom: 1px solid #000;
          background: transparent;
          text-align: center;
          font-size: 14px;
          padding: 2px 8px;
          min-width: 250px;
          outline: none;
          font-weight: 600;
        }

        .rpci-underline-input:focus {
          border-bottom-color: #2563eb;
          border-bottom-width: 2px;
        }

        .rpci-type-label {
          font-size: 11px;
          font-weight: 400;
          font-style: italic;
          color: #64748b;
        }

        .rpci-as-at-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 2px;
        }

        .as-at-text {
          font-size: 13px;
          font-weight: 500;
          color: #475569;
        }

        .rpci-as-at-input {
          min-width: 200px;
        }

        .rpci-meta-section {
          border: 1px solid #000;
          padding: 14px 16px;
          margin-bottom: 20px;
          background: #fafafa;
        }

        .rpci-meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .rpci-meta-row label {
          font-size: 13px;
          font-weight: 700;
          min-width: 110px;
          color: #1e293b;
        }

        .rpci-accountability-row {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          font-size: 13px;
          color: #1e293b;
          line-height: 2;
        }

        .rpci-inline-input {
          border: none;
          border-bottom: 1px solid #94a3b8;
          background: transparent;
          font-size: 13px;
          padding: 2px 6px;
          min-width: 80px;
          max-width: 140px;
          outline: none;
        }

        .rpci-inline-input:focus {
          border-bottom-color: #2563eb;
          border-bottom-width: 2px;
        }

        /* RPCI Signatures */
        .rpci-signatures-section {
          border: 1px solid #000;
          border-top: none;
          margin-top: -1px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        .rpci-sig-block {
          padding: 16px 20px;
          border-right: 1px solid #000;
        }

        .rpci-sig-block:last-child {
          border-right: none;
        }

        .rpci-sig-title {
          font-size: 13px;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 16px 0;
        }

        .rpci-sig-space {
          height: 30px;
        }

        .rpci-sig-line {
          text-align: center;
          margin: 0;
          font-weight: 500;
          color: #374151;
          font-size: 13px;
        }

        .rpci-sig-label {
          text-align: center;
          font-size: 11px;
          color: #6b7280;
          margin: 4px 0 0 0;
          font-style: italic;
        }

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

          .rpci-accountability-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .rpci-signatures-section {
            grid-template-columns: 1fr;
          }

          .rpci-sig-block {
            border-right: none;
            border-bottom: 1px solid #000;
          }

          .rpci-sig-block:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Reports
