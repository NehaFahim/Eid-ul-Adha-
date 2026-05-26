import { motion } from "framer-motion";

const cards = [
  { title: "What is Qurbani?", body: "Qurbani is the sacred act of sacrificing an animal in the name of Allah during Eid-ul-Adha, commemorating Prophet Ibrahim's (A.S) ultimate test of faith." },
  { title: "Why It Matters", body: "It is a powerful symbol of submission, gratitude, and selflessness — a reminder that everything we own belongs to Allah." },
  { title: "Prophet Ibrahim (A.S)", body: "Commanded in a dream to sacrifice his beloved son Ismail (A.S), Ibrahim showed unwavering obedience. Allah replaced Ismail with a ram." },
  { title: "The Sunnah", body: "Following the tradition of the Prophet ﷺ — share one-third with family, one-third with friends, and one-third with the poor." },
  { title: "Ethical Sacrifice", body: "Animals must be treated with kindness, fed well, and slaughtered swiftly using the sharpest blade — never in sight of other animals." },
  { title: "Spiritual Meaning", body: "True qurbani is not the meat or blood that reaches Allah, but the taqwa (piety) and sincerity from your heart." },
];

export function QurbaniInfo() {
  return (
    <section id="qurbani" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-arabic text-gold text-xl mb-3">الأضحية</p>
          <h2 className="font-display text-4xl md:text-6xl gradient-gold mb-4">The Sacred Sacrifice</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.15 }}
              className="glass rounded-2xl p-8 hover:border-gold transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">✦</div>
              <h3 className="font-display text-2xl text-gold mb-3">{c.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{c.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}