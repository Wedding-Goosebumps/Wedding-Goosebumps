// src/components/sections/hero-video.tsx
"use client";

import Image from "next/image";

const LOGO_URL = "/logo/Logo.png";
const TEXT_LOGO_URL = "/logo/Text Logo.png";
const HERO_VIDEO_URL = "/videos/home-page-vids/Top Slide.webm";

export default function HeroVideo() {
  return (
    <header className="relative h-screen min-h-[500px] sm:min-h-[600px] w-full overflow-hidden">
      {/* video: no negative z-index */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-auto h-auto min-w-full min-h-full translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 object-cover z-0"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* overlay: above video */}
      <div className="absolute inset-0 bg-black/25 z-10" />

      {/* content: above both */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center px-4 py-8 sm:p-6">
        <Image
          src={TEXT_LOGO_URL}
          alt="WEDDING GOOSBUMPS"
          width={800}
          height={150}
          className="h-auto w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] invert brightness-0"
          priority
        />
      </div>
    </header>
  );
}
