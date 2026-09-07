"use client";

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "AWARE",
    description: "Thesis project — a Laravel-based gamified web app for emotional awareness training, with live panic detection and structured post-game reflection.",
    tags: ["Laravel", "MySQL", "Flask API", "Computer Vision"],
    status: "Thesis project",
    color: "bg-blue/10",
    accent: "text-blue",
    number: "01"
  },
  {
    title: "HRIS Backend",
    description: "Back-end system for a Human Resource Information System — multi-company employee & admin authentication via Laravel Sanctum, RESTful API for attendance, leave management, and payroll processing.",
    tags: ["Laravel", "Sanctum", "MySQL", "REST API"],
    status: "Group project",
    color: "bg-accent/10",
    accent: "text-accent",
    number: "02",
    link: "https://github.com/HRIS-System-Group-4/Back-End"
  },
  {
    title: "Fruvita",
    description: "A landing page for a fruit-sales business — product listings, product advantages, an FAQ section, and purchase links integrated with Shopee.",
    tags: ["Laravel", "Blade", "MySQL", "Shopee Integration"],
    status: "Freelance, Aug–Sep 2026",
    color: "bg-accent-warm/10",
    accent: "text-accent-warm",
    number: "03"
  },
  {
    title: "Face-Detection Attendance System",
    description: "A web-based automated attendance system using face detection, built during a hospital internship and now used to record staff attendance.",
    tags: ["Python", "TensorFlow", "MediaPipe"],
    status: "RS Semen Gresik Internship",
    color: "bg-blue/10",
    accent: "text-blue",
    number: "04"
  },
  {
    title: "Mask Detection & IoT Monitoring",
    description: "A mask-detection program for a restricted hospital room, alongside a full-stack web service connecting IoT devices for monitoring and data integration.",
    tags: ["Python", "TensorFlow", "MediaPipe", "IoT"],
    status: "RS Semen Gresik internship",
    color: "bg-accent/10",
    accent: "text-accent",
    number: "05"
  },
  {
    title: "SLM RAG Chatbot",
    description: "A chatbot built on a Small Language Model with Retrieval-Augmented Generation, running entirely locally without any external API.",
    tags: ["Python", "Hugging Face Transformers", "RAG"],
    status: "RS Semen Gresik internship",
    color: "bg-accent-warm/10",
    accent: "text-accent-warm",
    number: "06"
  }
];

export default function Projects() {
  return (
    <section id="works" className="py-20 md:py-28 relative z-10">
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
            WORKS
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block flex-1 h-[2px] bg-ink/10 origin-left mb-3"
          />
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl border border-cream-dark/80 overflow-hidden hover:shadow-xl hover:shadow-blue/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full ${project.color}`} />

              <div className="p-6 md:p-8">
                {/* Number + GitHub link */}
                <div className="flex items-start justify-between">
                  <span className={`text-5xl font-black ${project.accent} opacity-20 leading-none`}>
                    {project.number}
                  </span>
                  {'link' in project && project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-muted hover:text-blue transition-colors p-1"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-ink mt-2 mb-3 group-hover:text-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-cream text-ink-light font-medium border border-cream-dark/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-cream-dark/50">
                  <span className={`text-xs font-semibold ${project.accent}`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
