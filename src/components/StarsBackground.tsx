import { useMemo } from "react";
import { motion } from "framer-motion";

export function StarsBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
      })),
    [],
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map(() => ({
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 12,
        size: Math.random() * 3 + 1,
      })),
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden islamic-pattern">
      {stars.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
        />
      ))}
      {particles.map((p, i) => (
        <motion.span
          key={`p${i}`}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: -10,
            width: p.size,
            height: p.size,
            background: "oklch(0.82 0.14 85 / 0.6)",
            boxShadow: "0 0 8px oklch(0.82 0.14 85 / 0.8)",
          }}
          animate={{ y: [-0, -1200], opacity: [0, 1, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}