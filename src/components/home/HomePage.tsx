"use client";

import { CardButton } from "@/components/ui/CardButton";
import { fireberryLinks } from "@/config/fireberryLinks";
import { useState, useEffect } from "react";
import { HelpPanel } from "../ui/HelpPanel";
import { Info } from "lucide-react";
import { QuickSearch } from "../ui/QuickSearch";
import { CustomerSection } from "./CustomerSection";
import { ContactSection } from "./ContactSection";

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

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">
            {greeting} {userName}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <CustomerSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
