"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbNavigationProps {
  items?: BreadcrumbItem[];
}

export default function BreadcrumbNavigation({
  items,
}: BreadcrumbNavigationProps) {
  const defaultItems: BreadcrumbItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Used Cars",
      href: "/used-cars",
    },
    {
      label: "Used cars for sale in UAE",
      current: true,
    },
  ];

  const breadcrumbItems = items || defaultItems;

  return (
    <nav aria-label="Breadcrumb" className="pb-6">
      <div className="">
        <ol className="flex items-center space-x-2 text-xs md:text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}

              {item.current ? (
                <span
                  className="text-[#828A93]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="text-[#006DFC] hover:text-blue-800 hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
