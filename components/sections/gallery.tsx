"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80",
    quote: "Travel is the only thing you buy that makes you richer.",
  },
  {
    src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80",
    quote: "The journey not the arrival matters.",
  },
  {
    src: "https://images.unsplash.com/photo-1565130838609-c3a86655db61?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80",
    quote: "To travel is to live.",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80",
    quote: "Life is either a daring adventure or nothing at all.",
  },
  {
    src: "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80",
    quote: "Adventure awaits.",
  },
  {
    src: "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80",
    quote: "Travel far enough, you meet yourself.",
  },
  {
    src: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80",
    quote: "Not all those who wander are lost.",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80",
    quote:
      "The world is a book, and those who do not travel read only one page.",
  },
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative py-12 px-6 md:px-12 lg:px-24 bg-background text-foreground overflow-hidden">
      <h2 className="text-4xl font-bold text-primary text-center mb-10">
        Our Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 flex items-center justify-center ${
              index % 3 === 0
                ? "col-span-2 row-span-2"
                : "col-span-1 row-span-1"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              unoptimized
              priority={index < 4}
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg p-4 transition-opacity duration-300">
                {image.quote}
                <motion.div
                  className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center"
                  animate={{
                    x: cursorPos.x - window.innerWidth / 2,
                    y: cursorPos.y - window.innerHeight / 2,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                  👀
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
