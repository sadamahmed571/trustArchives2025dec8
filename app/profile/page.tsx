"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("products")
  const [showNoteModal, setShowNoteModal] = useState(false)
  const [showLinkModal, setShowLinkModal] = useState(false)

  return (
    <>
      <link rel="stylesheet" href="/css/profile.css" />
      <link rel="stylesheet" href="/css/profile-res.css" />

      <ThemeToggle />
      <Header />

      <section className="profile-container">
        {/* Profile Header Card */}
        <div className="profile-container-card">
          <div className="profile-info-main">
            <div className="profile-stats-grid">
              <div className="stat-item1">
                <div className="profile-avatar-container relative w-[100px] h-[100px] mx-auto mb-4">
                  <Image
                    src="/img/tg.png"
                    alt="الصورة الشخصية"
                    fill
                    className="profile-avatar object-cover rounded-full"
                  />
                </div>
                <div id="profileOverlayName" className="profile-overlay-name mt8 fw600 text">
                  @username
                </div>
                <div className="profile-user-details">
                  <h2>
                    <i className="fa-solid fa-user"></i> ..
                  </h2>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-label">
                  <i className="fa-solid fa-cart-plus"></i> منتجاتي
                </span>
                <span className="stat-value">..</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">
                  <i className="fas fa-tasks"></i> مهامي
                </span>
                <span className="stat-value">..</span>
              </div>
              <div className="stat-item">
                <span className="stat-label1">
                  <i className="fa-solid fa-star"></i> نقاطي
                </span>
                <span className="stat-value">..</span>
              </div>
            </div>
          </div>

          {/* Row Navigation */}
          <div className="row-nav">
            <button
              className={`nav-btn ${activeSection === "products" ? "active" : ""}`}
              onClick={() => setActiveSection("products")}
            >
              <i className="fas fa-box"></i>
              منتجاتي
            </button>
            <button
              className={`nav-btn ${activeSection === "suppliers" ? "active" : ""}`}
              onClick={() => setActiveSection("suppliers")}
            >
              <i className="fas fa-truck"></i>
              الموردين
            </button>
            <button
              className={`nav-btn ${activeSection === "tasks" ? "active" : ""}`}
              onClick={() => setActiveSection("tasks")}
            >
              <i className="fas fa-tasks"></i>
              مهامي
            </button>
            <button
              className={`nav-btn ${activeSection === "notes" ? "active" : ""}`}
              onClick={() => setActiveSection("notes")}
            >
              <i className="fa-solid fa-book"></i>
              ملاحظاتي
            </button>
            <button
              className={`nav-btn ${activeSection === "account" ? "active" : ""}`}
              onClick={() => setActiveSection("account")}
            >
              <i className="fas fa-user-cog"></i>
              حسابي
            </button>
          </div>

          {/* Section Container */}
          <div className="section-container">
            {/* Products Section */}
            <div id="products-section" className={`section ${activeSection === "products" ? "active" : "hidden"}`}>
              <div className="filters-container">
                <div className="filters-grid">
                  <div className="filter-group">
                    <input type="text" id="searchProducts" placeholder="ابحث عن منتج..." />
                  </div>
                  <div className="filter-group">
                    <select id="categoryFilter">
                      <option value="">جميع الفئات</option>
                      <optgroup label="البريكاست">
                        <option value="بريكاست إنشائي">بريكاست إنشائي</option>
                        <option value="بريكاست للبنية التحتية">بريكاست للبنية التحتية</option>
                        <option value="بريكاست معماري/ديكوري">بريكاست معماري/ديكوري</option>
                      </optgroup>
                      {/* Add other options */}
                    </select>
                  </div>
                  <div className="filter-group">
                    <button className="sup-clear-filters-btn" onClick={() => (window.location.href = "/add-product")}>
                      <i className="fas fa-plus"></i>
                      إضافة منتج
                    </button>
                  </div>
                </div>
              </div>

              <div className="products-grid compact-grid" id="productsGrid">
                {/* Placeholder for products */}
                <div
                  className="no-results-container"
                  style={{
                    gridColumn: "1 / -1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "400px", // Fixed height
                    width: "100%",
                    backgroundColor: "var(--card-bg)",
                    borderRadius: "var(--radius)",
                    border: "1px dashed var(--border-color)",
                  }}
                >
                  <div className="no-results-icon" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                    🔍
                  </div>
                  <h3 className="no-results-title" style={{ fontSize: "1.2rem", color: "var(--text-muted)" }}>
                    لا توجد منتجات لعرضها حالياً
                  </h3>
                </div>
              </div>
            </div>

            {/* Suppliers Section */}
            <div id="suppliers-section" className={`section ${activeSection === "suppliers" ? "active" : "hidden"}`}>
              <div className="sup-filters-container">
                <div className="sup-filters-grid">
                  <div className="sup-filter-group">
                    <input
                      className="sup-sreach"
                      type="text"
                      id="searchInput"
                      placeholder="&#128269;   ابحث عن مورد "
                    />
                  </div>
                  <div className="sup-filter-group">
                    <button className="sup-clear-filters-btn" onClick={() => (window.location.href = "/add-supplier")}>
                      <i className="fas fa-plus"></i> إضافة مورد
                    </button>
                  </div>
                </div>
              </div>
              <div id="suppliersGrid" className="suppliers-grid">
                {/* Placeholder for suppliers */}
                <div
                  className="no-results-container"
                  style={{
                    gridColumn: "1 / -1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "400px", // Fixed height
                    width: "100%",
                    backgroundColor: "var(--card-bg)",
                    borderRadius: "var(--radius)",
                    border: "1px dashed var(--border-color)",
                  }}
                >
                  <div className="no-results-icon" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                    🚛
                  </div>
                  <h3 className="no-results-title" style={{ fontSize: "1.2rem", color: "var(--text-muted)" }}>
                    لا يوجد موردين لعرضهم حالياً
                  </h3>
                </div>
              </div>
            </div>

            {/* Tasks Section */}
            <div id="tasks-section" className={`section ${activeSection === "tasks" ? "active" : "hidden"}`}>
              <div className="tasks-container">
                <div className="task-widget">
                  <div className="widget-header">
                    <h3 className="widget-title">
                      <i className="fa-solid fa-list"></i>
                      المهام الواردة من الإدارة
                    </h3>
                  </div>
                  <div className="admin-tasks-list" id="adminTasksList">
                    {/* Tasks will be loaded here */}
                    <div className="admin-task-item" data-priority="high">
                      <div className="task-info">
                        <h4 className="task-name">
                          <i className="fa-solid fa-clipboard-list"></i> مراجعة المنتجات الجديدة
                        </h4>
                        <div className="task-deadline">
                          <i className="fa-regular fa-clock"></i> موعد التسليم: 2024-01-15
                        </div>
                        <div className="task-priority high">
                          <i className="fa-solid fa-arrow-up-wide-short"></i> عالية
                        </div>
                      </div>
                      <div className="task-actions">
                        <button className="actions-task-btn start">
                          تم البدء <i className="fa-solid fa-flag-checkered"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="task-widget">
                  <div className="widget-header">
                    <h3 className="widget-title">
                      <i className="fa-solid fa-list-check"></i>
                      قائمة المهام الشخصية
                    </h3>
                  </div>
                  <div className="todo-input-group">
                    <input type="text" className="todo-input" placeholder="إضافة مهمة جديدة..." />
                    <button className="add-todo-btn">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <ul className="todo-items" id="todoList">
                    <li className="todo-item done">
                      <span>مراجعة المنتجات الجديدة</span>
                      <button className="remove-todo-btn">
                        <i className="fa-solid fa-check"></i>
                      </button>
                    </li>
                    <li className="todo-item">
                      <span>تحديث بيانات الموردين</span>
                      <button className="remove-todo-btn">
                        <i className="fa-solid fa-check"></i>
                      </button>
                    </li>
                    <li className="todo-item">
                      <span>الرد على استفسارات العملاء</span>
                      <button className="remove-todo-btn">
                        <i className="fa-solid fa-check"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div id="notes-section" className={`section ${activeSection === "notes" ? "active" : "hidden"}`}>
              <div className="notes-links-container">
                <div className="notes-widget">
                  <div className="notes-header">
                    <h3 className="notes-widget-title">
                      <i className="fa-solid fa-marker"></i>
                      ملاحظاتي
                    </h3>
                    <button className="add-note-btn" onClick={() => setShowNoteModal(true)}>
                      ملاحظة جديدة
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="notes-grid" id="notesGrid">
                    {/* Notes will be loaded here */}
                  </div>
                </div>

                <div className="notes-widget">
                  <div className="notes-header">
                    <h3 className="notes-widget-title">
                      <i className="fas fa-link"></i>
                      الروابط المؤرشفة
                    </h3>
                    <button className="add-link-btn" onClick={() => setShowLinkModal(true)}>
                      إضافة رابط
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="links-list" id="linksList">
                    <div className="link-item" data-category="تعليمي">
                      <div className="link-info">
                        <div className="link-header">
                          <h4 className="link-title">دليل التجارة الإلكترونية</h4>
                        </div>
                        <a href="https://example.com/guide" className="link-url" target="_blank" rel="noreferrer">
                          <i className="fas fa-external-link-alt"></i>
                          https://example.com/guide
                        </a>
                        <div className="link-description">
                          دليل شامل لبدء التجارة الإلكترونية وإدارة المتاجر الرقمية
                        </div>
                      </div>
                      <div className="link-actions">
                        <button className="copy-link-btn">
                          <i className="fas fa-copy"></i> نسخ
                        </button>
                        <button className="send-link-btn">
                          <i className="fab fa-whatsapp"></i> ارسال
                        </button>
                        <button className="delete-link-btn">
                          <i className="fas fa-trash"></i> حذف
                        </button>
                      </div>
                    </div>
                    {/* Add more link items as needed */}
                  </div>
                </div>
              </div>
            </div>

            {/* Account Section */}
            <div id="account-section" className={`section ${activeSection === "account" ? "active" : "hidden"}`}>
              <form className="account-form">
                <div className="avatar-upload-section">
                  <div className="relative w-[100px] h-[100px] mx-auto mb-4">
                    <Image
                      src="/img/tg.png"
                      alt="الصورة الحالية"
                      fill
                      className="current-avatar object-cover rounded-full"
                    />
                  </div>
                  <button type="button" className="upload-avatar-btn">
                    <i className="fas fa-camera"></i>
                    تغيير الصورة الشخصية
                  </button>
                </div>

                <h3 className="section-subtitle">
                  <i className="fas fa-user-circle"></i>
                  بيانات الحساب الأساسية
                </h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="username">
                      <i className="fas fa-user"></i> اسم المستخدم
                    </label>
                    <input type="text" id="username" defaultValue="اسم المستخدم" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i> البريد الإلكتروني
                    </label>
                    <input type="email" id="email" defaultValue="user@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="firstName">
                      <i className="fas fa-id-card"></i> الاسم الأول
                    </label>
                    <input type="text" id="firstName" defaultValue="أحمد" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">
                      <i className="fas fa-id-card"></i> اسم العائلة
                    </label>
                    <input type="text" id="lastName" defaultValue="محمد" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="fas fa-phone"></i> رقم الهاتف
                    </label>
                    <input type="tel" id="phone" defaultValue="+967 123 456 789" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="whatsapp">
                      <i className="fab fa-whatsapp"></i> رقم الواتساب
                    </label>
                    <input type="tel" id="whatsapp" defaultValue="+967 123 456 789" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="birthDate">
                      <i className="fas fa-calendar-alt"></i> تاريخ الميلاد
                    </label>
                    <input type="date" id="birthDate" defaultValue="1990-01-01" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">
                      <i className="fas fa-venus-mars"></i> الجنس
                    </label>
                    <select id="gender">
                      <option value="male">ذكر</option>
                      <option value="female">أنثى</option>
                      <option value="other">آخر</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="address">
                      <i className="fas fa-map-marker-alt"></i> العنوان الكامل
                    </label>
                    <input type="text" id="address" defaultValue="شارع الستين، صنعاء، اليمن" />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="bio">
                      <i className="fas fa-pencil-alt"></i> نبذة شخصية
                    </label>
                    <textarea id="bio" rows={3} placeholder="اكتب نبذة مختصرة عن نفسك..."></textarea>
                  </div>
                </div>

                <div className="password-section">
                  <h3 className="section-subtitle">
                    <i className="fas fa-lock"></i>
                    تغيير كلمة المرور
                  </h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="currentPassword">
                        <i className="fas fa-key"></i> كلمة المرور الحالية
                      </label>
                      <div className="password-input-group">
                        <input type="password" id="currentPassword" placeholder="أدخل كلمة المرور الحالية" />
                        <button type="button" className="toggle-password">
                          <i className="fas fa-eye"></i>
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="newPassword">
                        <i className="fas fa-unlock-alt"></i> كلمة المرور الجديدة
                      </label>
                      <div className="password-input-group">
                        <input type="password" id="newPassword" placeholder="أدخل كلمة المرور الجديدة" />
                        <button type="button" className="toggle-password">
                          <i className="fas fa-eye"></i>
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">
                        <i className="fas fa-check-circle"></i> تأكيد كلمة المرور
                      </label>
                      <div className="password-input-group">
                        <input type="password" id="confirmPassword" placeholder="أعد إدخال كلمة المرور الجديدة" />
                        <button type="button" className="toggle-password">
                          <i className="fas fa-eye"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="password-strength" id="passwordStrength">
                    <div className="strength-bar">
                      <div className="strength-fill"></div>
                    </div>
                    <div className="strength-text">
                      <i className="fas fa-shield-alt"></i> قوة كلمة المرور: ضعيفة
                    </div>
                  </div>
                </div>

                <button type="submit" className="save-changes-btn">
                  <i className="fas fa-save"></i>
                  حفظ التغييرات
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Note Modal */}
      {showNoteModal && (
        <div className="profile-modal-overlay active" style={{ display: "flex" }}>
          <div className="profile-modal-content">
            <h3>إضافة ملاحظة جديدة</h3>
            <div className="form-group">
              <label>عنوان الملاحظة</label>
              <input type="text" placeholder="أدخل عنوان الملاحظة" className="modal-input" />
            </div>
            <div className="form-group">
              <label>المحتوى</label>
              <textarea placeholder="أدخل محتوى الملاحظة" rows={4} className="modal-input"></textarea>
            </div>
            <div className="form-group">
              <label>الفئة</label>
              <select className="modal-input">
                <option value="أعمال">أعمال</option>
                <option value="اجتماعات">اجتماعات</option>
                <option value="تسويق">تسويق</option>
                <option value="شخصي">شخصي</option>
                <option value="أفكار">أفكار</option>
                <option value="مالية">مالية</option>
              </select>
            </div>
            <div className="admin-modal-actions">
              <button className="cancel-btn" onClick={() => setShowNoteModal(false)}>
                إلغاء
              </button>
              <button className="save-btn" onClick={() => setShowNoteModal(false)}>
                حفظ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Link Modal */}
      {showLinkModal && (
        <div className="profile-modal-overlay active" style={{ display: "flex" }}>
          <div className="profile-modal-content">
            <h3>إضافة رابط جديد</h3>
            <div className="form-group">
              <label>اسم الرابط</label>
              <input type="text" placeholder="أدخل اسم الرابط" className="modal-input" />
            </div>
            <div className="form-group">
              <label>الرابط (URL)</label>
              <input type="url" placeholder="https://example.com" className="modal-input" />
            </div>
            <div className="form-group">
              <label>الوصف (اختياري)</label>
              <textarea placeholder="وصف مختصر للرابط" rows={2} className="modal-input"></textarea>
            </div>
            <div className="form-group">
              <label>الفئة</label>
              <select className="modal-input">
                <option value="أعمال">أعمال</option>
                <option value="تعليمي">تعليمي</option>
                <option value="تقني">تقني</option>
                <option value="تسويق">تسويق</option>
                <option value="مالي">مالي</option>
                <option value="أخرى">أخرى</option>
              </select>
            </div>
            <div className="admin-modal-actions">
              <button className="cancel-btn" onClick={() => setShowLinkModal(false)}>
                إلغاء
              </button>
              <button className="save-btn" onClick={() => setShowLinkModal(false)}>
                حفظ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
