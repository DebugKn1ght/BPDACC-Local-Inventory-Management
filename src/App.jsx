import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserRoleProvider } from './context/UserRoleContext'
import Sidebar from './components/Sidebar'
import Dashboard from './views/Dashboard'
import Inventory from './views/Inventory'
import Requisition from './views/Requisition'
import RequisitionRequests from './views/RequisitionRequests'
import Reports from './views/Reports'
import Users from './views/Users'
import Settings from './views/Settings'
import './App.css'

/**
 * Main application component for BPDACC Inventory Management System
 * Sets up:
 * - User role context for permission management
 * - React Router for page navigation
 * - Sidebar navigation + main content area
 */
function App() {
  return (
    <UserRoleProvider> {/* Wraps entire app to provide user role context */}
      <Router> {/* Manages client-side routing */}
        <div className="app">
          <Sidebar /> {/* Navigation sidebar, changes based on user role */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} /> {/* Home page */}
              <Route path="/inventory" element={<Inventory />} /> {/* Inventory & batch management */}
              <Route path="/requisition" element={<Requisition />} /> {/* Requisition form creation */}
              <Route path="/requisition-requests" element={<RequisitionRequests />} /> {/* Admin requisition approvals */}
              <Route path="/reports" element={<Reports />} /> {/* Reports page */}
              <Route path="/users" element={<Users />} /> {/* User management */}
              <Route path="/settings" element={<Settings />} /> {/* System settings */}
            </Routes>
          </main>
        </div>
      </Router>
    </UserRoleProvider>
  )
}

export default App
