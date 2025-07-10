"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "Krishna Darji",
    role: "Owner",
    image: "/CEO.jpg",
    testimonial:
      "Krishna Darji is a visionary leader with a passion for innovation.",
  },
  {
    name: "Kiran Raval",
    role: "Office Boy",
    image: "/i.jpg",
    testimonial:
      "Kiran Raval is a professionals Office boy",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 w-48 h-48 bg-primary/5 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.8, 0.5, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            Our Team
          </motion.span>
          <h2 className="text-4xl font-bold mb-6">Meet Our Experts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get to know the passionate professionals behind Tirth Travels.
          </p>
        </motion.div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="p-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="relative group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Avatar className="h-24 w-24 mx-auto ring-2 ring-primary/20 ring-offset-2">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold text-xl mt-4">
                        {member.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                      <blockquote className="mt-4 text-muted-foreground italic text-sm">
                        &quot;{member.testimonial}&quot;
                      </blockquote>
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
};

export default Team;
