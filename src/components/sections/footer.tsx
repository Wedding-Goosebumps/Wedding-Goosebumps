import Link from 'next/link';
import Image from 'next/image';

// Footer gallery images
const footerImages = [
  { src: '/footer/footer-1.jpg', alt: 'Wedding gallery 1' },
  { src: '/footer/footer-2.jpg', alt: 'Wedding gallery 2' },
  { src: '/footer/footer-3.jpg', alt: 'Wedding gallery 3' },
  { src: '/footer/footer-4.jpg', alt: 'Wedding gallery 4' },
  { src: '/footer/footer-5.jpg', alt: 'Wedding gallery 5' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Offerings', href: '/offerings' },
  { name: 'Galleries', href: '/galleries' },
  { name: 'Inquire', href: '/inquire' },
];

export default function Footer() {
  return (
    <footer className="bg-ivory text-charcoal font-lora">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 text-center">

        {/* Navigation Links Above Images */}
        <nav className="mb-12 sm:mb-16">
          <ul className="flex items-center justify-center gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 flex-wrap gap-y-6">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link href={link.href} className="text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.4em] text-charcoal hover:text-gold transition-colors duration-300 font-light block pb-2">
                  {link.name}
                </Link>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-charcoal/30 group-hover:bg-gold transition-colors duration-300"></div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Image Gallery Row */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-12 sm:mb-16 max-w-4xl mx-auto">
          {footerImages.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 20vw, (max-width: 1024px) 15vw, 12vw"
              />
            </div>
          ))}
        </div>

        <div className="mb-8 sm:mb-12">
          <h2 className="font-epicene-display uppercase text-[28px] sm:text-[36px] md:text-[42px] lg:text-5xl xl:text-6xl tracking-tight text-charcoal leading-none">
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
          <div className="text-center sm:text-right my-6 sm:my-8">
             <a href="#" className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors duration-300">
                Back to the top
             </a>
          </div>

          <div className="w-full h-px bg-charcoal/20 my-6 sm:my-8"></div>

          {/* Social links (single line) - matching inquire page styling */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <a href="https://www.instagram.com/weddinggoosebumps?igsh=MWYybHN6cGQwbno4cQ==" className="text-[13px] text-charcoal/80 font-lora hover:text-gold transition">INSTAGRAM</a>
            <a href="https://pin.it/vC0ez3Sw5" className="text-[13px] text-charcoal/80 font-lora hover:text-gold transition">PINTEREST</a>
            <a href="https://www.facebook.com/share/1CpzZMFybm/" className="text-[13px] text-charcoal/80 font-lora hover:text-gold transition">FACEBOOK</a>
          </div>

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
