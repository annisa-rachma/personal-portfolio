"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 ">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1683513561090-0835f3cb7719?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="rounded-full h-24 w-24 border-white border-[0.25rem] object-cover shadow-lg "
            />
          </motion.div>

          <motion.span
            className="text-3xl absolute bottom-0 right-0 "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <p className="mb-10 mt-4 px-4 text-xl sm:text-2xl font-medium !leading-[1.5]">
        <span className="font-bold">Hi, I'm Annisa, </span>
         a <span className="font-bold">web developer and designer</span> who love using code to merge design and technology, creating aesthetically pleasing and functional outcomes.
      </p>
    </section>
  );
}
