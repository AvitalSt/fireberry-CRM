"use client";

import { HelpPanelProps } from "@/models/types/HelpPanelProps.type";
import Image from "next/image";

export function HelpPanel({ open, image, title, onClose }: HelpPanelProps) {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed top-0 left-0 h-full w-[500px] bg-white z-50 shadow-2xl p-6 flex flex-col animate-slide-in">
        <div className="flex items-center justify-between mb-4 pb-3 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            {title || "עזרה"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="סגור"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-auto bg-gray-50 rounded-lg p-4 flex items-center justify-center">
          <Image
            src={image}
            alt={title || "עזרה"}
            width={3000}
            height={900}
            className="rounded-lg shadow-md border border-gray-200 cursor-zoom-in hover:shadow-lg transition-shadow"
          />
        </div>
      </div>
    </>
  );
}
