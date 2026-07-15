export default function FooterSection({ wedding }) {
  return (
    <footer className="footer-romantic">
      <div className="eyebrow" style={{ color: "var(--slate-soft)" }}>
        Terima Kasih
      </div>
      <div className="hero-names-stack">
        <span className="name">{wedding.bride}</span>
        <span className="amp" style={{ color: "var(--slate-soft)" }}>&amp;</span>
        <span className="name">{wedding.groom}</span>
      </div>
      <p className="font-italic" style={{ opacity: 0.85 }}>
        Segala doa dan restu daripada anda amat kami hargai.
      </p>
      <p className="footer-note">
        Dibuat dengan penuh kasih sayang &middot; {wedding.resepsiDateDisplay}
      </p>
    </footer>
  );
}