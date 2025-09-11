"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { useEffect, useRef, useState } from "react";



export default function OfferingsPage() {
  // ── Slideshow state (for the centered slideshow above “Our approach”)
  const SLIDES = [
    "/offerings-page/slide-section/main.jpg",
    "/offerings-page/slide-section/1.jpg",
    "/offerings-page/slide-section/2.jpg",
    "/offerings-page/slide-section/3.jpg",
    "/offerings-page/slide-section/4.jpg",
  ];

    const [current, setCurrent] = useState(0);
    const hoverRef = useRef(false);

    useEffect(() => { /* ...your existing useEffect... */ }, [SLIDES.length]);

    // ────────────────────────────── ADD THE CODE BELOW ──────────────────────────────

    // Data for the new Offerings Slider
    const OFFERINGS_DATA = [
        {
            title: "DESTINATION WEDDINGS",
            description: [
                `At Wedding Goosebumps, we specialize in curating unforgettable destination weddings across India and abroad. Whether you envision a royal celebration in a grand palace, a charming affair in a heritage haveli, or a serene escape in a luxury resort—our team ensures the perfect venue that matches your dream. From Jaipur and Udaipur to Goa and the Himalayas, our destinations offer exceptional hospitality and stunning backdrops.`,
                `For an international flair, we organize weddings at handpicked locations like Bali, Phuket, Tuscany, Dubai, or the Maldives—bringing your vision to life with elegance and ease. With us, your wedding becomes more than an event—it’s a destination experience.`
            ],
            image: "/offerings-page/slider/1.jpg", // Replace with your image path
        },
        {
            title: "BESPOKE WEDDING COLLATERAL DESIGN",
            description: [
                `Our bespoke wedding collateral design service is crafted for couples who want every detail of their celebration to reflect their personality. We translate your journey into a signature visual identity—designing couple monograms, illustrations, and themed artwork that seamlessly tie every element together.
`,`From animated invites and handcrafted cards to save-the-dates, menus, favor tags, and seating charts—each piece is curated to match your colors, mood, and décor. This isn’t just collateral—it’s an immersive extension of your story, ensuring your guests experience your style at every touchpoint.
`],
            image: "/offerings-page/slider/2.jpg", // Replace with your image path
        },
        {
            title: "DESIGN & DECOR",
            description: [
                `At Wedding Goosebumps, décor isn’t just decoration—it’s the soul of your celebration. We create complete, immersive themes where every texture, color, and detail reflects your personality, heritage, and vision.`,`Our team blends global trends, cultural aesthetics, and creative concepts to deliver decor that is not only visually stunning but deeply personal. Whether you dream of a royal palace affair or a boho-chic beach celebration, we ensure every element harmonizes to tell your story in the most breathtaking way.`],
            image: "/offerings-page/slider/3.jpg", // Replace with your image path
        },
        {
            title: "CAPTURING MOMENTS",
            description: [
                `
We believe the best moments are those that happen naturally. We don’t ask you to pose or act—we quietly capture every genuine laugh, tear, and embrace as it unfolds. Our lens becomes a silent witness, allowing you to live fully in the moment.
`,`Partnering with top photography and cinematography talents from around the world, we blend artistry with emotion. From candid moments to cinematic films, every memory is preserved with care, creating timeless visuals that give you goosebumps for a lifetime.
`],
            image: "/offerings-page/slider/3.jpg", // Replace with your image path
        },
        {
            title: "CULINARY JOURNEYS, CRAFTED FOR YOU",
            description: [
                `We know that exceptional cuisine is at the heart of every celebration. That’s why we collaborate with top chefs to curate menus that delight every palate. From traditional Indian delicacies to global gourmet experiences, each offering is crafted with precision, creativity, and flair.
`,`Whether it’s Indian cuisine, international flavors, or a vibrant fusion buffet, we ensure every dish is a celebration in itself. With a focus on taste, quality, and seamless service, we transform meals into unforgettable culinary journeys that guests will savor long after the event ends.
`],
            image: "/offerings-page/slider/3.jpg", // Replace with your image path
        },
    ];

    // State for the new Offerings Slider
    const [currentOffering, setCurrentOffering] = useState(0);

    // Handlers for the new Offerings Slider
    const nextOffering = () => {
        setCurrentOffering((prev) => (prev + 1) % OFFERINGS_DATA.length);
    };

    const prevOffering = () => {
        setCurrentOffering((prev) => (prev - 1 + OFFERINGS_DATA.length) % OFFERINGS_DATA.length);
    };

    // ────────────────────────────────────────────────────────────────────────────────


  useEffect(() => {
    if (SLIDES.length <= 1) return;
    const id = setInterval(() => {
      if (!hoverRef.current) {
        setCurrent((i) => (i + 1) % SLIDES.length);
      }
    }, 3500);
    return () => clearInterval(id);
  }, [SLIDES.length]);

  return (
    <main className="bg-ivory text-charcoal">
      <Navigation />

      {/* ────────────────────────────── SLIDE 1 — HERO (1 pic) */}
      <section className="relative w-full h-[80vh] lg:h-[100vh] overflow-hidden">
        <Image
          src="/offerings-page/hero.jpg"
          alt="Full Service Luxury Wedding Design and Planning"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-center">
            <h1 className="font-epicene-display text-white/95 uppercase leading-tight text-[30px] sm:text-[40px] md:text-[52px] drop-shadow">
              FULL SERVICE<br />
              LUXURY WEDDING DESIGN AND PLANNING
            </h1>
            <p className="mt-4 font-lora tracking-[0.20em] text-white/90 uppercase text-xs">
              BY WEDDING GOOSEBUMPS
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: copy */}
          <div className="px-6 lg:pl-0 lg:pr-6">
            {/* Headline */}
            <h2 className="font-epicene-display uppercase leading-[1.08] text-[40px] md:text-[56px] lg:text-[64px] tracking-[0.01em] text-charcoal">
              Signature White glove
              <br />
              SERVICE <span className="italic normal-case font-epicene-display lowercase">for you</span>
            </h2>

            {/* Small uppercase line */}
            <p className="mt-1 text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-charcoal/70">
              BECAUSE WE ARE OBSESSIVELY DETAIL-DRIVEN AND METICULOUSLY ORGANIZED,{" "}
              <br className="hidden md:inline" />
              WE STAY TWO STEPS AHEAD AT EVERY MOMENT..
            </p>

            {/* thin rule */}
            <div className="mt-6 h-[2px] w-16 bg-charcoal/15" />

            {/* Body copy */}
            <p className="mt-8 font-lora text-[16.5px] leading-[1.95] text-charcoal/90 max-w-[56ch] pb-2">
              We design a<em> one of a kind concept and a flawless production plan,</em> ensuring we are present on the day to
              make every element come to life seamlessly. At Wedding Goosebump, we take pride in delivering a
              perfectly executed wedding planning and design experience <em>for you and your guests</em> — one that blends
              creativity with precision. With equal mastery in planning and design <em>we deeply value the significance of
              both,</em> ensuring every moment is handled with care, foresight, and unmatched attention to detail.
            </p>

            {/* CTA: underlined text link */}
           <Link href="/inquire" className="inline-block mt-2  ">
                   <span className="font-commuter-sans text-[12px] uppercase tracking-[0.3em] text-gold border-b-[1.5px] border-gold pb-1">
                     WORK WITH US
                   </span>
                 </Link>
          </div>

          {/* RIGHT: image */}
          <div className="relative bg-[#efe9df] h-[100vh] md:h-[100vh] lg:h-[100vh]">
            <Image
              src="/offerings-page/2.jpg"
              alt="High touch service dining room"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ────────────────────────────── SLIDE 4 — Our Approach + CTA (with centered slideshow) */}
      <section className="py-20 md:py-24">
        {/* Centered slideshow container (shorter height, auto-advance) */}
        <div
          className="
          bg-grey/5
            mx-auto w-full max-w-[900px]
            mb-14
            relative overflow-hidden
            h-[600px] md:h-[680px] lg:h-[700px]
          "
          onMouseEnter={() => (hoverRef.current = true)}
          onMouseLeave={() => (hoverRef.current = false)}
        >
          {/* Slide track */}
          <div
            className="
              flex h-full
              transition-transform duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
            "
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {SLIDES.map((src, i) => (
              <div key={i} className="relative shrink-0 grow-0 basis-full h-full">
                <Image
                  src={src}
                  alt={`Wedding Detail ${i + 1}`}
                  fill
                  priority={i === 0}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
            {SLIDES.map((_, i) => {
              const active = i === current;
              return (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  
                  onClick={() => setCurrent(i)}
                />
              );
            })}
          </div>
        </div>

        {/* Text content */}
        <div className="mx-auto w-full max-w-[1050px] px-6 text-center">
          {/* small overline */}
          <p className="uppercase tracking-[0.35em] text-[11px] text-charcoal/60 mb-4">
            Our approach
          </p>

          {/* big headline */}
          <h2 className="font-epicene-display uppercase leading-[1.08] text-[34px] md:text-[48px] lg:text-[56px] text-charcoal">
            to flawless wedding celebrations
          </h2>

          {/* italic sub-headline */}
          <p className="mt-4 font-cormorant italic text-[18px] md:text-[20px] text-charcoal/85">
            Our Full-Service Luxury Wedding Planning approach ensures we handle every detail from the
            first idea to the final farewell.
          </p>

          {/* divider with monogram */}
          <div className="mt-8 flex items-center justify-center">
            <span className="block h-[1px] w-40 bg-charcoal/15" />
            <span className="block h-[1px] w-40 bg-charcoal/15" />
          </div>

          {/* body paragraph */}
          <p className="mt-8 font-lora text-[16.5px] leading-[1.95] text-charcoal/90 max-w-[920px] mx-auto">
            We take the time to understand you both — your personalities, your vision, and your story — and
            then craft a bespoke design concept that is a true reflection of who you are. With a handpicked
            team of world-class vendors, we bring that vision to life with precision and artistry. Your comfort,
            along with that of your guests, is our highest priority, and we go above and beyond to make sure
            your wedding is not only spectacular but also stress-free and flawlessly executed.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/inquire"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#C2A770] hover:bg-[#B79A63] transition-colors text-white tracking-[0.2em] uppercase text-xs font-lora"
            >
              Work with us
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────────────── SLIDE 6 — VIDEO (full‑bleed) */}
      <section className="relative w-full h-[70vh] md:h-[100vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/offerings-page-vids/ANUJ WEDDING TEASER 20sec 9.mp4" // place your mp4 in /public/videos
          autoPlay
          muted 
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/25" />
      </section>

      {/* ────────────────────────────── SLIDE 7 — OFFERINGS SLIDER */}
<section className="bg-ivory py-20 md:py-28">
    <div className="mx-auto max-w-[1200px] px-6">
        {/* Static Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
            <p className="uppercase tracking-[0.3em] text-[11px] text-charcoal/60 mb-4">
                OUR OFFERINGS
            </p>
            <h2 className="font-epicene-display uppercase leading-[1.08] text-[34px] md:text-[48px] lg:text-[56px] text-charcoal">
                FULL SERVICE WEDDING PLANNING <span className="italic normal-case font-epicene-display lowercase">and</span> DESIGN
            </h2>
            <p className="mt-6 font-lora text-[16.5px] leading-[1.95] text-charcoal/90 max-w-[75ch]">
                In order to guarantee our couples have the best planning experience and the attention they deserve, we only offer full service wedding planning & design that includes:
            </p>
        </div>

        {/* Dynamic Slider Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            {/* LEFT: Text Content */}
            <div className="flex flex-col h-full">
                <div className="flex-grow">
                    {/* Number Indicator */}
                    <div className="flex items-center gap-4 border-b border-charcoal/15 pb-4">
                        <span className="font-light text-2xl text-charcoal/80 tabular-nums">
                            {String(currentOffering + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-charcoal/50">of</span>
                        <span className="text-sm text-charcoal/50 tabular-nums">
                            {String(OFFERINGS_DATA.length).padStart(2, "0")}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-epicene-display uppercase text-[24px] md:text-[28px] leading-tight mt-6 text-charcoal">
                        {OFFERINGS_DATA[currentOffering].title}
                    </h3>
                    
                    {/* Description */}
                    <p className="mt-4 font-lora text-[16px] leading-[1.9] text-charcoal/80 max-w-[55ch]">
                        {OFFERINGS_DATA[currentOffering].description}
                    </p>
                </div>
                
                {/* Navigation Controls */}
                <div className="mt-10 flex items-center justify-between">
                    <button
                        onClick={prevOffering}
                        aria-label="Previous offering"
                        className="text-[12px] tracking-[0.2em] uppercase text-charcoal/80 hover:text-gold transition-colors group flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:-translate-x-1">
                          <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
                        </svg>
                        PREV
                    </button>
                    <button
                        onClick={nextOffering}
                        aria-label="Next offering"
                        className="text-[12px] tracking-[0.2em] uppercase text-charcoal/80 hover:text-gold transition-colors group flex items-center gap-2"
                    >
                        NEXT OFFERING
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                           <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* RIGHT: Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-[#efe9df] order-first lg:order-last">
                 <Image
                    key={currentOffering} // This helps React trigger animations on change
                    src={OFFERINGS_DATA[currentOffering].image}
                    alt={OFFERINGS_DATA[currentOffering].title}
                    fill
                    className="object-cover animate-fade-in"
                />
            </div>
        </div>
    </div>
</section>


 <section className="bg-white">
      {/* Full-width grid so the left image can touch the viewport edge */}
      <div className="grid lg:grid-cols-[4fr_1fr]">
        {/* LEFT — Big image (flush left, fills height) */}
        <div className="relative w-[60vw] md:w-[40vw] h-[110vh] md:h-[140vh]">
          <Image
            src="/offerings-page/images-sec/main.jpg"
            alt="Bridal party with bouquets"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT — Content column */}
        <div className="px-6 md:px-10 lg:px-16 py-16">
          {/* Top thumbnails — larger, even sizing; scrolls on small screens */}
          <div className="mx-0 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-12">
                      <div className="min-w-[1000px] grid grid-cols-5 gap-8 px-2">
                        {[
                          "/offerings-page/images-sec/1.jpg",
                          "/offerings-page/images-sec/2.jpg",
                          "/offerings-page/images-sec/3.jpg",
                          "/offerings-page/images-sec/4.jpg",
                          "/offerings-page/images-sec/5.jpg",
                        ].map((src, i) => (
                          <div key={i} className="relative aspect-[4/5] bg-[#efe9df] overflow-hidden">
                            <Image src={src} alt={`Process detail ${i + 1}`} fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>

          {/* Heading */}
          <h2 className="font-epicene-display uppercase leading-tight text-[32px] md:text-[44px] lg:text-[52px] text-charcoal pt-8">
            Our Process
          </h2>

          {/* Steps — full width, subtle separators to “fill” the column visually */}
          <ol className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10">
            {[
              "Reach out to Us",
              "Schedule a meeting",
              "Tell us your requirements",
              "Get a quote",
              "Finalize, sit back and relax",
            ].map((step, i) => (
              <li
                key={i}
                className="grid grid-cols-[120px_1fr] gap-6 py-5"
              >
                <span
                  className="
                    relative inline-flex items-center
                    text-[12px] uppercase tracking-[0.45em]
                    text-[#b6a78f]  /* soft taupe/greige */
                    tabular-nums
                    after:absolute after:left-0 after:-bottom-1
                    after:h-px after:w-full after:bg-[#e9e2d8]  /* hairline under */
                  "
                >
                  STEP&nbsp;{String(i + 1).padStart(2, "0")}
                </span>

                <span className="font-lora text-[16.5px] leading-[1.9] text-charcoal/90">
                  {step}
                </span>
              </li>
            ))}
          </ol>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/inquire"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#C2A770] hover:bg-[#B79A63] transition-colors text-white tracking-[0.2em] uppercase text-xs font-lora"
            >
              Work with Us
            </Link>
          </div>
        </div>
      </div>
    </section>

{/* ────────────────────────────── SLIDE 9 — 2 tall pics + stacked heading + copy */}
<section className="py-20 md:py-28 bg-ivory">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Top row: two images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative h-[520px] md:h-[560px] lg:h-[830px] bg-[#efe9df]">
        {/* swap to your left photo */}
        <Image
          src="/offerings-page/pre-footer/1.jpg"
          alt="Celebration portrait"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative h-[520px] md:h-[560px] lg:h-[830px] bg-[#efe9df]">
        {/* you already have this one; keep or swap */}
        <Image
          src="/offerings-page/pre-footer/2.jpg"
          alt="Detail 1"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Bottom row: heading + copy */}
    {/* Bottom row: stacked display heading + refined body + skinny underline CTA */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
  {/* LEFT — stacked headline */}
  <div className="text-left">
    <h2
      className="
        font-epicene-display uppercase
        text-[34px] md:text-[52px] lg:text-[48px]
        leading-[1.04] tracking-[0.02em]
        text-gold
      "
    >
      EXCEPTIONAL,<br />
      PERSONALIZED<br />
      ATTENTIVENESS
    </h2>

    {/* hairline divider under heading */}
    <div className="mt-4 h-px w-[340px] max-w-full bg-neutral-300/60" />
  </div>

  {/* RIGHT — body copy + cta */}
  <div className="max-w-[560px]">
    <p className="text-[18px] leading-[2.0] text-neutral-800 font-lora">
      We accept a limited amount of select weddings per year, and offer tailor-made
      wedding planning and design services for an exclusive clientele. We&apos;ve
      designed, planned and produced every size of celebration from luxury elopements
      for 2 to large scale weddings for 200.
    </p>

    <Link href="/inquire" className="inline-block mt-3  ">
                   <span className="font-commuter-sans text-[12px] uppercase tracking-[0.3em] text-gold border-b-[1.5px] border-gold pb-1">
                     WORK WITH US
                   </span>
                 </Link>
  </div>
</div>

  </div>
</section>

      {/* ────────────────────────────── SLIDE 10 — (Optional) video again */}
      { <section className="relative w-full h-[100vh] overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" src="/videos/offerings-page-vids/DHARAM RAJVI WED HIGHLIGHT 4K 20 sec 25.mp4" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-black/25" />
      </section> }

      <Footer />
    </main>
  );
}
function ServiceBlock({
  title,
  copy,
  image,
  reverse,
}: {
  title: string;
  copy: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <div className={`container grid gap-10 lg:grid-cols-2 items-center ${reverse ? "lg:grid-flow-dense" : ""}`}>
      {/* image */}
      <div className={`relative h-[54vh] bg-[#efe9df] ${reverse ? "lg:order-2" : ""}`}>
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      {/* text */}
      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <h3 className="font-epicene-display uppercase text-[26px] md:text-[32px] leading-tight mb-4">
          {title}
        </h3>
        <p className="font-lora text-[16.5px] leading-[1.95] text-charcoal/90">
          {copy}
        </p>
      </div>
    </div>
  );
}
