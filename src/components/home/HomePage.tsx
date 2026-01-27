"use client";

import { CardButton } from "@/components/ui/CardButton";
import { fireberryLinks } from "@/config/fireberryLinks";
import { useState, useEffect } from "react";
import { CustomerSearch } from "./CustomerSearch";

export function HomePage() {
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) setGreeting("בוקר טוב");
      else if (hour >= 12 && hour < 18) setGreeting("צהריים טובים");
      else setGreeting("ערב טוב");
    };

    async function loadUser() {
      try {
        const res = await fetch("/api/me");
        const data = await res.json();

        setUserName(data.name || "");
      } catch {
        setUserName("");
      }
    }
    updateGreeting();
    loadUser();
  }, []);

  const handleCreateCustomer = () => {
    window.location.href = fireberryLinks.createCustomer;
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="mb-6 text-right">
          <h1 className="text-2xl font-bold">
            {greeting} {userName}
          </h1>
        </div>

        <CustomerSearch />

        <div className="space-y-4">
          <CardButton
            title="צור לקוחה"
            subtitle="פתיחה מהירה של טופס לקוחה חדשה"
            icon="➕"
            onClick={handleCreateCustomer}
          />
        </div>
      </div>
    </main>
  );
}
