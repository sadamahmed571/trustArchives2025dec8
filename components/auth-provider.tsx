"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type UserRole = "admin" | "user" | "guest"

interface User {
  name: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  login: (role: UserRole) => void
  logout: () => void
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  isAdmin: false,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  // Initialize with admin for demonstration purposes, or check localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user_role")
    if (storedUser) {
      setUser({ name: "Current User", role: storedUser as UserRole })
    } else {
      // Default to admin for dev ease, or guest for security.
      // Setting to 'admin' so the user can see the changes immediately.
      setUser({ name: "Admin User", role: "admin" })
    }
  }, [])

  const login = (role: UserRole) => {
    setUser({ name: "User", role })
    localStorage.setItem("user_role", role)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user_role")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin: user?.role === "admin" }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
