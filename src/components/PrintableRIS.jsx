import React from 'react'

const PrintableRIS = ({ requisition }) => {
  if (!requisition) return null

  // Format date
  const requestDate = new Date(requisition.requestDate || requisition.createdAt || new Date())
  const formattedDate = requestDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Ensure items list is populated
  const items = requisition.items || []

  // Ensure office name is printed
  const officeName = requisition.office?.name || requisition.office || 'N/A'
  
  // Responsibility center code
  const respCode = requisition.responsibilityCenterCode || ''

  return (
    <div className="ris-print-container">
      {/* Logos & Headings */}
      <div className="print-header">
        <div className="logo-placeholder left-logo">
          <img src="/pho-logo.png" alt="PHO Logo" />
        </div>
        <div className="header-text">
          <p className="agency">Republic of the Philippines</p>
          <p className="province">PROVINCE OF BOHOL</p>
          <p className="city">City of Tagbilaran</p>
          <p className="office-title">Provincial Health Office</p>
          <p className="center-name">BOHOL PROVINCIAL DIAGNOSTIC & AMBULATORY CARE CENTER</p>
          <p className="contact-info">Tel. No. (038) 411 - 1240 &nbsp;&nbsp;&nbsp;&nbsp; Email: bpdac2020@gmail.com</p>
        </div>
        <div className="logo-placeholder right-logo">
          <img src="/bohol-logo.png" alt="Bohol Logo" />
        </div>
      </div>

      {/* Main Title Box */}
      <div className="title-box">
        REQUISITION AND ISSUE SLIP (RIS)
      </div>

      {/* Metadata Fields */}
      <table className="metadata-table">
        <tbody>
          <tr>
            <td className="w-35">
              <strong>Division:</strong> BPDACC<br />
              <strong>Office:</strong> <span className="underline-field">{officeName}</span>
            </td>
            <td className="w-35">
              <strong>Responsibility</strong><br />
              <strong>Center Code:</strong> <span className="underline-field">{respCode}</span>
            </td>
            <td className="w-30">
              <strong>RIS No.:</strong> <span className="underline-field">{requisition.risNo}</span><br />
              <strong>Date:</strong> <span className="underline-field">{formattedDate}</span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Requisition Section Header */}
      <div className="section-header-bar">
        Requisition
      </div>

      {/* Items Table */}
      <table className="items-print-table">
        <thead>
          <tr>
            <th className="w-15 text-center">Stock No.</th>
            <th className="w-15 text-center">Unit</th>
            <th className="w-55">Description</th>
            <th className="w-15 text-center">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={item.id || idx}>
              <td className="text-center">{item.stockNumber || item.inventoryItem?.batches?.[0]?.stockNumber || '-'}</td>
              <td className="text-center">{item.unit}</td>
              <td>{item.itemName}</td>
              <td className="text-center">{item.quantity}</td>
            </tr>
          ))}
          {/* Pad with empty rows if the list is short to match the formal look */}
          {items.length < 5 && Array.from({ length: 5 - items.length }).map((_, i) => (
            <tr key={`pad-${i}`} className="empty-pad-row">
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Purpose block */}
      <div className="purpose-container">
        <strong>Purpose:</strong>
        <div className="purpose-box">
          {requisition.purpose || ''}
        </div>
      </div>

      {/* Signatures template table */}
      <table className="signatures-print-table">
        <thead>
          <tr>
            <th className="w-20"></th>
            <th className="w-20 text-center">Requested by:</th>
            <th className="w-20 text-center">Approved by:</th>
            <th className="w-20 text-center">Issued by:</th>
            <th className="w-20 text-center">Received by:</th>
          </tr>
        </thead>
        <tbody>
          <tr className="signature-row">
            <td className="row-label"><strong>Signature :</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="row-label"><strong>Printed Name :</strong></td>
            <td className="text-center val">{requisition.requestedBy?.name || ''}</td>
            <td className="text-center val"></td>
            <td className="text-center val"></td>
            <td className="text-center val"></td>
          </tr>
          <tr>
            <td className="row-label"><strong>Designation :</strong></td>
            <td className="text-center val">{requisition.role || 'Office Staff'}</td>
            <td className="text-center val"></td>
            <td className="text-center val"></td>
            <td className="text-center val"></td>
          </tr>
          <tr>
            <td className="row-label"><strong>Date :</strong></td>
            <td className="text-center val">{formattedDate}</td>
            <td className="text-center val"></td>
            <td className="text-center val"></td>
            <td className="text-center val"></td>
          </tr>
        </tbody>
      </table>

      <style>{`
        /* Print container style */
        .ris-print-container {
          background: white;
          color: black;
          font-family: Arial, sans-serif;
          padding: 20px;
          border: 1px solid #000;
          max-width: 800px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .print-header {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
          margin-bottom: 15px;
          text-align: center;
        }

        .logo-placeholder {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .logo-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .circle-logo {
          text-align: center;
        }

        .header-text {
          padding: 0 10px;
        }

        .header-text p {
          margin: 2px 0;
          font-size: 11px;
        }

        .header-text .province {
          font-weight: bold;
          font-size: 12px;
        }

        .header-text .office-title {
          font-weight: bold;
          font-size: 13px;
        }

        .header-text .center-name {
          font-weight: bold;
          font-size: 12px;
          margin-top: 4px;
        }

        .header-text .contact-info {
          font-size: 10px;
          color: #333;
          margin-top: 4px;
        }

        .title-box {
          border: 2px solid #000;
          padding: 10px;
          text-align: center;
          font-weight: bold;
          font-size: 18px;
          margin: 15px 0 0 0;
          letter-spacing: 1px;
        }

        .metadata-table {
          width: 100%;
          border-collapse: collapse;
          margin: 0;
          border: 1px solid #000;
          border-top: none;
        }

        .metadata-table td {
          border: 1px solid #000;
          padding: 8px 12px;
          font-size: 13px;
          vertical-align: top;
          line-height: 1.6;
        }

        .w-35 { width: 35%; }
        .w-30 { width: 30%; }
        .w-15 { width: 15%; }
        .w-55 { width: 55%; }
        .w-20 { width: 20%; }

        .underline-field {
          text-decoration: underline;
          font-weight: bold;
        }

        .section-header-bar {
          border-left: 1px solid #000;
          border-right: 1px solid #000;
          border-top: none;
          border-bottom: none;
          padding: 6px;
          margin: 0;
          text-align: center;
          font-style: italic;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .items-print-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
          border: 1px solid #000;
        }

        .items-print-table th, .items-print-table td {
          border: 1px solid #000;
          padding: 8px;
          font-size: 13px;
        }

        .items-print-table td {
          height: 38px;
        }

        .items-print-table th {
          background: #f2f2f2;
          font-weight: bold;
        }

        .empty-pad-row td {
          height: 38px;
        }

        .text-center {
          text-align: center;
        }

        .purpose-container {
          margin-bottom: 20px;
        }

        .purpose-container strong {
          font-size: 14px;
          display: block;
          margin-bottom: 5px;
        }

        .purpose-box {
          border: 1px solid #000;
          padding: 10px 15px;
          min-height: 60px;
          font-size: 13px;
          background: #fff;
          word-wrap: break-word;
        }

        .signatures-print-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #000;
        }

        .signatures-print-table th, .signatures-print-table td {
          border: 1px solid #000;
          padding: 6px;
          font-size: 12px;
          height: 30px;
        }

        .signatures-print-table th {
          background: #f2f2f2;
          font-weight: bold;
          border-top: 2px solid #000;
          border-bottom: 2px solid #000;
        }

        .signatures-print-table th:first-child {
          border-left: 2px solid #000;
        }

        .signatures-print-table th:last-child {
          border-right: 2px solid #000;
        }

        .signatures-print-table tr.signature-row td {
          height: 60px;
        }

        .signatures-print-table .row-label {
          width: 15%;
          text-align: left;
        }

        .signatures-print-table td.val {
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default PrintableRIS
