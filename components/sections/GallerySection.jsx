import Reveal from "@/components/Reveal";

export default function GallerySection() {
  return (
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
  );
}