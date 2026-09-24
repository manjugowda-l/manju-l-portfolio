'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  ExternalLink,
  Layers,
} from 'lucide-react';

const buildDevNotesUrl = 'https://tech-notes-dev.vercel.app/';
const pinterestUrl = 'https://pin.it/29zNmJjtR';
export function BuildDevNotes() {
  return (
    <section
      id="build-dev-notes"
      className="py-24 px-6 bg-background/50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-primary mb-4 block">
            Build • Learn • Share
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Build Dev Notes
          </h2>

          <p className="text-white/50 mt-4 max-w-2xl mx-auto leading-relaxed">
            A technical space where I organize developer notes,
            concepts, and practical resources while documenting
            what I learn and build.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl border border-white/5 overflow-hidden"
        >

          <div className="grid lg:grid-cols-2">

            {/* Left */}
            <div className="p-8 md:p-12">

              <div className="flex items-center gap-3 mb-8">

                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    A Place for Things Worth Remembering
                  </h3>

                  <p className="text-sm text-white/40 font-mono mt-1">
                    technical notes • resources • learning
                  </p>
                </div>

              </div>

              <p className="text-white/60 leading-relaxed mb-8">
                Build Dev Notes is my personal technical knowledge
                platform where I turn what I learn into structured,
                reusable notes. It is built to make technical concepts
                easier to understand, revisit, and share.
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-3 mb-10">

                <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/60">
                  <Code2 className="w-4 h-4 text-primary" />
                  Development
                </span>

                <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/60">
                  <Layers className="w-4 h-4 text-primary" />
                  Cloud & DevOps
                </span>

                <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/60">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Technical Notes
                </span>

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">

                <a
                  href={buildDevNotesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary/10 border border-primary/30 text-white font-medium hover:bg-primary/20 transition-all"
                >
                  Visit Build Dev Notes
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={pinterestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
                >
                  Pinterest
                  <ExternalLink className="w-4 h-4" />
                </a>

              </div>

            </div>

            {/* Right Visual */}
            <div className="relative min-h-[360px] border-t lg:border-t-0 lg:border-l border-white/5 bg-white/[0.015] overflow-hidden">

              {/* Decorative Grid */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              {/* Floating Note Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-16 left-12 right-16 p-5 rounded-xl bg-[#111]/90 border border-primary/20 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-4">

                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-primary" />
                  </div>

                  <div>
                    <div className="text-sm font-semibold">
                      Developer Notes
                    </div>

                    <div className="text-xs text-white/40 font-mono">
                      learn → build → document
                    </div>
                  </div>

                </div>

                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-white/5 w-full" />
                  <div className="h-2 rounded-full bg-white/5 w-4/5" />
                  <div className="h-2 rounded-full bg-primary/20 w-3/5" />
                </div>

              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-14 right-10 w-48 p-5 rounded-xl bg-[#111]/90 border border-white/10"
              >
                <BookOpen className="w-5 h-5 text-primary mb-3" />

                <div className="text-sm font-semibold mb-1">
                  Knowledge Library
                </div>

                <div className="text-xs text-white/40 leading-relaxed">
                  Concepts, notes and resources organized for easy revision.
                </div>
              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}