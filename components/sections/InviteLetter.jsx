import Reveal from "@/components/Reveal";
import FloralCorner from "@/components/FloralCorner";

export default function InviteLetter({ wedding }) {
  return (
    <section className="section">
      
      <div className="container">
        <Reveal>
          <div className="invite-letter">
            <p className="bismillah font-arabic">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>

            <p className="invite-greeting">ASSALAMUALAIKUM W.B.T</p>

            <p className="invite-hosts">
              {wedding.hostFather}
              <span className="amp">&amp;</span>
              {wedding.hostMother}
            </p>

            <p className="invite-body-text">{wedding.invitationText}</p>

            <p className="invite-couple">
              {wedding.brideFull}
              <span className="amp">&amp;</span>
              {wedding.groomFull}
            </p>

            <div className="invite-detail-row">
              <span className="invite-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="5" width="17" height="15" rx="2" />
                  <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
                </svg>
              </span>
              <span className="value">
                {wedding.resepsiDay.toUpperCase()} {wedding.resepsiDateDisplay}
              </span>
            </div>

            <div className="invite-detail-row">
              <span className="invite-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 7.5V12l3 2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="value">{wedding.resepsiTime}</span>
            </div>

            <div className="invite-detail-row">
              <span className="invite-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" strokeLinejoin="round" />
                  <circle cx="12" cy="9.5" r="2.2" />
                </svg>
              </span>
              <span className="value address">{wedding.resepsiVenue}</span>
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
  );
}