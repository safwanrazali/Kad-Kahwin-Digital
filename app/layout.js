import { Playfair_Display, Cormorant_Garamond, Poppins, Mrs_Saint_Delafield } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const scriptFont = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script-face",
});

export const metadata = {
  title: "Sumayyah & Afnan | Kad Kahwin Digital",
  description:
    "Kad jemputan digital majlis perkahwinan Sumayyah & Afnan. Sila RSVP kehadiran anda di sini.",
  openGraph: {
    title: "Sumayyah & Afnan | Kad Kahwin Digital",
    description:
      "Dengan penuh kesyukuran, jemputan mesra buat menghadiri majlis perkahwinan kami.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2c3b5c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ms">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${poppins.variable} ${scriptFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}