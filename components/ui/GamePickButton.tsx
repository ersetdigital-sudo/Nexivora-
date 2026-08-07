"use client";

interface GamePickButtonProps {
  slug: string;
  className?: string;
}

export function GamePickButton({ slug, className }: GamePickButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("toplixa:pick", { detail: slug }))}
    >
      Top Up →
    </button>
  );
}
