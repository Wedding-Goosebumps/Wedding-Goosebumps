"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import InquiryForm from "./inquire-form";
import Link from "next/link";

/* ── CTA section (sits below the video) ───────────────────────────── */
function WeddingGoosebumpsSection() {
  return (
    <section className="relative">
      {/* Hero band with background image */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('inquire-page/DSC07075.jpg')", // <-- use your real asset path
          }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative container mx-auto px-10 py-90 text-center text-white">
          <p className="italic font-lora tracking-wide mb-3">
            let’s celebrate your<span className="italic font-light">Special Day</span> together
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

/* ── Page ─────────────────────────────────────────────────────────── */
export default function InquirePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Split screen layout */}
      <div className="min-h-screen flex">
        {/* Left side - Large romantic photo */}
        <div className="w-1/2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-gray-300"
            style={{
              backgroundImage: "url('inquire-page/JIY00200.jpg')", // <-- use your real asset path
            }}
          />
        </div>

        {/* Right side - Contact content */}
        <div className="w-1/2 bg-[#F8F5F0] flex flex-col">
          <div className="text-center pt-16 pb-8" />

          {/* Main content area */}
          <div className="flex-1 px-16 py-8">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60 font-lora mb-4">
                GET IN TOUCH
              </p>
              <h2 className="font-epicene-display text-4xl text-charcoal leading-tight mb-6">
                Lets create a goosebump <br /> moment together
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

      <WeddingGoosebumpsSection />

      <Footer/>
    </main>
  );
}