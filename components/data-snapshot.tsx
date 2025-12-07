import { getProducts, getSuppliers, getClients, getTeamMembers } from "@/lib/data"

export function DataSnapshot() {
  const productsCount = getProducts().length
  const suppliersCount = getSuppliers().length
  const clientsCount = getClients().length
  const membersCount = getTeamMembers().length

  return (
    <section className="Data-Snapshot-section">
      <h2 className="Data-Snapshot-title">
        <i className="fa fa-chart-bar"></i> إحصائياتنا السريعة{" "}
      </h2>
      <div className="Data-Snapshot-container">
        <div className="Data-Snapshot-box">
          <div className="Data-Snapshot-number" id="productsCount">
            {productsCount}
          </div>
          <div className="Data-Snapshot-label">منتج مؤرشف</div>
        </div>
        <div className="Data-Snapshot-box">
          <div className="Data-Snapshot-number" id="suppliersCount">
            {suppliersCount}
          </div>
          <div className="Data-Snapshot-label">مورد معتمد</div>
        </div>
        <div className="Data-Snapshot-box">
          <div className="Data-Snapshot-number" id="clientsCount">
            {clientsCount}
          </div>
          <div className="Data-Snapshot-label">عميل مسجل</div>
        </div>
        <div className="Data-Snapshot-box">
          <div className="Data-Snapshot-number" id="membersCount">
            {membersCount}
          </div>
          <div className="Data-Snapshot-label">عضو نشط</div>
        </div>
      </div>
    </section>
  )
}
