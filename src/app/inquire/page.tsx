import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import InquiryForm from "./inquire-form";
import Link from "next/link";
import Image from "next/image";

// New banner component
function ContactInfoBanner() {
  return (
    <section className="bg-[#f7f5f2] py-10 w-full">
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row justify-between items-stretch text-center md:text-left shadow-sm border-t border-b border-[#e5e1db]">
        {/* Divider */}
        <div className="hidden md:block w-px bg-[#e5e1db] my-8" />
        {/* Contact Us */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
            <h4 className="font-epicene-display text-lg text-[#b6a78f] mb-2 tracking-wide">Contact Us</h4>
            <p className="text-[14px] text-charcoal/80 leading-relaxed font-lora">
            Please fill out the form below, or you can<br />
            contact us at <a href="tel:+917004734213" className="text-gold font-bold text-[18px] hover:underline tracking-wide">+917004734213</a>.<br />
            We&apos;ll get back to you within 48 hours!
          </p>
        </div>
        {/* Divider */}
        <div className="hidden md:block w-px bg-[#e5e1db] my-8" />
        {/* Find Us On */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
            <h4 className="font-epicene-display text-lg text-[#b6a78f] mb-2 tracking-wide">Find Us On</h4>
          <div className="flex flex-col gap-1 mt-1">
            <a href="https://www.instagram.com/weddinggoosebumps?igsh=MWYybHN6cGQwbno4cQ==" className="text-[13px] text-charcoal/80 font-lora hover:text-gold transition">INSTAGRAM</a>
            <a href="https://www.facebook.com/share/1CpzZMFybm/" className="text-[13px] text-charcoal/80 font-lora hover:text-gold transition">FACEBOOK</a>
            <a href="https://pin.it/vC0ez3Sw5" className="text-[13px] text-charcoal/80 font-lora hover:text-gold transition">PINTEREST</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WeddingGoosebumpsSection() {
  return (
    <section className="relative">
      <div className="relative">
        <Image
          src="/inquire-page/DSC07075.jpg"
          alt="Wedding Goosebumps Hero"
          className="absolute inset-0 w-full h-full object-cover"
          fill
          loading="eager"
          priority={true}
          quality={30}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative container mx-auto px-10 py-24 text-center text-white">
          <p className="italic font-lora tracking-wide mb-3">
            let’s celebrate your <span className="italic font-light">Special Day</span> together
          </p>
          <h2 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-white">
            Contact Us 
          </h2>
          <Link
            href="/inquire"
            className="inline-block bg-white text-black px-8 py-4 tracking-wide hover:bg-white/90 transition"
          >
            SEND US AN INQUIRY
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function InquirePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="min-h-screen flex">
        {/* hide image < 760 width */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="/inquire-page/JIY06150.jpg"
            alt="Romantic Bride"
            className="absolute inset-0 w-full h-full object-cover bg-gray-300"
            fill
          />
        </div>

        <div className="w-full md:w-1/2 bg-[#F8F5F0] flex flex-col">
          <div className="text-center pt-6 pb-4" />
          <div className="flex-1 px-8 md:px-16 py-4">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60 font-lora mb-4">
                GET IN TOUCH
              </p>
              <h2 className="font-epicene-display text-3xl md:text-4xl text-charcoal leading-tight mb-6">
                Lets create a goosebumps <br /> moment together
              </h2>
              <p className="text-charcoal/70 leading-relaxed font-lora mb-8">
                Please fill out our contact form or send us an email.
              </p>
              <div className="mt-6 max-w-lg">
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Info Banner placed after inquiry form and before Contact Us banner */}
      <ContactInfoBanner />
      <WeddingGoosebumpsSection />

      <Footer />
    </main>
  );
}
