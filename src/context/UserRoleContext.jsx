import React, { createContext, useContext, useState, useEffect } from 'react'

const UserRoleContext = createContext()

export const UserRoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(() => {
    const savedRole = localStorage.getItem('bpdacc-user-role')
    return savedRole || 'Admin' // default to Admin
  })

  useEffect(() => {
    localStorage.setItem('bpdacc-user-role', userRole)
  }, [userRole])

  const value = {
    userRole,
    setUserRole,
    isAdmin: userRole === 'Admin'
  }

  return (
    <UserRoleContext.Provider value={value}>
      {children}
    </UserRoleContext.Provider>
  )
}

export const useUserRole = () => {
  const context = useContext(UserRoleContext)
  if (!context) {
    throw new Error('useUserRole must be used within a UserRoleProvider')
  }
  return context
}
