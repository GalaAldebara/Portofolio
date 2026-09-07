"use client";

import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink overflow-hidden">
      <div className="relative">
        <Hero />

        <TechStack />

        {/* Divider */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
        </div>

        <Experience />

        {/* Divider */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
        </div>

        <Projects />

        {/* Contact / CTA Section */}
        <section id="contact" className="py-20 md:py-28 relative z-10">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-8 mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-ink leading-none"
              >
                LET&apos;S<br />
                <span className="text-transparent" style={{
                  WebkitTextStroke: '2px #3B7DD8',
                }}>CONNECT</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-8 md:gap-16"
            >
              <div className="flex-1">
                <p className="text-ink-light text-lg leading-relaxed mb-8 max-w-lg">
                  Have a project in mind or just want to say hello? I&apos;d love to hear from you. Let&apos;s build something great together.
                </p>
                <a
                  href="mailto:lalasipo20@gmail.com"
                  className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-blue hover:text-blue-deep transition-colors group"
                >
                  lalasipo20@gmail.com
                  <svg
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <p className="text-ink-muted text-sm font-medium mt-4">085816178961</p>
              </div>

              <div className="flex gap-6 text-sm text-ink-muted font-medium">
                <a href="https://www.linkedin.com/in/muhammad-iqbal-makmur/" className="hover:text-blue transition-colors">LinkedIn</a>
                <a href="https://github.com/GalaAldebara" className="hover:text-blue transition-colors">GitHub</a>
                <a href="https://www.instagram.com/hidupmakmur24/" className="hover:text-blue transition-colors">Instagram</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-ink-muted text-sm border-t border-ink/5 relative z-10">
          <div className="container mx-auto px-6">
            <p>© {new Date().getFullYear()} Muhammad Iqbal Makmur Al-Muniri. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
