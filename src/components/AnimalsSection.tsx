import { motion } from "framer-motion";

const animals = [
  { emoji: "🐐", name: "Goat", msg: "A symbol of humble sacrifice. Treat them with gentleness — they are an amanah from Allah." },
  { emoji: "🐄", name: "Cow", msg: "Provides for many. Islam teaches compassion in care and mercy in sacrifice." },
  { emoji: "🐑", name: "Sheep", msg: "The very ransom Allah sent down for Ismail (A.S). A reminder of divine mercy." },
  { emoji: "🐪", name: "Camel", msg: "Noble companions of the Prophets. Honored in the Qur'an as signs of Allah's creation." },
];

export function AnimalsSection() {
  return (
    <section id="animals" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-arabic text-gold text-xl mb-3">رحمة بالحيوان</p>
          <h2 className="font-display text-4xl md:text-6xl gradient-gold mb-4">Mercy to All Creatures</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            The Prophet ﷺ said: "Whoever shows no mercy will be shown no mercy."
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {animals.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="glass rounded-3xl p-8 text-center cursor-pointer group hover:gold-glow transition-all"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl md:text-7xl mb-4 inline-block"
              >
                {a.emoji}
              </motion.div>
              <h3 className="font-display text-2xl text-gold mb-3">{a.name}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{a.msg}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}