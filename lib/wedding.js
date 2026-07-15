// =========================================================
// SUMBER DATA MAJLIS PERKAHWINAN
// =========================================================
// Fail ini bertindak sebagai "internal API" untuk kad kahwin —
// semua maklumat majlis (nama, tarikh, tempat, dll.) diurus DI SINI SAHAJA.
// Komponen lain hanya "consume" data ini melalui getWeddingData(),
// tak perlu tahu dari mana data datang.
//
// ---------------------------------------------------------
// NAK TUKAR MAKLUMAT MAJLIS? Edit objek WEDDING di bawah sahaja.
// ---------------------------------------------------------
// Nak sambungkan ke Google Sheet / CMS / database pada masa depan?
// Cukup tukar isi getWeddingData() (cth. fetch dari API luar) —
// semua komponen lain kekal sama, tak perlu diubah langsung.
// =========================================================

const WEDDING = {
  bride: "Sumayyah",
  groom: "Afnan",
  brideFull: "Sumayyah binti Azman",
  groomFull: "Afnan Syahir bin Jamal",
  brideParents: "Puteri kepada En. Azman Bin Akop & Pn. Rosni Binti Abdullah",
  groomParents: "Putera kepada En. Jamal Bin Yusoff & Pn. Rosmaizar Binti Mokhtar",

  // Pasangan tuan rumah (pihak yang menjemput) — muncul di kad jemputan formal
  hostFather: "En. Azman Bin Akop",
  hostMother: "Pn. Rosni Binti Abdullah",
  invitationText:
    "Dengan segala hormatnya menjemput Dato'/ Datin/ Tuan/ Puan/ Encik/ Cik dan seisi keluarga ke majlis perkahwinan puteri kami bersama pasangannya",

  contactPhone: "+60123456789",

  akadDate: "2026-10-03T12:00:00",
  akadDateDisplay: "3 Oktober 2026 (Sabtu)",
  akadTime: "12:00 tengah hari - 1:00 petang",
  akadVenue: "Capredoca White Palace, Bangi",

  resepsiDate: "2026-10-03T12:00:00",
  resepsiDay: "Sabtu",
  resepsiDateDisplay: "3 Oktober 2026",
  resepsiTime: "12:00 tengah hari - 4:00 petang",
  resepsiVenue: "Capredoca White Palace, Bangi",

  mapsUrl: "https://maps.google.com/?q=Capredoca+White+Palace+Bangi",
  mapsEmbed:
    "https://maps.google.com/maps?q=2.9193584,101.7526136&z=17&output=embed",
};

function formatGCalDate(iso) {
  return new Date(iso).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function buildCalendarLink({ title, start, end, location, details }) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${formatGCalDate(start)}/${formatGCalDate(end)}`,
    details,
    location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Titik masuk TUNGGAL untuk dapatkan semua data majlis + link terbitan
 * (Google Calendar links dll.). Semua page/component patut panggil
 * fungsi ini sahaja — bukan import WEDDING terus.
 */
export function getWeddingData() {
  const akadCalendarLink = buildCalendarLink({
    title: `Akad Nikah ${WEDDING.bride} & ${WEDDING.groom}`,
    start: WEDDING.akadDate,
    end: WEDDING.akadDate,
    location: WEDDING.akadVenue,
    details: "Majlis akad nikah. Jemputan khas untuk anda.",
  });

  const resepsiCalendarLink = buildCalendarLink({
    title: `Majlis Resepsi ${WEDDING.bride} & ${WEDDING.groom}`,
    start: WEDDING.resepsiDate,
    end: WEDDING.resepsiDate,
    location: WEDDING.resepsiVenue,
    details: "Majlis resepsi perkahwinan. Jemputan khas untuk anda.",
  });

  return {
    ...WEDDING,
    akadCalendarLink,
    resepsiCalendarLink,
  };
}