"use client";

import { useState } from "react";
import { CardButton } from "@/components/ui/CardButton";
import { QuickSearch } from "@/components/ui/QuickSearch";
import { HelpPanel } from "@/components/ui/HelpPanel";
import { fireberryLinks } from "@/config/fireberryLinks";
import { Info } from "lucide-react";

export function CustomerSection() {
  const [showHelp, setShowHelp] = useState(false);

  const handleCreateCustomer = () => {
    if (window.top) {
      window.top.location.href = fireberryLinks.createCustomer;
    }
  };

  return (
    <section className="space-y-4">
      <QuickSearch
        title="חיפוש לקוחה"
        placeholder="שם לקוחה..."
        buildUrl={(value) =>
          `${fireberryLinks.createCustomer}?q=${encodeURIComponent(value)}`
        }
      />

      <CardButton
        title="מעבר להוספת לקוחה"
        subtitle={
          <div className="flex items-center gap-2">
            לחצי על כפתור ה-חדש הירוק להוספת לקוחה
            <Info
              className="w-5 h-5 text-gray-400 hover:text-purple-600 cursor-pointer transition"
              onClick={(e) => {
                e.stopPropagation();
                setShowHelp(true);
              }}
            />
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
    </section>
  );
}
