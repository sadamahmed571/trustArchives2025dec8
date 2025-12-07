import type { Product } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card" data-id={product.id}>
      <div className="product-image-container">
        <div className="product-meta-overlay">
          <span className="product-category">
            <i className="fa-solid fa-layer-group"></i> {product.category}
          </span>
          <span className="product-supplier">{product.supplier}</span>
          <span className="product-serial">{product.serialNumber}</span>
        </div>
        <div className="product-image">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={400}
            height={200}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "https://via.placeholder.com/400x200/1a1a2e/ffffff?text=صورة+المنتج"
            }}
          />
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-title">
          {product.title}
          <span>
            <i className="fa fa-address-book-o" aria-hidden="true"></i> {product.addedBy}
          </span>
        </h3>
        <div className="product-meta-overlay2">
          <span className="product-category2">{product.category}</span>
          <span className="product-supplier2">{product.supplier}</span>
          <span className="product-serial2">{product.serialNumber}</span>
          <span className="product-price2">${product.price}</span>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-prices">
          <div className="price-item">
            <span className="price-amount">${product.originalPrice || product.price}</span>
            <span className="price-P">السعر</span>
          </div>
        </div>
        <div className="product-actions">
          <Link href={`/products/${product.id}`} id="OpenProductDetails" className="product-button">
            <i className="fa-solid fa-info"></i> عرض التفاصيل
          </Link>
          <a
            href={`https://wa.me/?text=مرحباً، أستفسر عن المنتج: ${product.title} (${product.serialNumber})`}
            target="_blank"
            rel="noopener noreferrer"
            id="ChatWithProductUser"
            className="product-button"
          >
            <i className="fab fa-whatsapp"></i>تواصل بالمسجل
          </a>
        </div>
      </div>
    </div>
  )
}
