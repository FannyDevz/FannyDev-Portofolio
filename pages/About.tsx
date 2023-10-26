import React from "react";
import Image from "next/image";
import { mont, mono } from "@/utils/fonts";
import { motion as m } from "framer-motion";

export default function About() {
  const tech: string[] = [
    "PHP",
    "Java",
    "JavaScript",
    "React",
    "NodeJS",
    "Go",
    "WordPress",
    "And Anything",
  ];
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.5 }}
      className="mb-20 py-36 xl:mx-40"
      id="about"
    >
      <h2 className={mont.className} >
        <span className={`${mono.className} text-lg md:text-2xl text-cyan`}>
          01.{" "}
        </span>
        About Me
      </h2>
      <div className="parent-about">
        <div className={`${mont.className} about-desc-parent`}>
          <p className="break-normal">
            Hi, My name is <span className="text-cyan">Fanny Bagus Ramadhan</span> but i
            would like if you call me <span className="text-cyan">Fanny</span>,
            "I am a skilled full-stack web developer with expertise in front-end and back-end technologies. I create visually appealing interfaces using HTML, CSS, and JavaScript, and build dynamic web applications with React, Node.js, and PHP. With experience in SQL and NoSQL databases, I implement secure authentication and efficient data handling. My collaborative mindset, attention to detail, and commitment to continuous learning ensure the delivery of high-quality projects that exceed client expectations."
          </p>
          <p>Here are a few technologies i've been working with recently</p>
          <ul className="w-72 lg:w-96 grid grid-cols-2 list-inside list-disc leading-5">
            {tech.map((item, id) => (
              <li key={id} className={`${mono.className} text-sm`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-img-parent">
          <div className="about-img-div"></div>
          <Image
            priority
            className="about-img-img"
            src="/me.png"
            width={800}
            height={800}
            alt="Fanny Bagus Ramadhan"
            quality={80}
          />
        </div>
      </div>
    </m.section>
  );
}
