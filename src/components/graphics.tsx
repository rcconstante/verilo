type SmallIconName = "bolt" | "chart" | "heart" | "scan";
export function SmallIcon({ name }: { name: SmallIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "bolt" && <path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z" />}
      {name === "chart" && (
        <>
          <path d="M4 4v16h16M8 15V9m5 6V5m5 10v-4" />
          <path d="m15 4 3-2 3 2" />
        </>
      )}
      {name === "heart" && (
        <>
          <path d="M20 4c-3-2-6 0-8 3-2-3-5-5-8-3-5 4 1 11 8 16 7-5 13-12 8-16Z" />
          <path d="m8 10 3 3 5-6" />
        </>
      )}
      {name === "scan" && (
        <>
          <path d="M8 3H4v4m12-4h4v4M4 16v4h4m12-4v4h-4" />
          <circle cx="11" cy="11" r="5" />
          <path d="m15 15 5 5M9 11h4m-2-2v4" />
        </>
      )}
    </svg>
  );
}
export function HeroTile({ variant }: { variant: "spark" | "leaf" | "orbit" }) {
  return (
    <span className={`hero-tile tile-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 110 72" fill="none">
        {variant === "spark" && (
          <>
            <path
              d="M64 13c0 15-3 18-18 18 15 0 18 3 18 18 0-15 3-18 18-18-15 0-18-3-18-18Z"
              fill="#7cf3c6"
              stroke="#7cf3c6"
              strokeWidth="7"
              strokeLinejoin="round"
            />
            <rect x="19" y="54" width="24" height="7" rx="3.5" fill="#272d2a" />
          </>
        )}
        {variant === "leaf" && (
          <>
            <path
              d="M12 17c28-7 47 10 49 39C31 62 14 48 12 17Z"
              fill="#263a31"
            />
            <path
              d="M73 4c-7 19-5 29 9 38 10 7 10 15 6 30h22V0H75Z"
              fill="#263a31"
            />
            <path
              d="m30 33 20 27"
              stroke="#adff43"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </>
        )}
        {variant === "orbit" && (
          <>
            <path
              d="M29 13c0 12-2 15-14 15 12 0 14 3 14 15 0-12 3-15 15-15-12 0-15-3-15-15Z"
              fill="#81f0cf"
            />
            <ellipse
              cx="83"
              cy="55"
              rx="36"
              ry="10"
              transform="rotate(35 83 55)"
              stroke="#caff7b"
              strokeWidth="7"
            />
            <path
              d="m76 38 34 34"
              stroke="#a3e9ab"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </span>
  );
}
