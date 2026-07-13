/**
 * Requisition & Issue Slip (RIS) Page
 * Features:
 * - Create formal requisition forms
 * - 15-line item table
 * - Signature blocks (Requested, Approved, Issued, Received)
 * - Printable formal document
 */

import React, { useState } from 'react'

const Requisition = () => {
  // Form state with auto-generated date & RIS number
  const [formData, setFormData] = useState({
    office: '',
    purpose: '',
    requestedBy: '',
    approvedBy: '',
    issuedBy: '',
    receivedBy: '',
    date: new Date().toISOString().split('T')[0],
    requisitionNo: `RIS-${Date.now().toString().slice(-6)}`,
  })

  /**
   * Print current RIS form
   */
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="requisition">
      <div className="page-header">
        <div>
          <h1 className="page-title">Requisition & Issue Slip (RIS)</h1>
          <p className="page-subtitle">Create and print requisition forms</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary" onClick={handlePrint}>🖨️ Print</button>
          <button className="btn-primary">Submit Request</button>
        </div>
      </div>

      <div className="card">
        <div className="ris-form">
          <div className="ris-header">
            <div className="ris-header-top">
              <div className="clinic-logo">🏥</div>
              <div className="clinic-info">
                <h2>BPDACC Inventory Management</h2>
                <p>REQUISITION & ISSUE SLIP</p>
              </div>
              <div className="ris-number">
                <span className="ris-label">RIS No.</span>
                <span className="ris-value">{formData.requisitionNo}</span>
              </div>
            </div>

            <div className="ris-meta">
              <div className="meta-group">
                <span className="meta-label">Office:</span>
                <select
                  value={formData.office}
                  onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                  className="form-input meta-input"
                >
                  <option value="">Select Office</option>
                  <option value="hemodialysis">Hemodialysis</option>
                  <option value="clinical-laboratory">Clinical Laboratory</option>
                  <option value="radiology">Radiology</option>
                  <option value="admin-office">Admin Office</option>
                </select>
              </div>
              <div className="meta-group">
                <span className="meta-label">Code:</span>
                <input
                  type="text"
                  className="form-input meta-input"
                  placeholder="Code"
                />
              </div>
            </div>

            <div className="ris-header-line"></div>
          </div>

          <div className="table-container">
            <table className="ris-table">
              <thead>
                <tr>
                  <th colSpan="4" className="section-header">REQUISITION</th>
                  <th colSpan="2" className="section-header">ISSUE</th>
                </tr>
                <tr>
                  <th className="col-stock-no">STOCK NO.</th>
                  <th className="col-unit">UNIT</th>
                  <th className="col-description">DESCRIPTION</th>
                  <th className="col-req-qty">QTY</th>
                  <th className="col-issue-qty">QTY</th>
                  <th className="col-remarks">REMARKS</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(15)].map((_, index) => (
                  <tr key={index}>
                    <td><input type="text" className="table-input" placeholder="" /></td>
                    <td><input type="text" className="table-input" placeholder="" /></td>
                    <td><input type="text" className="table-input" placeholder="" /></td>
                    <td><input type="text" className="table-input" placeholder="" /></td>
                    <td><input type="text" className="table-input" placeholder="" /></td>
                    <td><input type="text" className="table-input" placeholder="" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="purpose-section">
            <span className="purpose-label">Purpose:</span>
            <input
              type="text"
              value={formData.purpose}
              onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
              className="form-input purpose-input"
              placeholder="Enter purpose"
            />
          </div>

          <div className="ris-signatures">
            <div className="signature-block">
              <div className="signature-line"></div>
              <div className="signature-label">Requested by:</div>
              <div className="signature-inputs">
                <input type="text" placeholder="Printed Name" className="sig-input" />
                <div className="sig-row">
                  <input type="text" placeholder="Designation" className="sig-input-small" />
                  <input type="date" className="sig-input-small" />
                </div>
              </div>
            </div>
            <div className="signature-block">
              <div className="signature-line"></div>
              <div className="signature-label">Approved by:</div>
              <div className="signature-inputs">
                <input type="text" placeholder="Printed Name" className="sig-input" />
                <div className="sig-row">
                  <input type="text" placeholder="Designation" className="sig-input-small" />
                  <input type="date" className="sig-input-small" />
                </div>
              </div>
            </div>
            <div className="signature-block">
              <div className="signature-line"></div>
              <div className="signature-label">Issued by:</div>
              <div className="signature-inputs">
                <input type="text" placeholder="Printed Name" className="sig-input" />
                <div className="sig-row">
                  <input type="text" placeholder="Designation" className="sig-input-small" />
                  <input type="date" className="sig-input-small" />
                </div>
              </div>
            </div>
            <div className="signature-block">
              <div className="signature-line"></div>
              <div className="signature-label">Received by:</div>
              <div className="signature-inputs">
                <input type="text" placeholder="Printed Name" className="sig-input" />
                <div className="sig-row">
                  <input type="text" placeholder="Designation" className="sig-input-small" />
                  <input type="date" className="sig-input-small" />
                </div>
              </div>
            </div>
          </div>

          <div className="page-number">P.</div>
        </div>
      </div>

      <style>{`
        .requisition {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
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

        .btn-secondary {
          background: white;
          color: #1f2937;
          border: 1px solid #e5e7eb;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .ris-form {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .ris-header {
          margin-bottom: 24px;
        }

        .ris-header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          gap: 16px;
        }

        .clinic-logo {
          font-size: 48px;
        }

        .clinic-info {
          text-align: center;
          flex: 1;
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

        .ris-number {
          text-align: right;
        }

        .ris-label {
          display: block;
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .ris-value {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
        }

        .ris-meta {
          display: flex;
          gap: 30px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .meta-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .meta-label {
          font-weight: 600;
          font-size: 14px;
          color: #1f2937;
        }

        .meta-input {
          min-width: 150px;
          padding: 8px 12px;
        }

        .form-input {
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
        }

        .form-input:focus {
          border-color: #1e40af;
        }

        .ris-header-line {
          height: 3px;
          background: #1e40af;
        }

        .table-container {
          overflow-x: auto;
        }

        .ris-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
          min-width: 600px;
        }

        .ris-table th,
        .ris-table td {
          border: 1px solid #e5e7eb;
          padding: 10px 12px;
          text-align: left;
        }

        .ris-table thead th {
          background: #f9fafb;
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          text-align: center;
          color: #6b7280;
          letter-spacing: 0.5px;
        }

        .section-header {
          background: #f3f4f6 !important;
          font-weight: 700 !important;
          color: #1f2937 !important;
        }

        .col-stock-no { width: 12%; }
        .col-unit { width: 8%; }
        .col-description { width: 38%; }
        .col-req-qty { width: 12%; }
        .col-issue-qty { width: 12%; }
        .col-remarks { width: 18%; }

        .table-input {
          width: 100%;
          border: none;
          background: transparent;
          font-size: 13px;
          outline: none;
          padding: 4px;
        }

        .ris-table tbody tr {
          height: 36px;
        }

        .ris-table tbody tr:hover {
          background: #f9fafb;
        }

        .purpose-section {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          padding: 12px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          flex-wrap: wrap;
        }

        .purpose-label {
          font-weight: 700;
          font-size: 14px;
          color: #1f2937;
          white-space: nowrap;
        }

        .purpose-input {
          flex: 1;
          border: none;
          border-bottom: 1px solid #d1d5db;
          padding: 6px 0;
          font-size: 14px;
          min-width: 200px;
          outline: none;
        }

        .purpose-input:focus {
          border-bottom-color: #1e40af;
        }

        .ris-signatures {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .signature-block {
          text-align: center;
        }

        .signature-line {
          border-bottom: 1px solid #d1d5db;
          margin-bottom: 8px;
          margin-top: 28px;
        }

        .signature-label {
          font-size: 12px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .signature-inputs {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sig-input {
          border: none;
          border-bottom: 1px solid #d1d5db;
          padding: 4px;
          font-size: 12px;
          text-align: center;
          outline: none;
        }

        .sig-input:focus {
          border-bottom-color: #1e40af;
        }

        .sig-row {
          display: flex;
          gap: 6px;
        }

        .sig-input-small {
          flex: 1;
          border: none;
          border-bottom: 1px solid #d1d5db;
          padding: 4px;
          font-size: 11px;
          text-align: center;
          outline: none;
        }

        .sig-input-small:focus {
          border-bottom-color: #1e40af;
        }

        .page-number {
          text-align: right;
          font-weight: 600;
          margin-top: 12px;
          font-size: 14px;
          color: #6b7280;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .ris-signatures {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
          }

          .page-title {
            font-size: 24px;
          }

          .ris-header-top {
            flex-direction: column;
            text-align: center;
          }

          .clinic-info h2 {
            font-size: 18px;
          }

          .ris-meta {
            flex-direction: column;
            gap: 12px;
          }

          .meta-group {
            width: 100%;
          }

          .meta-input {
            flex: 1;
            width: 100%;
          }

          .purpose-section {
            flex-direction: column;
            align-items: flex-start;
          }

          .purpose-input {
            width: 100%;
          }

          .ris-signatures {
            grid-template-columns: 1fr;
          }
        }

        @media print {
          .page-header {
            display: none;
          }

          .card {
            box-shadow: none;
            padding: 20px;
            border-radius: 0;
          }

          .ris-table th,
          .ris-table td {
            border: 1px solid #000;
          }

          .ris-table thead th {
            background: #f9fafb;
            color: #000;
          }

          .section-header {
            background: #f3f4f6 !important;
            color: #000 !important;
          }

          .ris-header-line {
            background: #000;
          }

          .signature-line {
            border-bottom: 1px solid #000;
          }

          .table-input,
          .purpose-input,
          .sig-input,
          .sig-input-small {
            border-bottom: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Requisition
