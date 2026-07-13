import Countdown from "@/components/Countdown";
import RsvpForm from "@/components/RsvpForm";
import MusicToggle from "@/components/MusicToggle";
import BottomNav from "@/components/BottomNav";
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

  // Pasangan tuan rumah (pihak yang menjemput) — muncul di kad jemputan formal
  hostFather: "En. (Nama Bapa)",
  hostMother: "Pn. (Nama Ibu)",
  invitationText:
    "Dengan segala hormatnya menjemput Dato'/ Datin/ Tuan/ Puan/ Encik/ Cik dan seisi keluarga ke majlis perkahwinan puteri kami bersama pasangannya",

  contactPhone: "+60123456789",

  akadDate: "2026-11-14T09:00:00",
  akadDateDisplay: "14 November 2026 (Sabtu)",
  akadTime: "9:00 pagi",
  akadVenue: "Surau Al-Falah, Kota Bharu, Kelantan",
  resepsiDate: "2026-11-14T12:00:00",
  resepsiDay: "Sabtu",
  resepsiDateDisplay: "14 November 2026",
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
    <div className="site-shell">
      <div className="invite-frame">
        <MusicToggle />

        <main>
          {/* ---------------- HERO ---------------- */}
          <section className="hero">
            {guestName && (
              <p className="hero-invite-to">
                Kepada Yang Dihormati,
                <br />
                <strong>{guestName}</strong>
              </p>
            )}

            <div className="hero-eyebrow">Walimatulurus</div>

            <div className="hero-names-stack">
              <span className="name">{WEDDING.bride}</span>
              <span className="amp">&amp;</span>
              <span className="name">{WEDDING.groom}</span>
            </div>

            <div className="hero-date-block">
              <span className="day">{WEDDING.resepsiDay}</span>
              <span className="full-date">{WEDDING.resepsiDateDisplay}</span>
            </div>

            <Countdown targetDate={WEDDING.resepsiDate} />
          </section>

          {/* ---------------- FORMAL INVITATION LETTER ---------------- */}
          <section className="section">
            <FloralCorner position="tl" />
            <FloralCorner position="tr" />
            <div className="container">
              <Reveal>
                <div className="invite-letter">
                  <p className="bismillah font-arabic">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </p>

                  <p className="invite-greeting">ASSALAMUALAIKUM W.B.T</p>

                  <p className="invite-hosts">
                    {WEDDING.hostFather}
                    <span className="amp">&amp;</span>
                    {WEDDING.hostMother}
                  </p>

                  <p className="invite-body-text">{WEDDING.invitationText}</p>

                  <p className="invite-couple">
                    {WEDDING.groomFull}
                    <span className="amp">&amp;</span>
                    {WEDDING.brideFull}
                  </p>

                  <div className="invite-detail-row">
                    <span className="invite-detail-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="3.5" y="5" width="17" height="15" rx="2" />
                        <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="value">
                      {WEDDING.resepsiDay.toUpperCase()} {WEDDING.resepsiDateDisplay}
                    </span>
                  </div>

                  <div className="invite-detail-row">
                    <span className="invite-detail-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <circle cx="12" cy="12" r="8.5" />
                        <path d="M12 7.5V12l3 2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="value">{WEDDING.resepsiTime}</span>
                  </div>

                  <div className="invite-detail-row">
                    <span className="invite-detail-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" strokeLinejoin="round" />
                        <circle cx="12" cy="9.5" r="2.2" />
                      </svg>
                    </span>
                    <span className="value address">{WEDDING.resepsiVenue}</span>
                  </div>

                  <a href="#atur-cara" className="invite-more-link" aria-label="Lihat atur cara majlis">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ---------------- DOA ---------------- */}
          <section className="section section-alt text-center">
            <div className="container">
              <Reveal>
                <p className="doa-text">
                  &ldquo;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
                  pasangan untukmu daripada jenismu sendiri, supaya kamu merasai
                  ketenteraman bersamanya, serta Dia menjadikan di antara kamu rasa kasih
                  dan sayang.&rdquo;
                </p>
                <p className="mt-3 font-italic" style={{ color: "var(--slate)" }}>
                  — Surah Ar-Rum, ayat 21 (petikan makna)
                </p>
              </Reveal>
            </div>
          </section>

          {/* ---------------- COUPLE ---------------- */}
          <section className="section">
            <div className="container">
              <Reveal className="text-center mb-4">
                <div className="eyebrow">Pengantin</div>
                <h2 className="section-title">Kami Yang Berbahagia</h2>
                <div className="divider-line" />
              </Reveal>

              <Reveal>
                <div className="couple-card mb-3">
                  <div className="couple-photo-frame">{WEDDING.groom.charAt(0)}</div>
                  <h3 className="couple-name">{WEDDING.groomFull}</h3>
                  <p className="couple-parents">{WEDDING.groomParents}</p>
                </div>
              </Reveal>

              <span className="couple-heart">&#10084;</span>

              <Reveal>
                <div className="couple-card">
                  <div className="couple-photo-frame">{WEDDING.bride.charAt(0)}</div>
                  <h3 className="couple-name">{WEDDING.brideFull}</h3>
                  <p className="couple-parents">{WEDDING.brideParents}</p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ---------------- EVENT DETAILS ---------------- */}
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
          </section>

          {/* ---------------- LOKASI ---------------- */}
          <section className="section" id="lokasi">
            <div className="container">
              <Reveal className="text-center mb-3">
                <div className="eyebrow">Lokasi</div>
                <h2 className="section-title">Bagaimana Untuk Sampai</h2>
                <div className="divider-line" />
              </Reveal>
              <Reveal>
                <div
                  style={{
                    borderRadius: "18px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(44,59,92,0.12)",
                  }}
                >
                  <iframe
                    title="Lokasi Majlis"
                    src={WEDDING.mapsEmbed}
                    width="100%"
                    height="280"
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
          <section className="section section-alt">
            <div className="container">
              <Reveal className="text-center mb-4">
                <div className="eyebrow">Galeri</div>
                <h2 className="section-title">Detik Bahagia Kami</h2>
                <div className="divider-line" />
                <p className="font-italic mt-2" style={{ color: "var(--ink)", opacity: 0.7, fontSize: "0.85rem" }}>
                  (Gantikan kotak di bawah dengan gambar sebenar di dalam folder /public/gallery)
                </p>
              </Reveal>
              <div className="gallery-grid">
                {[1, 2, 3, 4].map((n) => (
                  <Reveal key={n}>
                    <div className="gallery-item">S &amp; A</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ---------------- RSVP ---------------- */}
          <section className="section" id="rsvp">
            <FloralCorner position="br" />
            <div className="container">
              <Reveal className="text-center mb-4">
                <div className="eyebrow">RSVP</div>
                <h2 className="section-title">Sahkan Kehadiran Anda</h2>
                <div className="divider-line" />
                <p className="font-italic" style={{ color: "var(--ink)", opacity: 0.8, fontSize: "0.9rem" }}>
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
            <div className="eyebrow" style={{ color: "var(--slate-soft)" }}>
              Terima Kasih
            </div>
            <div className="hero-names-stack">
              <span className="name">{WEDDING.bride}</span>
              <span className="amp" style={{ color: "var(--slate-soft)" }}>&amp;</span>
              <span className="name">{WEDDING.groom}</span>
            </div>
            <p className="font-italic" style={{ opacity: 0.85 }}>
              Segala doa dan restu daripada anda amat kami hargai.
            </p>
            <p className="footer-note">
              Dibuat dengan penuh kasih sayang &middot; {WEDDING.resepsiDateDisplay}
            </p>
          </footer>
        </main>

        <BottomNav
          calendarLink={resepsiCalendarLink}
          phone={WEDDING.contactPhone}
          mapsUrl={WEDDING.mapsUrl}
        />
      </div>
    </div>
  );
}