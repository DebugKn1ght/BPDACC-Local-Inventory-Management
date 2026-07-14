/**
 * User Management Page
 * Features:
 * - View all system users
 * - Add users with encrypted passwords
 * - Role & Office assignments
 */

import React, { useState, useEffect } from 'react'
import Icon from '../components/Icon'
import { supabaseDb } from '../utils/apiDb'
import { useUI } from '../context/UIContext'

// Import user management icons
import addUserIcon from '../assets/icons/users/adduser-icon.svg'
import deleteUserIcon from '../assets/icons/users/deleteuser-icon.svg'
import changePasswordIcon from '../assets/icons/users/changepassword-icon.svg'
import editUsersIcon from '../assets/icons/users/editusers-icon.svg'
import closeIcon from '../assets/icons/inventory/close-icon.svg'

const Users = () => {
  const { showToast, confirmAction } = useUI()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    office: 'Hemodialysis'
  })

  const [editFormData, setEditFormData] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
    office: 'Hemodialysis',
    status: 'Active'
  })
  
  const [offices, setOffices] = useState([])

  const loadData = async () => {
    setLoading(true)
    try {
      const fetchedUsers = await supabaseDb.getUsers()
      setUsers(fetchedUsers)
      
      const fetchedOffices = await supabaseDb.getOffices()
      setOffices(fetchedOffices)
    } catch (e) {
      console.error('Failed to load users:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleAddSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await supabaseDb.addUser({
        ...formData,
        status: 'Active'
      })
      showToast('User added successfully!', 'success')
      setShowAddModal(false)
      setFormData({ name: '', email: '', password: '', office: 'Hemodialysis' })
      loadData()
    } catch (err) {
      showToast(err.message || 'Failed to add user', 'error')
    } finally {
      setSubmitting(false)
    }
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await supabaseDb.updateUser(editFormData)
      showToast('User updated successfully!', 'success')
      setShowEditModal(false)
      loadData()
    } catch (err) {
      showToast(err.message || 'Failed to update user', 'error')
    } finally {
      setSubmitting(false)
    }
  }

  const openEditModal = (user) => {
    setEditFormData({
      id: user.id,
      name: user.name,
      email: user.email,
      password: '', // Leave blank unless they want to change it
      office: user.officeName || 'Hemodialysis',
      status: user.status
    })
    setShowEditModal(true)
  }

  const handleDeleteUser = async (user) => {
    confirmAction(`Are you sure you want to delete ${user.name}?`, async () => {
      try {
        await supabaseDb.deleteUser(user.id)
        showToast('User deleted successfully!', 'success')
        loadData()
      } catch (err) {
        showToast(err.message || 'Failed to delete user', 'error')
      }
    })
  }

  return (
    <div className="users">
      <div className="page-header">
        <div>
          <h1 className="page-title">User Management</h1>
          <p className="page-subtitle">Manage system users and permissions</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}>
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
                <th>Office</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="6" style={{textAlign: 'center', padding: '20px'}}>Loading users...</td></tr>
              ) : users.length === 0 ? (
                <tr><td colSpan="6" style={{textAlign: 'center', padding: '20px'}}>No users found.</td></tr>
              ) : users.map((user) => (
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
                  <td>{user.officeName}</td>
                  <td>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    {!user.isAdmin && (
                      <div className="actions">
                        <button className="btn-icon" title="Edit User" onClick={() => openEditModal(user)}>
                          <Icon src={editUsersIcon} alt="Edit" size={20} />
                        </button>
                        <button className="btn-icon" title="Delete User" onClick={() => handleDeleteUser(user)}>
                          <Icon src={deleteUserIcon} alt="Delete" size={20} />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '500px' }}>
            <div className="modal-header">
              <h2>Add New User</h2>
              <button className="close-btn" onClick={() => setShowAddModal(false)}>
                <Icon src={closeIcon} alt="Close" size={24} />
              </button>
            </div>
            <form onSubmit={handleAddSubmit} className="modal-form">
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  placeholder="john@clinic.com"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  required 
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                  placeholder="Secure password"
                />
                <small style={{color: '#6b7280', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                  Password will be encrypted before saving to the database.
                </small>
              </div>
              <div className="form-group">
                <label>Assigned Office</label>
                <select 
                  value={formData.office}
                  onChange={e => setFormData({...formData, office: e.target.value})}
                >
                  {offices.filter(o => o.name !== 'Unallocated').map(o => (
                    <option key={o.id} value={o.name}>{o.name}</option>
                  ))}
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? 'Saving...' : 'Create Account'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '500px' }}>
            <div className="modal-header">
              <h2>Edit User</h2>
              <button className="close-btn" onClick={() => setShowEditModal(false)}>
                <Icon src={closeIcon} alt="Close" size={24} />
              </button>
            </div>
            <form onSubmit={handleEditSubmit} className="modal-form">
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={editFormData.name}
                  onChange={e => setEditFormData({...editFormData, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={editFormData.email}
                  onChange={e => setEditFormData({...editFormData, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>New Password (Optional)</label>
                <input 
                  type="password" 
                  value={editFormData.password}
                  onChange={e => setEditFormData({...editFormData, password: e.target.value})}
                  placeholder="Leave blank to keep current password"
                />
              </div>
              <div className="form-group">
                <label>Assigned Office</label>
                <select 
                  value={editFormData.office}
                  onChange={e => setEditFormData({...editFormData, office: e.target.value})}
                >
                  {offices.filter(o => o.name !== 'Unallocated').map(o => (
                    <option key={o.id} value={o.name}>{o.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select 
                  value={editFormData.status}
                  onChange={e => setEditFormData({...editFormData, status: e.target.value})}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowEditModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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

        .btn-secondary {
          background: white;
          border: 1px solid #d1d5db;
          color: #374151;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
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
          padding: 20px;
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          animation: slideUp 0.3s ease-out;
        }

        .modal-header {
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 20px;
          color: #111827;
        }

        .close-btn {
          background: none;
          border: none;
          padding: 4px;
          cursor: pointer;
          color: #6b7280;
          border-radius: 4px;
        }

        .close-btn:hover {
          background: #f3f4f6;
          color: #111827;
        }

        .modal-form {
          padding: 24px;
          overflow-y: auto;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #374151;
          font-size: 14px;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
