"use client"

import { Header } from "@/components/header"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { useState } from "react"
import { PRODUCT_CATEGORIES } from "@/lib/data"

export default function AddOperationalAccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isIndependent, setIsIndependent] = useState(false)

  return (
    <>
      <link rel="stylesheet" href="/css/add-product.css" />
      <ThemeToggle />
      <Header />

      <div className="product-container">
        <div className="product-card">
          <div className="product-header">
            <h1 className="product-title">
              <i className="fas fa-tools"></i> إضافة مستلزمات التشغيل والمواد المكملة
            </h1>
          </div>

          <div className="product-body">
            <form id="operationalAccessoriesForm" className="product-form">
              <div className="product-section" id="section-1">
                <h2 className="product-section-title">
                  <i className="fas fa-link"></i> ١. معلومات الربط والتصنيف
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group full-width" style={{ gridColumn: "1 / -1", marginBottom: "1rem" }}>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isIndependent}
                        onChange={(e) => setIsIndependent(e.target.checked)}
                        className="w-5 h-5"
                      />
                      <span className="text-lg font-medium">هذا المستلزم مستقل (غير مرتبط بمنتج محدد)</span>
                    </label>
                  </div>

                  {!isIndependent && (
                    <div className="product-form-group">
                      <label className="product-form-label" htmlFor="linkedProduct">
                        <i className="fas fa-cube"></i> المنتج الأساسي المُرتبط *
                      </label>
                      <select id="linkedProduct" className="product-form-input" required={!isIndependent}>
                        <option value="">اختر المنتج الأساسي</option>
                        {/* Dynamic options */}
                      </select>
                    </div>
                  )}

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="mainCategory">
                      <i className="fas fa-folder"></i> الفئة الرئيسية
                    </label>
                    <select
                      id="mainCategory"
                      className="product-form-input"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">اختر الفئة الرئيسية</option>
                      {Object.keys(PRODUCT_CATEGORIES).map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="accessoryType">
                      <i className="fas fa-folder-open"></i> الفئة الفرعية
                    </label>
                    <select id="accessoryType" className="product-form-input" disabled={!selectedCategory}>
                      <option value="">اختر الفئة الفرعية</option>
                      {selectedCategory &&
                        PRODUCT_CATEGORIES[selectedCategory as keyof typeof PRODUCT_CATEGORIES].map((subCat) => (
                          <option key={subCat} value={subCat}>
                            {subCat}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="accessoryName">
                      <i className="fas fa-tag"></i> اسم المستلزم/الخامة الفني *
                    </label>
                    <input
                      type="text"
                      id="accessoryName"
                      className="product-form-input"
                      placeholder="أدخل الاسم الفني"
                      required
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="referenceNumber">
                      <i className="fas fa-barcode"></i> رقم المرجع (Part Number/SKU)
                    </label>
                    <input
                      type="text"
                      id="referenceNumber"
                      className="product-form-input"
                      placeholder="أدخل رقم المرجع"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="accessorySerial">
                      <i className="fas fa-barcode"></i> الرقم التسلسلي للنظام (تلقائي)
                    </label>
                    <input
                      type="text"
                      id="accessorySerial"
                      className="product-form-input bg-gray-100 cursor-not-allowed"
                      defaultValue={`ACC-${Math.floor(Math.random() * 1000000)}`}
                      readOnly
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="accessoryBrand">
                      <i className="fas fa-copyright"></i> العلامة التجارية (للخامة أو الملحق)
                    </label>
                    <input
                      type="text"
                      id="accessoryBrand"
                      className="product-form-input"
                      placeholder="أدخل العلامة التجارية"
                    />
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-2">
                <h2 className="product-section-title">
                  <i className="fas fa-money-check-alt"></i> السعر والمخزون
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="suggestedSellingPrice">
                      <i className="fas fa-dollar-sign"></i> سعر البيع
                    </label>
                    <div className="product-price-input">
                      <span className="product-currency">$</span>
                      <input
                        type="number"
                        id="suggestedSellingPrice"
                        className="product-form-input"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="inventoryQuantity">
                      <i className="fas fa-warehouse"></i> الكمية في المخزون
                    </label>
                    <input
                      type="number"
                      id="inventoryQuantity"
                      className="product-form-input"
                      placeholder="مثال: 500"
                      step="1"
                      min="0"
                    />
                  </div>
                </div>

                <div className="product-form-group full-width mt20">
                  <label className="product-form-label" htmlFor="accessoryImages">
                    <i className="fas fa-images"></i> صور للمستلزم/العبوة
                  </label>
                  <input type="file" id="accessoryImages" className="product-file-input" multiple accept="image/*" />
                  <label htmlFor="accessoryImages" className="product-file-label p15">
                    <i className="fas fa-cloud-upload-alt"></i> اضغط لرفع الصور
                  </label>
                </div>
              </div>

              <div className="product-form-actions">
                <button type="submit" className="product-submit-btn" id="save-accessory-btn">
                  <i className="fas fa-save"></i> حفظ المستلزم
                </button>
                <button type="reset" className="product-reset-btn">
                  <i className="fas fa-redo"></i> مسح النموذج
                </button>
                <Link href="/" className="product-cancel-btn">
                  <i className="fas fa-times"></i> إلغاء
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ChatButtons removed */}
    </>
  )
}
