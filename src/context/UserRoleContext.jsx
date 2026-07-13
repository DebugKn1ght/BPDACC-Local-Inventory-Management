import React, { createContext, useContext, useState, useEffect } from 'react'

/**
 * Context for managing user role, office, and permissions throughout the application
 */
const UserRoleContext = createContext()

/**
 * UserRoleProvider - Wraps the entire app to provide user management
 * Persists user info in localStorage so it survives page refreshes
 * 
 * @param {React.ReactNode} children - Child components that will have access to the context
 */
export const UserRoleProvider = ({ children }) => {
  // Initialize user info from localStorage
  const [userRole, setUserRole] = useState(() => {
    const savedRole = localStorage.getItem('bpdacc-user-role')
    return savedRole || 'Admin'
  })
  const [userOffice, setUserOffice] = useState(() => {
    const savedOffice = localStorage.getItem('bpdacc-user-office')
    return savedOffice || 'All'
  })
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('bpdacc-current-user')
    return savedUser ? JSON.parse(savedUser) : { id: 1, name: 'John Doe', email: 'john@clinic.com', role: 'Admin', office: 'All' }
  })

  // Save to localStorage whenever values change
  useEffect(() => {
    localStorage.setItem('bpdacc-user-role', userRole)
  }, [userRole])
  useEffect(() => {
    localStorage.setItem('bpdacc-user-office', userOffice)
  }, [userOffice])
  useEffect(() => {
    localStorage.setItem('bpdacc-current-user', JSON.stringify(currentUser))
  }, [currentUser])

  // Context value that will be provided to children
  const value = {
    userRole,
    setUserRole,
    userOffice,
    setUserOffice,
    currentUser,
    setCurrentUser,
    isAdmin: userRole === 'Admin'
  }

  return (
    <UserRoleContext.Provider value={value}>
      {children}
    </UserRoleContext.Provider>
  )
}

/**
 * Custom hook to access user role context
 * Must be used within a UserRoleProvider
 * 
 * @returns {Object} Context object with user info
 */
export const useUserRole = () => {
  const context = useContext(UserRoleContext)
  if (!context) {
    throw new Error('useUserRole must be used within a UserRoleProvider')
  }
  return context
}
