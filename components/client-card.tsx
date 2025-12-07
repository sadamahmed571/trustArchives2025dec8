import type { Client } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

interface ClientCardProps {
  client: Client
}

export function ClientCard({ client }: ClientCardProps) {
  return (
    <div
      className="client-card"
      data-client-id={client.id}
      data-country={client.country}
      data-industry={client.industry}
    >
      <div className="client-card-header">
        <Image
          src={client.image || "/placeholder.svg"}
          alt="client-logo"
          width={80}
          height={80}
          className="client-logo"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "https://via.placeholder.com/80x80/1a1a2e/ffffff?text=Logo"
          }}
        />
        <div className="client-details-info">
          <h3 className="client-name">{client.name}</h3>
          <div className="client-tags">
            <span className="tag" id="client-country">
              <i className="fa-solid fa-flag"></i> {client.country}
            </span>
            <span className="tag" id="client-category">
              <i className="fa-solid fa-layer-group"></i> {client.industry}
            </span>
            <span className="tag" id="client-serial-number">
              <i className="fa-solid fa-bookmark"></i> {client.serialNumber}
            </span>
          </div>
        </div>
        <div className={client.status === "enable" ? "client-status-enable" : "client-status-disable"}></div>
      </div>
      <span className="client-user" id="client-user">
        <i className="fa fa-address-book-o" aria-hidden="true"></i> {client.addedBy}
      </span>
      <p className="client-description">{client.description}</p>
      <Link href={`/clients/${client.id}`} className="client-button">
        <i className="fa fa-address-card-o" aria-hidden="true"></i> معلومات العميل
      </Link>
    </div>
  )
}
