'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Megaphone,
  CalendarDays,
} from 'lucide-react';

const activities = [
  {
    year: '2025',
    organization: 'SoftTechie Club',
    role: 'Secretary',
    period: 'Jan 2025 — Jul 2026',
    icon: Users,
    description:
      'Organized technical events, managed student activities, and coordinated communication across teams while contributing to the student technical community.',
    highlights: [
      'Technical event coordination',
      'Student activity management',
      'Cross-team communication',
    ],
  },
  {
    year: '2024',
    organization: 'IEEE Computer Society',
    role: 'Marketing Member',
    period: 'Apr 2024 — Mar 2025',
    icon: Megaphone,
    description:
      'Supported technical event promotions, outreach, and student engagement while contributing to technology-focused student activities.',
    highlights: [
      'Technical event promotion',
      'Student outreach',
      'Community engagement',
    ],
  },
];

export function Leadership() {
  return (
    <section
      id="leadership"
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
            Leadership & Activities
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Beyond the Code
          </h2>

          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Technical communities, student leadership, and experiences
            that shaped how I work with people and teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-[31px] top-8 bottom-8 w-px bg-primary/30 hidden md:block" />

          <div className="space-y-16">

            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <motion.div
                  key={activity.organization}
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
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Activity Card */}
                  <div className="relative">

                    {/* Year */}
                    <div className="flex items-center gap-4 mb-5">

                      <span className="text-2xl font-bold text-primary">
                        {activity.year}
                      </span>

                      <div className="h-px bg-white/10 flex-1" />

                    </div>

                    <div className="glass p-7 rounded-xl border border-white/5 hover:border-primary/30 transition-all">

                      {/* Title */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">

                        <div>
                          <h3 className="text-xl font-semibold">
                            {activity.organization}
                          </h3>

                          <p className="text-sm text-primary font-mono mt-1">
                            {activity.role}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
                          <CalendarDays className="w-4 h-4" />
                          {activity.period}
                        </div>

                      </div>

                      {/* Description */}
                      <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-3xl">
                        {activity.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">

                        {activity.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-2 text-xs font-mono text-white/50 bg-white/5 border border-white/10 rounded-lg"
                          >
                            {highlight}
                          </span>
                        ))}

                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}