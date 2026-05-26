import { motion } from "framer-motion";

const quotes = [
  { ar: "إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ", en: "Indeed, my prayer, my sacrifice, my living and my dying are for Allah, Lord of the worlds.", src: "Qur'an 6:162" },
  { ar: "لَن يَنَالَ اللَّهَ لُحُومُهَا وَلَا دِمَاؤُهَا وَلَٰكِن يَنَالُهُ التَّقْوَىٰ مِنكُمْ", en: "Their meat will not reach Allah, nor will their blood, but what reaches Him is piety from you.", src: "Qur'an 22:37" },
  { ar: "مَنْ لَا يَرْحَمْ لَا يُرْحَمْ", en: "He who shows no mercy will not be shown mercy.", src: "Hadith — Bukhari" },
];

export function Quotes() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl gradient-gold mb-16 text-center"
        >
          Words of Light
        </motion.h2>
        <div className="space-y-6">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 md:p-12"
            >
              <p dir="rtl" className="font-arabic text-2xl md:text-3xl text-gold leading-loose mb-4">
                {q.ar}
              </p>
              <p className="text-lg md:text-xl text-foreground/80 italic">"{q.en}"</p>
              <p className="mt-4 text-sm text-gold/70 uppercase tracking-widest">— {q.src}</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}