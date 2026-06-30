import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserRoleProvider } from './context/UserRoleContext'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import Requisition from './pages/Requisition'
import RequisitionRequests from './pages/RequisitionRequests'
import Reports from './pages/Reports'
import Users from './pages/Users'
import Settings from './pages/Settings'
import './App.css'

function App() {
  return (
    <UserRoleProvider>
      <Router>
        <div className="app">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/requisition" element={<Requisition />} />
              <Route path="/requisition-requests" element={<RequisitionRequests />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </Router>
    </UserRoleProvider>
  )
}

export default App
