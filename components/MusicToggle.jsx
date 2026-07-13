"use client";

import { useRef, useState } from "react";

export default function MusicToggle({ src = "/music/nasyid.mp3" }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Autoplay/permission errors are silently ignored; user can tap again.
      });
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="none" />
      <button
        type="button"
        className={`music-toggle ${playing ? "spinning" : ""}`}
        onClick={toggle}
        aria-label={playing ? "Jeda muzik latar" : "Main muzik latar"}
        title={playing ? "Jeda muzik" : "Main muzik"}
      >
        {playing ? "♫" : "♪"}
      </button>
    </>
  );
}
