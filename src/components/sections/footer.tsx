import Link from 'next/link';

const navLinks = [
  { name: 'Inquire', href: '/inquire' },
  { name: 'Galleries', href: '/galleries' },
  { name: 'Offerings', href: '/offerings' },
  { name: 'About', href: '/about' },
  { name: 'Home', href: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-ivory text-charcoal font-lora">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 text-center">

        <div className="mb-8 sm:mb-12">
          <h2 className="font-playfair-display text-[28px] sm:text-[36px] md:text-[42px] lg:text-5xl xl:text-6xl tracking-tight text-charcoal leading-none">
            Wedding Goosebumps
          </h2>
          <p className="mt-3 sm:mt-4 text-[8px] sm:text-[9px] md:text-xs uppercase tracking-[0.3em] font-light">
            Planning + Design
          </p>
        </div>

        <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
          Wedding Goosebumps is a{' '}
          <em className="font-serif">full service destination wedding planning and design agency</em>{' '}
          that specializes in creating elegant and exclusive weddings.
        </p>

        <div className="mt-8 sm:mt-12">
          <Link href="/inquire" className="inline-block bg-[#dedad3] hover:bg-[#d4cdc4] transition-colors duration-300 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-charcoal text-[10px] sm:text-[11px] md:text-xs font-normal uppercase tracking-[0.2em]">
            Inquire to begin your experience
          </Link>
        </div>

        <div className="mt-16 sm:mt-24 md:mt-32 max-w-[1240px] mx-auto">
          <nav className="mb-6 sm:mb-8">
            <ul className="flex items-center justify-center gap-x-4 sm:gap-x-6 md:gap-x-10 flex-wrap gap-y-2 sm:gap-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="text-center sm:text-right my-6 sm:my-8">
             <a href="#" className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors duration-300">
                Back to the top
             </a>
          </div>

          <div className="w-full h-px bg-charcoal/20 my-6 sm:my-8"></div>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.1em]">
            <p className="mb-2 sm:mb-0">
              copyright 2025 wedding goosebumps
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
