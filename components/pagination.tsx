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
    <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
      <div className="flex flex-col items-center gap-6">
        {/* Pagination Controls */}
        <div className="flex items-center gap-2">
          <button
            className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all"
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
                  className={`w-10 h-10 rounded-xl font-semibold transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {totalPages > 6 && (
              <>
                <span className="px-2 text-gray-400">...</span>
                <button className="w-10 h-10 rounded-xl hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300 transition-all">
                  {totalPages}
                </button>
              </>
            )}
          </div>

          <button
            className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Results Info */}
        <div className="text-center">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-900">{startItem}</span> to{" "}
            <span className="font-semibold text-gray-900">{endItem}</span> of{" "}
            <span className="font-semibold text-blue-600">
              {totalItems.toLocaleString()}
            </span>{" "}
            results
          </p>
        </div>
      </div>
    </div>
  );
}
