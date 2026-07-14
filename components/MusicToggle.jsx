"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicToggle({ src = "/music/music 1.mp3", label = "Kompang Dipalu" }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5; // 50%

    // Ikon sentiasa ikut status SEBENAR audio, tak kira macam mana ia start
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    let cleanupFallback = () => {};

    audio.play().catch(() => {
      // Autoplay disekat browser — main automatik pada interaksi pertama
      const resume = () => {
        audio.play().catch(() => {});
      };
      window.addEventListener("pointerdown", resume, { once: true });
      window.addEventListener("touchstart", resume, { once: true });
      window.addEventListener("scroll", resume, { once: true });
      cleanupFallback = () => {
        window.removeEventListener("pointerdown", resume);
        window.removeEventListener("touchstart", resume);
        window.removeEventListener("scroll", resume);
      };
    });

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      cleanupFallback();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    // Semak status SEBENAR audio, bukan state React
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