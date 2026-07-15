import Reveal from "@/components/Reveal";
import FloralCorner from "@/components/FloralCorner";

export default function EventDetails({ wedding }) {
  return (
    <section className="section section-alt" id="atur-cara">
      <FloralCorner position="bl" />
      <div className="container">
        <Reveal className="text-center mb-4">
          <div className="eyebrow">Atur Cara Majlis</div>
          <h2 className="section-title">Jemputan Majlis</h2>
          <div className="divider-line" />
        </Reveal>

        <Reveal>
          <div className="event-card mb-3">
            <div className="event-icon">&#128276;</div>
            <h3 className="event-title">Akad Nikah</h3>
            <div className="event-detail-row">
              <span className="label">Tarikh</span>
              <span className="label">{wedding.akadDateDisplay}</span>
            </div>
            <div className="event-detail-row">
              <span className="label">Masa</span>
              <span className="label">{wedding.akadTime}</span>
            </div>
            <div className="event-detail-row">
              <span className="label">Tempat</span>
              <span className="label">{wedding.akadVenue}</span>
            </div>
            <a
              href={wedding.akadCalendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-romantic mt-3"
            >
              + Tambah ke Kalendar
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="event-card gold">
            <div className="event-icon">&#127881;</div>
            <h3 className="event-title">Majlis Resepsi</h3>
            <div className="event-detail-row">
              <span className="label">Tarikh</span>
              <span className="label">{wedding.resepsiDateDisplay}</span>
            </div>
            <div className="event-detail-row">
              <span className="label">Masa</span>
              <span className="label">{wedding.resepsiTime}</span>
            </div>
            <div className="event-detail-row">
              <span className="label">Tempat</span>
              <span className="label">{wedding.resepsiVenue}</span>
            </div>
            <a
              href={wedding.resepsiCalendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-romantic mt-3"
            >
              + Tambah ke Kalendar
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}