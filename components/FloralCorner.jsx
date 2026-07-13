export default function FloralCorner({ position = "tl" }) {
  return (
    <svg
      className={`floral-corner ${position}`}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 6C36 8 52 24 56 50C60 76 48 96 60 118"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 6C10 30 22 44 44 50"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <ellipse cx="30" cy="16" rx="10" ry="6" transform="rotate(-25 30 16)" fill="currentColor" opacity="0.55" />
      <ellipse cx="48" cy="34" rx="8" ry="5" transform="rotate(20 48 34)" fill="currentColor" opacity="0.4" />
      <circle cx="58" cy="52" r="6" fill="var(--gold, #c9a268)" opacity="0.8" />
      <circle cx="58" cy="52" r="10" stroke="var(--gold, #c9a268)" strokeWidth="1" opacity="0.5" />
      <path
        d="M22 20C18 12 22 4 30 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.6"
      />
      <ellipse cx="70" cy="80" rx="5" ry="9" transform="rotate(60 70 80)" fill="currentColor" opacity="0.3" />
      <ellipse cx="62" cy="100" rx="5" ry="9" transform="rotate(30 62 100)" fill="currentColor" opacity="0.25" />
    </svg>
  );
}
