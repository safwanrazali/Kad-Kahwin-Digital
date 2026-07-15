import Reveal from "@/components/Reveal";
import FloralCorner from "@/components/FloralCorner";
import RsvpForm from "@/components/RsvpForm";

export default function RsvpSection({ wedding, guestName }) {
  return (
    <section className="section" id="rsvp">
      <FloralCorner position="br" />
      <div className="container">
        <Reveal className="text-center mb-4">
          <div className="eyebrow">RSVP</div>
          <h2 className="section-title">Sahkan Kehadiran Anda</h2>
          <div className="divider-line" />
          <p className="font-italic" style={{ color: "var(--ink)", opacity: 0.8, fontSize: "0.9rem" }}>
            Kehadiran anda adalah tanda kegembiraan kami. Sila sahkan sebelum{" "}
            {wedding.resepsiDateDisplay}.
          </p>
        </Reveal>
        <Reveal>
          <RsvpForm defaultName={guestName} />
        </Reveal>
      </div>
    </section>
  );
}