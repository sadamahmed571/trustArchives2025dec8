"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [phoneFields, setPhoneFields] = useState<number[]>([0])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demo purposes, just redirect
    alert("مرحباً بك! هذه نسخة عرض فقط - لا يوجد اتصال بقاعدة البيانات")
    router.push("/")
    setIsLoading(false)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    alert("شكراً لتسجيلك! هذه نسخة عرض فقط - لا يوجد اتصال بقاعدة البيانات")
    setIsRegisterModalOpen(false)
  }

  const addPhoneField = () => {
    setPhoneFields([...phoneFields, phoneFields.length])
  }

  const removePhoneField = (index: number) => {
    setPhoneFields(phoneFields.filter((_, i) => i !== index))
  }

  return (
    <>
      <link rel="stylesheet" href="/css/login.css" />

      <ThemeToggle />

      <div className="section" id="home">
        <div className="login-container">
          <div className="login-header">
            <img src="/img/tg-logo.png" className="big-logo" alt="شعار" />
            <h1 className="site-title">أرشيف الثقة التجارية</h1>
            <p className="p1">منصة أرشيفية متخصصة للباعة لحفظ وإدارة بيانات المنتجات و الموردين</p>
          </div>

          <form className="login-form" id="loginForm" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username" className="form-title">
                <i className="fa-solid fa-user-tie"></i> اسم المستخدم
              </label>
              <input type="text" id="username" name="username" placeholder="أدخل اسم المستخدم" required />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-title">
                <i className="fa-solid fa-unlock-keyhole"></i> كلمة المرور
              </label>
              <input type="password" id="password" name="password" placeholder="أدخل كلمة المرور" required />
            </div>
            <div className="remember-me-container">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">
                <i className="fas fa-bookmark"></i>
                تذكرني المرة القادمة
              </label>
            </div>
            <button className="button1" type="submit" disabled={isLoading}>
              <span className={`btn-text ${isLoading ? "hidden" : ""}`}>
                دخول <i className="fa fa-angle-double-left" aria-hidden="true"></i>
              </span>
              <span className={`loading ${isLoading ? "" : "hidden"}`}>جاري التحميل...</span>
            </button>
          </form>

          <button onClick={() => setIsRegisterModalOpen(true)} className="button2">
            <i className="fa fa-user-o" aria-hidden="true"></i> تسجيل كعضو جديد
          </button>
        </div>
      </div>

      {/* Registration Modal */}
      {isRegisterModalOpen && (
        <div id="registerModal" className="modal" style={{ display: "block" }}>
          <div className="modal-content add-modal-content">
            <button className="modal-close" onClick={() => setIsRegisterModalOpen(false)}>
              &times;
            </button>
            <h3 className="modal-title">📝 تسجيل عضوية جديدة</h3>

            <form id="registerForm" className="modal-add-form" onSubmit={handleRegister}>
              <div className="modal-form-grid">
                <div className="modal-form-group">
                  <label htmlFor="registerName">الاسم الكامل *</label>
                  <input type="text" id="registerName" required placeholder="أدخل اسمك الكامل" />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="registerCountry">البلد *</label>
                  <input type="text" id="registerCountry" required />
                </div>
              </div>

              <div className="modal-form-grid">
                <div className="modal-form-group">
                  <label htmlFor="registerAge">العمر *</label>
                  <input type="number" id="registerAge" required placeholder="25" min={16} max={100} />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="registerResidence">السكن *</label>
                  <input type="text" id="registerResidence" required />
                </div>
              </div>

              <div className="modal-form-grid">
                <div className="modal-form-group">
                  <label htmlFor="registerUsername">اسم المستخدم *</label>
                  <input
                    type="text"
                    id="registerUsername"
                    placeholder="بالاحرف الانجليزية , و يبدأ بـرمز @ "
                    required
                  />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="registerPassword">كلمة السر *</label>
                  <input type="password" id="registerPassword" required placeholder="ارقام انجليزية" />
                </div>
              </div>

              <div className="modal-image-group">
                <label htmlFor="registerPhoto">الصورة الشخصية</label>
                <input type="file" id="registerPhoto" accept="image/*" />
              </div>

              <div className="contact-section">
                <h4 className="section-title">معلومات التواصل</h4>

                <div className="dynamic-fields" id="registerPhoneFields">
                  <label>أرقام الهواتف *</label>
                  {phoneFields.map((field, index) => (
                    <div key={field} className="field-group">
                      <input type="tel" placeholder="+966 50 123 4567" className="phone-input" required />
                      {index === 0 ? (
                        <button type="button" onClick={addPhoneField} className="add-field-btn">
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button type="button" onClick={() => removePhoneField(index)} className="add-field-btn">
                          -
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <div className="dynamic-fields">
                  <label htmlFor="registerWhatsapp">رقم الواتساب *</label>
                  <input type="tel" id="registerWhatsapp" required placeholder="+966 50 123 4567" />
                </div>

                <div className="dynamic-fields">
                  <label htmlFor="registerEmail">البريد الإلكتروني *</label>
                  <input type="email" id="registerEmail" required placeholder="example@email.com" />
                </div>

                <div className="dynamic-fields">
                  <label htmlFor="registerOtherContact">ملاحظات</label>
                  <textarea
                    id="registerOtherContact"
                    placeholder="دون اذا كانت  لديك ملاحظات تتعلق بالعمل "
                    rows={2}
                  ></textarea>
                </div>
              </div>

              <div className="modal-form-actions">
                <button type="submit" className="login-btn">
                  📤 إرسال طلب العضوية
                </button>
                <button type="button" onClick={() => setIsRegisterModalOpen(false)} className="cancel-btn">
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
