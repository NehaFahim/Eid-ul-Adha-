export function Footer() {
  return (
    <footer className="border-t border-[oklch(0.82_0.14_85_/_0.15)] py-12 px-6 mt-12">
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-arabic text-2xl text-gold mb-3">عيد مبارك</p>
        <p className="text-foreground/60 text-sm">
          Crafted with love and barakah · Eid-ul-Adha {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}