'use client';

import { motion } from 'framer-motion';
import {
  Trophy,
  Medal,
  Award,
  Sparkles,
  BookOpen,
} from 'lucide-react';

const achievements = [
  {
    title: 'VTU Topper',
    description:
      'Recognized as a VTU topper in the 1st, 3rd, and 5th semesters.',
    icon: Trophy,
  },
  {
    title: '1st Position in Branch',
    description:
      'Secured 1st position in the branch during the 1st semester.',
    icon: Medal,
  },
  {
    title: 'AWS Cloud Quest',
    description:
      'Completed the AWS Cloud Quest: Cloud Practitioner learning path and earned the AWS Cloud Quest training badge.',
    icon: Award,
    badge: true,
  },
  {
    title: 'Technical Hackathons',
    description:
      'Participated in technical hackathons and student innovation activities.',
    icon: Sparkles,
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
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
            Recognition & Milestones
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Achievements
          </h2>

          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Academic recognition, technical milestones, and learning
            achievements along my journey.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.article
                key={achievement.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="glass rounded-xl border border-white/5 hover:border-primary/30 transition-all overflow-hidden"
              >
                <div className="p-7">

                  {/* Header */}
                  <div className="flex items-start gap-4">

                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        {achievement.title}
                      </h3>

                      <p className="text-xs text-primary/70 font-mono mt-1">
                        Achievement
                      </p>
                    </div>

                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/60 leading-relaxed mt-6">
                    {achievement.description}
                  </p>

                </div>

                {/* AWS Badge */}
                {achievement.badge && (
                  <div className=" flex items-center justify-center">
                    {/*<img
                      src="/aws-cloud-quest.jpeg"
                      alt="AWS Cloud Quest Cloud Practitioner Training Badge"
                      className="w-36 h-36 object-contain"
                    />*/}
                  </div>
                )}

              </motion.article>
            );
          })}

        </div>

        {/* Continuation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex flex-col items-center justify-center"
        >
          <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center text-primary">
            <BookOpen className="w-5 h-5" />
          </div>

          <p className="mt-4 text-sm font-mono text-muted-foreground">
            Continuously Learning &amp; Building
          </p>
        </motion.div>

      </div>
    </section>
  );
}