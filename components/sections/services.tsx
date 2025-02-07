"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PlaneTakeoff,
  Hotel,
  Map,
  Compass,
  CreditCard,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: PlaneTakeoff,
    title: "Flight Booking",
    description:
      "Find the best deals on flights worldwide with our price match guarantee and exclusive airline partnerships.",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description:
      "Book luxurious stays at amazing prices with our curated selection of premium hotels and resorts.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Map,
    title: "Tour Packages",
    description:
      "Experience handcrafted travel packages designed to create unforgettable memories and authentic experiences.",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Compass,
    title: "Adventure Tours",
    description:
      "Embark on thrilling adventures with expert guides and top-rated safety measures for adrenaline seekers.",
    gradient: "from-red-500/20 to-pink-500/20",
  },
  {
    icon: CreditCard,
    title: "Travel Insurance",
    description:
      "Travel with peace of mind with our comprehensive coverage and 24/7 emergency assistance worldwide.",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Get instant assistance from our dedicated travel experts anytime, anywhere during your journey.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-primary font-semibold text-lg block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What We Offer
          </motion.span>
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our comprehensive range of travel services designed to make
            your journey seamless and memorable.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-none bg-gradient-to-br h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <CardHeader className="relative">
                  <div className="mb-4">
                    <span className="inline-block p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
