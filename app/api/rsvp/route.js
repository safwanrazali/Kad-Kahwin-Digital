import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { nama, kehadiran, bilangan, ucapan } = body;

    if (!nama || typeof nama !== "string" || !nama.trim()) {
      return NextResponse.json(
        { ok: false, message: "Nama diperlukan." },
        { status: 400 }
      );
    }

    const gasUrl = process.env.GAS_URL;
    if (!gasUrl) {
      console.error("GAS_URL belum ditetapkan dalam .env / environment variables.");
      return NextResponse.json(
        {
          ok: false,
          message:
            "Sistem RSVP belum disambungkan ke Google Sheets. Sila tetapkan GAS_URL.",
        },
        { status: 500 }
      );
    }

    const payload = {
      nama: nama.trim(),
      kehadiran: kehadiran === "Hadir" ? "Hadir" : "Tidak Hadir",
      bilangan: kehadiran === "Hadir" ? Number(bilangan) || 1 : 0,
      ucapan: (ucapan || "").trim(),
      masa: new Date().toISOString(),
    };

    const gasRes = await fetch(gasUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Google Apps Script web apps sometimes respond with a redirect;
      // fetch follows redirects by default which is what we want here.
    });

    if (!gasRes.ok) {
      const text = await gasRes.text().catch(() => "");
      console.error("Google Apps Script error:", gasRes.status, text);
      return NextResponse.json(
        { ok: false, message: "Google Sheets menolak data ini." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("RSVP route error:", err);
    return NextResponse.json(
      { ok: false, message: "Ralat pelayan. Sila cuba lagi." },
      { status: 500 }
    );
  }
}
