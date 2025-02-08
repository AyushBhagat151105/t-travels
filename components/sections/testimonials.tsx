"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Adventure Traveler",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content:
      "Tirth Travels made planning my adventure trip so easy. Their attention to detail and personalized service was outstanding! Every moment was perfectly planned.",
    rating: 5,
    location: "New York, USA",
  },
  {
    name: "Michael Chen",
    role: "Business Traveler",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content:
      "As a frequent business traveler, I appreciate their efficient service and reliable support. They always go above and beyond to ensure my trips are smooth.",
    rating: 5,
    location: "Singapore",
  },
  {
    name: "Emily Rodriguez",
    role: "Family Vacationer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content:
      "Our family vacation was perfect thanks to Tirth Travels. They thought of everything, making it stress-free for us. The kids had an amazing time!",
    rating: 5,
    location: "Barcelona, Spain",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-muted/50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 w-48 h-48 bg-primary/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            Testimonials
          </motion.span>
          <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it - hear from our satisfied
            travelers about their experiences with Tirth Travels.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="p-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="relative group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-12 w-12 ring-2 ring-primary/20 ring-offset-2">
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-muted-foreground/80">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground relative">
                        <span className="text-3xl text-primary/20 font-serif">
                          &quot;
                        </span>
                        {testimonial.content}
                        <span className="text-3xl text-primary/20 font-serif">
                          &quot;
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
