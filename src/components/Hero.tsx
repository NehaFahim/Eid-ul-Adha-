import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const animals = ["🐐", "🐄", "🐑", "🐪"];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-24">
      {/* Moon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-24 right-[8%] md:right-[15%]"
      >
        <div
          className="h-32 w-32 md:h-44 md:w-44 rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 35%, oklch(0.96 0.05 90), oklch(0.78 0.12 80))",
            boxShadow: "0 0 80px oklch(0.82 0.14 85 / 0.7), 0 0 160px oklch(0.82 0.14 85 / 0.35)",
          }}
        />
      </motion.div>

      {/* Mosque silhouette */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 right-0 w-full opacity-40"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        style={{ height: "30vh" }}
      >
        <defs>
          <linearGradient id="m" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.13 0.04 265)" stopOpacity="0" />
            <stop offset="100%" stopColor="oklch(0.04 0.02 265)" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#m)"
          d="M0,300 L0,200 L80,200 L80,150 L120,150 L120,180 Q150,140 180,180 L180,150 L220,150 L220,200 L320,200 L320,120 Q360,40 400,120 L400,200 L500,200 L500,180 L560,180 Q600,80 640,180 L700,180 L700,200 L820,200 L820,140 Q860,60 900,140 L900,200 L1000,200 L1000,170 L1060,170 L1060,200 L1200,200 L1200,300 Z"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-arabic text-2xl md:text-4xl text-gold mb-6 text-glow"
          dir="rtl"
        >
          عيد الأضحى مبارك
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-display text-5xl md:text-8xl font-semibold gradient-gold leading-tight"
        >
          Eid-ul-Adha Mubarak
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 text-base md:text-xl text-foreground/70 max-w-2xl mx-auto"
        >
          May Allah accept your sacrifices and bless your life with peace, prosperity, and unwavering faith.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/story"
            className="rounded-full bg-gold px-8 py-4 font-medium text-primary-foreground hover:gold-glow transition-all hover:scale-105"
          >
            Explore Story of Qurbani →
          </Link>
          <a
            href="#qurbani"
            className="rounded-full glass px-8 py-4 font-medium text-foreground hover:border-gold transition"
          >
            Learn More
          </a>
        </motion.div>

        {/* Floating animals */}
        <div className="mt-16 flex justify-center gap-8 md:gap-16">
          {animals.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 1, delay: 1.5 + i * 0.2 },
                y: { duration: 3 + i * 0.3, delay: 1.8 + i * 0.2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="text-4xl md:text-6xl drop-shadow-[0_0_15px_oklch(0.82_0.14_85_/_0.5)]"
            >
              {a}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}