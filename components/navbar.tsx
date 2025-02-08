"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "./mode-toggle";
import { Plane } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Image
              src="/removebg.png"
              alt="logo"
              height={60}
              width={60}
              className="text-primary mt-6"
            />
            <span className="text-[24px] md:text-[30px] font-bold text-primary">
              Tirth Travels
            </span>
            <Image src="/w.png" alt="w" width={20} height={20} />
            <span className="text-sm md:text-base font-bold text-green-500 ml-4">
              +91 99240 32328
            </span>
          </motion.div>

          <div className="flex items-center space-x-4 md:space-x-8">
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
              >
                Contact
              </a>
              <a
                href="#team"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
              >
                Our Team
              </a>
            </nav>
            <button
              className="md:hidden text-foreground text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
            <ModeToggle />
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors px-2 py-1 text-lg"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-foreground hover:text-primary transition-colors px-2 py-1 text-lg"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors px-2 py-1 text-lg"
            >
              Contact
            </a>
            <a
              href="#team"
              className="text-foreground hover:text-primary transition-colors px-2 py-1 text-lg"
            >
              Our Team
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
