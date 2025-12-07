export function HonorBoard() {
  return (
    <div className="honor-board">
      <div className="honor-header">
        <h3 className="honor-title">
          <i className="fa-solid fa-award"></i> لوحـــــة التكريـــــم
        </h3>
        <div className="honor-points" id="UserPoints">
          0 نقطة <i className="fa-solid fa-star"></i>
        </div>
      </div>
      <div className="honor-body">
        <div className="honor-info">
          <div className="honor-name" id="WeekHonorUdser">
            قريباً
          </div>
          <p className="honor-message">
            من سيكون أول عضو سيتم تكريمه ؟؟ سنرى 😁 سيتم اختيار عضو الأسبوع من قبل الإدارة بحسب النشاط المحقق ,
          </p>
        </div>
      </div>
    </div>
  )
}
