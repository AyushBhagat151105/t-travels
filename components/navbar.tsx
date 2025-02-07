"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "./mode-toggle";
import { Plane } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            {/* <Plane className="h-6 w-6 text-primary" /> */}
            <Image
              src="/removebg.png"
              alt="logo"
              height={60}
              width={60}
              className="text-primary mt-6"
            />
            <span className="text-xl font-bold text-primary">
              Tirth Travels
            </span>
          </motion.div>

          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
            <ModeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
