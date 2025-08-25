import React from "react";
import HeroLanding from "./_components/HeroLanding";
import ValueBand from "./_components/ValueBand";
import AltSection from "./_components/AltSection";
import Mosaic from "./_components/Mosaic";
import TestimonialStrip from "./_components/TestimonialStrip";
import Newsletter from "./_components/Newsletter";

export default function HomePage(){
  return (
    <main>
      <HeroLanding />
      <ValueBand />
      <AltSection
        image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1400&auto=format&fit=crop"
        eyebrow="Built for local businesses"
        title="Websites that drive foot traffic and phone calls"
        body="We prioritize what local customers need: clear hours, easy directions, contact info, and Google Maps integration. No clutter — just what drives business."
        ctaLabel="See Services"
        ctaHref="/services"
      />
      <AltSection
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
        eyebrow="Local business focused"
        title="From restaurants to contractors — we've got you covered"
        body="See examples of our work with local restaurants, service businesses, and retail shops. Each site is optimized for local search and customer conversion."
        flip
        ctaLabel="View Demos"
        ctaHref="/work"
      />
      <Mosaic />
      <TestimonialStrip />
      <Newsletter />
    </main>
  )
}
