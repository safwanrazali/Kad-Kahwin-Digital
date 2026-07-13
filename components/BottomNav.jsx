export default function BottomNav({ calendarLink, phone, mapsUrl }) {
  return (
    <nav className="bottom-nav" aria-label="Navigasi pantas">
      <a href="#rsvp" className="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
        </svg>
        RSVP
      </a>
      <a
        href={calendarLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bottom-nav-item"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
        </svg>
        Kalendar
      </a>
      <a href={`tel:${phone}`} className="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 4h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 6.2 2 2 0 0 1 6 4Z" strokeLinejoin="round" />
        </svg>
        Telefon
      </a>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bottom-nav-item"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" strokeLinejoin="round" />
          <circle cx="12" cy="9.5" r="2.2" />
        </svg>
        Lokasi
      </a>
    </nav>
  );
}