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
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('bpdacc-current-user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  // Save to localStorage whenever values change
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('bpdacc-current-user', JSON.stringify(currentUser))
    } else {
      localStorage.removeItem('bpdacc-current-user')
    }
  }, [currentUser])

  const login = (userData) => {
    setCurrentUser(userData)
  }

  const logout = () => {
    setCurrentUser(null)
  }

  // Context value that will be provided to children
  const value = {
    currentUser,
    userOffice: currentUser?.office || '',
    isAdmin: currentUser?.isAdmin || currentUser?.role === 'Super Admin' || false,
    login,
    logout
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
