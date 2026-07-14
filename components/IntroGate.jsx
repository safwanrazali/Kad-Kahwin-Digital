"use client";

import { useEffect, useState } from "react";

export default function IntroGate({ brideName, groomName }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Kunci scroll body selagi kad belum dibuka
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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