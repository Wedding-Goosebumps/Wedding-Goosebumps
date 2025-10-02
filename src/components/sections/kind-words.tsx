"use client";

import Image from "next/image";

export default function KindWords() {
  return (
  <section className="bg-ivory text-charcoal py-7 sm:py-10 md:py-14 lg:py-0 overflow-hidden">
      <div className="mx-auto max-w-none px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-start gap-y-7 sm:gap-y-10 lg:gap-x-10 xl:gap-x-18">

          {/* LEFT — small portrait at extreme left */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start lg:mt-40 xl:mt-60 2xl:mt-80 pl-0 lg:ml-4 xl:ml-6">
            <div className="relative w-[229px] sm:w-[247px] md:w-[266px] lg:w-[247px] xl:w-[266px] 2xl:w-[284px] aspect-[3/4]">
              <Image
                src="/kind-words-section/Copy%20of%20DSC02686.jpg"
                alt="Champagne tower"
                fill
                className="object-cover"
                loading={0 < 10 ? 'eager' : 'lazy'}
                priority={0 < 10}
              />
            </div>
          </div>

          {/* CENTER — quote block, stretched */}
          <div className="order-1 lg:order-2 relative text-center px-4 lg:px-0 mt-8 sm:mt-16 md:mt-24 lg:mt-40">

            {/* vertical label with hairline */}
            <div
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-3"
              aria-hidden="true"
            >
            </div>

{/* giant serif quote */}
<h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[45px] uppercase leading-none text-center lg:text-right">
  The Highest level{" "}
  <span className="italic lowercase font-light align-baseline">
    of
  </span>{" "}
  service
</h2>

<div className="flex justify-center lg:justify-end">
  <h3 className="font-lora text-[10px] sm:text-[12px] tracking-[0.2em] uppercase mb-7 sm:mb-9 lg:mb-10 max-w-[343px] leading-none text-center lg:text-right">
    Attention to detail and exceptional, personalized attentiveness
  </h3>
</div>

{/* body copy */}
<p className="mt-4 sm:mt-5 max-w-[754px] font-lora text-sm sm:text-[14.6px] leading-[1.8] sm:leading-[1.9] text-charcoal/85 text-center lg:text-right mx-auto lg:ml-auto">
  We take on a limited number of weddings each year, ensuring every celebration
  receives the time, creativity, and emotional investment it deserves.{" "}
  <i>
    Our bespoke planning and design services are tailored for an exclusive
    clientele seeking a deeply personal, couture wedding experience.
  </i>{" "}
  <span className="hidden min-[1465px]:inline">
    From intimate elopements for two to grand celebrations with n number of guests,
    we bring the same level of artistry, precision, and heart to every event we curate.
  </span>
</p>


            {/* thin divider */}
            <div className="mx-auto mt-6 h-[2px] w-[120px] bg-charcoal/15" />

          </div>

          {/* RIGHT — big hero portrait at extreme right */}
          <div className="order-3 flex justify-end pr-0">
            <div className="relative w-[358px] sm:w-[422px] md:w-[458px] lg:w-[550px] aspect-[3/4]">
              <Image
                src="/kind-words-section/main%20image%20DSC03052.jpg"
                alt="Groom kissing bride’s forehead"
                fill
                className="object-cover"
                loading={0 < 10 ? 'eager' : 'lazy'}
                priority={0 < 10}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}