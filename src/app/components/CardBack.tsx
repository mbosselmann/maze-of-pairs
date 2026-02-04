export function CardBack() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
      {/* Decorative floral pattern for card back */}
      <rect x="5" y="5" width="90" height="90" rx="8" fill="#2d2926" stroke="#f9a8d4" strokeWidth="2" />
      <circle cx="50" cy="50" r="20" fill="none" stroke="#f9a8d4" strokeWidth="1" opacity="0.5" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#c4b5fd" strokeWidth="1" opacity="0.3" />
      {/* Small decorative flowers in corners */}
      {[
        { x: 20, y: 20 },
        { x: 80, y: 20 },
        { x: 20, y: 80 },
        { x: 80, y: 80 },
      ].map((pos, i) => (
        <g key={i}>
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx={pos.x}
              cy={pos.y - 6}
              rx="3"
              ry="6"
              fill="#f9a8d4"
              opacity="0.6"
              transform={`rotate(${angle} ${pos.x} ${pos.y})`}
            />
          ))}
          <circle cx={pos.x} cy={pos.y} r="3" fill="#c4b5fd" opacity="0.8" />
        </g>
      ))}
      {/* Center flower */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={angle}
          cx="50"
          cy="42"
          rx="5"
          ry="10"
          fill="#f9a8d4"
          opacity="0.4"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="6" fill="#c4b5fd" opacity="0.6" />
    </svg>
  );
}
