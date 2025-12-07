"use client"

import type React from "react"

import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const { isAdmin, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Only redirect if we are sure the user is loaded (user is not null initially if we want strict check,
    // but for this simple demo we wait for mount).
    // In a real app, we'd handle 'loading' state.
    if (user && !isAdmin) {
      router.push("/")
    }
  }, [isAdmin, router, user])

  if (!isAdmin) {
    return (
      <div className="flex h-screen w-full items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold text-red-500">تم رفض الوصول</h1>
        <p>هذه الصفحة متاحة للمدراء فقط.</p>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
        >
          العودة للرئيسية
        </button>
      </div>
    )
  }

  return <>{children}</>
}
