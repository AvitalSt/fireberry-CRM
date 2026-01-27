"use client";
import { QuickSearchProps } from "@/models/types/QuickSearchProps.type";
import { useState } from "react";

export function QuickSearch({
  title,
  placeholder,
  buildUrl,
}: QuickSearchProps) {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (!value.trim()) return;

    const url = buildUrl(value.trim());
    if (window.top) {
      window.top.location.href = url;
    }
  };

  return (
    <div className="block w-full rounded-2xl bg-white p-5 border shadow-sm hover:shadow-md transition">
      <label className="block text-sm font-semibold mb-3">{title}</label>

      <div className="flex gap-2">
        <button
          onClick={handleSearch}
          className="bg-purple-500 text-white px-6 py-2 rounded-xl hover:bg-purple-600 transition"
        >
          חפש
        </button>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder={placeholder}
          className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );
}
