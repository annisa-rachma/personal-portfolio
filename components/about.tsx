'use client'
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 px-4" initial={{opacity: 0, y:100}} animate={{opacity:1, y: 0}} transition={{delay: 0.175}}>
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hey! I'm Annisa and I'm a <span className="font-medium">web developer, designer, and illustrator.</span> I love
        working on the web and making sure it continues to be a place for
        everyone and our creative, personal, and weird passions.
      </p>
      <p className="mb-3">
        After graduating with a degree in <span className="font-medium">Architecture</span>, and work for some years as a <span className="font-medium">Visual Designer.</span> I decided to widen my exploration for product crafting by learning coding. I love the feeling of turning my visual design into an application that are functional yet aesthetically pleasing.
        I love to experiment with the web as a creative medium.
      </p>
      <p>
        When I'm not coding, I enjoy sketching,  painting, and playing badminton, usually on the weekend. 
      </p>
    </motion.section>
  );
}
