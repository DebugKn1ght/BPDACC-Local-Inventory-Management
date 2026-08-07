import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { UserRoleProvider, useUserRole } from './context/UserRoleContext'
import { UIProvider } from './context/UIContext'
import Sidebar from './components/Sidebar'
import Dashboard from './views/Dashboard'
import Inventory from './views/Inventory'
import Requisition from './views/Requisition'
import RequisitionRequests from './views/RequisitionRequests'
import Reports from './views/Reports'
import Users from './views/Users'
import Login from './views/Login'
import './App.css'

/**
 * Main application component for BPDACC Inventory Management System.
 * This is the central entry point for routing and page composition.
 * When troubleshooting UI issues, start here to confirm which screen is being rendered.
 */
const ProtectedRoute = ({ children }) => {
  // Guard private pages so unauthenticated users are redirected to the login screen.
  const { currentUser } = useUserRole()
  if (!currentUser) {
    return <Navigate to="/login" replace />
  }
  return children
}

function App() {
  return (
    <UserRoleProvider>
      <UIProvider>
        <Router>
          <div className="app">
          <Routes>
            {/* Public route: login screen does not require an authenticated session. */}
            <Route path="/login" element={<Login />} />
            {/* Catch-all route for all authenticated screens. */}
            <Route path="*" element={
              <ProtectedRoute>
                <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
                  <Sidebar />
                  <main className="main-content">
                    {/* These child routes map the main inventory modules. */}
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/inventory" element={<Inventory />} />
                      <Route path="/requisition" element={<Requisition />} />
                      <Route path="/requisition-requests" element={<RequisitionRequests />} />
                      <Route path="/reports" element={<Reports />} />
                      <Route path="/users" element={<Users />} />
                    </Routes>
                  </main>
                </div>
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
      </UIProvider>
    </UserRoleProvider>
  )
}

export default App
