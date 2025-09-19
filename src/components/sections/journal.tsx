import Image from 'next/image';
import Link from 'next/link';

const fonscolombeWeddingImage = "/journal-section/Copy of DEV00489.jpg";

const JournalSection = () => {
  return (
  <section className="bg-[#FFFF] text-charcoal py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1100px]">
        
        {/* — Section Intro */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <p className="font-lora text-xs sm:text-sm text-charcoal/80 tracking-[0.3em] uppercase mb-2">
            DISCOVER OUR PHILOSOPHY
          </p>
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[48px] 2xl:text-[52px] tracking-tight leading-tight sm:leading-normal">
            Where Emotion Becomes Experience, Every Detail Tells a Story!
          </h2>
          <div className="w-8 sm:w-10 h-[1px] bg-charcoal/20 mx-auto my-3 sm:my-4" />
          <p className="font-lora text-sm sm:text-base md:text-[17px] max-w-2xl mx-auto leading-relaxed">
            Each celebration is a soulful canvas — <i>rich with meaning, memory, and magic.</i>
          </p>
        </div>

        {/* — Content Block: Image Left / Philosophy Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 sm:gap-y-12 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-24 items-start mb-8">
          
          {/* Left: Large Vertical Image (keep same visual balance) */}
          <div className="lg:col-span-6">
            <Image
              src="/journal-section/main.jpg"
              alt="Elegant celebration setting"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
              loading={0 < 10 ? 'eager' : 'lazy'}
              priority={0 < 10}
            />
          </div>

          {/* Right: Philosophy copy (word-for-word) */}
          <div className="lg:col-span-6 flex flex-col items-start mt-0 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-24 justify-center">
            <p className="font-lora text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-charcoal/80 mb-3">
              THE ART OF GOOSEBUMPS
            </p>

            <h3 className="font-playfair-display text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-snug mb-4">
              Why we do what we do.
            </h3>

            <div className="w-8 sm:w-10 md:w-12 h-[1px] bg-charcoal/20 mb-6 sm:mb-8 md:mb-10 lg:mb-15" />

            <p className="font-lora text-sm sm:text-[15px] md:text-[16px] leading-relaxed text-charcoal/90 mb-4 sm:mb-6">
              We aren’t driven by checklists.
            </p>

            <p className="font-lora text-sm sm:text-[15px] md:text-[16px] leading-relaxed text-charcoal/85 mb-4 sm:mb-6">
              We’re moved by a feeling — the one that stills the room, quickens the heart, and stays long after
              the music fades. That’s what we call a goosebump moment — and it’s what we aim to create every
              single time.
            </p>

            <p className="font-lora text-sm sm:text-[15px] md:text-[16px] leading-relaxed text-charcoal/85">
              Every wedding we craft is a response to a story, a legacy, a longing. We don’t follow a formula;
              we follow emotion — designing atmospheres that feel lived in, loved in, and remembered.
              Because when done right, beauty doesn’t just impress. It resonates.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JournalSection;
