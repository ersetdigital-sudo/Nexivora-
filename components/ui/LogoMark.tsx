interface LogoMarkProps {
  className?: string;
  label?: string;
  id?: string;
}

export function LogoMark({ className = "w-9 h-9", label, id = "nxvLogomark" }: LogoMarkProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label={label ?? "Nexivora"} aria-hidden={label ? undefined : true}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="50%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#6D45F5" />
        </linearGradient>
      </defs>
      <path d="M24 2L44 13.5V34.5L24 46L4 34.5V13.5L24 2Z" stroke={`url(#${id})`} strokeWidth="2.4" fill="none" />
      <path d="M14 16h20" stroke={`url(#${id})`} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M27 16L19 32h9L21 42" stroke={`url(#${id})`} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
