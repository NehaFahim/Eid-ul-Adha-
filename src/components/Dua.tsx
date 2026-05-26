import { motion } from "framer-motion";

export function Dua() {
  return (
    <section id="duas" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="glass rounded-[2rem] p-10 md:p-16 text-center gold-glow"
        >
          <div className="text-5xl mb-6">🤲</div>
          <h2 className="font-display text-3xl md:text-5xl gradient-gold mb-8">Dua of Sacrifice</h2>
          <p dir="rtl" className="font-arabic text-2xl md:text-3xl text-gold leading-loose mb-6">
            بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ، اللَّهُمَّ مِنْكَ وَلَكَ
          </p>
          <p className="text-lg text-foreground/80 italic mb-6">
            "In the name of Allah, Allah is the Greatest. O Allah, this is from You and to You."
          </p>
          <div className="h-px w-24 mx-auto my-8 bg-gradient-to-r from-transparent via-[oklch(0.82_0.14_85)] to-transparent" />
          <p className="text-foreground/70 leading-relaxed">
            May Allah accept from us and from you. Taqabbal Allahu minna wa minkum.
          </p>
        </motion.div>
      </div>
    </section>
  );
}