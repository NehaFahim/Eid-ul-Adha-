import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Eid-ul-Adha 2026 approx: May 26, 2026 (Dhul Hijjah 10) — already today in this scenario.
// Use next year as target for forward counting.
const TARGET = new Date("2027-05-16T06:00:00Z").getTime();

function diff() {
  const now = Date.now();
  const d = Math.max(0, TARGET - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d % 86400000) / 3600000),
    minutes: Math.floor((d % 3600000) / 60000),
    seconds: Math.floor((d % 60000) / 1000),
  };
}

export function Countdown() {
  const [t, setT] = useState(diff);
  useEffect(() => {
    const i = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(i);
  }, []);

  const items = [
    { l: "Days", v: t.days },
    { l: "Hours", v: t.hours },
    { l: "Minutes", v: t.minutes },
    { l: "Seconds", v: t.seconds },
  ];

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl gradient-gold mb-3"
        >
          Counting Down to Eid
        </motion.h2>
        <p className="text-foreground/60 mb-12">Until the next Eid-ul-Adha, inshaAllah</p>
        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {items.map((it) => (
            <div key={it.l} className="glass rounded-2xl p-4 md:p-8">
              <div className="font-display text-3xl md:text-6xl gradient-gold tabular-nums">
                {String(it.v).padStart(2, "0")}
              </div>
              <div className="mt-2 text-xs md:text-sm text-foreground/60 uppercase tracking-wider">
                {it.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}