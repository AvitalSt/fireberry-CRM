"use client";

import { CardButton } from "@/components/ui/CardButton";
import { fireberryLinks } from "@/config/fireberryLinks";
import { useState, useEffect } from "react";
import { CustomerSearch } from "./CustomerSearch";
import { HelpPanel } from "../ui/HelpPanel";
import { Info } from "lucide-react";

export function HomePage() {
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [showHelp, setShowHelp] = useState(false);

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
    if (window.top) {
      window.top.location.href = fireberryLinks.createCustomer;
    }
  };

  const handleSearchCustomer = (searchText: string) => {
    if (window.top && searchText.trim()) {
      const searchUrl = `https://app.fireberry.com/app/views/1?q=${encodeURIComponent(searchText)}`;
      window.top.location.href = searchUrl;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div>
          <h1 className="text-2xl font-bold">
            {greeting} {userName}
          </h1>
        </div>

        <div className="space-y-4">
          <CustomerSearch onSearch={handleSearchCustomer} />

          <CardButton
            title="מעבר להוספת לקוחה"
            subtitle={
              <div className="flex items-center gap-2">
                לחצי על כפתור ה-חדש הירוק להוספת לקוחה
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowHelp(true);
                  }}
                  className="cursor-pointer"
                >
                  <Info className="w-5 h-5 text-gray-400 hover:text-purple-600 cursor-pointer transition" />
                </span>
              </div>
            }
            onClick={handleCreateCustomer}
          />
          {showHelp && (
            <HelpPanel
              open={showHelp}
              onClose={() => setShowHelp(false)}
              image="/add_new_customer.jpg"
              title="איך מוסיפים לקוחה חדשה?"
            />
          )}
        </div>
      </div>
    </main>
  );
}
