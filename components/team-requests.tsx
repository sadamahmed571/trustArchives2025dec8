"use client"

import type React from "react"

import { getRequests } from "@/lib/data"
import { useState } from "react"

export function TeamRequests() {
  const requests = getRequests()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit data. For now just close modal.
    setIsModalOpen(false)
    alert("تم إضافة الطلب بنجاح (محاكاة)")
  }

  return (
    <div className="Team-requests">
      <div className="Team-requests-header">
        <h3 className="Team-requests-title">
          <i className="fa-solid fa-list-check"></i> لوحة الطلبات <span> (ابحث عن)</span>
        </h3>
        <button className="Team-requests-button" id="AddNewRequest" onClick={() => setIsModalOpen(true)}>
          {" "}
          أضف طلبك <i className="fa fa-plus" aria-hidden="true"></i>{" "}
        </button>
      </div>
      <p className="Team-requests-description">احصل على 5 نقاط على طلب تقوم بتنفيذه</p>
      <div className="Team-requests-table">
        <div className="Team-requests-row first-row">
          <div className="col-title">الطلب</div>
          <div className="col-title">المقدم</div>
          <div className="col-title">المنفذ</div>
        </div>

        {requests.map((request) => (
          <div className="Team-requests-row" key={request.id}>
            <div className="request">
              <i className="fas fa-bell"></i> {request.title}
            </div>
            <div className="applicant">{request.applicant}</div>
            <div className="Team-requests-actions">
              <button className="claim-btn" type="button">
                {request.executor || "سأقوم بها"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-xl bg-white dark:bg-gray-800 p-0 shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transform transition-all scale-100">
            <div className="bg-primary px-6 py-4 flex justify-between items-center text-white">
              <h2 className="text-xl font-bold">إضافة طلب جديد</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 text-right">
                  <i className="fas fa-heading ml-2 text-primary"></i> عنوان الطلب
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-right focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="مثال: صيانة الماكينة رقم 5"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 text-right">
                  <i className="fas fa-align-right ml-2 text-primary"></i> التفاصيل
                </label>
                <textarea
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-right min-h-[120px] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="اكتب تفاصيل الطلب هنا..."
                ></textarea>
              </div>

              <div className="flex gap-3 justify-end mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 font-medium transition-colors duration-200"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                >
                  <span>إضافة الطلب</span>
                  <i className="fas fa-check"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
