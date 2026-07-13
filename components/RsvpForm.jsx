"use client";

import { useState } from "react";

export default function RsvpForm({ defaultName = "" }) {
  const [form, setForm] = useState({
    nama: defaultName,
    kehadiran: "Hadir",
    bilangan: 1,
    ucapan: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nama.trim()) {
      setStatus("error");
      setErrorMsg("Sila isi nama penuh anda.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Penghantaran gagal.");
      }
      setStatus("success");
      setForm((prev) => ({ ...prev, ucapan: "" }));
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Maaf, RSVP tidak dapat dihantar. Sila cuba sekali lagi atau hubungi terus pengantin."
      );
    }
  };

  return (
    <div className="rsvp-card">
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label-romantic" htmlFor="nama">
            Nama Penuh
          </label>
          <input
            id="nama"
            type="text"
            className="form-control form-control-romantic"
            placeholder="Nama anda"
            value={form.nama}
            onChange={handleChange("nama")}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label-romantic">Kehadiran</label>
          <div className="attend-toggle">
            {["Hadir", "Tidak Hadir"].map((opt) => (
              <label
                key={opt}
                className={`attend-option ${form.kehadiran === opt ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="kehadiran"
                  value={opt}
                  checked={form.kehadiran === opt}
                  onChange={handleChange("kehadiran")}
                />
                {opt === "Hadir" ? "Ya, Hadir" : "Tidak Hadir"}
              </label>
            ))}
          </div>
        </div>

        {form.kehadiran === "Hadir" && (
          <div className="mb-3">
            <label className="form-label-romantic" htmlFor="bilangan">
              Bilangan Kehadiran (termasuk anda)
            </label>
            <select
              id="bilangan"
              className="form-select form-select-romantic"
              value={form.bilangan}
              onChange={handleChange("bilangan")}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} orang
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mb-3">
          <label className="form-label-romantic" htmlFor="ucapan">
            Ucapan &amp; Doa Restu (pilihan)
          </label>
          <textarea
            id="ucapan"
            className="form-control form-control-romantic"
            rows={3}
            placeholder="Tinggalkan ucapan untuk pengantin..."
            value={form.ucapan}
            onChange={handleChange("ucapan")}
          />
        </div>

        <button
          type="submit"
          className="btn btn-romantic w-100"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Menghantar..." : "Hantar RSVP"}
        </button>

        {status === "success" && (
          <div className="rsvp-alert success">
            Terima kasih, {form.nama}! RSVP anda telah diterima. 💐
          </div>
        )}
        {status === "error" && errorMsg && (
          <div className="rsvp-alert error">{errorMsg}</div>
        )}
      </form>
    </div>
  );
}
