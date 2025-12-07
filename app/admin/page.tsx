"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ThemeToggle } from "@/components/theme-toggle"
import { PRODUCT_CATEGORIES } from "@/lib/data"
import { AdminGuard } from "@/components/admin-guard"

export default function AdminPage() {
  const [activeChatTab, setActiveChatTab] = useState("group")
  const [showTaskModal, setShowTaskModal] = useState(false)
  const [showRequestModal, setShowRequestModal] = useState(false)

  return (
    <AdminGuard>
      <div className="min-h-screen font-sans" style={{ background: "var(--background-color)" }}>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/admin.css" />
        <style jsx global>{`
          @media (max-width: 768px) {
            .container, .admin-container {
              width: 100% !important;
              max-width: 100% !important;
              padding-left: 10px !important;
              padding-right: 10px !important;
            }
            .admin-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            .admin-section {
              width: 100% !important;
            }
            .stats-container {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 10px !important;
            }
          }
        `}</style>
        <Header />
        <ThemeToggle />

        <main className="container mx-auto px-4 py-8 pt-32">
          {/* Admin Header */}
          <div className="admin-header">
            <h1 className="admin-title">🔧 لوحة الإدارة</h1>
            <p className="admin-subtitle">إدارة شاملة لجميع اقسام الارشيف</p>
          </div>

          {/* Admin Stats */}
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-label">الموردين</div>
              <div className="stat-number" id="suppliersCount">
                0
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">المنتجات</div>
              <div className="stat-number" id="productsCount">
                0
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">الاعضاء</div>
              <div className="stat-number" id="membersCount">
                0
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">العملاء</div>
              <div className="stat-number" id="clientsCount">
                0
              </div>
            </div>
          </div>

          {/* Admin Grid */}
          <div className="admin-grid">
            {/* Suppliers Management */}
            <div className="admin-section">
              <div className="Suppliers-section-header">
                <h3>
                  <i className="fas fa-users"></i>ادارة الموردين
                </h3>
                <button onClick={() => (window.location.href = "/add-supplier")} className="add-new-Supplier-btn ">
                  <i className="fas fa-user-plus"></i> اضافة مورد جديد
                </button>
              </div>
              <ul className="admin-list" id="suppliersList">
                {/* Static content for demo */}
                <li className="text-center text-muted">لا يوجد موردين حالياً</li>
              </ul>
            </div>

            {/* Users Management */}
            <div className="admin-section">
              <div className="users-section-header">
                <h3>
                  <i className="fas fa-users"></i> ادارة الفريق
                </h3>
                <button onClick={() => (window.location.href = "/add-new-user")} className="add-new-user-btn ">
                  <i className="fas fa-user-plus"></i> اضافة عضو جديد
                </button>
              </div>
              <ul className="users-list" id="usersList">
                {/* Static content for demo */}
                <li className="text-center text-muted">لا يوجد أعضاء حالياً</li>
              </ul>

              {/* Membership Requests */}
              <div className="users-section-header mt22 fs16">
                <h3>
                  <i className="fa-solid fa-user-check"></i> طلبات العضوية
                </h3>
              </div>
              <ul className="users-list text3" id="membershipRequestsList">
                {/* Dynamic content */}
              </ul>
              <small id="membershipRequestsNote" className="block placeholder mt6">
                في حال عدم وجود جدول "membership_requests" سيتم عرض الأعضاء ذوي الحالة "pending".
              </small>
            </div>

            {/* Products Management */}
            <div className="admin-section">
              <div className="Products-section-header">
                <h3>📦 إدارة المنتجات</h3>
                <button onClick={() => (window.location.href = "/add-product")} className="add-new-Product-btn ">
                  <i className="fa-solid fa-cart-plus"></i> اضافة منتج جديد
                </button>
              </div>
              <div className="filter-section">
                <select className="filter-select" id="categoryFilter">
                  <option value="">جميع الفئات</option>
                  {Object.entries(PRODUCT_CATEGORIES).map(([category, subCategories]) => (
                    <optgroup key={category} label={category}>
                      {subCategories.map((subCat) => (
                        <option key={subCat} value={subCat}>
                          {subCat}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <select className="filter-select" id="supplierFilter">
                  <option value="">جميع الموردين</option>
                </select>
                <select className="filter-select" id="statusFilter">
                  <option value="">جميع المستخدمين</option>
                </select>
              </div>
              <div className="products-list" id="productsList">
                {/* Static content for demo */}
                <div className="text-center text-muted p-4">لا يوجد منتجات حالياً</div>
              </div>
            </div>

            {/* Tasks Follow-up */}
            <div className="admin-section">
              <h3>
                <i className="fa-solid fa-bell"></i> ادارة المهام و الطلبات
              </h3>
              <div className="admin-section-header" id="SingleTasksList">
                <h4 className="admin-section-title"> المهام الفردية</h4>
                <button className="add-new-tasx-btn" id="AddNewTasx" onClick={() => setShowTaskModal(true)}>
                  <i className="fas fa-sign"></i> مهمة فردية جديدة
                </button>
              </div>
              {/* Static content for demo */}
              <div className="text-center text-muted p-2">لا يوجد مهام حالياً</div>

              <div className="admin-section-header" id="TeamRequests">
                <h4 className="admin-section-title"> لوحة الطلبات</h4>
                <button className="add-new-tasx-btn" id="AddNewRequest" onClick={() => setShowRequestModal(true)}>
                  <i className="fas fa-sign"></i> طلب جماعي جديد
                </button>
              </div>
              {/* Static content for demo */}
              <div className="text-center text-muted p-2">لا يوجد طلبات حالياً</div>
            </div>

            {/* Chat Management */}
            <div className="admin-section" id="chatManagementSection">
              <div className="chat-mgmt-header flex sb ai-center gap10 wrap">
                <h3 className="m0 flex ai-center gap8">
                  <i className="fas fa-comments"></i> إدارة الدردشات
                </h3>
                <div className="chat-mgmt-actions flex gap8 ai-center">
                  <input
                    type="text"
                    id="chatMgmtSearch"
                    className="settings-input minw220"
                    placeholder="ابحث في المحادثات"
                  />
                  <button id="newDirectMsgBtn" className="admin-btn info btn-xsmall">
                    <i className="fas fa-paper-plane"></i> رسالة خاصة جديدة
                  </button>
                </div>
              </div>
              <div className="chat-mgmt-tabs flex gap6 my10">
                <button
                  className={`admin-btn btn-xsmall ${activeChatTab === "group" ? "active" : ""}`}
                  onClick={() => setActiveChatTab("group")}
                >
                  دردشات الفريق
                </button>
                <button
                  className={`admin-btn btn-xsmall ${activeChatTab === "direct" ? "active" : ""}`}
                  onClick={() => setActiveChatTab("direct")}
                >
                  الرسائل الخاصة
                </button>
                <button
                  className={`admin-btn btn-xsmall ${activeChatTab === "ai" ? "active" : ""}`}
                  onClick={() => setActiveChatTab("ai")}
                >
                  محادثات الذكاء الاصطناعي
                </button>
              </div>
              <div className="chat-mgmt-content">
                {activeChatTab === "group" && (
                  <div id="chatMgmtGroup" className="chat-mgmt-pane">
                    <ul id="chatMgmtGroupList" className="admin-list">
                      {/* Group chats */}
                    </ul>
                  </div>
                )}
                {activeChatTab === "direct" && (
                  <div id="chatMgmtDirect" className="chat-mgmt-pane">
                    <ul id="chatMgmtDirectList" className="admin-list">
                      {/* Direct chats */}
                    </ul>
                  </div>
                )}
                {activeChatTab === "ai" && (
                  <div id="chatMgmtAi" className="chat-mgmt-pane">
                    <ul id="chatMgmtAiList" className="admin-list">
                      {/* AI chats */}
                    </ul>
                  </div>
                )}
              </div>
              <small className="placeholder block mt6">يمكنك النقر على محادثة لفتحها أو أرشفتها لاحقاً.</small>
            </div>

            {/* Backup Management */}
            <div className="admin-section">
              <h3>💾 إدارة النسخ الاحتياطية</h3>
              <div className="backup-actions">
                <button className="admin-btn success btn-full">
                  <i className="fas fa-download"></i> إنشاء نسخة احتياطية
                </button>
                <button className="admin-btn info btn-full">
                  <i className="fas fa-cloud-download-alt"></i> تحميل آخر نسخة
                </button>
                <label htmlFor="backupFile" className="file-label">
                  <button type="button" className="admin-btn warning btn-full">
                    <i className="fas fa-upload"></i> استعادة من ملف
                  </button>
                  <input type="file" id="backupFile" className="file-input" accept=".json,.sql" />
                </label>
                <button className="admin-btn info btn-full">
                  <i className="fas fa-file-csv"></i> تصدير CSV (جداول)
                </button>
              </div>
              <div className="backup-info">
                <p id="lastBackupInfo">
                  <i className="fas fa-info-circle"></i> لا توجد نسخ احتياطية بعد
                </p>
              </div>
            </div>

            {/* Settings */}
            <div className="admin-section">
              <h3>
                <i className="fas fa-cog"></i> إعدادات النظام
              </h3>
              <form className="settings-form">
                <div className="form-group">
                  <label>اسم الموقع</label>
                  <input type="text" defaultValue="أرشيف الثقة التجارية" className="settings-input" />
                </div>
                <div className="form-group">
                  <label>وصف الموقع</label>
                  <textarea
                    defaultValue="منصة شاملة لإدارة المنتجات والموردين"
                    className="settings-textarea"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>البريد الإلكتروني للتواصل</label>
                  <input type="email" defaultValue="admin@trustarchive.com" className="settings-input" />
                </div>
                <button type="button" className="admin-btn success">
                  <i className="fas fa-save"></i> حفظ الإعدادات
                </button>
              </form>
            </div>
          </div>
        </main>

        {/* Task Modal */}
        {showTaskModal && (
          <div className="admin-modal" onClick={() => setShowTaskModal(false)}>
            <div className="admin-modal-content" onClick={(e) => e.stopPropagation()}>
              <h3 className="admin-modal-title">
                <i className="fas fa-tasks"></i> إضافة مهمة فردية جديدة
              </h3>
              <div className="settings-form">
                <div className="form-group">
                  <label>عنوان المهمة</label>
                  <input type="text" className="settings-input" placeholder="أدخل عنوان المهمة" />
                </div>
                <div className="form-group">
                  <label>تعيين إلى</label>
                  <select className="settings-input">
                    <option value="">اختر عضو...</option>
                    <option value="user1">محمد</option>
                    <option value="user2">سارة</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>تاريخ التسليم</label>
                  <input type="date" className="settings-input" />
                </div>
                <div className="form-group">
                  <label>التفاصيل</label>
                  <textarea className="settings-textarea" placeholder="تفاصيل المهمة..."></textarea>
                </div>
                <div className="admin-modal-actions">
                  <button className="admin-btn success" onClick={() => setShowTaskModal(false)}>
                    حفظ
                  </button>
                  <button className="admin-btn danger" onClick={() => setShowTaskModal(false)}>
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Request Modal */}
        {showRequestModal && (
          <div className="admin-modal" onClick={() => setShowRequestModal(false)}>
            <div className="admin-modal-content" onClick={(e) => e.stopPropagation()}>
              <h3 className="admin-modal-title">
                <i className="fas fa-bullhorn"></i> إضافة طلب جماعي جديد
              </h3>
              <div className="settings-form">
                <div className="form-group">
                  <label>عنوان الطلب</label>
                  <input type="text" className="settings-input" placeholder="أدخل عنوان الطلب" />
                </div>
                <div className="form-group">
                  <label>الأولوية</label>
                  <select className="settings-input">
                    <option value="normal">عادية</option>
                    <option value="high">عالية</option>
                    <option value="urgent">عاجلة</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>التفاصيل</label>
                  <textarea className="settings-textarea" placeholder="تفاصيل الطلب..."></textarea>
                </div>
                <div className="admin-modal-actions">
                  <button className="admin-btn success" onClick={() => setShowRequestModal(false)}>
                    نشر الطلب
                  </button>
                  <button className="admin-btn danger" onClick={() => setShowRequestModal(false)}>
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminGuard>
  )
}
