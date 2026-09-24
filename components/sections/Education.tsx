'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  CalendarDays,
} from 'lucide-react';

const education = [
  {
    year: '2023',
    degree: 'Bachelor of Engineering',
    field: 'Electronics & Communication Engineering',
    institution: 'Bangalore Institute of Technology',
    period: 'Oct 2023 — Present',
    result: 'CGPA: 9.37',
  },
  {
    year: '2021',
    degree: 'PCMB',
    field: '',
    institution: 'Sri Lakshmi PU College',
    period: 'Aug 2021 — Mar 2023',
    result: '95.1%',
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-background/50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-primary mb-4 block">
            Academic Journey
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Education
          </h2>

          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            The academic foundation behind my technical journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-[31px] top-8 bottom-8 w-px bg-primary/30 hidden md:block" />

          <div className="space-y-16">

            {education.map((item, index) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative grid md:grid-cols-[64px_1fr] gap-6"
              >

                {/* Timeline Marker */}
                <div className="relative z-10 flex justify-center">
                  <div className="w-16 h-16 rounded-xl bg-background border border-white/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Education */}
                <div className="relative">

                  {/* Year */}
                  <div className="flex items-center gap-4 mb-5">

                    <span className="text-2xl font-bold text-primary">
                      {item.year}
                    </span>

                    <div className="h-px bg-white/10 flex-1" />

                  </div>

                  <div className="glass p-7 rounded-xl border border-white/5 hover:border-primary/30 transition-all">

                    {/* Title */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                      <div>

                        <h3 className="text-xl font-semibold">
                          {item.degree}
                        </h3>

                        {item.field && (
                          <p className="text-base text-white/70 mt-1">
                            {item.field}
                          </p>
                        )}

                        <p className="text-primary/80 font-mono text-sm mt-3">
                          {item.institution}
                        </p>

                      </div>

                      <div className="flex flex-col md:items-end gap-2">

                        <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
                          <CalendarDays className="w-4 h-4" />
                          {item.period}
                        </div>

                        <span className="text-sm font-semibold text-white/70">
                          {item.result}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}