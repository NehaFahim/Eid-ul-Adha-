import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StarsBackground } from "@/components/StarsBackground";
import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/story")({
  component: StoryPage,
  head: () => ({
    meta: [
      { title: "The Story of Qurbani — Prophet Ibrahim (A.S)" },
      { name: "description", content: "A cinematic, scroll-driven retelling of the sacred story of Prophet Ibrahim's sacrifice." },
    ],
  }),
});

const scenes = [
  {
    n: "I",
    title: "The Dream",
    text: "In the stillness of night, Prophet Ibrahim (A.S) saw a vision — a command from his Lord to sacrifice what he loved most: his beloved son, Ismail (A.S).",
    bg: "linear-gradient(180deg, oklch(0.12 0.05 270), oklch(0.18 0.08 280))",
    emoji: "🌙",
  },
  {
    n: "II",
    title: "The Conversation",
    text: "Ibrahim spoke gently to his son. Ismail replied with words that echo through eternity: \"O my father, do as you are commanded. You will find me, inshaAllah, of the patient.\"",
    bg: "linear-gradient(180deg, oklch(0.18 0.08 280), oklch(0.25 0.1 60))",
    emoji: "👥",
  },
  {
    n: "III",
    title: "The Test",
    text: "Together they walked to the place of sacrifice in Mina. Every step was a battle between love and obedience — and obedience won.",
    bg: "linear-gradient(180deg, oklch(0.25 0.1 60), oklch(0.35 0.13 50))",
    emoji: "🏜️",
  },
  {
    n: "IV",
    title: "The Submission",
    text: "Ibrahim laid his son down. The blade was raised. The heavens held their breath. Faith had reached its highest summit.",
    bg: "linear-gradient(180deg, oklch(0.35 0.13 50), oklch(0.4 0.15 40))",
    emoji: "✨",
  },
  {
    n: "V",
    title: "The Ransom",
    text: "Allah called out: \"O Ibrahim! You have fulfilled the vision.\" A magnificent ram from Paradise was sent to take Ismail's place — divine mercy beyond measure.",
    bg: "linear-gradient(180deg, oklch(0.4 0.15 40), oklch(0.5 0.16 80))",
    emoji: "🐑",
  },
  {
    n: "VI",
    title: "The Celebration",
    text: "And so was born Eid-ul-Adha — the festival of sacrifice. A day of joy, gratitude, and remembrance, celebrated by the Ummah until the end of time.",
    bg: "linear-gradient(180deg, oklch(0.5 0.16 80), oklch(0.13 0.04 265))",
    emoji: "☪",
  },
];

function Scene({ s, i }: { s: (typeof scenes)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center px-6 py-24"
      style={{ background: s.bg }}
    >
      <motion.div style={{ y, opacity, scale }} className="max-w-3xl text-center relative z-10">
        <p className="font-arabic text-gold text-xl mb-4 tracking-widest">SCENE {s.n}</p>
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="text-7xl md:text-9xl mb-8 inline-block drop-shadow-[0_0_30px_oklch(0.82_0.14_85_/_0.6)]"
        >
          {s.emoji}
        </motion.div>
        <h2 className="font-display text-5xl md:text-7xl gradient-gold mb-8">{s.title}</h2>
        <p className="text-lg md:text-2xl text-foreground/85 leading-relaxed font-light italic">
          {s.text}
        </p>
      </motion.div>

      {/* Side ornaments */}
      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/30 text-4xl hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gold/30 text-4xl hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>
    </section>
  );
}

function StoryPage() {
  return (
    <>
      <StarsBackground />
      <Nav />
      <header className="relative flex min-h-screen items-center justify-center px-6 text-center pt-24">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="font-arabic text-3xl md:text-5xl text-gold mb-6 text-glow"
            dir="rtl"
          >
            قصة سيدنا إبراهيم
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-display text-5xl md:text-8xl gradient-gold mb-6"
          >
            The Sacrifice
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-xl text-foreground/70 italic"
          >
            A story of love, faith, and divine mercy. Scroll to begin.
          </motion.p>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20 text-gold text-3xl"
          >
            ↓
          </motion.div>
        </div>
      </header>

      <div>
        {scenes.map((s, i) => (
          <Scene key={s.n} s={s} i={i} />
        ))}
      </div>

      <section className="py-24 px-6 text-center">
        <p className="font-arabic text-3xl text-gold mb-4">تقبل الله منا ومنكم</p>
        <p className="text-foreground/70 mb-8 text-lg">May Allah accept from us and from you.</p>
        <Link
          to="/"
          className="inline-block rounded-full bg-gold px-8 py-4 font-medium text-primary-foreground hover:gold-glow transition"
        >
          ← Return Home
        </Link>
      </section>
    </>
  );
}