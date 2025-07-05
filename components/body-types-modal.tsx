import { useEffect, useRef, useState, useCallback } from "react";

interface BodyTypesDropdownProps {
  onClose: () => void;
  selectedTypes: string[];
  onApply: (types: string[]) => void;
}

const bodyTypes = [
  "SUV",
  "Sedan",
  "Coupe",
  "Hatchback",
  "Convertible",
  "Pickup Truck",
  "Wagon",
  "Van",
  "Truck",
  "Bus",
  "Other",
];

export default function BodyTypesDropdown({
  onClose,
  selectedTypes,
  onApply,
}: BodyTypesDropdownProps) {
  const [selectedBodyTypes, setSelectedBodyTypes] =
    useState<string[]>(selectedTypes);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedBodyTypes(selectedTypes);
  }, [selectedTypes]);

  const handleToggleType = useCallback((type: string) => {
    setSelectedBodyTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }, []);

  const handleApply = useCallback(() => {
    onApply(selectedBodyTypes);
    onClose();
  }, [onApply, onClose, selectedBodyTypes]);

  const handleReset = useCallback(() => {
    setSelectedBodyTypes([]);
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

    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 mt-2 w-[350px] bg-white border border-gray-200 rounded-sm shadow-lg z-20 p-4"
    >
      <h3 className="text-[#3b3b3b] font-bold mb-4">Body Types</h3>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {bodyTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleToggleType(type)}
            aria-pressed={selectedBodyTypes.includes(type)}
            className={`px-4 py-3 rounded-lg border text-sm text-center transition-colors ${
              selectedBodyTypes.includes(type)
                ? "bg-blue-50 border-blue-300 text-blue-700"
                : "bg-gray-50 border-gray-300 text-[#868686] hover:bg-gray-100"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={handleReset}
          className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium"
        >
          Reset
        </button>
        <button
          disabled={selectedBodyTypes.length === 0}
          onClick={handleApply}
          className={`font-bold text-white px-6 py-2 rounded-sm transition-colors text-sm ${
            selectedBodyTypes.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#124d99] hover:bg-blue-700"
          }`}
        >
          Done
        </button>
      </div>
    </div>
  );
}
