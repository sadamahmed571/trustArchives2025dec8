
"use client"

import { Header } from "@/components/header"
import { ChatButtons } from "@/components/chat-buttons"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function AddProductPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/add-product.css" />

      <ThemeToggle />
      <Header />

      <div className="product-container">
        <div className="product-card">
          <div className="product-header">
            <h1 className="product-title">
              <i className="fas fa-cube"></i> إضافة منتج جديد
            </h1>
          </div>

          <div className="product-body">
            <form id="productForm" className="product-form">
              <div className="product-section" id="section-1">
                <h2 className="product-section-title">
                  <i className="fas fa-info-circle"></i> المعلومات الأساسية والتصنيف
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productName">
                      <i className="fas fa-tag"></i> اسم المنتج *
                    </label>
                    <input
                      type="text"
                      id="productName"
                      className="product-form-input"
                      placeholder="أدخل اسم المنتج"
                      required
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productCategory">
                      <i className="fas fa-folder"></i> الفئة الرئيسية
                    </label>
                    {/* تعديل فئات المنتج هنا */}
                    <select id="productCategory" className="product-form-input">
                      <option value="">اختر الفئة الرئيسية</option>
                      <option value="ماكينات حديثة">ماكينات حديثة</option>
                      <option value="خطوط انتاج">خطوط انتاج</option>
                      <option value="معدات صناعية">معدات صناعية</option>
                      <option value="بناء حديث">بناء حديث</option>
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productSubCategory">
                      <i className="fas fa-folder-open"></i> الفئة الفرعية
                    </label>
                    <select id="productSubCategory" className="product-form-input">
                      <option value="">اختر الفئة الفرعية</option>
                      <optgroup label="ماكينات حديثة">...</optgroup>
                      <optgroup label="خطوط انتاج">...</optgroup>
                    </select>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productBrand">
                      <i className="fas fa-copyright"></i> العلامة التجارية
                    </label>
                    <input
                      type="text"
                      id="productBrand"
                      className="product-form-input"
                      placeholder="أدخل العلامة التجارية"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productModel">
                      <i className="fas fa-cube"></i> الموديل
                    </label>
                    <input
                      type="text"
                      id="productModel"
                      className="product-form-input"
                      placeholder="أدخل موديل المنتج"
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productSKU">
                      <i className="fas fa-barcode"></i> الرقم التسلسلي للمخزون (SKU)
                    </label>
                    <input type="text" id="productSKU" className="product-form-input" placeholder="أدخل رقم SKU" />
                  </div>
                </div>

                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="productDescription">
                    <i className="fas fa-align-left"></i> وصف المنتج *
                  </label>
                  <textarea
                    id="productDescription"
                    className="product-form-textarea"
                    rows={4}
                    placeholder="وصف المنتج"
                  ></textarea>
                </div>
              </div>

              {/* القسم الجديد: استخدامات المنتج */}
              <div className="product-section" id="section-1-5">
                <h2 className="product-section-title">
                  <i className="fas fa-lightbulb"></i> استخدامات المنتج
                </h2>

                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="productUses">
                    <i className="fas fa-list-ul"></i> قائمة الاستخدامات الأساسية
                  </label>
                  <textarea
                    id="productUses"
                    className="product-form-textarea"
                    rows={3}
                    placeholder="أدخل كل استخدام في سطر جديد أو مفصولاً بفاصلة لإنشاء قائمة"
                  ></textarea>
                </div>
              </div>
              {/* نهاية قسم استخدامات المنتج */}

              {/* Simplified pricing and images section */}
              <div className="product-section" id="section-2">
                <h2 className="product-section-title">
                  <i className="fas fa-money-check-alt"></i> السعر والصور
                </h2>

                <div className="product-form-grid">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productPrice">
                      <i className="fas fa-dollar-sign"></i> السعر
                    </label>
                    <div className="product-price-input">
                      <span className="product-currency">$</span>
                      <input
                        type="number"
                        id="productPrice"
                        className="product-form-input"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productQuantity">
                      <i className="fas fa-boxes"></i> الكمية
                    </label>
                    <input type="number" id="productQuantity" className="product-form-input" placeholder="0" min="0" />
                  </div>
                </div>

                <div className="product-form-group full-width mt20">
                  <label className="product-form-label" htmlFor="productImages">
                    <i className="fas fa-images"></i> صور المنتج
                  </label>
                  <input type="file" id="productImages" className="product-file-input" multiple accept="image/*" />
                  <label htmlFor="productImages" className="product-file-label p15">
                    <i className="fas fa-cloud-upload-alt"></i> اضغط لرفع صور المنتج
                  </label>
                </div>
              </div>

              {/* القسم الجديد: القدرة الإنتاجية ومؤشرات الكفاءة */}
              <div className="product-section" id="section-3">
                <h2 className="product-section-title">
                  <i className="fas fa-tachometer-alt"></i> القدرة الإنتاجية ومؤشرات الكفاءة
                </h2>

                {/* القدرة الإنتاجية */}
                <div className="product-form-group full-width">
                  <label className="product-form-label">
                    <i className="fas fa-industry"></i> القدرة الإنتاجية ومعدلات الكفاءة *
                  </label>
                  <div className="product-form-grid grid-3">
                    <div className="product-form-group">
                      <label className="product-form-label" htmlFor="capacityValue">
                        القيمة
                      </label>
                      <input
                        type="number"
                        id="capacityValue"
                        className="product-form-input"
                        placeholder="أدخل القيمة"
                        required
                        step="any"
                        min="0"
                      />
                    </div>

                    <div className="product-form-group">
                      <label className="product-form-label" htmlFor="unitType">
                        الوحدة
                      </label>
                      <select
                        id="unitType"
                        className="product-form-input"
                        onChange={(e) => {
                          const customUnitInput = document.getElementById('customUnitInput');
                          if (e.target.value === 'custom') {
                            customUnitInput.classList.remove('hidden');
                          } else {
                            customUnitInput.classList.add('hidden');
                          }
                        }}
                      >
                        <option value="piece">قطعة / وحدة</option>
                        <option value="ton">طن</option>
                        <option value="cubic-meter">متر مكعب</option>
                        <option value="square-meter">متر مربع</option>
                        <option value="kg">كجم</option>
                        <option value="liter">لتر</option>
                        <option value="ampere">أمبير</option>
                        <option value="custom">خيار مخصص</option>
                      </select>
                      <input
                        type="text"
                        id="customUnitInput"
                        className="product-form-input hidden mt10"
                        placeholder="أدخل الوحدة المخصصة"
                      />
                    </div>

                    <div className="product-form-group">
                      <label className="product-form-label" htmlFor="timePeriod">
                        الفترة الزمنية
                      </label>
                      <select
                        id="timePeriod"
                        className="product-form-input"
                        onChange={(e) => {
                          const customTimeInput = document.getElementById('customTimeInput');
                          if (e.target.value === 'custom') {
                            customTimeInput.classList.remove('hidden');
                          } else {
                            customTimeInput.classList.add('hidden');
                          }
                        }}
                      >
                        <option value="minute">دقيقة</option>
                        <option value="hour">ساعة</option>
                        <option value="shift">وردية عمل (8 ساعات)</option>
                        <option value="day">يوم</option>
                        <option value="month">شهر</option>
                        <option value="custom">خيار مخصص</option>
                      </select>
                      <input
                        type="text"
                        id="customTimeInput"
                        className="product-form-input hidden mt10"
                        placeholder="أدخل الفترة الزمنية المخصصة"
                      />
                    </div>
                  </div>
                  <div className="product-preview mt10">
                    <span id="capacityPreview">0 قطعة / وحدة / دقيقة</span>
                  </div>
                </div>

                {/* معدل الاستهلاك */}
                <div className="product-form-group full-width mt20">
                  <label className="product-form-label">
                    <i className="fas fa-chart-line"></i> معدل الاستهلاك (Input/Output Ratio) *
                  </label>
                  <div className="product-form-grid grid-3">
                    <div className="product-form-group">
                      <label className="product-form-label" htmlFor="consumptionValue">
                        قيمة الاستهلاك
                      </label>
                      <input
                        type="number"
                        id="consumptionValue"
                        className="product-form-input"
                        placeholder="أدخل القيمة"
                        required
                        step="any"
                        min="0"
                      />
                    </div>

                    <div className="product-form-group">
                      <label className="product-form-label" htmlFor="inputUnit">
                        وحدة الاستهلاك
                      </label>
                      <select
                        id="inputUnit"
                        className="product-form-input"
                        onChange={(e) => {
                          const customInputUnit = document.getElementById('customInputUnit');
                          if (e.target.value === 'custom') {
                            customInputUnit.classList.remove('hidden');
                          } else {
                            customInputUnit.classList.add('hidden');
                          }
                        }}
                      >
                        <option value="kwh">كيلو واط/ساعة (kWh)</option>
                        <option value="liter">لتر</option>
                        <option value="cubic-meter">متر مكعب</option>
                        <option value="kg">كجم</option>
                        <option value="custom">خيار مخصص</option>
                      </select>
                      <input
                        type="text"
                        id="customInputUnit"
                        className="product-form-input hidden mt10"
                        placeholder="أدخل وحدة الاستهلاك المخصصة"
                      />
                    </div>

                    <div className="product-form-group">
                      <label className="product-form-label" htmlFor="outputReferenceUnit">
                        الوحدة المرجعية للمنتج
                      </label>
                      <select
                        id="outputReferenceUnit"
                        className="product-form-input"
                        onChange={(e) => {
                          const customOutputUnit = document.getElementById('customOutputUnit');
                          if (e.target.value === 'custom') {
                            customOutputUnit.classList.remove('hidden');
                          } else {
                            customOutputUnit.classList.add('hidden');
                          }
                        }}
                      >
                        <option value="per_unit">لكل وحدة منتجة</option>
                        <option value="per_square_meter">لكل متر مربع منتج</option>
                        <option value="per_ton">لكل طن منتج</option>
                        <option value="per_hour">لكل ساعة تشغيل</option>
                        <option value="custom">خيار مخصص</option>
                      </select>
                      <input
                        type="text"
                        id="customOutputUnit"
                        className="product-form-input hidden mt10"
                        placeholder="أدخل الوحدة المرجعية المخصصة"
                      />
                    </div>
                  </div>
                  <div className="product-preview mt10">
                    <span id="consumptionPreview">0 كيلو واط/ساعة (kWh) / لكل وحدة منتجة</span>
                  </div>
                </div>

                {/* عامل التحويل الداخلي */}
                <div className="product-form-group full-width mt20">
                  <label className="product-form-label" htmlFor="conversionFactor">
                    <i className="fas fa-exchange-alt"></i> عامل التحويل الداخلي للمقارنة (اختياري)
                  </label>
                  <input
                    type="text"
                    id="conversionFactor"
                    className="product-form-input"
                    placeholder="أدخل عامل التحويل (للاستخدام الداخلي)"
                  />
                </div>
              </div>

              <div className="product-section" id="section-4">
                <h2 className="product-section-title">
                  <i className="fas fa-paperclip"></i> المرفقات والتوثيق
                </h2>

                {/* حقول الروابط المعدلة */}
                <div className="product-form-grid grid-3">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productLink">
                      <i className="fa fa-link" aria-hidden="true"></i> رابط المنتج
                    </label>
                    <input
                      type="url"
                      id="productLink"
                      className="product-form-input"
                      placeholder="https://example.com/product..."
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productVideoUrl">
                      <i className="fab fa-youtube"></i> رابط فيديو المنتج (YouTube)
                    </label>
                    <input
                      type="url"
                      id="productVideoUrl"
                      className="product-form-input"
                      placeholder="https://www.youtube.com/watch?v=..."
                    />
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productVideoEmbed">
                      <i className="fas fa-code"></i> رابط الفيديو المضمن (Embedded)
                    </label>
                    <input
                      type="url"
                      id="productVideoEmbed"
                      className="product-form-input"
                      placeholder="كود تضمين من قناة المتجر"
                    />
                  </div>
                </div>
                {/* نهاية حقول الروابط المعدلة */}

                <div className="product-form-grid grid-2 mt20">
                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productCatalogPdf">
                      <i className="fas fa-file-pdf"></i> كاتلوج المنتج (PDF واحد)
                    </label>
                    <input type="file" id="productCatalogPdf" className="product-file-input" accept=".pdf" />
                    <label htmlFor="productCatalogPdf" className="product-file-label">
                      <i className="fas fa-upload"></i> رفع ملف الكاتلوج
                    </label>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="operationManual">
                      <i className="fas fa-book-open"></i> دليل التشغيل والصيانة
                    </label>
                    <input type="file" id="operationManual" className="product-file-input" accept=".pdf,.doc,.docx" />
                    <label htmlFor="operationManual" className="product-file-label">
                      <i className="fas fa-upload"></i> رفع ملف الدليل
                    </label>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="qualityCertificates">
                      <i className="fas fa-medal"></i> شهادات الجودة والاعتماد
                    </label>
                    <input
                      type="file"
                      id="qualityCertificates"
                      className="product-file-input"
                      multiple
                      accept=".pdf,.jpg,.png"
                    />
                    <label htmlFor="qualityCertificates" className="product-file-label">
                      <i className="fas fa-upload"></i> رفع الشهادات (متعدد)
                    </label>
                  </div>

                  <div className="product-form-group">
                    <label className="product-form-label" htmlFor="productDrawings">
                      <i className="fas fa-drafting-compass"></i> رسومات ومخططات المنتج
                    </label>
                    <input
                      type="file"
                      id="productDrawings"
                      className="product-file-input"
                      accept=".dwg,.dxf,.cad,.zip"
                    />
                    <label htmlFor="productDrawings" className="product-file-label">
                      <i className="fas fa-upload"></i> رفع ملفات DWG/CAD
                    </label>
                  </div>
                </div>
              </div>

              <div className="product-section" id="section-5">
                <h2 className="product-section-title">
                  <i className="fas fa-truck-loading"></i> الموردين والمخزون
                </h2>

                <div className="product-suppliers-container" id="suppliersContainer">
                  <div className="product-supplier-card">
                    <h3 className="product-supplier-title">
                      <i className="fas fa-star"></i> بيانات المورد والمخزون
                    </h3>

                    <div className="product-form-grid">
                      <div className="product-form-group">
                        <label className="product-form-label" htmlFor="mainSupplierSelect">
                          <i className="fas fa-store"></i> اسم المورد
                        </label>
                        <select className="product-form-select" id="mainSupplierSelect">
                          <option value="">اختر من الموردين المسجلين</option>
                          <option value="custom">إدخال اسم مخصص</option>
                        </select>
                        <input
                          type="text"
                          id="mainSupplierCustom"
                          className="product-form-input hidden mt10"
                          placeholder="أدخل اسم المورد الجديد"
                        />
                      </div>

                      <div className="product-form-group">
                        <label className="product-form-label" htmlFor="supplierPrice">
                          <i className="fas fa-money-bill-alt"></i> سعر الشراء
                        </label>
                        <div className="product-field-group">
                          <input
                            type="number"
                            id="supplierPrice"
                            className="product-form-input"
                            placeholder="0.00"
                            step="0.01"
                            min="0"
                          />
                          <span className="product-unit">USD/CNY</span>
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

                      <div className="product-form-group">
                        <label className="product-form-label" htmlFor="inventoryUnit">
                          <i className="fas fa-balance-scale"></i> وحدة المخزون
                        </label>
                        <select id="inventoryUnit" className="product-form-input">
                          <option value="عدد">العدد</option>
                          <option value="متر">المتر</option>
                          <option value="طن">الطن</option>
                          <option value="لفة">اللفة</option>
                          <option value="other">أخرى...</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="button" className="product-add-btn auto p10-15">
                  <i className="fas fa-plus"></i> إضافة مورد آخر / مصدر
                </button>
              </div>

              <div className="product-section" id="section-6">
                <h2 className="product-section-title">
                  <i className="fas fa-search"></i> إعدادات الموقع الإضافية (SEO والرؤية)
                </h2>

                {/* تم حذف حقل إعدادات الرؤية بناءً على طلبك */}
                
                {/* تم تعديل حقل الكلمات المفتاحية ليناسب الإدخالات المتعددة */}
                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="seoKeywords">
                    <i className="fas fa-key"></i> الكلمات المفتاحية (SEO)
                  </label>
                  <input
                    type="text"
                    id="seoKeywords"
                    className="product-form-input"
                    placeholder="أدخل كلمات مفتاحية (مثل: اسم المنتج، الموديل، الفئة) مفصولة بفواصل"
                  />
                </div>

                <div className="product-form-group full-width">
                  <label className="product-form-label" htmlFor="productNotes">
                    <i className="fas fa-sticky-note"></i> ملاحظات إضافية (مساحة نصية للموظفين)
                  </label>
                  <textarea
                    id="productNotes"
                    className="product-form-textarea"
                    rows={3}
                    placeholder="ملاحظات داخلية لا تظهر للعملاء (مثل تاريخ الشراء، تحديثات الصيانة)"
                  ></textarea>
                </div>
              </div>

              <div className="product-form-actions">
                <button type="submit" className="product-submit-btn" id="save-product-btn">
                  <i className="fas fa-save"></i> حفظ المنتج
                </button>
                <button type="reset" className="product-reset-btn">
                  <i className="fas fa-redo"></i> مسح النموذج
                </button>
                <Link href="/" className="product-cancel-btn">
                  <i className="fas fa-times"></i> إلغاء
                </Link>
                <div id="form-message" className="form-message hidden mt10"></div>
              </div>
            </form>
          </div>
        </div>
      </div>

      
    </>
  )
}

