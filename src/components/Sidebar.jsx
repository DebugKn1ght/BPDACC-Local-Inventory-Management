/**
 * Sidebar Component - Main Navigation
 * Responsive navigation menu with role-based access control
 * Features:
 * - Desktop sidebar (collapsible on tablet)
 * - Mobile hamburger menu
 * - User role management (for testing)
 * - Does not print with no-print class
 */

import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useUserRole } from '../context/UserRoleContext'
import Icon from './Icon'

// Import sidebar icons from assets
import bpdaccLogo from '../assets/icons/sidebar/bpdacc-logo.jpg'
import dashboardIcon from '../assets/icons/sidebar/dashboard-icon.svg'
import inventoryIcon from '../assets/icons/sidebar/inventory-icon.svg'
import reportsIcon from '../assets/icons/sidebar/reports-icon.svg'
import risIcon from '../assets/icons/sidebar/ris-icon.svg'
import rislistIcon from '../assets/icons/sidebar/rislist-icon.svg'
import usersIcon from '../assets/icons/sidebar/users-icon.svg'

const Sidebar = () => {
  const location = useLocation() // Get current path for active state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { currentUser, isAdmin, logout } = useUserRole()

  // Navigation menu items - role-based visibility
  const menuItems = [
    { path: '/', icon: dashboardIcon, label: 'Dashboard', visible: true },
    { path: '/inventory', icon: inventoryIcon, label: 'Inventory', visible: true },
    { 
      path: '/requisition', 
      icon: risIcon, 
      label: 'Requisition (RIS)', 
      visible: !isAdmin // Visible to non-admin users only
    },
    { 
      path: '/requisition-requests', 
      icon: rislistIcon, 
      label: 'Requisition Requests', 
      visible: isAdmin // Visible to admins only
    },
    { path: '/reports', icon: reportsIcon, label: 'Reports', visible: isAdmin },
    { path: '/users', icon: usersIcon, label: 'Users', visible: isAdmin },
  ].filter(item => item.visible) // Filter out hidden items

  /**
   * Toggle mobile sidebar open/closed
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Mobile Menu Toggle Button - Fixed in top-left on mobile */}
      <button
        className="mobile-menu-toggle no-print"
        onClick={toggleMobileMenu}
      >
        <span className="menu-icon">{isMobileMenuOpen ? '✕' : '☰'}</span>
      </button>

      {/* Mobile Sidebar Overlay - Closes menu when clicked */}
      {isMobileMenuOpen && (
        <div
          className="sidebar-overlay no-print"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Sidebar Container */}
      <div className={`sidebar no-print ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="logo">
            <Icon src={bpdaccLogo} alt="BPDACC Logo" size={40} className="logo-icon" />
            <span className="logo-text">BPDACC Inv</span>
          </h1>
        </div>
        
        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on nav click
            >
              <Icon src={item.icon} alt={item.label} size={20} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>
        
        {/* Sidebar Footer - User Info & Role Switcher */}
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">{currentUser?.name?.charAt(0) || 'U'}</div>
            <div>
              <div className="user-name">{currentUser?.name || 'User'}</div>
              <div className="user-role">{isAdmin ? 'Super Admin' : 'Office User'}</div>
            </div>
          </div>
          <button 
            onClick={logout}
            style={{
              width: '100%',
              marginTop: '15px',
              padding: '8px',
              background: '#fee2e2',
              color: '#dc2626',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'background 0.2s'
            }}
          >
            Logout
          </button>
        </div>
        <style>{`
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
            color: #000000ff;
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
