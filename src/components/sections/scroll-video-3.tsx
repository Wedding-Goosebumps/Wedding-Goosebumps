// components/VideoFullBleed.tsx
"use client";

import React from "react";
import Image from "next/image";

const TEXT_LOGO_URL = "/logo/text-logo.svg";

export default function VideoFullBleed() {
  return (
    // 1) w-screen makes it stretch full viewport width
    // 2) h-screen makes it full viewport height (remove if you want auto height)
    // 3) overflow-hidden clips any slight scaling artifacts
    <section className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <Image
          src={TEXT_LOGO_URL}
          alt="WEDDING GOOSBUMPS"
          width={800}
          height={150}
          className="h-auto w-full max-w-[1000px] md:w-4/5 lg:w-3/4 -ml-2 invert brightness-0"
          priority
        />
      </div>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/home-page-vids/MOHIT WED VIDEO 4K 20 Sec 9.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}
