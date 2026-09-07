"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const jobs = [
  {
    role: "Back-End Web Developer",
    company: "Freelance — Fruvita",
    location: "Kota Malang, Jawa Timur",
    period: "Aug 2026 – Sep 2026",
    description:
      "Built the Fruvita landing page for a fruit-sales business: product listings, product advantages, an FAQ section, and purchase links integrated with Shopee. Developed with Laravel and Blade, with a responsive layout.",
  },
  {
    role: "Full-Stack Web Developer (Internship)",
    company: "Rumah Sakit Semen Gresik",
    location: "Kab. Gresik, Jawa Timur",
    period: "Jul 2025 – Jan 2026",
    description:
      "Six-month internship (7 Jun – 31 Dec 2025) building systems for hospital operations: a face-detection attendance system now used to record staff attendance, a mask-detection program for a restricted room, a full-stack web IoT monitoring service, and a local chatbot using an SLM with RAG that runs without an external API.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative z-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="flex items-end gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-ink leading-none"
          >
            EXPERIENCE
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block flex-1 h-[2px] bg-ink/10 origin-left mb-3"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Work timeline */}
          <div className="lg:col-span-2 space-y-10">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-cream-dark"
              >
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue" />
                <p className="text-xs uppercase tracking-wider text-ink-muted font-medium mb-1">
                  {job.period}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-ink">{job.role}</h3>
                <p className="text-sm text-blue font-medium mb-3">
                  {job.company} · {job.location}
                </p>
                <p className="text-ink-light text-sm leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Education & certification */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-cream-dark/80 p-6"
            >
              <div className="w-10 h-10 rounded-full bg-blue-pale flex items-center justify-center mb-4">
                <GraduationCap size={18} className="text-blue" />
              </div>
              <p className="text-xs uppercase tracking-wider text-ink-muted font-medium mb-1">
                2022 – 2026
              </p>
              <h3 className="text-base font-bold text-ink">D4 Teknik Informatika</h3>
              <p className="text-sm text-ink-light">Politeknik Negeri Malang</p>
              <p className="text-sm text-blue font-medium mt-1">GPA 3.75</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl border border-cream-dark/80 p-6"
            >
              <div className="w-10 h-10 rounded-full bg-accent-warm/20 flex items-center justify-center mb-4">
                <Award size={18} className="text-accent-warm" />
              </div>
              <p className="text-xs uppercase tracking-wider text-ink-muted font-medium mb-1">
                May 2026 – May 2028
              </p>
              <h3 className="text-base font-bold text-ink">TOEIC Certification</h3>
              <p className="text-sm text-ink-light">International Test Center</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
