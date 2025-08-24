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
        eyebrow="A calm, editorial look"
        title="Design that feels warm and human"
        body="We prioritize legibility, soft color, and simple layouts that let your business shine. No clutter — just what locals need."
        ctaLabel="See Services"
        ctaHref="/services"
      />
      <AltSection
        image="/images/parx-casino-google-maps.png"
        eyebrow="Made for local customers"
        title="Hours, directions, and contact — obvious"
        body="Your phone number, address, Google Map, and hours are never buried. We build for foot traffic and phone calls, just like this local business found on Google Maps."
        flip
      />
      <Mosaic />
      <TestimonialStrip />
      <Newsletter />
    </main>
  )
}
