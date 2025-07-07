"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-700 font-medium hidden sm:block">
        Sort by:
      </span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-48 bg-white border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-gray-500" />
            <SelectValue />
          </div>
        </SelectTrigger>
        <SelectContent className="rounded-xl border-gray-200">
          <SelectItem value="price-low-high" className="rounded-lg">
            Price: Low to High
          </SelectItem>
          <SelectItem value="price-high-low" className="rounded-lg">
            Price: High to Low
          </SelectItem>
          <SelectItem value="year-new-old" className="rounded-lg">
            Year: Newest First
          </SelectItem>
          <SelectItem value="mileage-low-high" className="rounded-lg">
            Mileage: Low to High
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
