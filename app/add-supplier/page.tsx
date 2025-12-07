"use client"

import { Header } from "@/components/header"
import { ChatButtons } from "@/components/chat-buttons"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function AddSupplierPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/add-supplier.css" />

      <ThemeToggle />
      <Header />

      <section id="add-supplier" className="add-supplier-section">
        <div className="add-supplier-container">
          <div className="add-supplier-card">
            <h2 className="add-supplier-title">
              <i className="fas fa-truck-loading icon-primary"></i> إضافة مورد جديد
            </h2>

            <form id="supplierForm" className="add-supplier-form">
              <h4 className="add-supplier-section-title">
                <i className="fas fa-id-card icon-primary"></i> معلومات الاتصال والتعريف الأساسية
              </h4>

              <div className="add-supplier-grid">
                <div className="add-supplier-group full-width">
                  <label htmlFor="supplier-serial">
                    <i className="fas fa-barcode icon-primary"></i> الرقم التسلسلي للمورد (تلقائي)
                  </label>
                  <input
                    type="text"
                    id="supplier-serial"
                    name="supplier_serial"
                    className="bg-gray-100 cursor-not-allowed"
                    defaultValue={`SUP-${Math.floor(Math.random() * 1000000)}`}
                    readOnly
                  />
                </div>
              </div>

              <div className="add-supplier-grid">
                <div className="add-supplier-group">
                  <label htmlFor="add-supplier-name-ar">
                    <i className="fas fa-signature icon-primary"></i> اسم الشركة الموردة (عربي) *
                  </label>
                  <input
                    type="text"
                    id="add-supplier-name-ar"
                    name="supplier_name_ar"
                    placeholder="اسم الشركة أو المورد"
                    required
                  />
                </div>

                <div className="add-supplier-group">
                  <label htmlFor="add-supplier-name-en">
                    <i className="fas fa-signature icon-primary"></i> اسم الشركة الموردة (إنجليزي) *
                  </label>
                  <input
                    type="text"
                    id="add-supplier-name-en"
                    name="supplier_name_en"
                    placeholder="Company Name"
                    required
                  />
                </div>
              </div>

              <div className="add-supplier-grid">
                <div className="add-supplier-group">
                  <label htmlFor="add-supplier-country">
                    <i className="fas fa-globe-asia icon-primary"></i> بلد المنشأ *
                  </label>
                  <input
                    type="text"
                    id="add-supplier-country"
                    name="supplier_country"
                    placeholder="اسم البلد"
                    required
                  />
                </div>

                <div className="add-supplier-group">
                  <label htmlFor="add-supplier-foundation-year">
                    <i className="fas fa-calendar-alt icon-primary"></i> سنة التأسيس
                  </label>
                  <input
                    type="number"
                    id="add-supplier-foundation-year"
                    name="foundation_year"
                    placeholder="مثال: 2005"
                    min="1900"
                    max="2099"
                  />
                </div>
              </div>

              <div className="add-supplier-group">
                <label htmlFor="add-supplier-website">
                  <i className="fas fa-globe icon-primary"></i> الموقع الإلكتروني الرسمي
                </label>
                <input
                  type="url"
                  id="add-supplier-website"
                  name="supplier_website"
                  placeholder="https://www.supplier.com"
                />
              </div>

              <div className="add-supplier-group">
                <label htmlFor="add-supplier-logo">
                  <i className="fas fa-image icon-primary"></i> شعار الشركة (للملف التعريفي)
                </label>
                <div className="add-supplier-file-container">
                  <input
                    type="file"
                    id="add-supplier-logo"
                    name="supplier_logo"
                    accept="image/*"
                    className="add-supplier-file-input"
                  />
                  <label htmlFor="add-supplier-logo" className="add-supplier-file-label">
                    <i className="fas fa-upload"></i> رفع صورة الشعار
                  </label>
                </div>
                <div id="file-info" className="file-info hidden">
                  <i className="fas fa-check-circle"></i>
                  <span id="file-name"></span>
                </div>
              </div>

              <div className="add-supplier-contact-section">
                <h5 className="add-supplier-section-title-sub">
                  <i className="fas fa-user-tie icon-secondary"></i> جهة الاتصال الرئيسية
                </h5>

                <div className="add-supplier-grid">
                  <div className="add-supplier-group">
                    <label htmlFor="contact-name">
                      <i className="fas fa-user icon-primary"></i> الاسم
                    </label>
                    <input type="text" id="contact-name" name="contact_name" placeholder="اسم جهة الاتصال" />
                  </div>
                  <div className="add-supplier-group">
                    <label htmlFor="contact-title">
                      <i className="fas fa-briefcase icon-primary"></i> الوظيفة
                    </label>
                    <input type="text" id="contact-title" name="contact_title" placeholder="مثال: مدير المبيعات" />
                  </div>
                </div>

                <div className="add-supplier-grid">
                  <div className="add-supplier-group">
                    <label htmlFor="contact-email">
                      <i className="fas fa-envelope icon-primary"></i> البريد الإلكتروني
                    </label>
                    <input type="email" id="contact-email" name="contact_email" placeholder="contact@company.com" />
                  </div>
                  <div className="add-supplier-group">
                    <label htmlFor="contact-phone">
                      <i className="fas fa-phone icon-primary"></i> رقم الهاتف
                    </label>
                    <input type="tel" id="contact-phone" name="contact_phone" placeholder="+86 138 0000 0000" />
                  </div>
                </div>

                <div className="add-supplier-grid add-supplier-contact-grid">
                  <div className="add-supplier-group">
                    <label htmlFor="add-supplier-whatsapp">
                      <i className="fab fa-whatsapp icon-primary"></i> واتساب
                    </label>
                    <input
                      type="tel"
                      id="add-supplier-whatsapp"
                      name="supplier_whatsapp"
                      placeholder="+86 138 0013 8000"
                    />
                  </div>
                  <div className="add-supplier-group">
                    <label htmlFor="add-supplier-wechat">
                      <i className="fab fa-weixin icon-primary"></i> ويتشات
                    </label>
                    <input type="text" id="add-supplier-wechat" name="supplier_wechat" placeholder="wechat_id" />
                  </div>
                </div>

                <div className="add-supplier-group">
                  <label htmlFor="preferred-language">
                    <i className="fas fa-language icon-primary"></i> لغة التواصل المفضلة
                  </label>
                  <select id="preferred-language" name="preferred_language">
                    <option value="">اختر اللغة</option>
                    <option value="arabic">العربية</option>
                    <option value="english">الإنجليزية</option>
                    <option value="chinese">الصينية (Mandarin)</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
              </div>

              <div className="add-supplier-group">
                <label htmlFor="add-supplier-address">
                  <i className="fas fa-map-marker-alt icon-primary"></i> عنوان المصنع / المكتب الرئيسي
                </label>
                <textarea
                  id="add-supplier-address"
                  name="supplier_address"
                  placeholder="العنوان التفصيلي للمورد"
                  rows={2}
                ></textarea>
              </div>

              <div className="add-supplier-group">
                <label htmlFor="add-supplier-map">
                  <i className="fas fa-map-marked-alt icon-primary"></i> رابط الخريطة (Google Maps)
                </label>
                <input
                  type="url"
                  id="add-supplier-map"
                  name="supplier_map_link"
                  placeholder="https://goo.gl/maps/..."
                />
              </div>

              <h4 className="add-supplier-section-title">
                <i className="fas fa-cogs icon-primary"></i> التخصص الفني والقدرات
              </h4>

              <div className="add-supplier-group">
                <label>
                  <i className="fas fa-industry icon-primary"></i> التخصص الرئيسي للمورد (المجال) *
                </label>
                <div className="checkbox-list">
                  <label>
                    <input type="checkbox" name="industry" value="البريكاست" />{" "}
                    <i className="fas fa-building icon-secondary"></i> البريكاست
                  </label>
                  <label>
                    <input type="checkbox" name="industry" value="الماكينات" />{" "}
                    <i className="fas fa-cogs icon-secondary"></i> ماكينات البناء
                  </label>
                  <label>
                    <input type="checkbox" name="industry" value="خطوط الإنتاج" />{" "}
                    <i className="fas fa-industry icon-secondary"></i> خطوط الإنتاج
                  </label>
                  <label>
                    <input type="checkbox" name="industry" value="المعدات الصناعية" />{" "}
                    <i className="fas fa-tools icon-secondary"></i> المعدات الصناعية
                  </label>
                  <label>
                    <input type="checkbox" id="other-industry-checkbox" name="industry" value="other" />{" "}
                    <i className="fas fa-ellipsis-h icon-secondary"></i> تخصص آخر
                  </label>
                </div>
                <div id="other-industry-input" className="other-industry-input">
                  <input type="text" placeholder="حدد التخصص الآخر" />
                </div>
              </div>

              <div className="add-supplier-group">
                <label htmlFor="add-supplier-description">
                  <i className="fas fa-file-alt icon-primary"></i> وصف مختصر للقدرات الفنية
                </label>
                <textarea
                  id="add-supplier-description"
                  name="supplier_description"
                  placeholder="وصف مختصر عن المورد ومنتجاته الرئيسية"
                  rows={3}
                ></textarea>
              </div>

              <div className="add-supplier-group">
                <label htmlFor="add-supplier-products">
                  <i className="fas fa-boxes icon-primary"></i> المنتجات الرئيسية
                </label>
                <div className="todo-list">
                  <div className="todo-input-group">
                    <input type="text" id="product-input" placeholder="أدخل منتجًا رئيسيًا" />
                    <button type="button" id="add-product-btn" className="add-supplier-add-field-btn">
                      +
                    </button>
                  </div>
                  <div id="products-list" className="todo-list-items"></div>
                </div>
              </div>

              <div className="add-supplier-grid">
                <div className="add-supplier-group">
                  <label htmlFor="company-size">
                    <i className="fas fa-users icon-primary"></i> حجم الشركة (عدد الموظفين)
                  </label>
                  <input type="number" id="company-size" name="company_size" placeholder="مثال: 50" min="1" />
                </div>

                <div className="add-supplier-group">
                  <label htmlFor="production-capacity">
                    <i className="fas fa-tachometer-alt icon-primary"></i> الطاقة الإنتاجية السنوية
                  </label>
                  <input
                    type="text"
                    id="production-capacity"
                    name="production_capacity"
                    placeholder="مثال: 1000 طن/سنة"
                  />
                </div>
              </div>

              <div className="add-supplier-grid">
                <div className="add-supplier-group">
                  <label htmlFor="customization-ability">
                    <i className="fas fa-magic icon-primary"></i> القدرة على التخصيص
                  </label>
                  <select id="customization-ability" name="customization_ability">
                    <option value="yes">نعم، متوفرة</option>
                    <option value="no">لا</option>
                  </select>
                </div>

                <div className="add-supplier-group">
                  <label htmlFor="engineers-count">
                    <i className="fas fa-hard-hat icon-primary"></i> عدد المهندسين والفنيين
                  </label>
                  <input type="number" id="engineers-count" name="engineers_count" placeholder="مثال: 15" min="0" />
                </div>
              </div>

              <div className="add-supplier-group">
                <label htmlFor="main-markets">
                  <i className="fas fa-chart-area icon-primary"></i> الأسواق الرئيسية الحالية
                </label>
                <input type="text" id="main-markets" name="main_markets" placeholder="مثال: السعودية، مصر، ألمانيا" />
              </div>

              <h4 className="add-supplier-section-title">
                <i className="fas fa-award icon-primary"></i> معايير الجودة والتوثيق
              </h4>

              <div className="add-supplier-group">
                <label htmlFor="add-supplier-certificates">
                  <i className="fas fa-certificate icon-primary"></i> شهادات الجودة المعتمدة
                </label>
                <div className="add-supplier-checkbox-group">
                  <label>
                    <input type="checkbox" name="certificates" value="iso9001" />{" "}
                    <i className="fas fa-certificate icon-secondary"></i> ISO 9001
                  </label>
                  <label>
                    <input type="checkbox" name="certificates" value="iso14001" />{" "}
                    <i className="fas fa-certificate icon-secondary"></i> ISO 14001
                  </label>
                  <label>
                    <input type="checkbox" name="certificates" value="ce" />{" "}
                    <i className="fas fa-certificate icon-secondary"></i> CE
                  </label>
                  <label>
                    <input type="checkbox" name="certificates" value="tuv" />{" "}
                    <i className="fas fa-certificate icon-secondary"></i> TUV
                  </label>
                  <label>
                    <input type="checkbox" name="certificates" value="asme" />{" "}
                    <i className="fas fa-certificate icon-secondary"></i> ASME
                  </label>
                  <label>
                    <input type="checkbox" name="certificates" value="rohs" />{" "}
                    <i className="fas fa-certificate icon-secondary"></i> RoHS
                  </label>
                  <label>
                    <input type="checkbox" name="certificates" value="other" />{" "}
                    <i className="fas fa-ellipsis-h icon-secondary"></i> أخرى
                  </label>
                </div>
              </div>

              <div className="add-supplier-grid">
                <div className="add-supplier-group">
                  <label htmlFor="test-reports-available">
                    <i className="fas fa-clipboard-list icon-primary"></i> تقارير اختبار المنتجات (Test Reports)
                  </label>
                  <select id="test-reports-available" name="test_reports_available">
                    <option value="available">متوفرة</option>
                    <option value="not_available">غير متوفرة</option>
                  </select>
                </div>

                <div className="add-supplier-group">
                  <label htmlFor="audit-possibility">
                    <i className="fas fa-eye icon-primary"></i> إمكانية زيارة/تدقيق المصنع
                  </label>
                  <select id="audit-possibility" name="audit_possibility">
                    <option value="yes">نعم</option>
                    <option value="no">لا</option>
                  </select>
                </div>
              </div>

              <h4 className="add-supplier-section-title">
                <i className="fas fa-handshake icon-primary"></i> الشروط التجارية واللوجستية (B2B)
              </h4>

              <div className="add-supplier-group">
                <label>
                  <i className="fas fa-credit-card icon-primary"></i> شروط الدفع المعتمدة
                </label>
                <div className="checkbox-list">
                  <label>
                    <input type="checkbox" name="payment_terms" value="cash_advanced" />{" "}
                    <i className="fas fa-percent icon-secondary"></i> دفع مقدم (نسبة)
                  </label>
                  <label>
                    <input type="checkbox" name="payment_terms" value="transfer" />{" "}
                    <i className="fas fa-exchange-alt icon-secondary"></i> حوالة بنكية (T/T)
                  </label>
                  <label>
                    <input type="checkbox" name="payment_terms" value="lc" />{" "}
                    <i className="fas fa-file-invoice-dollar icon-secondary"></i> اعتماد مستندي (L/C)
                  </label>
                  <label>
                    <input type="checkbox" name="payment_terms" value="deferred" />{" "}
                    <i className="fas fa-clock icon-secondary"></i> دفع مؤجل (After Shipment)
                  </label>
                  <label>
                    <input type="checkbox" name="payment_terms" value="other" />{" "}
                    <i className="fas fa-ellipsis-h icon-secondary"></i> أخرى
                  </label>
                </div>
              </div>

              <div className="add-supplier-grid">
                <div className="add-supplier-group">
                  <label htmlFor="base-currency">
                    <i className="fas fa-dollar-sign icon-primary"></i> العملة الأساسية للتسعير
                  </label>
                  <select id="base-currency" name="base_currency">
                    <option value="usd">USD (دولار أمريكي)</option>
                    <option value="eur">EUR (يورو)</option>
                    <option value="cny">CNY (اليوان الصيني)</option>
                    <option value="other">عملة أخرى</option>
                  </select>
                </div>

                <div className="add-supplier-group">
                  <label htmlFor="incoterms">
                    <i className="fas fa-file-contract icon-primary"></i> شروط التجارة الدولية (Incoterms) المفضلة
                  </label>
                  <select id="incoterms" name="incoterms">
                    <option value="fob">FOB</option>
                    <option value="cif">CIF</option>
                    <option value="exw">EXW</option>
                    <option value="cfr">CFR</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
              </div>

              <div className="add-supplier-grid">
                <div className="add-supplier-group">
                  <label htmlFor="moq">
                    <i className="fas fa-boxes icon-primary"></i> الحد الأدنى لكمية الطلب (MOQ)
                  </label>
                  <input type="text" id="moq" name="moq" placeholder="مثال: 10 وحدات أو 5 أطنان" />
                </div>

                <div className="add-supplier-group">
                  <label htmlFor="warranty-period">
                    <i className="fas fa-shield-alt icon-primary"></i> فترة الضمان القياسية
                  </label>
                  <input type="text" id="warranty-period" name="warranty_period" placeholder="مثال: 12 شهرًا أو سنة" />
                </div>
              </div>

              <div className="add-supplier-group">
                <label>
                  <i className="fas fa-shipping-fast icon-primary"></i> طرق الشحن المتاحة
                </label>
                <div className="checkbox-list">
                  <label>
                    <input type="checkbox" name="shipping" value="sea" /> <i className="fas fa-ship icon-secondary"></i>{" "}
                    شحن بحري
                  </label>
                  <label>
                    <input type="checkbox" name="shipping" value="air" />{" "}
                    <i className="fas fa-plane icon-secondary"></i> شحن جوي
                  </label>
                  <label>
                    <input type="checkbox" name="shipping" value="land" />{" "}
                    <i className="fas fa-truck icon-secondary"></i> شحن بري
                  </label>
                </div>
              </div>

              <div className="add-supplier-group">
                <label htmlFor="average-shipping-time">
                  <i className="fas fa-clock icon-primary"></i> متوسط زمن الشحن (لأقرب ميناء)
                </label>
                <input
                  type="text"
                  id="average-shipping-time"
                  name="average_shipping_time"
                  placeholder="مثال: 25-35 يومًا"
                />
              </div>

              <h4 className="add-supplier-section-title">
                <i className="fas fa-folder-open icon-primary"></i> المرفقات والتوثيق الداخلي
              </h4>

              <div className="add-supplier-grid">
                <div className="add-supplier-group">
                  <label htmlFor="supplier-status">
                    <i className="fas fa-tasks icon-primary"></i> حالة المورد في النظام
                  </label>
                  <select id="supplier-status" name="supplier_status">
                    <option value="new">جديد</option>
                    <option value="under_review">قيد المراجعة</option>
                    <option value="approved">معتمد</option>
                    <option value="suspended">موقوف</option>
                  </select>
                </div>
                <div></div>
              </div>

              <div className="add-supplier-grid">
                <div className="add-supplier-group">
                  <label htmlFor="company-profile-file">
                    <i className="fas fa-file-pdf icon-primary"></i> ملف تعريفي بالشركة (PDF)
                  </label>
                  <div className="add-supplier-file-container">
                    <input
                      type="file"
                      id="company-profile-file"
                      name="company_profile_file"
                      accept=".pdf"
                      className="add-supplier-file-input"
                    />
                    <label htmlFor="company-profile-file" className="add-supplier-file-label">
                      <i className="fas fa-upload"></i> رفع الملف التعريفي
                    </label>
                  </div>
                </div>

                <div className="add-supplier-group">
                  <label htmlFor="catalogue-file">
                    <i className="fas fa-book-open icon-primary"></i> كاتلوج المنتجات العام (PDF)
                  </label>
                  <div className="add-supplier-file-container">
                    <input
                      type="file"
                      id="catalogue-file"
                      name="catalogue_file"
                      accept=".pdf"
                      className="add-supplier-file-input"
                    />
                    <label htmlFor="catalogue-file" className="add-supplier-file-label">
                      <i className="fas fa-upload"></i> رفع الكاتلوج
                    </label>
                  </div>
                </div>
              </div>

              <div className="add-supplier-group">
                <label htmlFor="quality-certificates-file">
                  <i className="fas fa-scroll icon-primary"></i> نسخة من شهادات الجودة المذكورة
                </label>
                <div className="add-supplier-file-container">
                  <input
                    type="file"
                    id="quality-certificates-file"
                    name="quality_certificates_file"
                    accept=".pdf,.zip"
                    className="add-supplier-file-input"
                    multiple
                  />
                  <label htmlFor="quality-certificates-file" className="add-supplier-file-label">
                    <i className="fas fa-upload"></i> رفع الشهادات (يمكن اختيار أكثر من ملف)
                  </label>
                </div>
              </div>

              <div className="add-supplier-group">
                <label htmlFor="internal-notes">
                  <i className="fas fa-comment-dots icon-primary"></i> ملاحظات داخلية حول المورد (للاستخدام الخاص)
                </label>
                <textarea
                  id="internal-notes"
                  name="internal_notes"
                  placeholder="ملاحظات وتقييمات داخلية خاصة بفريق العمل"
                  rows={3}
                ></textarea>
              </div>

              <div className="add-supplier-form-actions">
                <button type="submit" className="add-supplier-submit-btn">
                  <i className="fas fa-save"></i> حفظ المورد
                </button>
                <Link href="/suppliers" className="add-supplier-cancel-btn">
                  <i className="fas fa-times"></i> إلغاء
                </Link>
                <Link href="/" className="back2-btn">
                  <i className="fas fa-angle-double-right"></i> العودة الى الصفحة الرئيسية
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <ChatButtons />
    </>
  )
}
