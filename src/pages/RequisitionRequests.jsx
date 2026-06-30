import React, { useState } from 'react'

const RequisitionRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      risNo: 'RIS-2026-001',
      requestDate: '2026-06-29',
      requestedBy: 'Maria Santos',
      role: 'Nurse',
      office: 'Hemodialysis',
      items: [
        { name: 'Syringes 5ml', quantity: 50, unit: 'pcs' },
        { name: 'Gauze Pads (4x4)', quantity: 20, unit: 'packs' }
      ],
      status: 'Pending'
    },
    {
      id: 2,
      risNo: 'RIS-2026-002',
      requestDate: '2026-06-28',
      requestedBy: 'Jose Reyes',
      role: 'Lab Tech',
      office: 'Clinical Laboratory',
      items: [
        { name: 'Microscope Slides', quantity: 100, unit: 'pcs' },
        { name: 'Test Tubes', quantity: 50, unit: 'pcs' }
      ],
      status: 'Approved'
    },
    {
      id: 3,
      risNo: 'RIS-2026-003',
      requestDate: '2026-06-27',
      requestedBy: 'Anna Cruz',
      role: 'Pharmacist',
      office: 'Radiology',
      items: [
        { name: 'X-Ray Film', quantity: 30, unit: 'sheets' }
      ],
      status: 'Rejected'
    }
  ])

  const [selectedRequest, setSelectedRequest] = useState(null)

  const handleStatusChange = (id, newStatus) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: newStatus } : req
    ))
  }

  const handleViewDetails = (request) => {
    setSelectedRequest(request)
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Requisition Requests</h1>
        <p className="page-description">View and manage requisition requests from other users</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">All Requests</h2>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>RIS No.</th>
                <th>Date</th>
                <th>Requested By</th>
                <th>Office</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(request => (
                <tr key={request.id}>
                  <td>{request.risNo}</td>
                  <td>{new Date(request.requestDate).toLocaleDateString()}</td>
                  <td>
                    {request.requestedBy}<br/>
                    <span className="badge badge-info">{request.role}</span>
                  </td>
                  <td>{request.office}</td>
                  <td>
                    <span className={`badge ${
                      request.status === 'Pending' ? 'badge-warning' :
                      request.status === 'Approved' ? 'badge-success' : 'badge-danger'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td>
                    <div className="actions" style={{ display: 'flex', gap: '8px' }}>
                      <button 
                        className="btn-secondary" 
                        style={{ fontSize: '12px', padding: '4px 8px' }}
                        onClick={() => handleViewDetails(request)}
                      >
                        View
                      </button>
                      {request.status === 'Pending' && (
                        <>
                          <button 
                            className="btn-primary" 
                            style={{ fontSize: '12px', padding: '4px 8px', background: '#10b981' }}
                            onClick={() => handleStatusChange(request.id, 'Approved')}
                          >
                            Approve
                          </button>
                          <button 
                            className="btn-secondary" 
                            style={{ fontSize: '12px', padding: '4px 8px', background: '#ef4444', color: 'white' }}
                            onClick={() => handleStatusChange(request.id, 'Rejected')}
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Request Details Modal */}
      {selectedRequest && (
        <div className="modal-overlay" onClick={() => setSelectedRequest(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Request Details: {selectedRequest.risNo}</h2>
              <button className="close-btn" onClick={() => setSelectedRequest(null)}>×</button>
            </div>
            <div className="modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <h4 style={{ marginBottom: '8px', color: '#6b7280' }}>Request Date</h4>
                  <p>{new Date(selectedRequest.requestDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '8px', color: '#6b7280' }}>Requested By</h4>
                  <p>{selectedRequest.requestedBy} ({selectedRequest.role})</p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '8px', color: '#6b7280' }}>Office</h4>
                  <p>{selectedRequest.office}</p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '8px', color: '#6b7280' }}>Status</h4>
                  <span className={`badge ${
                    selectedRequest.status === 'Pending' ? 'badge-warning' :
                    selectedRequest.status === 'Approved' ? 'badge-success' : 'badge-danger'
                  }`}>
                    {selectedRequest.status}
                  </span>
                </div>
              </div>
              <div>
                <h4 style={{ marginBottom: '8px', color: '#6b7280' }}>Requested Items</h4>
                <table className="table" style={{ marginTop: '8px' }}>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedRequest.items.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              {selectedRequest.status === 'Pending' && (
                <>
                  <button 
                    className="btn-primary" 
                    style={{ background: '#10b981' }}
                    onClick={() => {
                      handleStatusChange(selectedRequest.id, 'Approved')
                      setSelectedRequest(null)
                    }}
                  >
                    Approve Request
                  </button>
                  <button 
                    className="btn-secondary" 
                    style={{ background: '#ef4444', color: 'white' }}
                    onClick={() => {
                      handleStatusChange(selectedRequest.id, 'Rejected')
                      setSelectedRequest(null)
                    }}
                  >
                    Reject Request
                  </button>
                </>
              )}
              <button className="btn-secondary" onClick={() => setSelectedRequest(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .page {
          padding: 24px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 24px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .page-description {
          color: #6b7280;
          font-size: 14px;
        }

        .card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          margin-bottom: 24px;
        }

        .card-header {
          padding: 16px 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .card-title {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .table-container {
          overflow-x: auto;
          padding: 0 20px 20px;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table th,
        .table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        .table th {
          font-weight: 600;
          color: #374151;
          background: #f9fafb;
        }

        .table td {
          color: #4b5563;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background: #1e3a8a;
        }

        .btn-secondary {
          background: #f3f4f6;
          color: #1f2937;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background: #e5e7eb;
        }

        .badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        .badge-success {
          background: #d1fae5;
          color: #065f46;
        }

        .badge-warning {
          background: #fef3c7;
          color: #92400e;
        }

        .badge-danger {
          background: #fee2e2;
          color: #991b1b;
        }

        .badge-info {
          background: #dbeafe;
          color: #1e40af;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal {
          background: white;
          border-radius: 10px;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .modal-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          color: #9ca3af;
          cursor: pointer;
          transition: color 0.2s;
        }

        .close-btn:hover {
          color: #374151;
        }

        .modal-body {
          padding: 20px;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 20px;
          border-top: 1px solid #e5e7eb;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page {
            padding: 16px;
          }

          .page-title {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  )
}

export default RequisitionRequests
