/**
 * User Management Page
 * Features:
 * - View all system users
 * - Add/Edit/Delete users
 * - Change passwords
 * - Role & Office assignments
 */

import React from 'react'
import Icon from '../components/Icon'

// Import user management icons
import addUserIcon from '../assets/icons/users/adduser-icon.svg'
import deleteUserIcon from '../assets/icons/users/deleteuser-icon.svg'
import changePasswordIcon from '../assets/icons/users/changepassword-icon.svg'
import editUsersIcon from '../assets/icons/users/editusers-icon.svg'

const Users = () => {
  // Mock user data (will come from database later)
  const users = [
    { id: 1, name: 'John Doe', email: 'john@clinic.com', role: 'Admin', office: 'All', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@clinic.com', role: 'Nurse', office: 'Hemodialysis', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@clinic.com', role: 'Pharmacist', office: 'Admin Office', status: 'Active' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@clinic.com', role: 'Lab Tech', office: 'Clinical Laboratory', status: 'Inactive' },
  ]

  return (
    <div className="users">
      <div className="page-header">
        <div>
          <h1 className="page-title">User Management</h1>
          <p className="page-subtitle">Manage system users and permissions</p>
        </div>
        <button className="btn-primary">
          <Icon src={addUserIcon} alt="Add User" size={20} />
          Add User
        </button>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Office</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-info-cell">
                      <div className="user-avatar-small">{user.name.charAt(0)}</div>
                      <div>
                        <div className="user-name">{user.name}</div>
                        <div className="user-email">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <span className="role-tag">{user.role}</span>
                  </td>
                  <td>{user.office}</td>
                  <td>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <div className="actions">
                      <button className="btn-icon" title="Edit User">
                        <Icon src={editUsersIcon} alt="Edit" size={20} />
                      </button>
                      <button className="btn-icon" title="Change Password">
                        <Icon src={changePasswordIcon} alt="Change Password" size={20} />
                      </button>
                      <button className="btn-icon" title="Delete User">
                        <Icon src={deleteUserIcon} alt="Delete" size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .users {
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
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .table-container {
          overflow-x: auto;
        }

        .users-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 700px;
        }

        .users-table th,
        .users-table td {
          padding: 16px 20px;
          text-align: left;
        }

        .users-table thead {
          background: #f9fafb;
        }

        .users-table th {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .users-table tbody tr {
          border-bottom: 1px solid #f3f4f6;
        }

        .user-info-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar-small {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 16px;
          flex-shrink: 0;
        }

        .user-name {
          font-weight: 600;
          color: #1f2937;
          font-size: 14px;
        }

        .user-email {
          font-size: 13px;
          color: #6b7280;
        }

        .role-tag {
          display: inline-block;
          padding: 4px 12px;
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-badge.active {
          background: #dcfce7;
          color: #166534;
        }

        .status-badge.inactive {
          background: #fee2e2;
          color: #991b1b;
        }

        .actions {
          display: flex;
          gap: 8px;
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
        }
      `}</style>
    </div>
  )
}

export default Users
