import React from 'react'

const PrintableRSMI = ({ reportData, headerInfo }) => {
  if (!reportData) return null

  const entityName = headerInfo?.entityName || ''
  const fundCluster = headerInfo?.fundCluster || ''
  const serialNo = headerInfo?.serialNo || ''
  const dateStr = headerInfo?.date || new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const items = reportData.items || []

  // Compute total amount if unit costs and amounts are provided
  const totalAmount = items.reduce((sum, item) => {
    const cost = parseFloat(item.unitCost) || 0
    const qty = parseFloat(item.quantityIssued) || 0
    const amt = item.amount !== undefined && item.amount !== '' ? parseFloat(item.amount) : (cost * qty)
    return sum + (isNaN(amt) ? 0 : amt)
  }, 0)

  return (
    <div className="rsmi-print-container">
      {/* Header Logos & Agency Information */}
      <div className="print-header">
        <div className="logo-placeholder left-logo">
          <img src="/pho-logo.png" alt="PHO Logo" />
        </div>
        <div className="header-text">
          <p className="agency">Republic of the Philippines</p>
          <p className="province">PROVINCE OF BOHOL</p>
          <p className="city">City of Tagbilaran</p>
          <p className="office-title">Provincial Health Office</p>
          <p className="center-name">BOHOL PROVINCIAL DIAGNOSTIC &amp; AMBULATORY CARE CENTER</p>
          <p className="contact-info">Tel. No. (038) 411 - 1240 &nbsp;&nbsp;&nbsp;&nbsp; Email: bpdac2020@gmail.com</p>
        </div>
        <div className="logo-placeholder right-logo">
          <img src="/bohol-logo.png" alt="Bohol Logo" />
        </div>
      </div>

      {/* Main Title */}
      <div className="title-box">
        REPORT OF SUPPLIES AND MATERIALS ISSUED
      </div>

      {/* Metadata Fields */}
      <table className="metadata-table">
        <tbody>
          <tr>
            <td className="w-50">
              <strong>Entity Name:</strong> <span className="underline-field">{entityName}</span><br />
              <strong>Fund Cluster:</strong> <span className="underline-field">{fundCluster}</span>
            </td>
            <td className="w-50">
              <strong>Serial No.:</strong> <span className="underline-field">{serialNo}</span><br />
              <strong>Date:</strong> <span className="underline-field">{dateStr}</span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Items Table */}
      <table className="items-print-table">
        <thead>
          <tr>
            <th colSpan={6} className="text-center group-header">
              To be filled up by the Supply and/or Property Division/Unit
            </th>
            <th colSpan={2} className="text-center group-header">
              To be filled up by the Accounting Division/Unit
            </th>
          </tr>
          <tr>
            <th className="w-12 text-center">RIS No.</th>
            <th className="w-15 text-center">Responsibility Center Code</th>
            <th className="w-12 text-center">Stock No.</th>
            <th className="w-25 text-left">Item</th>
            <th className="w-8 text-center">Unit</th>
            <th className="w-10 text-center">Quantity Issued</th>
            <th className="w-9 text-right">Unit Cost</th>
            <th className="w-9 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center empty-cell">No items issued for this period</td>
            </tr>
          ) : (
            items.map((item, idx) => {
              const unitCostVal = parseFloat(item.unitCost)
              const amountVal = parseFloat(item.amount)

              return (
                <tr key={item.id || idx}>
                  <td className="text-center">{item.risNo || '-'}</td>
                  <td className="text-center">{item.batchId || '-'}</td>
                  <td className="text-center">{item.sku || '-'}</td>
                  <td>{item.itemName}</td>
                  <td className="text-center">{item.unit}</td>
                  <td className="text-center">{item.quantityIssued}</td>
                  <td className="text-right">
                    {!isNaN(unitCostVal) && unitCostVal > 0 ? unitCostVal.toFixed(2) : (item.unitCost || '-')}
                  </td>
                  <td className="text-right">
                    {!isNaN(amountVal) ? amountVal.toFixed(2) : (item.amount || '-')}
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
        {items.length > 0 && (
          <tfoot>
            <tr>
              <td colSpan={7} className="text-right"><strong>Total:</strong></td>
              <td className="text-right"><strong>{totalAmount > 0 ? totalAmount.toFixed(2) : '-'}</strong></td>
            </tr>
          </tfoot>
        )}
      </table>

      {/* Signatures & Certification Table */}
      <table className="signatures-print-table">
        <tbody>
          <tr>
            <td className="w-50 cert-cell">
              <p className="cert-title">I hereby certify to the correctness of the above information.</p>
              <div className="sig-space"></div>
              <p className="sig-line">____________________________________________________</p>
              <p className="sig-label">Signature over Printed Name of Supply and/or Property Custodian</p>
            </td>
            <td className="w-50 cert-cell">
              <p className="cert-title">Posted By:</p>
              <div className="sig-space"></div>
              <p className="sig-line">____________________________________________________</p>
              <p className="sig-label">Signature over Printed Name of Designated Accounting Staff</p>
              <p className="sig-date">Date: ________________________</p>
            </td>
          </tr>
        </tbody>
      </table>

      <style>{`
        .rsmi-print-container {
          background: white;
          color: black;
          font-family: Arial, sans-serif;
          padding: 20px;
          border: 1px solid #000;
          max-width: 900px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .print-header {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          margin-bottom: 12px;
          text-align: center;
        }

        .logo-placeholder {
          width: 75px;
          height: 75px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .logo-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .header-text {
          text-align: center;
          flex: 0 1 auto;
        }

        .header-text .agency { font-size: 11px; margin: 0 0 2px 0; }
        .header-text .province { font-size: 12px; font-weight: bold; margin: 0 0 2px 0; }
        .header-text .city { font-size: 11px; margin: 0 0 2px 0; }
        .header-text .office-title { font-size: 12px; font-weight: bold; color: #1e3a8a; margin: 0 0 2px 0; }
        .header-text .center-name { font-size: 11px; font-weight: bold; margin: 0 0 3px 0; }
        .header-text .contact-info { font-size: 10px; color: #333; margin-top: 3px; }

        .title-box {
          border: 1px solid #000;
          padding: 8px;
          text-align: center;
          font-weight: bold;
          font-size: 16px;
          margin: 10px 0 0 0;
          letter-spacing: 1px;
          background: #f8fafc;
        }

        .metadata-table {
          width: 100%;
          border-collapse: collapse;
          margin: 0 0 15px 0;
          border: 1px solid #000;
          border-top: none;
        }

        .metadata-table td {
          border: 1px solid #000;
          padding: 8px 12px;
          font-size: 12px;
          vertical-align: top;
          line-height: 1.6;
        }

        .w-50 { width: 50%; }
        .w-12 { width: 12%; }
        .w-15 { width: 15%; }
        .w-25 { width: 25%; }
        .w-8 { width: 8%; }
        .w-10 { width: 10%; }
        .w-9 { width: 9%; }

        .underline-field { font-weight: bold; }

        .items-print-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 15px;
          border: 1px solid #000;
        }

        .items-print-table th, .items-print-table td {
          border: 1px solid #000;
          padding: 6px 8px;
          font-size: 11px;
        }

        .items-print-table th {
          background: #f2f2f2;
          font-weight: bold;
        }

        .items-print-table th.group-header {
          background: #e2e8f0;
          font-size: 11px;
          font-weight: 700;
          padding: 6px;
          letter-spacing: 0.5px;
        }

        .text-center { text-align: center; }
        .text-left { text-align: left; }
        .text-right { text-align: right; }
        .empty-cell { padding: 20px; color: #666; font-style: italic; }

        .signatures-print-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #000;
        }

        .signatures-print-table td.cert-cell {
          border: 1px solid #000;
          padding: 12px;
          font-size: 11px;
          vertical-align: top;
        }

        .cert-title {
          font-style: italic;
          font-size: 11px;
          margin-bottom: 25px;
        }

        .sig-space {
          height: 25px;
        }

        .sig-line {
          text-align: center;
          margin: 0;
          font-weight: 500;
        }

        .sig-label {
          text-align: center;
          font-size: 10px;
          color: #333;
          margin: 4px 0 12px 0;
        }

        .sig-date {
          font-size: 10px;
          margin: 0;
        }

        @media screen {
          .rsmi-print-container {
            display: none;
          }
        }

        @media print {
          @page {
            size: portrait;
            margin: 0;
          }

          html, body {
            width: 100% !important;
            min-width: 0 !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }

          body * {
            visibility: hidden;
          }

          .rsmi-print-container, .rsmi-print-container * {
            visibility: visible;
          }

          .rsmi-print-container {
            display: block !important;
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw !important;
            padding: 15mm !important;
            box-sizing: border-box !important;
            border: none;
            margin: 0 !important;
            max-width: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default PrintableRSMI
