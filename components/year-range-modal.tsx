import { useState, useRef, useEffect } from "react";

interface YearRangeDropdownProps {
  onClose: () => void;
  yearMin: string;
  yearMax: string;
  onApply: (min: string, max: string) => void;
}

export default function YearRangeDropdown({
  onClose,
  yearMin,
  yearMax,
  onApply,
}: YearRangeDropdownProps) {
  const [minValue, setMinValue] = useState(yearMin);
  const [maxValue, setMaxValue] = useState(yearMax);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleApply = () => {
    onApply(minValue, maxValue);
    onClose();
  };

  const handleReset = () => {
    setMinValue("");
    setMaxValue("");
  };

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 w-[350px] bg-white border border-gray-200 rounded-sm shadow-lg z-20 p-4"
    >
      <div className="flex justify-between items-center mb-6 bg-[#fcfcfc] border-t-2">
        <h3 className="font-bold text-[#3b3b3b] pl-6">Model Year Range</h3>
        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="text-[#868686] font-bold hover:text-gray-800 text-sm"
          >
            Reset
          </button>
          <button
            onClick={handleApply}
            className="bg-[#124d99] hover:bg-blue-700 text-white px-6 py-2 rounded-sm text-sm font-bold"
          >
            Done
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <label className="block text-sm text-[#124D99] mb-2">Minimum:</label>
          <input
            type="number"
            value={minValue}
            onChange={(e) => setMinValue(e.target.value)}
            placeholder="From"
            min="1990"
            max="2024"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
        <div className="text-gray-400 mt-6">-</div>
        <div className="flex-1">
          <label className="block text-sm text-[#124D99] mb-2">Maximum:</label>
          <input
            type="number"
            value={maxValue}
            onChange={(e) => setMaxValue(e.target.value)}
            placeholder="To"
            min="1990"
            max="2024"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
