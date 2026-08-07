import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabaseDb } from '../utils/apiDb'

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
  // The current user is restored from localStorage on page refresh.
  // This makes the app feel persistent, but it also means auth state can be affected by stale browser storage.
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

  // Heartbeat and online status tracking for non-admin users.
  // These requests help the system display whether a user is active.
  useEffect(() => {
    if (!currentUser || currentUser.isAdmin) return

    // Immediately send a heartbeat on mount / log in
    supabaseDb.heartbeat(currentUser.id).catch(() => {})

    // Send heartbeat every 20 seconds to maintain 'Online' status
    const intervalId = setInterval(() => {
      supabaseDb.heartbeat(currentUser.id).catch(() => {})
    }, 20000)

    // Handle tab / browser window close
    const handleUnload = () => {
      try {
        const data = JSON.stringify({ method: 'updateUserStatus', args: [currentUser.id, 'Offline'] })
        const blob = new Blob([data], { type: 'application/json' })
        navigator.sendBeacon('/api/rpc', blob)
      } catch (e) {
        // Fallback
      }
    }

    window.addEventListener('beforeunload', handleUnload)

    return () => {
      clearInterval(intervalId)
      window.removeEventListener('beforeunload', handleUnload)
    }
  }, [currentUser])

  const login = (userData) => {
    setCurrentUser(userData)
    if (!userData.isAdmin) {
      supabaseDb.updateUserStatus(userData.id, 'Online').catch(() => {})
    }
  }

  const logout = () => {
    if (currentUser && !currentUser.isAdmin) {
      supabaseDb.updateUserStatus(currentUser.id, 'Offline').catch(() => {})
    }
    setCurrentUser(null)
  }

  // Context value that will be provided to children
  const value = {
    currentUser,
    userOffice: currentUser?.office || '',
    userOfficeId: currentUser?.officeId,
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
