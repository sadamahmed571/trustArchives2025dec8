"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/components/auth-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { isAdmin, user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`} id="header">
      <Link href="/" className="logo-container">
        <img src="/logo.png" alt="أرشيف الثقة التجارية" className="logo-img" style={{ maxHeight: "50px" }} />
        <div className="logo-text">أرشيف الثقة التجارية</div>
      </Link>
      <button className="nav-toggle" aria-label="Toggle navigation menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className="fas fa-align-left"></i>
      </button>
      <nav className={`main-menu ${isMenuOpen ? "active" : ""}`}>
        <Link href="/" className={`menu-item ${pathname === "/" ? "active" : ""}`}>
          <i className="fas fa-home"></i> الرئيسية
        </Link>

        {/* Only show 'Add' menu to admins */}
        {isAdmin && (
          <div className="dropdown menu-item">
            <a href="#" className="dropdown-toggle">
              <i className="fas fa-plus-circle"></i> إضافة <i className="fas fa-caret-down"></i>
            </a>
            <div className="dropdown-menu">
              <Link href="/add-product" className="dropdown-item">
                <i className="fas fa-plus-circle"></i> إضافة منتج
              </Link>
              <Link href="/add-supplier" className="dropdown-item">
                <i className="fas fa-truck-loading "></i> إضافة مورد
              </Link>
              <Link href="/add-customer" className="dropdown-item">
                <i className="fas fa-address-book"></i> اضافة عميل
              </Link>
              <Link href="/add-spare-part" className="dropdown-item">
                {" "}
                <i className="fas fa-cogs"></i> إضافة قطع غيار
              </Link>
              <Link href="/add-operational-accessories" className="dropdown-item">
                {" "}
                <i className="fas fa-tools"></i> إضافة مستلزمات التشغيل
              </Link>
              <Link href="/offers/create" className="dropdown-item">
                <i className="far fa-credit-card"></i> انشاء عرض سعر
              </Link>
              {/* Added User Management link for admins */}
              <Link href="/users/add" className="dropdown-item">
                <i className="fas fa-user-plus"></i> إضافة مستخدم
              </Link>
            </div>
          </div>
        )}

        {/* Only show Dashboard to admins */}
        {isAdmin && (
          <Link href="/admin" className={`menu-item ${pathname === "/admin" ? "active" : ""}`}>
            <i className="fas fa-tachometer-alt"></i> لوحة الإدارة
          </Link>
        )}

        <Link href="/products" className={`menu-item ${pathname === "/products" ? "active" : ""}`}>
          <i className="fa-solid fa-cart-plus"></i> المنتجات
        </Link>
        <Link href="/suppliers" className={`menu-item ${pathname === "/suppliers" ? "active" : ""}`}>
          <i className="fas fa-truck"></i> الموردين
        </Link>
        <Link href="/clients" className={`menu-item ${pathname === "/clients" ? "active" : ""}`}>
          <i className="fas fa-truck"></i> العملاء
        </Link>
        <Link href="/profile" className={`menu-item ${pathname === "/profile" ? "active" : ""}`}>
          <i className="fas fa-user"></i> ملفي الشخصي
        </Link>

        {user ? (
          <button
            onClick={logout}
            className="menu-item logout-btn bg-transparent border-0 cursor-pointer text-inherit font-inherit"
          >
            <i className="fas fa-sign-out-alt"></i> تسجيل الخروج
          </button>
        ) : (
          <Link href="/login" className="menu-item logout-btn">
            <i className="fas fa-sign-in-alt"></i> تسجيل الدخول
          </Link>
        )}
      </nav>
    </header>
  )
}
