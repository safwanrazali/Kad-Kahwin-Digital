"use client";

import { useRef, useState } from "react";

// Placeholder music control. Letak fail lagu sebenar di /public/music/kompang.mp3
// (atau tukar `src` di bawah) — butang ini akan berfungsi terus selepas itu.
export default function MusicToggle({ src = "/music/kompang.mp3", label = "Kompang Dipalu" }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Fail belum ada / autoplay disekat — senyap sahaja, boleh cuba tekan lagi.
      });
    }
    setPlaying(!playing);
  };

  return (
    <div className="music-pill-row">
      <audio ref={audioRef} src={src} loop preload="none" />
      <button
        type="button"
        className="music-pill"
        onClick={toggle}
        aria-label={playing ? "Jeda muzik latar" : "Main muzik latar"}
        title={playing ? "Jeda muzik" : "Main muzik"}
      >
        <span aria-hidden="true">&#8226;&#8226;&#8226;</span>
        <span>{label}</span>
        <span className={`note ${playing ? "spinning" : ""}`} aria-hidden="true">
          {playing ? "♫" : "♪"}
        </span>
      </button>
    </div>
  );
}