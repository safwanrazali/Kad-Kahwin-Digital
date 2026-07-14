"use client";

import { useRef, useState } from "react";

export default function MusicToggle({ src = "/music/music 1.mp3", label = "Kompang Dipalu" }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
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
        aria-label={playing ? `Jeda ${label}` : `Main ${label}`}
        title={playing ? "Jeda muzik" : "Main muzik"}
      >
        <span className={`note ${playing ? "spinning" : ""}`} aria-hidden="true">
          {playing ? "♫" : "♪"}
        </span>
      </button>
    </div>
  );
}