import React from 'react'

const PrintableRPCI = ({ reportData, headerInfo }) => {
  if (!reportData) return null

  const items = reportData.items || []
  const fundCluster = headerInfo?.fundCluster || ''
  const inventoryType = headerInfo?.inventoryType || ''
  const asAt = headerInfo?.asAt || ''
  const forWhich1 = headerInfo?.forWhich1 || ''
  const forWhich2 = headerInfo?.forWhich2 || ''
  const forWhich3 = headerInfo?.forWhich3 || ''
  const assumedOn = headerInfo?.assumedOn || ''

  return (
    <div className="rpci-print-container">
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
        REPORT ON THE PHYSICAL COUNT OF INVENTORIES
        <div className="inventory-type-line">
          <span className="underline-field">{inventoryType || '\u00A0'}</span>
        </div>
        <div className="inventory-type-label">(Type of Inventory Item)</div>
        <div className="as-at-line">
          As at <span className="underline-field">{asAt || '\u00A0'}</span>
        </div>
      </div>

      {/* Metadata Fields */}
      <table className="metadata-table">
        <tbody>
          <tr>
            <td>
              <strong>Fund Cluster:</strong> <span className="underline-field">{fundCluster}</span>
              <br />
              <span className="accountability-line">
                For which <span className="underline-field">{forWhich1 || '\u00A0'}</span>,{' '}
                <span className="underline-field">{forWhich2 || '\u00A0'}</span>,{' '}
                <span className="underline-field">{forWhich3 || '\u00A0'}</span>,{' '}
                is accountable, having assumed such accountability on{' '}
                <span className="underline-field">{assumedOn || '\u00A0'}</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Items Table */}
      <table className="items-print-table">
        <thead>
          <tr>
            <th className="text-center" style={{ width: '8%' }}>Article</th>
            <th className="text-left" style={{ width: '20%' }}>Description</th>
            <th className="text-center" style={{ width: '10%' }}>Stock Number</th>
            <th className="text-center" style={{ width: '8%' }}>Unit of Measure</th>
            <th className="text-right" style={{ width: '9%' }}>Unit Value</th>
            <th className="text-right" style={{ width: '10%' }}>Balance Per Card</th>
            <th className="text-right" style={{ width: '10%' }}>On Hand Per Count</th>
            <th colSpan={2} className="text-center">Shortage/Overage</th>
            <th className="text-center" style={{ width: '12%' }}>Remarks</th>
          </tr>
          <tr>
            <th colSpan={7}></th>
            <th className="text-center" style={{ width: '7%' }}>Quantity</th>
            <th className="text-center" style={{ width: '7%' }}>Value</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan={10} className="text-center empty-cell">No inventory items found for this period</td>
            </tr>
          ) : (
            items.map((item, idx) => (
              <tr key={item.id || idx}>
                <td className="text-center">{item.article || ''}</td>
                <td>{item.itemName}</td>
                <td className="text-center">{item.sku || '-'}</td>
                <td className="text-center">{item.unit}</td>
                <td className="text-right">
                  {item.unitValue > 0 ? Number(item.unitValue).toFixed(2) : ''}
                </td>
                <td className="text-right">
                  {item.balancePerCard != null ? item.balancePerCard : ''}
                </td>
                <td className="text-right">{item.onHandPerCount || ''}</td>
                <td className="text-right">{item.shortageQty || ''}</td>
                <td className="text-right">{item.shortageValue || ''}</td>
                <td>{item.remarks || ''}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Signatures Section */}
      <table className="signatures-print-table">
        <tbody>
          <tr>
            <td className="cert-cell" style={{ width: '33.33%' }}>
              <p className="cert-title">Certified Correct By:</p>
              <div className="sig-space"></div>
              <p className="sig-line">_______________________________________</p>
              <p className="sig-label">Signature Over Printed Name of Inventory Committee Chair and Members</p>
            </td>
            <td className="cert-cell" style={{ width: '33.33%' }}>
              <p className="cert-title">Approved By:</p>
              <div className="sig-space"></div>
              <p className="sig-line">_______________________________________</p>
              <p className="sig-label">Signature Over Printed Name of Head of Agency/Entity or Authorized Representative</p>
            </td>
            <td className="cert-cell" style={{ width: '33.33%' }}>
              <p className="cert-title">Verified By:</p>
              <div className="sig-space"></div>
              <p className="sig-line">_______________________________________</p>
              <p className="sig-label">Signature over Printed Name of COA Representative</p>
            </td>
          </tr>
        </tbody>
      </table>

      <style>{`
        .rpci-print-container {
          background: white;
          color: black;
          font-family: Arial, sans-serif;
          padding: 20px;
          border: 1px solid #000;
          max-width: 1000px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .rpci-print-container .print-header {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          margin-bottom: 12px;
          text-align: center;
        }

        .rpci-print-container .logo-placeholder {
          width: 75px;
          height: 75px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .rpci-print-container .logo-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .rpci-print-container .header-text {
          text-align: center;
          flex: 0 1 auto;
        }

        .rpci-print-container .header-text .agency { font-size: 11px; margin: 0 0 2px 0; }
        .rpci-print-container .header-text .province { font-size: 12px; font-weight: bold; margin: 0 0 2px 0; }
        .rpci-print-container .header-text .city { font-size: 11px; margin: 0 0 2px 0; }
        .rpci-print-container .header-text .office-title { font-size: 12px; font-weight: bold; color: #1e3a8a; margin: 0 0 2px 0; }
        .rpci-print-container .header-text .center-name { font-size: 11px; font-weight: bold; margin: 0 0 3px 0; }
        .rpci-print-container .header-text .contact-info { font-size: 10px; color: #333; margin-top: 3px; }

        .rpci-print-container .title-box {
          border: 1px solid #000;
          padding: 10px 8px;
          text-align: center;
          font-weight: bold;
          font-size: 15px;
          margin: 10px 0 0 0;
          letter-spacing: 1px;
          background: #f8fafc;
        }

        .rpci-print-container .inventory-type-line {
          margin-top: 6px;
          font-size: 13px;
          font-weight: normal;
        }

        .rpci-print-container .inventory-type-label {
          font-size: 10px;
          font-weight: normal;
          font-style: italic;
          color: #555;
          margin-top: 2px;
        }

        .rpci-print-container .as-at-line {
          font-size: 12px;
          font-weight: normal;
          margin-top: 6px;
        }

        .rpci-print-container .underline-field {
          font-weight: bold;
          border-bottom: 1px solid #000;
          display: inline-block;
          min-width: 120px;
          padding: 0 4px;
        }

        .rpci-print-container .metadata-table {
          width: 100%;
          border-collapse: collapse;
          margin: 0 0 10px 0;
          border: 1px solid #000;
          border-top: none;
        }

        .rpci-print-container .metadata-table td {
          border: 1px solid #000;
          padding: 8px 12px;
          font-size: 11px;
          vertical-align: top;
          line-height: 1.8;
        }

        .rpci-print-container .accountability-line {
          font-size: 11px;
          line-height: 2;
        }

        .rpci-print-container .items-print-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 0;
          border: 1px solid #000;
        }

        .rpci-print-container .items-print-table th,
        .rpci-print-container .items-print-table td {
          border: 1px solid #000;
          padding: 5px 6px;
          font-size: 10px;
        }

        .rpci-print-container .items-print-table th {
          background: #f2f2f2;
          font-weight: bold;
          text-align: center;
          font-size: 10px;
        }

        .rpci-print-container .text-center { text-align: center; }
        .rpci-print-container .text-left { text-align: left; }
        .rpci-print-container .text-right { text-align: right; }
        .rpci-print-container .empty-cell { padding: 20px; color: #666; font-style: italic; }

        .rpci-print-container .signatures-print-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #000;
          border-top: none;
        }

        .rpci-print-container .signatures-print-table td.cert-cell {
          border: 1px solid #000;
          padding: 12px;
          font-size: 11px;
          vertical-align: top;
        }

        .rpci-print-container .cert-title {
          font-weight: bold;
          font-size: 11px;
          margin-bottom: 20px;
        }

        .rpci-print-container .sig-space {
          height: 25px;
        }

        .rpci-print-container .sig-line {
          text-align: center;
          margin: 0;
          font-weight: 500;
        }

        .rpci-print-container .sig-label {
          text-align: center;
          font-size: 10px;
          color: #333;
          margin: 4px 0 0 0;
        }

        @media screen {
          .rpci-print-container {
            display: none;
          }
        }

        @media print {
          @page {
            size: landscape;
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

          .rpci-print-container, .rpci-print-container * {
            visibility: visible;
          }

          .rpci-print-container {
            display: block !important;
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw !important;
            padding: 10mm !important;
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

export default PrintableRPCI
