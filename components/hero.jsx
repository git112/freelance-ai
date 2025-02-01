"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient-x">
          Land More Freelance Gigs with 
          <br/>AI-Powered Assistance!
          </h1>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-2xl text-cyan-50">
          Find high-paying freelance jobs, auto-negotiate contracts, and optimize your profile—all in one place.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
        <Link className="inline-block px-12 py-4 text-white font-bold bg-cyan-600 hover:bg-cyan-700 rounded-full shadow-lg transition duration-200" href="/gig-finder">Get Started</Link>
          
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;