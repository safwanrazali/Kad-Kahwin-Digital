import IntroGate from "@/components/IntroGate";
import MusicToggle from "@/components/MusicToggle";
import BottomNav from "@/components/BottomNav";

import Hero from "@/components/sections/Hero";
import InviteLetter from "@/components/sections/InviteLetter";
import Doa from "@/components/sections/Doa";
import Couple from "@/components/sections/Couple";
import EventDetails from "@/components/sections/EventDetails";
import LocationSection from "@/components/sections/LocationSection";
import GallerySection from "@/components/sections/GallerySection";
import RsvpSection from "@/components/sections/RsvpSection";
import FooterSection from "@/components/sections/FooterSection";

import { getWeddingData } from "@/lib/wedding";

export const metadata = {
  title: `${getWeddingData().bride} & ${getWeddingData().groom} | Kad Kahwin Digital`,
};

export default async function Home({ searchParams }) {
  // Next.js 15: searchParams ialah Promise, kena await.
  const resolvedSearchParams = await searchParams;
  const guestName = (resolvedSearchParams?.to || "").toString().trim();

  const wedding = getWeddingData();

  return (
    <div className="site-shell">
      <div className="invite-frame">
        <MusicToggle />
        <IntroGate brideName={wedding.bride} groomName={wedding.groom} />

        <main>
          <Hero wedding={wedding} />
          <InviteLetter wedding={wedding} />
          <Doa />
          <Couple wedding={wedding} />
          <EventDetails wedding={wedding} />
          <LocationSection wedding={wedding} />
          <GallerySection />
          <RsvpSection wedding={wedding} guestName={guestName} />
          <FooterSection wedding={wedding} />
        </main>

        <BottomNav
          calendarLink={wedding.resepsiCalendarLink}
          phone={wedding.contactPhone}
          mapsUrl={wedding.mapsUrl}
        />
      </div>
    </div>
  );
}