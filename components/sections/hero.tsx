"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextPressure from "../TextPressure";
import Image from "next/image";

const videoSources = ["/bg.mp4"];
export function HeroSection() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background Video Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={bgIndex}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={videoSources[bgIndex]}
            autoPlay
            loop
            muted
          />
        </AnimatePresence>
      </div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content & Logo */}
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.span
              className="text-primary font-semibold text-lg mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TextPressure
                text="Welcome to Tirth Travels"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={24} // Adjusted for mobile
              />
            </motion.span>
            <motion.h1
              className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Explore the World
              <span className="block text-primary">with Confidence</span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-base md:text-xl text-gray-200 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Your journey begins here. Let us help you discover the perfect
            destination for your next adventure, with exclusive deals and
            personalized service.
          </motion.p>
        </div>

        {/* Right Side: Logo Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/removebg.png" // Replace with your logo image path
            alt="Logo"
            className="max-w-full h-auto" // Adjust as needed
            width={200} // Adjusted for mobile
            height={200} // Adjusted for mobile
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
