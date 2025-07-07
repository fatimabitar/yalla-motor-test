"use client";

import { Scale } from "lucide-react";

interface CompareButtonProps {
  count: number;
}

export default function CompareButton({ count }: CompareButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl font-semibold flex items-center gap-3 transform hover:scale-105 transition-all duration-200">
        <Scale className="w-5 h-5" />
        Compare Cars ({count}/3)
      </button>
    </div>
  );
}
