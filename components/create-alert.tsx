"use client";

import { useState, useCallback } from "react";
import { Bell } from "lucide-react";
import dynamic from "next/dynamic";

// تحميل المودال ديناميكياً عشان يقلل حجم الباندل الابتدائي
const CreateAlertModal = dynamic(
  () => import("@/components/create-alert-modal"),
  {
    ssr: false,
  }
);

export default function CreateAlertSidebar() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleClick = useCallback(() => {
    if (!isEnabled) {
      setModalOpen(true);
    } else {
      setIsEnabled(false);
    }
  }, [isEnabled]);

  const handleModalConfirm = useCallback((email: string) => {
    console.log("Subscribed with:", email);
    setIsEnabled(true);
    setModalOpen(false);
  }, []);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <div>
      <div className="bg-white rounded-lg border-t-8 border-[#124d99] shadow-sm overflow-hidden">
        <div className="px-5 py-2">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-bold mb-2 text-[#3b3b3b]">Create Alert</h3>
              <p className="text-[#3b3b3b] text-sm">
                Would you like to receive similar cars by email?
              </p>
            </div>

            <button
              onClick={handleToggleClick}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-offset-2 ${
                isEnabled ? "bg-[#124d99]" : "bg-[#b9bfcb]"
              }`}
              role="switch"
              aria-checked={isEnabled}
            >
              <span
                className={`inline-flex items-center justify-center h-7 w-7 transform rounded-full bg-white transition-transform ${
                  isEnabled ? "translate-x-8" : "translate-x-1"
                }`}
              >
                <Bell
                  className="w-4 h-4"
                  stroke={isEnabled ? "#124d99" : "#b9bfcb"}
                  fill={isEnabled ? "#124d99" : "#b9bfcb"}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <CreateAlertModal
          isOpen={modalOpen}
          onClose={handleModalClose}
          onSubmit={handleModalConfirm}
        />
      )}
    </div>
  );
}
