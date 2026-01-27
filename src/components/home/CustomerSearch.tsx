"use client";

import { useState } from "react";

interface CustomerSearchProps {
  onSearch: (searchText: string) => void;
}

export function CustomerSearch({ onSearch }: CustomerSearchProps) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="block w-full rounded-2xl bg-white p-5 border shadow-sm hover:shadow-md transition active:scale-[0.99]">
      <label className="block text-sm font-semibold mb-3">
        חיפוש מהיר - לקוחה
      </label>

      <div className="flex gap-2">
        <button
          onClick={() => onSearch(searchText)}
          className="bg-purple-500 text-white px-6 py-2 rounded-xl hover:bg-purple-600 transition"
        >
          חפש
        </button>

        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSearch(searchText);
          }}
          placeholder="...שם לקוחה"
          className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );
}
