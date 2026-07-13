import Countdown from "@/components/Countdown";
import RsvpForm from "@/components/RsvpForm";
import MusicToggle from "@/components/MusicToggle";
import Reveal from "@/components/Reveal";
import FloralCorner from "@/components/FloralCorner";

// =========================================================
// EDIT MAKLUMAT MAJLIS DI SINI
// =========================================================
const WEDDING = {
  bride: "Sumayyah",
  groom: "Afnan",
  brideFull: "Sumayyah binti (Nama Bapa)",
  groomFull: "Afnan bin (Nama Bapa)",
  brideParents: "Puteri kepada En. (Nama Bapa) & Pn. (Nama Ibu)",
  groomParents: "Putera kepada En. (Nama Bapa) & Pn. (Nama Ibu)",
  akadDate: "2026-11-14T09:00:00",
  akadDateDisplay: "14 November 2026 (Sabtu)",
  akadTime: "9:00 pagi",
  akadVenue: "Surau Al-Falah, Kota Bharu, Kelantan",
  resepsiDate: "2026-11-14T12:00:00",
  resepsiDateDisplay: "14 November 2026 (Sabtu)",
  resepsiTime: "12:00 tengah hari - 4:00 petang",
  resepsiVenue: "Dewan Serbaguna Taman Bahagia, Kota Bharu, Kelantan",
  mapsUrl: "https://maps.google.com/?q=Kota+Bharu+Kelantan",
  mapsEmbed:
    "https://maps.google.com/maps?q=Kota+Bharu+Kelantan&t=&z=13&ie=UTF8&iwloc=&output=embed",
};

function buildCalendarLink({ title, start, end, location, details }) {
  const format = (iso) => new Date(iso).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${format(start)}/${format(end)}`,
    details,
    location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export const metadata = {
  title: `${WEDDING.bride} & ${WEDDING.groom} | Kad Kahwin Digital`,
};

export default async function Home({ searchParams }) {
  // Next.js 15: searchParams is a Promise and must be awaited.
  const resolvedSearchParams = await searchParams;
  const guestName = (resolvedSearchParams?.to || "").toString().trim();

  const akadCalendarLink = buildCalendarLink({
    title: `Akad Nikah ${WEDDING.bride} & ${WEDDING.groom}`,
    start: WEDDING.akadDate,
    end: WEDDING.akadDate,
    location: WEDDING.akadVenue,
    details: "Majlis akad nikah. Jemputan khas untuk anda.",
  });

  const resepsiCalendarLink = buildCalendarLink({
    title: `Majlis Resepsi ${WEDDING.bride} & ${WEDDING.groom}`,
    start: WEDDING.resepsiDate,
    end: WEDDING.resepsiDate,
    location: WEDDING.resepsiVenue,
    details: "Majlis resepsi perkahwinan. Jemputan khas untuk anda.",
  });

  return (
    <main>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="eyebrow mb-3">Walimatul Urus</div>

        {guestName && (
          <p className="hero-invite-to">
            Kepada Yang Dihormati,
            <br />
            <strong>{guestName}</strong>
          </p>
        )}

        <div className="monogram">
          {WEDDING.bride.charAt(0)}
          <span style={{ color: "var(--gold)", margin: "0 0.15em" }}>&amp;</span>
          {WEDDING.groom.charAt(0)}
        </div>

        <h1 className="hero-names">
          {WEDDING.bride}
          <span className="hero-ampersand">&amp;</span>
          {WEDDING.groom}
        </h1>

        <p className="hero-date">{WEDDING.resepsiDateDisplay}</p>

        <Countdown targetDate={WEDDING.resepsiDate} />

        <div className="scroll-cue mt-4">
          <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
            <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="11" cy="10" r="2.5" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ---------------- DOA ---------------- */}
      <section className="section text-center">
        <FloralCorner position="tl" />
        <FloralCorner position="tr" />
        <div className="container">
          <Reveal>
            <p className="doa-text">
              &ldquo;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan
              untukmu daripada jenismu sendiri, supaya kamu merasai ketenteraman bersamanya,
              serta Dia menjadikan di antara kamu rasa kasih dan sayang. Sesungguhnya pada yang
              demikian itu terdapat tanda-tanda kebesaran Allah bagi kaum yang berfikir.&rdquo;
            </p>
            <p className="mt-3 font-italic" style={{ color: "var(--sage-deep)" }}>
              — Surah Ar-Rum, ayat 21 (petikan makna)
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- COUPLE ---------------- */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="text-center mb-5">
            <div className="eyebrow">Pengantin</div>
            <h2 className="section-title">Kami Yang Berbahagia</h2>
            <div className="divider-line" />
          </Reveal>

          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-11 col-sm-8 col-md-5">
              <Reveal>
                <div className="couple-card">
                  <div className="couple-photo-frame">{WEDDING.bride.charAt(0)}</div>
                  <h3 className="couple-name">{WEDDING.brideFull}</h3>
                  <p className="couple-parents">{WEDDING.brideParents}</p>
                </div>
              </Reveal>
            </div>

            <div className="col-auto d-none d-md-block">
              <span className="couple-heart">&#10084;</span>
            </div>

            <div className="col-11 col-sm-8 col-md-5">
              <Reveal>
                <div className="couple-card">
                  <div className="couple-photo-frame">{WEDDING.groom.charAt(0)}</div>
                  <h3 className="couple-name">{WEDDING.groomFull}</h3>
                  <p className="couple-parents">{WEDDING.groomParents}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- EVENT DETAILS ---------------- */}
      <section className="section">
        <FloralCorner position="bl" />
        <FloralCorner position="tr" />
        <div className="container">
          <Reveal className="text-center mb-5">
            <div className="eyebrow">Atur Cara Majlis</div>
            <h2 className="section-title">Jemputan Majlis</h2>
            <div className="divider-line" />
          </Reveal>

          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-5">
              <Reveal>
                <div className="event-card">
                  <div className="event-icon">&#128276;</div>
                  <h3 className="event-title">Akad Nikah</h3>
                  <div className="event-detail-row">
                    <span className="label">Tarikh</span>
                    <span>{WEDDING.akadDateDisplay}</span>
                  </div>
                  <div className="event-detail-row">
                    <span className="label">Masa</span>
                    <span>{WEDDING.akadTime}</span>
                  </div>
                  <div className="event-detail-row">
                    <span className="label">Tempat</span>
                    <span>{WEDDING.akadVenue}</span>
                  </div>
                  <a
                    href={akadCalendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-romantic mt-3"
                  >
                    + Tambah ke Kalendar
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="col-12 col-md-6 col-lg-5">
              <Reveal>
                <div className="event-card gold">
                  <div className="event-icon">&#127881;</div>
                  <h3 className="event-title">Majlis Resepsi</h3>
                  <div className="event-detail-row">
                    <span className="label">Tarikh</span>
                    <span>{WEDDING.resepsiDateDisplay}</span>
                  </div>
                  <div className="event-detail-row">
                    <span className="label">Masa</span>
                    <span>{WEDDING.resepsiTime}</span>
                  </div>
                  <div className="event-detail-row">
                    <span className="label">Tempat</span>
                    <span>{WEDDING.resepsiVenue}</span>
                  </div>
                  <a
                    href={resepsiCalendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-romantic mt-3"
                  >
                    + Tambah ke Kalendar
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- LOKASI ---------------- */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="text-center mb-4">
            <div className="eyebrow">Lokasi</div>
            <h2 className="section-title">Bagaimana Untuk Sampai</h2>
            <div className="divider-line" />
          </Reveal>
          <Reveal>
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 34px rgba(139,74,92,0.12)",
              }}
            >
              <iframe
                title="Lokasi Majlis"
                src={WEDDING.mapsEmbed}
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="text-center mt-3">
              <a
                href={WEDDING.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-romantic"
              >
                Buka di Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- GALLERY ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="text-center mb-5">
            <div className="eyebrow">Galeri</div>
            <h2 className="section-title">Detik Bahagia Kami</h2>
            <div className="divider-line" />
            <p className="font-italic mt-2" style={{ color: "var(--ink)", opacity: 0.7 }}>
              (Gantikan kotak di bawah dengan gambar sebenar di dalam folder /public/gallery)
            </p>
          </Reveal>
          <div className="row g-3">
            {[1, 2, 3, 4].map((n) => (
              <div className="col-6 col-md-3" key={n}>
                <Reveal>
                  <div className="gallery-item">S &amp; A</div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- RSVP ---------------- */}
      <section className="section section-alt" id="rsvp">
        <FloralCorner position="bl" />
        <FloralCorner position="br" />
        <div className="container">
          <Reveal className="text-center mb-5">
            <div className="eyebrow">RSVP</div>
            <h2 className="section-title">Sahkan Kehadiran Anda</h2>
            <div className="divider-line" />
            <p className="font-italic" style={{ color: "var(--ink)", opacity: 0.8 }}>
              Kehadiran anda adalah tanda kegembiraan kami. Sila sahkan sebelum{" "}
              {WEDDING.resepsiDateDisplay}.
            </p>
          </Reveal>
          <Reveal>
            <RsvpForm defaultName={guestName} />
          </Reveal>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer-romantic">
        <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>
          Terima Kasih
        </div>
        <h2 className="hero-names">
          {WEDDING.bride}
          <span className="hero-ampersand" style={{ color: "var(--gold-soft)" }}>
            &amp;
          </span>
          {WEDDING.groom}
        </h2>
        <p className="font-italic" style={{ opacity: 0.85 }}>
          Segala doa dan restu daripada anda amat kami hargai.
        </p>
        <p className="footer-note">Dibuat dengan penuh kasih sayang &middot; {WEDDING.resepsiDateDisplay}</p>
      </footer>

      <MusicToggle />
    </main>
  );
}
