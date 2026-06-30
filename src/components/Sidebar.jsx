import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useUserRole } from '../context/UserRoleContext'

const Sidebar = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { userRole, setUserRole, isAdmin } = useUserRole()

  // Menu items based on user role
  const menuItems = [
    { path: '/', icon: '📊', label: 'Dashboard', visible: true },
    { path: '/inventory', icon: '📦', label: 'Inventory', visible: true },
    { 
      path: '/requisition', 
      icon: '📝', 
      label: 'Requisition (RIS)', 
      visible: !isAdmin 
    },
    { 
      path: '/requisition-requests', 
      icon: '📋', 
      label: 'Requisition Requests', 
      visible: isAdmin 
    },
    { path: '/reports', icon: '📈', label: 'Reports', visible: true },
    { path: '/users', icon: '👥', label: 'Users', visible: isAdmin },
    { path: '/settings', icon: '⚙️', label: 'Settings', visible: true },
  ].filter(item => item.visible)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className="mobile-menu-toggle no-print"
        onClick={toggleMobileMenu}
      >
        <span className="menu-icon">{isMobileMenuOpen ? '✕' : '☰'}</span>
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isMobileMenuOpen && (
        <div
          className="sidebar-overlay no-print"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className={`sidebar no-print ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="logo">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">BPDACC Inv</span>
          </h1>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">JD</div>
            <div>
              <div className="user-name">John Doe</div>
              <div className="user-role">{userRole}</div>
            </div>
          </div>
          <div style={{ marginTop: '12px' }}>
            <label style={{ fontSize: '12px', color: '#6b7280', display: 'block', marginBottom: '4px' }}>
              Switch Role (Testing):
            </label>
            <select 
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              style={{
                width: '100%',
                padding: '6px 8px',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              <option value="Admin">Admin</option>
              <option value="Nurse">Nurse</option>
              <option value="Pharmacist">Pharmacist</option>
              <option value="Lab Tech">Lab Tech</option>
            </select>
          </div>
        </div>
        <style jsx>{`
          .sidebar {
            width: 220px;
            background: white;
            height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
            z-index: 999;
            transition: transform 0.3s ease;
          }

          .sidebar-header {
            padding: 20px 16px;
            border-bottom: 1px solid #e5e7eb;
          }

          .logo {
            font-size: 18px;
            font-weight: 700;
            color: #1e40af;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .logo-icon {
            font-size: 20px;
          }

          .logo-text {
            display: inline;
          }

          .sidebar-nav {
            flex: 1;
            padding: 16px 0;
            overflow-y: auto;
          }

          .nav-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 16px;
            text-decoration: none;
            color: #6b7280;
            font-weight: 500;
            transition: all 0.2s;
          }

          .nav-item:hover {
            background: #f3f4f6;
            color: #1e40af;
          }

          .nav-item.active {
            background: #eff6ff;
            color: #1e40af;
            border-left: 3px solid #1e40af;
          }

          .nav-icon {
            font-size: 20px;
          }

          .sidebar-footer {
            padding: 20px;
            border-top: 1px solid #e5e7eb;
          }

          .user-info {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6, #1e40af);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
          }

          .user-name {
            font-size: 14px;
            font-weight: 600;
            color: #1f2937;
          }

          .user-role {
            font-size: 12px;
            color: #9ca3af;
          }

          /* Mobile Menu Toggle */
          .mobile-menu-toggle {
            display: none;
            position: fixed;
            top: 16px;
            left: 16px;
            z-index: 1000;
            background: #1e40af;
            color: white;
            border: none;
            border-radius: 8px;
            width: 44px;
            height: 44px;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(30, 64, 175, 0.3);
          }

          .sidebar-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 998;
          }

          /* Mobile Responsive */
          @media (max-width: 768px) {
            .sidebar {
              transform: translateX(-100%);
            }

            .sidebar.open {
              transform: translateX(0);
            }

            .mobile-menu-toggle {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .sidebar-overlay {
              display: block;
            }
          }

          /* Tablet Responsive */
          @media (max-width: 1024px) {
            .logo-text {
              display: none;
            }

            .sidebar {
              width: 70px;
            }

            .nav-label {
              display: none;
            }

            .user-name,
            .user-role {
              display: none;
            }

            .sidebar-header {
              padding: 24px 10px;
            }

            .logo {
              justify-content: center;
            }
          }

          /* Override for mobile - full sidebar */
          @media (max-width: 768px) {
            .sidebar {
              width: 260px;
            }

            .logo-text {
              display: inline;
            }

            .nav-label {
              display: inline;
            }

            .user-name,
            .user-role {
              display: block;
            }

            .sidebar-header {
              padding: 24px 20px;
            }

            .logo {
              justify-content: flex-start;
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default Sidebar
