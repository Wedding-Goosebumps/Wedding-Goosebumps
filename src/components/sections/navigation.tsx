"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "OFFERINGS", href: "/offerings" },
  { name: "GALLERIES", href: "/galleries" },
  { name: "INQUIRE", href: "/inquire" },
];

const LOGO_URL = "/logo/Logo.png";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        } ${isMenuOpen ? '!opacity-100 !translate-y-0 !pointer-events-auto' : ''}`}
      >
        <div className={`transition-colors duration-300 ${isMenuOpen ? 'bg-ivory' : 'bg-ivory/90 backdrop-blur-md'}`}>
          <div className="mx-auto flex h-[72px] sm:h-[80px] md:h-[88px] max-w-[1700px] items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16">
            <Link href="/" className="
              relative z-50 
              h-12 sm:h-14 md:h-16 lg:h-18  
              w-36 sm:w-40 md:w-44 lg:w-48   
              shrink-0
              flex items-center
            ">
              <Image
                src={LOGO_URL}
                alt="Wedding Goosebumps"
                width={100}
                height={40}
                className="object-contain w-full h-full"
                priority
              />
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-10">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-lora text-[11px] font-normal tracking-[0.2em] text-charcoal transition-colors duration-300 hover:text-gold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-50 text-charcoal lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 bg-ivory transition-opacity duration-500 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center pt-[72px] sm:pt-[80px] md:pt-[88px]">
          <ul className="flex flex-col items-center gap-y-6 sm:gap-y-8">
            {navLinks.map((link) => (
              <li key={`${link.name}-mobile`}>
                <Link
                  href={link.href}
                  className="font-lora text-sm sm:text-base tracking-[0.2em] text-charcoal hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}