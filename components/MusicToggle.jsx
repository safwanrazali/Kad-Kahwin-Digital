"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicToggle({ src = "/music/music 1.mp3", label = "Kompang Dipalu" }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.10;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    const startFromGate = () => {
      audio.play().catch(() => {});
    };
    window.addEventListener("start-music", startFromGate);

    // cuba juga autoplay senyap-senyap kalau browser benarkan (desktop kadang boleh)
    audio.play().catch(() => {});

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      window.removeEventListener("start-music", startFromGate);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
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