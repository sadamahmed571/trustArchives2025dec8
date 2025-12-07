import Link from "next/link"

export function FeatureCards() {
  return (
    <section className="feature-section">
      <h2 className="feature-main-title">
        <i className="fa-solid fa-layer-group"></i> أقسام الارشيف
      </h2>
      <div className="feature-cards">
        <div className="feature-card product-card">
          <i className="feature-icon fa fa-box"></i>
          <h3 className="feature-title">ارشيف المنتجات</h3>
          <p className="feature-description">
            لا تفقد أثر عملك! هذا الأرشيف يعرض جميع المنتجات التي أضافها فريقك، ويوفر سجلاً موثوقًا للبحث والمشتريات
            السابقة. يمكنك الوصول بسهولة إلى تفاصيل المنتجات، مما يساعدك على البقاء منظمًا وفعالاً.
          </p>
          <Link href="/products" className="feature-cta product-button">
            تصفح الآن
          </Link>
        </div>
        <div className="feature-card product-card">
          <i className="feature-icon fa fa-address-book"></i>
          <h3 className="feature-title">ارشيف الموردين</h3>
          <p className="feature-description">
            تحكم في شبكة مورديك بكل سهولة. يخزن هذا الأرشيف جميع التفاصيل الهامة عن مورديك الموثوقين، بما في ذلك
            التقييمات وروابط التواصل المباشر. إنه يبسط سير عملك ويضمن تواصلك الفوري مع شركائك.
          </p>
          <Link href="/suppliers" className="feature-cta product-button">
            تصفح الآن
          </Link>
        </div>
        <div className="feature-card product-card">
          <i className="feature-icon fa fa-plus"></i>
          <h3 className="feature-title">نماذج الاضافة</h3>
          <p className="feature-description">
            أضف منتجات وموردين جدد بدقة وسرعة. تضمن نماذجنا المنظمة التقاط كل التفاصيل بدقة. تساعد الأقسام المُرتبة في
            الحفاظ على أرشيف متسق وكامل. وداعًا للملاحظات المتناثرة ومرحبًا بقاعدة بيانات منسقة.
          </p>
          <Link href="/add-product" className="feature-cta product-button">
            {" "}
            <i className="fa-solid fa-cart-plus"></i>
          </Link>
          <Link href="/add-supplier" className="feature-cta product-button">
            {" "}
            <i className="fas fa-truck"></i>
          </Link>
        </div>
        <div className="feature-card product-card">
          <i className="feature-icon fa fa-user"></i>
          <h3 className="feature-title">ملفي الشخصي</h3>
          <p className="feature-description">
            مساحة عملك الشخصية المصممة للإنتاجية. يعرض هذا القسم جميع المنتجات التي أضفتها، مما يسهل تتبع مساهماتك.
            يتضمن أيضًا قائمة مهام ومفكرة لتدوين التفاصيل المهمة، ليصبح مركز التحكم الخاص بك.
          </p>
          <Link href="/profile" className="feature-cta product-button">
            تصفح الآن
          </Link>
        </div>
        <div className="feature-card product-card">
          <i className="feature-icon fa-solid fa-comments"></i>
          <h3 className="feature-title">دردشة الفريق</h3>
          <p className="feature-description">
            عزز التعاون والإنتاجية من خلال التواصل السلس. تضمن دردشة الفريق الاتصال المستمر، مما يساعدك على تنسيق المهام
            ومشاركة الأفكار في الوقت الفعلي. هذه الأداة تعزز سير عمل أكثر كفاءة وتؤدي لنتائج أفضل.
          </p>
          <button className="feature-cta" id="chatToggleCard">
            <span>قل مرحبا لزملائك</span>
            <i className="fas fa-comments"></i>
            <span className="notification-badge hidden" id="notificationBadgeCard">
              0
            </span>
          </button>
        </div>
        <div className="feature-card product-card">
          <i className="feature-icon fa-solid fa-robot"></i>
          <h3 className="feature-title">شات ذكاء صناعي</h3>
          <p className="feature-description">
            ادعم عملك بذكاء الذكاء الاصطناعي. تم تصميم شات الذكاء الاصطناعي لمساعدتك في مجموعة واسعة من المهام. استخدمه
            مباشرة لتلبية احتياجات عملك وتبسيط العمليات. إنها أداة قوية لمساعدتك على العمل بذكاء وفعالية أكبر.
          </p>
          <button className="feature-cta" id="aiToggleCard">
            <span>جربه الآن</span>
            <i className="fas fa-robot"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
