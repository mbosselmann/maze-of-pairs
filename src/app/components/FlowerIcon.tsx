import { FlowerType } from "../cards";

interface FlowerIconProps {
  flower: FlowerType;
  className?: string;
}

export function FlowerIcon({ flower, className = "" }: FlowerIconProps) {
  const baseClass = `w-10 h-10 ${className}`;

  switch (flower) {
    case "rose":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="12" fill="#e11d48" />
          <ellipse cx="50" cy="32" rx="10" ry="14" fill="#f43f5e" />
          <ellipse cx="50" cy="68" rx="10" ry="14" fill="#f43f5e" />
          <ellipse cx="32" cy="50" rx="14" ry="10" fill="#f43f5e" />
          <ellipse cx="68" cy="50" rx="14" ry="10" fill="#f43f5e" />
          <ellipse cx="37" cy="37" rx="10" ry="12" fill="#fb7185" transform="rotate(-45 37 37)" />
          <ellipse cx="63" cy="37" rx="10" ry="12" fill="#fb7185" transform="rotate(45 63 37)" />
          <ellipse cx="37" cy="63" rx="10" ry="12" fill="#fb7185" transform="rotate(45 37 63)" />
          <ellipse cx="63" cy="63" rx="10" ry="12" fill="#fb7185" transform="rotate(-45 63 63)" />
        </svg>
      );
    case "tulip":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          <path d="M50 75 L50 95" stroke="#15803d" strokeWidth="3" />
          <ellipse cx="50" cy="45" rx="18" ry="28" fill="#c026d3" />
          <ellipse cx="35" cy="50" rx="12" ry="22" fill="#d946ef" />
          <ellipse cx="65" cy="50" rx="12" ry="22" fill="#d946ef" />
          <ellipse cx="50" cy="40" rx="8" ry="15" fill="#e879f9" />
        </svg>
      );
    case "daisy":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="50"
              cy="28"
              rx="8"
              ry="18"
              fill="white"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="14" fill="#fbbf24" />
        </svg>
      );
    case "lily":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={angle}
              cx="50"
              cy="25"
              rx="10"
              ry="22"
              fill="#fef3c7"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="10" fill="#fcd34d" />
          {[0, 120, 240].map((angle) => (
            <circle
              key={angle}
              cx="50"
              cy="38"
              r="2"
              fill="#92400e"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </svg>
      );
    case "orchid":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="30" rx="15" ry="20" fill="#a855f7" />
          <ellipse cx="30" cy="55" rx="18" ry="12" fill="#c084fc" />
          <ellipse cx="70" cy="55" rx="18" ry="12" fill="#c084fc" />
          <ellipse cx="50" cy="70" rx="12" ry="18" fill="#d8b4fe" />
          <circle cx="50" cy="50" r="8" fill="#7c3aed" />
          <ellipse cx="50" cy="48" rx="4" ry="6" fill="#fef3c7" />
        </svg>
      );
    case "peony":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <ellipse
              key={angle}
              cx="50"
              cy="30"
              rx="12"
              ry="18"
              fill={angle % 60 === 0 ? "#fda4af" : "#fb7185"}
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="16" fill="#fecdd3" />
          <circle cx="50" cy="50" r="8" fill="#fda4af" />
        </svg>
      );
    case "dahlia":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map(
            (angle, i) => (
              <ellipse
                key={angle}
                cx="50"
                cy="28"
                rx="6"
                ry="16"
                fill={i % 2 === 0 ? "#be185d" : "#db2777"}
                transform={`rotate(${angle} 50 50)`}
              />
            )
          )}
          <circle cx="50" cy="50" r="12" fill="#831843" />
        </svg>
      );
    case "lotus":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="70" rx="30" ry="8" fill="#15803d" opacity="0.5" />
          {[-40, -20, 0, 20, 40].map((angle, i) => (
            <ellipse
              key={angle}
              cx="50"
              cy="40"
              rx="10"
              ry="25"
              fill={i === 2 ? "#fdf4ff" : "#fce7f3"}
              transform={`rotate(${angle} 50 60)`}
            />
          ))}
          <ellipse cx="50" cy="55" rx="6" ry="4" fill="#fcd34d" />
        </svg>
      );
    case "iris":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="30" rx="8" ry="20" fill="#6366f1" />
          <ellipse cx="35" cy="35" rx="8" ry="18" fill="#818cf8" transform="rotate(-30 35 35)" />
          <ellipse cx="65" cy="35" rx="8" ry="18" fill="#818cf8" transform="rotate(30 65 35)" />
          <ellipse cx="40" cy="60" rx="10" ry="20" fill="#a5b4fc" transform="rotate(20 40 60)" />
          <ellipse cx="60" cy="60" rx="10" ry="20" fill="#a5b4fc" transform="rotate(-20 60 60)" />
          <path d="M50 75 L50 95" stroke="#15803d" strokeWidth="3" />
        </svg>
      );
    case "magnolia":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse
              key={angle}
              cx="50"
              cy="25"
              rx="12"
              ry="24"
              fill={i % 2 === 0 ? "#fdf4ff" : "#fce7f3"}
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="10" fill="#f9a8d4" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <circle
              key={angle}
              cx="50"
              cy="44"
              r="2"
              fill="#be185d"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </svg>
      );
    case "cherry":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          <path d="M50 50 Q60 30 70 20" stroke="#15803d" strokeWidth="2" fill="none" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="50"
              cy="30"
              rx="10"
              ry="16"
              fill="#fbcfe8"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="8" fill="#fda4af" />
          <circle cx="50" cy="50" r="4" fill="#fcd34d" />
        </svg>
      );
    case "poppy":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          {[0, 90, 180, 270].map((angle) => (
            <ellipse
              key={angle}
              cx="50"
              cy="28"
              rx="18"
              ry="22"
              fill="#dc2626"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="12" fill="#1c1917" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <circle
              key={angle}
              cx="50"
              cy="44"
              r="1.5"
              fill="#fbbf24"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </svg>
      );
    case "sunflower":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map(
            (angle) => (
              <ellipse
                key={angle}
                cx="50"
                cy="22"
                rx="7"
                ry="18"
                fill="#fbbf24"
                transform={`rotate(${angle} 50 50)`}
              />
            )
          )}
          <circle cx="50" cy="50" r="16" fill="#78350f" />
          <circle cx="50" cy="50" r="12" fill="#92400e" />
        </svg>
      );
    case "lavender":
      return (
        <svg className={baseClass} viewBox="0 0 100 100" fill="none">
          <path d="M50 95 L50 45" stroke="#15803d" strokeWidth="2" />
          <path d="M50 60 L40 70" stroke="#15803d" strokeWidth="2" />
          <path d="M50 55 L60 65" stroke="#15803d" strokeWidth="2" />
          {[0, 8, 16, 24, 32].map((offset, i) => (
            <g key={offset}>
              <ellipse cx={46 - i * 0.5} cy={20 + offset} rx="5" ry="6" fill="#8b5cf6" />
              <ellipse cx={54 + i * 0.5} cy={20 + offset} rx="5" ry="6" fill="#8b5cf6" />
            </g>
          ))}
          <ellipse cx="50" cy="15" rx="4" ry="5" fill="#a78bfa" />
        </svg>
      );
    default:
      return null;
  }
}
