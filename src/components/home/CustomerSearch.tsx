"use client";

import { useState } from "react";
import { fireberryLinks } from "@/config/fireberryLinks";

type Customer = {
  recordid: string;
  accountname: string;
  telephone1?: string;
};

export function CustomerSearch() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!searchText.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/search-customer", {
        method: "POST",
        body: JSON.stringify({ text: searchText }),
      });

      const data = await res.json();
      setResults(data.data || []);
    } catch (err) {
      console.error(err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  function openCustomer(id: string) {
    window.open(`${fireberryLinks.customerBase}/${id}`, "_blank");
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4">
      <h2 className="font-semibold mb-2">חיפוש לקוחה</h2>

      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-lg p-2"
          placeholder="שם לקוחה..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="bg-purple-500 text-white px-4 rounded-lg"
          onClick={handleSearch}
        >
          חפש
        </button>
      </div>

      {loading && <p className="mt-2 text-sm">טוען...</p>}

      {results.length > 0 && (
        <div className="mt-3 space-y-2">
          {results.map((r: Customer) => (
            <div
              key={r.recordid}
              className="border p-2 rounded cursor-pointer hover:bg-gray-50"
              onClick={() => openCustomer(r.recordid)}
            >
              <div className="font-medium">{r.accountname}</div>
              <div className="text-sm text-gray-500">{r.telephone1}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
