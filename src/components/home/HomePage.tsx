"use client";

import { CardButton } from "@/components/ui/CardButton";
import { fireberryLinks } from "@/config/fireberryLinks";
import { useState, useEffect } from "react";

export function HomePage() {
  const [userName, setUserName] = useState("משתמשת");

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch("/api/me");
        const data = await res.json();

        setUserName(data.name || "משתמשת");
      } catch {
        setUserName("משתמשת");
      }
    }

    loadUser();
  }, []);
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="mb-6 text-right">
          <h1 className="text-2xl font-bold">שלום {userName}</h1>

          <p className="text-gray-600 mt-1">מה תרצי לעשות עכשיו?</p>
        </div>

        <div className="space-y-4">
          <CardButton
            title="צור לקוחה"
            subtitle="פתיחה מהירה של טופס לקוחה חדשה"
            icon="➕"
            href={fireberryLinks.createCustomer}
          />

          <CardButton
            title="חיפוש לקוחה"
            subtitle="מעבר למסך לקוחות / חיפוש"
            icon="🔎"
            href={fireberryLinks.searchCustomer}
          />
        </div>
      </div>
    </main>
  );
}
