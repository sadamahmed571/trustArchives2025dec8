"use client"

import { useAuth } from "@/components/auth-provider"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface AdminControlsProps {
  id: string
  editUrl: string
  type: string // e.g., "المنتج", "المورد"
}

export function AdminControls({ id, editUrl, type }: AdminControlsProps) {
  const { isAdmin } = useAuth()
  const router = useRouter()

  if (!isAdmin) return null

  const handleDelete = () => {
    if (confirm(`هل أنت متأكد من حذف هذا ${type}؟\n(ID: ${id})`)) {
      // Logic to delete would go here (API call)
      alert("تم الحذف بنجاح (محاكاة)")
      router.back()
    }
  }

  return (
    <div
      className="admin-controls-container"
      style={{
        margin: "20px 0",
        padding: "15px",
        border: "1px dashed #ef4444",
        borderRadius: "8px",
        backgroundColor: "rgba(239, 68, 68, 0.05)",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-red-500 flex items-center gap-2">
          <i className="fas fa-user-shield"></i> لوحة تحكم الإدارة
        </span>
        <div className="flex gap-3">
          <Link
            href={`${editUrl}?edit=true&id=${id}`}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
          >
            <i className="fas fa-edit"></i> تعديل البيانات
          </Link>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
          >
            <i className="fas fa-trash-alt"></i> حذف
          </button>
        </div>
      </div>
    </div>
  )
}
