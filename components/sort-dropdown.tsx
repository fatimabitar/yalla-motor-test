import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortDescIcon } from "lucide-react";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-2 text-[#3b3b3b]">
      <span className="text-[#3b3b3b] font-medium">Sort:</span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-48 bg-white">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">
              <SortDescIcon color="#3b3b3b" />
            </span>
            <SelectValue />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="price-low-high">Price Low &gt; High</SelectItem>
          <SelectItem value="price-high-low">Price High &gt; Low</SelectItem>
          <SelectItem value="year-new-old">Year New &gt; Old</SelectItem>
          <SelectItem value="mileage-low-high">
            Mileage Low &gt; High
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
