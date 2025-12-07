import { Header } from "@/components/header"
import { ChatButtons } from "@/components/chat-buttons"
import Link from "next/link"
import { AdminControls } from "@/components/admin-controls"

export default function OperationalAccessoryPage({ params }: { params: { id: string } }) {
  return (
    <>
      <link rel="stylesheet" href="/css/product.css" />
      <link rel="stylesheet" href="/css/responsive-product.css" />

      <Header />

      <div className="container">
        <AdminControls id={params.id} editUrl="/add-operational-accessories" type="مستلزم التشغيل" />

        <div className="product-container">
          <div id="product-details">
            {/* Upper Section: Product Layout */}
            <div className="product-layout">
              {/* Right Column: Product Info and Main Image */}
              <div className="right-column">
                <div className="product-gallery">
                  <div className="product-info">
                    <div className="product-meta">
                      <div className="meta-item">
                        <i className="fas fa-link"></i>
                        <span>المنتج المرتبط</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-folder-open"></i>
                        <span>زيوت</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-barcode"></i>
                        <span>ACC-{params.id}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-copyright"></i>
                        <span>Shell</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-user"></i>
                        <span>المسؤول</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-calendar"></i>
                        <span>2023-12-01</span>
                      </div>
                    </div>
                    <h1 className="product-title">مستلزم تشغيل {params.id}</h1>
                    <p className="product-description">زيت محرك عالي الجودة لضمان أداء مثالي وعمر أطول للمعدات.</p>
                  </div>

                  <div className="main-image rel">
                    <img
                      src="/placeholder.svg?height=450&width=800"
                      alt="صورة المستلزم"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <button title="تحميل الصورة" className="download-image-btn">
                      <i className="fas fa-download"></i>
                      تحميل الصورة
                    </button>
                  </div>

                  <div className="image-thumbnails"></div>
                </div>
              </div>

              {/* Left Column: Price, Shipping, Sidebar */}
              <div className="left-column">
                {/* Product Price */}
                <div className="price-container">
                  <div className="price-title">
                    <i className="fa-solid fa-money-check-dollar"></i>
                    الاسعار
                  </div>

                  <div className="price-details">
                    <div className="price-grid">
                      <div className="price-item">
                        <div className="pricing-label">
                          <i className="fa-solid fa-coins"></i> سعر التكلفة
                        </div>
                        <div className="price-amount">$20</div>
                      </div>
                      <div className="price-item">
                        <div className="pricing-label">
                          <i className="fa-solid fa-tags"></i> سعر البيع المقترح
                        </div>
                        <div className="price-amount">$35</div>
                      </div>
                      <div className="price-item">
                        <div className="pricing-label">
                          <i className="fa-solid fa-boxes-stacked"></i> الحد الأدنى (MOQ)
                        </div>
                        <div className="price-amount">24</div>
                      </div>
                      <div className="price-item">
                        <div className="pricing-label">
                          <i className="fa-solid fa-warehouse"></i> الكمية في المخزون
                        </div>
                        <div className="price-amount">1000</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Actions */}
                <div className="product-actions">
                  <button className="product-btn Favorite-btn">
                    <i className="fas fa-file-pdf"></i>
                    انشاء عرض سعر
                  </button>
                  <button className="product-btn share-btn bg-extra2">
                    <i className="fa-solid fa-file-pdf"></i>
                    تحميل الكاتلوج
                  </button>
                </div>
              </div>
            </div>

            {/* Lower Section: Product Tabs */}
            <div className="lower-section">
              <div className="product-tabs">
                <div className="tabs-header">
                  <div className="tab-btn active">معلومات الربط والتصنيف</div>
                  <div className="tab-btn">المواصفات الفنية والمادية</div>
                  <div className="tab-btn">التعبئة والشحن</div>
                  <div className="tab-btn">التسعير والموردين والتوثيق</div>
                  <div className="tab-btn">ملفات و روابط</div>
                </div>

                {/* General Info Tab */}
                <div className="tab-content active">
                  <div className="general-info-grid">
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-link"></i> حالة الربط
                      </div>
                      <div className="value">مستقل / عام</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-cube"></i> المنتج الأساسي المُرتبط
                      </div>
                      <div className="value">جميع الماكينات</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-folder-open"></i> الفئة الفرعية
                      </div>
                      <div className="value">زيوت وشحوم</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-tag"></i> اسم المستلزم/الخامة الفني
                      </div>
                      <div className="value">زيت هيدروليك 68</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-barcode"></i> رقم المرجع (Reference No)
                      </div>
                      <div className="value">REF-98765</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-barcode"></i> الرقم التسلسلي (System Serial)
                      </div>
                      <div className="value">ACC-{params.id}</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-copyright"></i> العلامة التجارية
                      </div>
                      <div className="value">Shell</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-user"></i> المسجل
                      </div>
                      <div className="value">Admin</div>
                    </div>
                    <div className="general-info-item">
                      <div className="label">
                        <i className="fas fa-calendar-alt"></i> تاريخ الإضافة
                      </div>
                      <div className="value">2023-12-01</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Added back button */}
        <div className="download-section" style={{ marginTop: "20px", textAlign: "center" }}>
          <Link
            href="/products"
            className="download-btn"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "var(--secondary)",
              color: "#fff",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            <i className="fa fa-angle-double-right"></i> العودة الى لوحة المنتجات
          </Link>
        </div>
      </div>

      <ChatButtons />
    </>
  )
}
