/**
 * Settings Page
 * Features:
 * - Clinic information (name, address, contact)
 * - Office management
 * - Notification preferences
 * - Database configuration
 */

import React from 'react'

const Settings = () => {
  return (
    <div className="settings">
      <div className="page-header">
        <div>
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Configure system settings and preferences</p>
        </div>
      </div>

      <div className="settings-grid">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">General Settings</h2>
          </div>
          <div className="settings-form">
            <div className="form-group">
              <label className="form-label">Clinic Name</label>
              <input type="text" className="form-input" defaultValue="BPDACC" />
            </div>
            <div className="form-group">
              <label className="form-label">Clinic Address</label>
              <textarea className="form-input" rows={3} defaultValue="123 Medical Center Drive, City, State 12345" />
            </div>
            <div className="form-group">
              <label className="form-label">Contact Email</label>
              <input type="email" className="form-input" defaultValue="admin@bpdacc.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-input" defaultValue="+1 (555) 123-4567" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Offices</h2>
          </div>
          <div className="offices-list">
            <div className="office-item">
              <div>
                <div className="office-name">Hemodialysis</div>
                <div className="office-description">Dialysis Unit</div>
              </div>
              <button className="btn-icon">✏️</button>
            </div>
            <div className="office-item">
              <div>
                <div className="office-name">Clinical Laboratory</div>
                <div className="office-description">Lab Testing</div>
              </div>
              <button className="btn-icon">✏️</button>
            </div>
            <div className="office-item">
              <div>
                <div className="office-name">Radiology</div>
                <div className="office-description">Imaging Department</div>
              </div>
              <button className="btn-icon">✏️</button>
            </div>
            <div className="office-item">
              <div>
                <div className="office-name">Admin Office</div>
                <div className="office-description">Administration</div>
              </div>
              <button className="btn-icon">✏️</button>
            </div>
            <button className="btn-secondary">+ Add Office</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Notifications</h2>
          </div>
          <div className="settings-form">
            <div className="toggle-item">
              <div>
                <div className="toggle-label">Low Stock Alerts</div>
                <div className="toggle-description">Receive notifications when stock reaches minimum levels</div>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" checked />
                <span className="slider"></span>
              </label>
            </div>
            <div className="toggle-item">
              <div>
                <div className="toggle-label">Email Notifications</div>
                <div className="toggle-description">Send alerts via email</div>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" checked />
                <span className="slider"></span>
              </label>
            </div>
            <div className="toggle-item">
              <div>
                <div className="toggle-label">Daily Summary</div>
                <div className="toggle-description">Receive daily inventory summary</div>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Database Configuration</h2>
          </div>
          <div className="settings-form">
            <div className="form-group">
              <label className="form-label">Database Host</label>
              <input type="text" className="form-input" defaultValue="localhost" />
            </div>
            <div className="form-group">
              <label className="form-label">Database Port</label>
              <input type="number" className="form-input" defaultValue="5432" />
            </div>
            <div className="form-group">
              <label className="form-label">Database Name</label>
              <input type="text" className="form-input" defaultValue="bpdacc_inventory" />
            </div>
            <div className="form-group">
              <label className="form-label">Database User</label>
              <input type="text" className="form-input" defaultValue="postgres" />
            </div>
            <div className="form-group">
              <label className="form-label">Connection Status</label>
              <span className="status-badge ok">Connected</span>
            </div>
          </div>
        </div>
      </div>

      <div className="save-bar">
        <button className="btn-secondary">Reset</button>
        <button className="btn-primary">Save Changes</button>
      </div>

      <style>{`
        .settings {
          padding: 0;
        }

        .page-header {
          margin-bottom: 24px;
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

        .settings-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 24px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .card-header {
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .settings-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #4b5563;
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

        textarea.form-input {
          resize: vertical;
        }

        .offices-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .office-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: #f9fafb;
          border-radius: 8px;
        }

        .office-name {
          font-weight: 600;
          color: #1f2937;
          font-size: 14px;
        }

        .office-description {
          font-size: 13px;
          color: #6b7280;
        }

        .toggle-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
        }

        .toggle-label {
          font-weight: 600;
          color: #1f2937;
          font-size: 14px;
        }

        .toggle-description {
          font-size: 13px;
          color: #6b7280;
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 48px;
          height: 24px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #d1d5db;
          transition: 0.3s;
          border-radius: 24px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #1e40af;
        }

        input:checked + .slider:before {
          transform: translateX(24px);
        }

        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-badge.ok {
          background: #dcfce7;
          color: #166534;
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
        }

        .btn-icon {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
        }

        .btn-icon:hover {
          background: #f3f4f6;
        }

        .save-bar {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 20px 0;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .settings-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .page-title {
            font-size: 24px;
          }

          .toggle-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .save-bar {
            flex-direction: column;
          }

          .save-bar button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default Settings
