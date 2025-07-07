"use client";

import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";

const XIcon = dynamic(() => import("lucide-react").then((mod) => mod.X), {
  ssr: false,
});

interface CreateAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => Promise<void> | void;
}

const CreateAlertModal = React.memo(function CreateAlertModal({
  isOpen,
  onClose,
  onSubmit,
}: CreateAlertModalProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.trim()) return;
      await onSubmit(email.trim());
      setEmail("");
      onClose();
    },
    [email, onSubmit, onClose]
  );

  useEffect(() => {
    if (!isOpen) setEmail("");
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6">
          <h2 className="text-xl font-semibold text-[#3b3b3b]">Create Alert</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <XIcon className="w-8 h-8" />
          </button>
        </div>

        <div className="p-6 pt-0">
          <p className="text-[#3b3b3b] mb-6">
            You will be notified via email when new cars are available in your
            search criteria
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. john@example.com"
              className="w-full px-4 py-3 placeholder:border-gray-400 border border-gray-400 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors mb-6"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold text-lg py-2 px-4 rounded-sm transition-colors hover:bg-blue-700"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default CreateAlertModal;
