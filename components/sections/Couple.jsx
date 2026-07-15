import Reveal from "@/components/Reveal";

export default function Couple({ wedding }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="text-center mb-4">
          <div className="eyebrow">Pengantin</div>
          <h2 className="section-title">Kami Yang Berbahagia</h2>
          <div className="divider-line" />
        </Reveal>

        <Reveal>
          <div className="couple-card">
            <div className="couple-photo-frame">{wedding.bride.charAt(0)}</div>
            <h3 className="couple-name">{wedding.brideFull}</h3>
            <p className="couple-parents">{wedding.brideParents}</p>
          </div>
        </Reveal>

        <div className="couple-ring">
          <img src="/gallery/weddingring.png" alt="wedding ring" width={70}/>
        </div>

        <Reveal>
          <div className="couple-card mb-3">
            <div className="couple-photo-frame">{wedding.groom.charAt(0)}</div>
            <h3 className="couple-name">{wedding.groomFull}</h3>
            <p className="couple-parents">{wedding.groomParents}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}