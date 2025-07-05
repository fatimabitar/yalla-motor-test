import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface MoreFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    mileageMin: string;
    mileageMax: string;
  };
  onApply: (filters: { mileageMin: string; mileageMax: string }) => void;
}

export default function MoreFiltersModal({
  isOpen,
  onClose,
  filters,
  onApply,
}: MoreFiltersModalProps) {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    if (isOpen) {
      setLocalFilters(filters);
    }
  }, [isOpen, filters]);

  const handleApply = useCallback(() => {
    onApply(localFilters);
    onClose();
  }, [localFilters, onApply, onClose]);

  const handleReset = useCallback(() => {
    setLocalFilters({
      ...filters,
      mileageMin: "",
      mileageMax: "",
    });
  }, [filters]);

  const handleChange = useCallback(
    (field: "mileageMin" | "mileageMax") =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLocalFilters((prev) => ({
          ...prev,
          [field]: value,
        }));
      },
    []
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">More Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Mileage Range */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Mileage Range (KM)
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="mileageMin"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Minimum:
                </label>
                <input
                  id="mileageMin"
                  type="number"
                  min={0}
                  value={localFilters.mileageMin}
                  onChange={handleChange("mileageMin")}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="mileageMax"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Maximum:
                </label>
                <input
                  id="mileageMax"
                  type="number"
                  min={0}
                  value={localFilters.mileageMax}
                  onChange={handleChange("mileageMax")}
                  placeholder="To"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleReset}
              className="text-gray-600 hover:text-gray-800 transition-colors"
              type="button"
            >
              Reset
            </button>
            <button
              onClick={handleApply}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              type="button"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
