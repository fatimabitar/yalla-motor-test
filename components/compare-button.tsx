"use client";

interface CompareButtonProps {
  count: number;
}

export default function CompareButton({ count }: CompareButtonProps) {
  return (
    <div className="fixed -bottom-2 -right-2 z-50">
      <button className="bg-[#124d99] hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg font-medium">
        COMPARE {count}/3
      </button>
    </div>
  );
}
