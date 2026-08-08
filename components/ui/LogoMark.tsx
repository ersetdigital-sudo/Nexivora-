interface LogoMarkProps {
  className?: string;
  label?: string;
  id?: string;
}

export function LogoMark({ className = "w-9 h-9", label, id = "nxvViolet" }: LogoMarkProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label={label ?? "Nexivora"} aria-hidden={label ? undefined : true}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="48%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#6D45F5" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="13"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="2.4"
        opacity=".55"
      />
      <path d="M13 15.5h22" stroke={`url(#${id})`} strokeWidth="3.6" strokeLinecap="round" />
      <path
        d="M26.5 15.5 19 27h8.5L21 38.5"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
