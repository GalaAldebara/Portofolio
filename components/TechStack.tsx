"use client";

import React from 'react';
import { motion } from 'framer-motion';
import LogoLoop, { type LogoItem } from './LogoLoop';

const techLogos: LogoItem[] = [
  { src: 'https://cdn.simpleicons.org/laravel', alt: 'Laravel' },
  { src: 'https://cdn.simpleicons.org/mysql', alt: 'MySQL' },
  { src: 'https://cdn.simpleicons.org/php', alt: 'PHP' },
  { src: 'https://cdn.simpleicons.org/nextdotjs', alt: 'Next.js' },
  { src: 'https://cdn.simpleicons.org/react', alt: 'React' },
  { src: 'https://cdn.simpleicons.org/typescript', alt: 'TypeScript' },
  { src: 'https://cdn.simpleicons.org/tailwindcss', alt: 'Tailwind CSS' },
  { src: 'https://cdn.simpleicons.org/framer', alt: 'Framer Motion' },
  { src: 'https://cdn.simpleicons.org/python', alt: 'Python' },
  { src: 'https://cdn.simpleicons.org/tensorflow', alt: 'TensorFlow' },
  { src: 'https://cdn.simpleicons.org/huggingface', alt: 'Hugging Face Transformers' },
  {
    node: <span className="font-bold text-ink-light tracking-wide">MediaPipe</span>,
    ariaLabel: 'MediaPipe'
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 md:py-28 relative z-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-end gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-ink leading-none"
          >
            TECH STACK
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block flex-1 h-[2px] bg-ink/10 origin-left mb-3"
          />
        </div>
      </div>

      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={40}
        gap={56}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#F5F0E8"
        ariaLabel="Tools and technologies I work with"
      />
    </section>
  );
}
