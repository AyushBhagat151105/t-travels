"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-background text-foreground py-12 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="w-[200px] h-[200px] bg-primary absolute top-10 left-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="w-[150px] h-[150px] bg-secondary absolute bottom-10 right-10 rounded-full blur-3xl animate-pulse"></div>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-primary mb-4">About Us</h2>
        <p className="text-muted-foreground leading-relaxed">
          Welcome to our professional travel agency, where we turn your dream
          journeys into reality. With years of experience, we specialize in
          offering tailored travel experiences that cater to your unique needs.
        </p>
        <p className="leading-relaxed mt-2 text-lg text-primary">Since 2018</p>
      </motion.div>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
        <motion.div
          className="max-w-sm p-6 bg-card rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-secondary mb-2">
            Our Mission
          </h3>
          <p className="text-muted-foreground">
            Our mission is to provide seamless travel experiences with top-tier
            service and unforgettable adventures.
          </p>
        </motion.div>
        <motion.div
          className="max-w-sm p-6 bg-card rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-accent mb-2">
            Why Choose Us?
          </h3>
          <p className="text-muted-foreground">
            We prioritize customer satisfaction, offering customized
            itineraries, exclusive deals, and 24/7 support.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
