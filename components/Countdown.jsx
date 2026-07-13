"use client";

import { useEffect, useState } from "react";

function getTimeLeft(targetDate) {
  const total = new Date(targetDate).getTime() - Date.now();
  if (total <= 0) return { total: 0, hari: 0, jam: 0, minit: 0, saat: 0 };
  return {
    total,
    hari: Math.floor(total / (1000 * 60 * 60 * 24)),
    jam: Math.floor((total / (1000 * 60 * 60)) % 24),
    minit: Math.floor((total / (1000 * 60)) % 60),
    saat: Math.floor((total / 1000) % 60),
  };
}

export default function Countdown({ targetDate }) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(getTimeLeft(targetDate));
    const timer = setInterval(() => {
      setTime(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!time) {
    // Avoid hydration mismatch: render nothing until client mounts
    return <div className="countdown" style={{ minHeight: "84px" }} />;
  }

  if (time.total <= 0) {
    return (
      <p className="font-italic mt-3" style={{ color: "var(--rosewood-deep)" }}>
        Kami telah pun bergelar suami isteri. Terima kasih atas doa &amp; restu.
      </p>
    );
  }

  const items = [
    { label: "Hari", value: time.hari },
    { label: "Jam", value: time.jam },
    { label: "Minit", value: time.minit },
    { label: "Saat", value: time.saat },
  ];

  return (
    <div className="countdown">
      {items.map((item) => (
        <div className="countdown-item" key={item.label}>
          <span className="countdown-number">{String(item.value).padStart(2, "0")}</span>
          <span className="countdown-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
