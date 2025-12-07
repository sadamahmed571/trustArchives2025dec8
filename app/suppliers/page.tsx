"use client"

import { useState } from "react"
import { getSuppliers } from "@/lib/data"
import { SupplierCard } from "@/components/supplier-card"
import { Header } from "@/components/header"
import { ChatButtons } from "@/components/chat-buttons"
import Link from "next/link"

export default function SuppliersPage() {
  const allSuppliers = getSuppliers()
  const [searchTerm, setSearchTerm] = useState("")
  const [countryFilter, setCountryFilter] = useState("")
  const [industryFilter, setIndustryFilter] = useState("")
  const [viewMode, setViewMode] = useState("grid") // Default to grid as per HTML class 'active' on gridViewBtn

  // Filter suppliers
  const filteredSuppliers = allSuppliers.filter((supplier) => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = countryFilter ? supplier.country === countryFilter : true
    const matchesIndustry = industryFilter ? supplier.industry === industryFilter : true
    return matchesSearch && matchesCountry && matchesIndustry
  })

  return (
    <>
      <link rel="stylesheet" href="/css/suppliers.css" />
      <Header />

      <section id="suppliers" className="section">
        <div className="container">
          <div className="suppliers-header">
            <div className="suppliers-text" style={{ flex: "1", maxWidth: "100%" }}>
              <h1 className="suppliers-title">
                <i className="fa-solid fa-users-rays"></i>دليل الموردين
              </h1>
              <p className="suppliers-subtitle">
                إدارة ومتابعة معلومات الموردين المعتمدين لدينا و بيانات الاتصال لكل مورد
              </p>
              <div className="suppliers-stats-container">
                <div className="suppliers-stat-box">
                  <div className="suppliers-stat-number" id="suppliersCount">
                    {allSuppliers.length}
                  </div>
                  <div className="suppliers-stat-label"> العدد الكلي للموردين </div>
                </div>
                <div className="suppliers-stat-box">
                  <div className="suppliers-stat-number">
                    <i className="fa-solid fa-user-plus"></i>
                  </div>
                  <Link href="/add-supplier" className="suppliers-button">
                    إضافة مورد جديد ➕
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="sup-filters-container">
            <div className="sup-filters-grid">
              <div className="sup-filter-group">
                <input
                  className="sup-sreach"
                  type="text"
                  id="searchInput"
                  placeholder="&#128269;   ابحث عن مورد "
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="sup-filter-group">
                <select
                  id="countryFilter"
                  className="sup-filter-select"
                  onChange={(e) => setCountryFilter(e.target.value)}
                >
                  <option value="">جميع البلدان</option>
                  <option value="الصين">الصين</option>
                  <option value="تركيا">تركيا</option>
                  <option value="الإمارات">الإمارات</option>
                </select>
              </div>
              <div className="sup-filter-group">
                <select
                  id="industryFilter"
                  className="sup-filter-select"
                  onChange={(e) => setIndustryFilter(e.target.value)}
                >
                  <option value="">جميع المجالات</option>
                  <option value="البريكاست">البريكاست</option>
                  <option value="الماكينات">الماكينات</option>
                  <option value="خطوط الإنتاج">خطوط الإنتاج</option>
                  <option value="المعدات الصناعية">المعدات الصناعية</option>
                </select>
              </div>
              <div className="sup-filter-group">
                <button
                  className="sup-clear-filters-btn"
                  onClick={() => {
                    setSearchTerm("")
                    setCountryFilter("")
                    setIndustryFilter("")
                  }}
                >
                  مسح الفلاتر
                </button>
              </div>
            </div>
          </div>

          {/* View Toggle Buttons */}
          <div className="view-toggle">
            <button
              id="gridViewBtn"
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              عرض شبكة
            </button>
            <button
              id="listViewBtn"
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
            >
              عرض قائمة
            </button>
          </div>

          <div id="suppliersGrid" className={`suppliers-grid ${viewMode === "list" ? "list-view" : ""}`}>
            {filteredSuppliers.map((supplier) => (
              <SupplierCard key={supplier.id} supplier={supplier} />
            ))}
            {filteredSuppliers.length === 0 && (
              <div id="noSuppliers" className="no-suppliers-message">
                <div className="no-suppliers-icon">🏭</div>
                <h3 className="no-suppliers-title">لا توجد موردين</h3>
                <p>لم يتم العثور على موردين يطابقون معايير البحث</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ChatButtons />
    </>
  )
}
