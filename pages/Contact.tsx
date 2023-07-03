import React from "react";
import { mono, mont } from "@/utils/fonts";
import { motion as m } from "framer-motion";

export default function page() {
  return (
    <m.section
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      className="text-center flex flex-col justify-center items-center gap-3 my-60"
      id="contact"
    >
      <div>
        <span className={`${mono.className} text-xs md:text-lg text-cyan`}>
          04. What's Next?
        </span>
        <h2 className={mont.className}>Get In Touch</h2>
      </div>
      <p className={`${mont.className} md:px-10 lg:px-36`}>
        If you're interested in discussing a project, have any questions, or would like to connect, I would love to hear from you. Please click the button below to send me an email.
      </p>
      <button type="submit" className={`${mono.className} mt-5 btn w-28`}>
        <a href="mailto:fannybagus9f@gmail.com">Say Hay!</a>
      </button>
    </m.section>
  );
}
