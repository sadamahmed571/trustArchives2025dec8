import type { Supplier } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

interface SupplierCardProps {
  supplier: Supplier
}

export function SupplierCard({ supplier }: SupplierCardProps) {
  return (
    <div
      className="supplier-card"
      data-supplier-id={supplier.id}
      data-country={supplier.country}
      data-industry={supplier.industry}
    >
      <div className="supplier-card-header">
        <Image
          src={supplier.image || "/placeholder.svg"}
          alt="supplier-logo"
          width={80}
          height={80}
          className="supplier-logo"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "https://via.placeholder.com/80x80/1a1a2e/ffffff?text=Logo"
          }}
        />
        <div className="supplier-details-info">
          <h3 className="supplier-name">{supplier.name}</h3>
          <div className="supplier-tags">
            <span className="tag" id="supplier-country">
              <i className="fa-solid fa-flag"></i> {supplier.country}
            </span>
            <span className="tag" id="supplier-category">
              <i className="fa-solid fa-layer-group"></i> {supplier.category}
            </span>
            <span className="tag" id="supplier-serial-number">
              <i className="fa-solid fa-bookmark"></i> {supplier.serialNumber}
            </span>
          </div>
        </div>
        <div className={supplier.status === "enable" ? "supplier-status-enable" : "supplier-status-disable"}></div>
      </div>
      <span className="supplier-user" id="supplier-user">
        <i className="fa fa-address-book-o" aria-hidden="true"></i> {supplier.addedBy}
      </span>
      <p className="supplier-description">{supplier.description}</p>
      <Link href={`/suppliers/${supplier.id}`} className="supplier-button">
        <i className="fa fa-address-card-o" aria-hidden="true"></i> معلومات المورد
      </Link>
    </div>
  )
}
