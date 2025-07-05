import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPage?: number;
}

export default function Pagination({
  currentPage = 1,
  totalPages = 42,
  totalItems = 829,
  itemsPerPage = 10,
}: PaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col items-center gap-4 py-8 font-[Lato,\_Noto\_Kufi\_Arabic,sans-serif]">
      <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-3">
        <button
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
            const page = index + 1;
            const isActive = page === currentPage;

            return (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg italic text-[16px] leading-[16px] font-normal transition-colors ${
                  isActive
                    ? "bg-[#124d99] text-white"
                    : "hover:bg-gray-100 text-[#8B8B8B]"
                }`}
              >
                {page}
              </button>
            );
          })}

          {totalPages > 6 && (
            <>
              <span className="px-2 text-gray-500">...</span>
              <button className="px-4 py-2 rounded-lg italic text-[16px] leading-[16px] font-normal hover:bg-gray-100 text-[#8B8B8B]">
                {totalPages}
              </button>
            </>
          )}
        </div>

        <button
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <p className="text-[#8B8B8B] text-base font-normal leading-4">
        <span className="font-bold">{startItem}</span> -{" "}
        <span className="font-bold">{endItem}</span> of{" "}
        <span className="font-bold">{totalItems.toLocaleString()}</span> Used
        Cars
      </p>
    </div>
  );
}
