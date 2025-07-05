import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { X, Search } from "lucide-react";
import { FixedSizeList as List } from "react-window";

interface BrandSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
}

const carBrands = [
  "Audi",
  "BMW",
  "Mercedes-Benz",
  "Toyota",
  "Honda",
  "Nissan",
  "Ford",
  "Chevrolet",
  "Hyundai",
  "Kia",
  "Volkswagen",
  "Mazda",
  "Subaru",
  "Lexus",
  "Infiniti",
  "Acura",
  "Volvo",
  "Jaguar",
  "Land Rover",
  "Porsche",
  "Ferrari",
  "Lamborghini",
  "Bentley",
  "Rolls-Royce",
  "Maserati",
  "Aston Martin",
  "McLaren",
  "Bugatti",
  "Koenigsegg",
  "Pagani",
  "JMCGL",
  "KAIYI",
  "Karry",
  "Kenbo",
  "Geely",
  "BYD",
  "Changan",
  "Haval",
];

export default function BrandSelectionModal({
  isOpen,
  onClose,
  selectedBrand,
  onSelectBrand,
}: BrandSelectionModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    if (!isOpen) {
      setSearchTerm("");
    }
  }, [isOpen]);

  const filteredBrands = useMemo(() => {
    const lower = searchTerm.toLowerCase();
    return carBrands.filter((brand) => brand.toLowerCase().includes(lower));
  }, [searchTerm]);

  const handleSelectBrand = useCallback(
    (brand: string) => {
      onSelectBrand(brand);
      onClose();
    },
    [onSelectBrand, onClose]
  );

  if (!isOpen) return null;

  const renderRow = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const brand = filteredBrands[index];
    const isSelected = selectedBrand === brand;

    return (
      <button
        key={brand}
        style={style}
        onClick={() => handleSelectBrand(brand)}
        className={`w-full px-8 py-5 text-left border-b border-gray-100 transition-colors hover:bg-gray-50 ${
          isSelected ? "bg-blue-50 text-blue-600" : "text-[#3b3b3b]"
        }`}
        aria-pressed={isSelected}
      >
        {brand}
      </button>
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="brand-selection-title"
      className="fixed inset-0 bg-[#3a424c] bg-opacity-65 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-xl w-full overflow-hidden">
        <div className="flex items-center justify-between p-6">
          <h2 id="brand-selection-title" className="text-2xl font-semibold">
            Select car make/brand
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6">
          <div className="relative">
            <Search className="absolute right-10 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by typing"
              className="w-full pr-10 pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              autoFocus
              aria-label="Search car brands"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        <div className="max-h-80 overflow-y-auto mt-4">
          {filteredBrands.length > 0 ? (
            <List
              height={320}
              itemCount={filteredBrands.length}
              itemSize={60}
              width="100%"
            >
              {renderRow}
            </List>
          ) : (
            <div className="px-6 py-8 text-center text-gray-500">
              No brands found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
