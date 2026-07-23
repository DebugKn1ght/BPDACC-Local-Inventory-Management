import React from 'react'

const PrintableStockCard = ({ item }) => {
  if (!item) return null

  // Get stock number from item (use first batch's stock number if available, otherwise SKU)
  const stockNumber = item.batches?.[0]?.stockNumber || item.sku

  return (
    <div className="stock-card-print-container">
      {/* Print Header with Logos */}
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

      {/* Stock Card Title */}
      <div className="stock-card-title-box">
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>BIN/STOCK CARD</h1>
      </div>

      {/* Stock Card Header Info */}
      <table className="stock-card-header-table">
        <tbody>
          <tr>
            <td style={{ width: '15%', fontWeight: 'bold', border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>Location</td>
            <td style={{ width: '25%', border: '1px solid #000', padding: '8px' }}>{item.location || '-'}</td>
            <td style={{ width: '20%', fontWeight: 'bold', textAlign: 'center', border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>Stock Number</td>
            <td style={{ width: '40%', textAlign: 'right', border: '1px solid #000', padding: '8px' }}>{stockNumber}</td>
          </tr>
          <tr>
            <td style={{ width: '15%', fontWeight: 'bold', border: '1px solid #000', padding: '8px', fontSize: '20px', backgroundColor: '#f2f2f2' }}>Item Description</td>
            <td colSpan={3} style={{ border: '1px solid #000', padding: '8px', fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>{item.name}</td>
          </tr>
          <tr>
            <td style={{ width: '15%', fontWeight: 'bold', border: '1px solid #000', padding: '8px', fontSize: '20px', backgroundColor: '#f2f2f2' }}>Unit of Measure</td>
            <td colSpan={3} style={{ border: '1px solid #000', padding: '8px', fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>{item.unit}</td>
          </tr>
        </tbody>
      </table>

      {/* Stock Card Transaction Table */}
      <table className="stock-card-print-table">
        <thead>
          <tr>
            <th rowSpan={2} className="text-center">Date</th>
            <th colSpan={3} className="text-center">Quantity</th>
            <th rowSpan={2} className="text-center">Cost<br/>(Price/Unit)</th>
            <th rowSpan={2} className="text-center">IR/DR/SI/RIS/PTR/BL No.</th>
            <th rowSpan={2} className="text-center">Recipient/Remarks</th>
          </tr>
          <tr>
            <th className="text-center">Received</th>
            <th className="text-center">Issued</th>
            <th className="text-center">Balance</th>
          </tr>
        </thead>
        <tbody>
          {item.transactions && item.transactions.map((tx, idx) => (
            <tr key={idx}>
              <td className="text-center">
                {new Date(tx.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}
              </td>
              <td className="text-center">
                {tx.receiptQty > 0 ? tx.receiptQty : ''}
              </td>
              <td className="text-center">
                {tx.issuanceQty > 0 ? tx.issuanceQty : ''}
              </td>
              <td className="text-center" style={{ fontWeight: 'bold' }}>
                {tx.balance}
              </td>
              <td className="text-center">
                {tx.costPerUnit || '-'}
              </td>
              <td className="text-center">
                {tx.ptr || tx.reference || '-'}
              </td>
              <td>
                {tx.remarks || tx.office || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        /* Print container style */
        .stock-card-print-container {
          background: white;
          color: black;
          font-family: Arial, sans-serif;
          padding: 20px;
          border: 1px solid #000;
          max-width: 850px;
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

        .header-text .agency {
          font-size: 12px;
          margin: 0 0 2px 0;
        }

        .header-text .province {
          font-size: 13px;
          font-weight: bold;
          margin: 0 0 2px 0;
        }

        .header-text .city {
          font-size: 11px;
          margin: 0 0 2px 0;
        }

        .header-text .office-title {
          font-size: 13px;
          font-weight: bold;
          color: #1e3a8a;
          margin: 0 0 2px 0;
        }

        .header-text .center-name {
          font-size: 12px;
          font-weight: bold;
          margin: 0 0 3px 0;
        }

        .header-text .contact-info {
          font-size: 10px;
          color: #333;
          margin-top: 4px;
        }

        .stock-card-title-box {
          padding: 10px 0;
          text-align: center;
          margin: 15px 0 0 0;
        }

        .stock-card-header-table {
          width: 100%;
          border-collapse: collapse;
          margin: 0;
        }

        .stock-card-print-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #000;
          margin-top: 0;
        }

        .stock-card-print-table th, .stock-card-print-table td {
          border: 1px solid #000;
          padding: 8px;
          font-size: 13px;
        }

        .stock-card-print-table th {
          background: #f2f2f2;
          font-weight: bold;
        }

        .text-center { text-align: center; }

        @media screen {
          .stock-card-print-container {
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
          
          .stock-card-print-container, .stock-card-print-container * {
            visibility: visible;
          }

          .stock-card-print-container {
            display: block !important;
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw !important;
            padding: 20mm !important;
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

export default PrintableStockCard
