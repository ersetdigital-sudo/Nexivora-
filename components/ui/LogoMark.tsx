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
      <path d="M24 2L44 13.5V34.5L24 46L4 34.5V13.5L24 2Z" fill={`url(#${id})`} />
      <path d="M13 16.5h22" stroke="rgba(255,255,255,0.9)" strokeWidth="3.8" strokeLinecap="round" />
      <path d="M27 16.5L18.5 31.5h9.5L20 41.5" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
