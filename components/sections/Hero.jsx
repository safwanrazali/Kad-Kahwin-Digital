import Countdown from "@/components/Countdown";
import FloralArt from "@/components/FloralArt";

export default function Hero({ wedding }) {
  return (
    <section className="hero">
      <FloralArt variant="top" />
      <FloralArt variant="bottom" />

      <div className="hero-content">
        <div className="hero-eyebrow">Walimatulurus</div>

        <div className="hero-names-stack">
          <span className="name">{wedding.bride}</span>
          <span className="name">&amp;</span>
          <span className="name">{wedding.groom}</span>
        </div>

        <div className="hero-date-block">
          <span className="day">{wedding.resepsiDay}</span>
          <span className="full-date">{wedding.resepsiDateDisplay}</span>
        </div>

        <Countdown targetDate={wedding.resepsiDate} />
      </div>
    </section>
  );
}