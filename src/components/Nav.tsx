import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between glass rounded-full px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">☪</span>
          <span className="font-display text-lg font-semibold gradient-gold">Eid Mubarak</span>
        </Link>
        <div className="hidden gap-8 md:flex text-sm">
          <a href="/#animals" className="hover:text-gold transition">Animals</a>
          <a href="/#qurbani" className="hover:text-gold transition">Qurbani</a>
          <Link to="/story" className="hover:text-gold transition">Story</Link>
          <a href="/#duas" className="hover:text-gold transition">Duas</a>
        </div>
        <Link
          to="/story"
          className="rounded-full bg-gold px-4 py-2 text-xs font-medium text-primary-foreground hover:gold-glow transition"
        >
          The Story
        </Link>
      </div>
    </motion.nav>
  );
}