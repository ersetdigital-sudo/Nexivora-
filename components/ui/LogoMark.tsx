interface LogoMarkProps {
  className?: string;
  label?: string;
  id?: string;
}

export function LogoMark({ className = "w-9 h-9", label, id = "nxvLogomark" }: LogoMarkProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label={label ?? "Nexivora"} aria-hidden={label ? undefined : true}>
      <defs>
        <linearGradient id={id} x1="4" y1="2" x2="44" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="45%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#6D45F5" />
        </linearGradient>
      </defs>
      <path d="M24 2L44 13.5V34.5L24 46L4 34.5V13.5Z" fill={`url(#${id})`} />
      <path d="M12 15h5v18h-5zM17 15L33 33h-5L12 15zM31 15h5v18h-5z" fill="rgba(7,9,15,0.4)" />
    </svg>
  );
}
