import { useState, useRef, useEffect, useCallback } from "react";

interface MileageRangeDropdownProps {
  onClose: () => void;
  mileageMin: string;
  mileageMax: string;
  onApply: (min: string, max: string) => void;
}

export default function MileageRangeDropdown({
  onClose,
  mileageMin,
  mileageMax,
  onApply,
}: MileageRangeDropdownProps) {
  const [minValue, setMinValue] = useState(mileageMin);
  const [maxValue, setMaxValue] = useState(mileageMax);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMinChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val === "" || (/^\d+$/.test(val) && Number(val) >= 0)) {
        setMinValue(val);
      }
    },
    []
  );

  const handleMaxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val === "" || (/^\d+$/.test(val) && Number(val) >= 0)) {
        setMaxValue(val);
      }
    },
    []
  );

  const handleApply = useCallback(() => {
    if (
      minValue !== "" &&
      maxValue !== "" &&
      Number(minValue) > Number(maxValue)
    ) {
      alert("Minimum mileage cannot be greater than maximum mileage.");
      return;
    }
    onApply(minValue, maxValue);
    onClose();
  }, [minValue, maxValue, onApply, onClose]);

  const handleReset = useCallback(() => {
    setMinValue("");
    setMaxValue("");
  }, []);

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
        <h3 className="font-bold text-[#3b3b3b] pl-6">Mileage Range (KM)</h3>
        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="text-[#868686] font-bold hover:text-gray-800 text-sm"
            type="button"
          >
            Reset
          </button>
          <button
            onClick={handleApply}
            className="bg-[#124d99] hover:bg-blue-700 text-white px-6 py-2 rounded-sm text-sm font-bold"
            type="button"
          >
            Done
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <label
            htmlFor="min-mileage"
            className="block text-sm text-[#124D99] mb-2"
          >
            Minimum:
          </label>
          <input
            id="min-mileage"
            type="number"
            min={0}
            value={minValue}
            onChange={handleMinChange}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
        <div className="text-gray-400 mt-6 select-none">-</div>
        <div className="flex-1">
          <label
            htmlFor="max-mileage"
            className="block text-sm text-[#124D99] mb-2"
          >
            Maximum:
          </label>
          <input
            id="max-mileage"
            type="number"
            min={0}
            value={maxValue}
            onChange={handleMaxChange}
            placeholder="To"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
