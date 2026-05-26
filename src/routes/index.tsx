import { createFileRoute } from "@tanstack/react-router";
import { StarsBackground } from "@/components/StarsBackground";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { AnimalsSection } from "@/components/AnimalsSection";
import { QurbaniInfo } from "@/components/QurbaniInfo";
import { Countdown } from "@/components/Countdown";
import { Quotes } from "@/components/Quotes";
import { Dua } from "@/components/Dua";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Eid-ul-Adha Mubarak — An Interactive Islamic Experience" },
      { name: "description", content: "Celebrate Eid-ul-Adha with a cinematic journey through the story of Qurbani, Prophet Ibrahim, and the spirit of sacrifice." },
      { property: "og:title", content: "Eid-ul-Adha Mubarak" },
      { property: "og:description", content: "A cinematic Islamic experience celebrating the sacred Qurbani." },
    ],
  }),
});

function Index() {
  return (
    <>
      <StarsBackground />
      <Nav />
      <main>
        <Hero />
        <AnimalsSection />
        <QurbaniInfo />
        <Countdown />
        <Quotes />
        <Dua />
      </main>
      <Footer />
    </>
  );
}
