import Reveal from "@/components/Reveal";

export default function LocationSection({ wedding }) {
  return (
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
              src={wedding.mapsEmbed}
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center mt-3">
            <a
              href={wedding.mapsUrl}
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
  );
}