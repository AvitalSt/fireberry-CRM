"use client";

import { fireberryLinks } from "@/config/fireberryLinks";

export default function CreateCustomerPage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src={fireberryLinks.createCustomer}
        className="w-full h-full border-none"
        title="יצירת לקוחה"
      />
    </div>
  );
}