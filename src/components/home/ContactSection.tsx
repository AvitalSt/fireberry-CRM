"use client";

import { useState } from "react";
import { CardButton } from "@/components/ui/CardButton";
import { QuickSearch } from "@/components/ui/QuickSearch";
import { HelpPanel } from "@/components/ui/HelpPanel";
import { fireberryLinks } from "@/config/fireberryLinks";
import { Info } from "lucide-react";

export function ContactSection() {
  const [showHelp, setShowHelp] = useState(false);

  const handleCreateContact = () => {
    if (window.top) {
      window.top.location.href = fireberryLinks.createContact;
    }
  };

  return (
    <section className="space-y-4">
      <QuickSearch
        title="חיפוש איש קשר"
        placeholder="שם איש קשר..."
        buildUrl={(value) =>
          `${fireberryLinks.createContact}?q=${encodeURIComponent(value)}`
        }
      />

      <CardButton
        title="מעבר להוספת איש קשר"
        subtitle={
          <div className="flex items-center gap-2">
            לחצי על כפתור ה-חדש הירוק להוספת איש קשר
            <Info
              className="w-5 h-5 text-gray-400 hover:text-purple-600 cursor-pointer transition"
              onClick={(e) => {
                e.stopPropagation();
                setShowHelp(true);
              }}
            />
          </div>
        }
        onClick={handleCreateContact}
      />

      {showHelp && (
        <HelpPanel
          open={showHelp}
          onClose={() => setShowHelp(false)}
          image="/add_new_contact.jpg"
          title="איך מוסיפים איש קשר חדש?"
        />
      )}
    </section>
  );
}
