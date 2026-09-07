"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Lanyard = dynamic(() => import('./Lanyard'), { ssr: false });

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Subtle decorative shapes */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-blue-pale/60 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full bg-accent/10 blur-[60px] pointer-events-none" />

      {/* ── Lanyard ─────────────────────────────────────────────────
          Mobile  → relative, full-width, 400 px tall (above text)
          Desktop → absolute from top-right of the page, 45% width,
                    full viewport height so the rope hangs from above
                    the navbar.                                       */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="
          relative w-full h-[400px]
          lg:absolute lg:top-0 lg:right-0 lg:w-[45%] lg:h-full
        "
      >
        <Lanyard
          position={[0, 0, 13]}
          fov={28}
          gravity={[0, -40, 0]}
          frontImage="/CV Profile.jpeg"
          transparent
        />
      </motion.div>

      {/* ── Text content ────────────────────────────────────────────
          pointer-events-none on the wrapper so the lanyard canvas
          underneath stays interactive (card is draggable).
          Re-enable pointer-events on actual clickable elements.      */}
      <div className="relative z-10 pointer-events-none">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Nav */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-8 mb-16 md:mb-24 pointer-events-auto"
          >
            <span className="text-2xl font-bold italic text-ink">Muhammad Iqbal Makmur Al-Muniri</span>
          </motion.nav>

          {/* Hero text — vertically centered, left half on desktop */}
          <div className="lg:flex lg:items-center lg:min-h-[calc(100vh-10rem)]">
            <div className="lg:max-w-[55%] pointer-events-auto">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm md:text-base uppercase tracking-[0.3em] text-ink-muted mb-4 font-medium"
              >
                Hi there, I&apos;m Iqbal
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-6xl md:text-8xl lg:text-[8rem] font-black leading-[0.85] tracking-tighter text-ink mb-6"
              >
                <span className="block">FULL</span>
                <span className="block">STACK</span>
                <span className="block text-transparent" style={{
                  WebkitTextStroke: '2px #3B7DD8',
                }}>DEV<span className="text-blue">.</span></span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-ink-light text-base md:text-lg max-w-md leading-relaxed"
              >
                D4 Informatika graduate of Politeknik Negeri Malang (GPA 3.75). I build Laravel-based web platforms, from gamified training apps to face-detection systems now running in production, with a habit of clean, well-tested code.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 flex gap-4 pb-16"
              >
                <a
                  href="#works"
                  className="inline-flex items-center gap-2 bg-blue text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-deep transition-colors"
                >
                  View Works
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border-2 border-ink/20 text-ink px-6 py-3 rounded-full text-sm font-semibold hover:border-blue hover:text-blue transition-colors"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
