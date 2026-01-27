import { CardButtonProps } from "@/models/types/CardButton.types";

export function CardButton({ title, subtitle, icon, onClick }: CardButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        block
        rounded-2xl
        bg-white
        p-5
        border
        shadow-sm
        hover:shadow-md
        transition
        active:scale-[0.99]
      "
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-2xl">{icon}</div>

        <div className="text-right">
          <div className="text-lg font-semibold">{title}</div>

          {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
        </div>
      </div>
    </button>
  );
}
