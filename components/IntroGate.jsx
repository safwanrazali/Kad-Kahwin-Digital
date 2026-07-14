"use client";

import { useState } from "react";

export default function IntroGate({ brideName, groomName }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    window.dispatchEvent(new Event("start-music"));
    setOpen(true);
  };

  if (open) return null;

  return (
    <div className="intro-gate">
      <div className="intro-gate-inner">
        <div className="intro-gate-names">
          {brideName} <br /> &amp; <br /> {groomName}

        </div>
        <button type="button" className="btn-romantic intro-gate-btn" onClick={handleOpen}>
          Buka
        </button>
      </div>
    </div>
  );
}