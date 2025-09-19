"use client";

import React from "react";
import Image from "next/image";

export const ImageGallery: React.FC = () => {
  const MAIN_Image =
    "/quintessential-section/Main image 230202105837-MM_09599.jpg";

  const THUMBNAILS = [
    "/quintessential-section/Copy of 230202105837-MM_09465 (1).jpg",
    "/quintessential-section/Copy of 230202105837-MM_09833.jpg",
    "/quintessential-section/Copy of 230202105837-MM_09845.jpg"
  ];

  return (
  <section className="py-12 sm:py-16 md:py-20 bg-[#F8F5F0] text-charcoal">
      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <div className="grid gap-8 sm:gap-12 md:gap-16 lg:gap-18 lg:grid-cols-[minmax(400px,600px)_1fr] xl:grid-cols-[600px_1fr] 2xl:grid-cols-[640px_1fr] items-start">
          
          {/* LEFT: big image */}
          <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[114vh] bg-[#efe9df]">
            <Image
              src={MAIN_Image}
              alt="Quintessential Aesthetics"
              fill
              className="object-cover"
              loading={0 < 10 ? 'eager' : 'lazy'}
              priority={0 < 10}
            />
          </div>

          {/* RIGHT: 3 images row + text */}
          <div className="px-4 sm:px-6 lg:px-0 lg:pr-6">
            
            {/* Thumbnails row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 pr-0 sm:pr-4 lg:pr-6">
              {THUMBNAILS.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[3/4] bg-[#efe9df] p-1 sm:p-2"
                >
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover"
                    loading={i < 10 ? 'eager' : 'lazy'}
                    priority={i < 10}
                  />
                </div>
              ))}
            </div>

            {/* Text block */}
            <div className="max-w-[680px]">
              <p className="text-[0.65rem] sm:text-[0.75rem] md:text-sm font-lora tracking-[0.2em] uppercase text-charcoal/80 mb-2">
                WE DESIGN FROM THE SOUL OF YOUR STORY
              </p>
              <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] leading-tight text-charcoal mb-2 uppercase">
                THE COUTURE
              </h2>
              <h2 className=" text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] leading-tight text-charcoal mb-2 uppercase">
                AESTHETICS <span className="italic lowercase">of</span>
              </h2>
              <h2 className=" text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] leading-tight text-charcoal mb-4 sm:mb-6 uppercase">
                CELEBRATION
              </h2>
              <p className="font-lora text-xs sm:text-sm md:text-base leading-relaxed text-charcoal/90 mb-4 sm:mb-6">
                Throughout our collaborative design journey, we dive deep into our couples’ stories — <em>their
                cultures, family legacies, and shared dreams.</em> These conversations become the heartbeat of
                our process. We use every detail to design weddings that are emotionally resonant, visually
                stunning, and uniquely yours.
              </p>
              <div className="pt-1 sm:pt-2">
<p className="font-commuter-sans text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.3em] text-gold border-b-[1.5px] border-gold pb-1 inline-block">
  HOW WE DO IT
</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
