'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-6 bg-background/50">
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
            Technical Stack
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technologies I Work With
          </h2>

          <p className="text-white/50 mt-2 max-w-2xl mx-auto">
            A practical stack built around software development, cloud,
            DevOps, and core computer science.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Skill categories"
        >

          {/* All Button */}
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === null}
            onClick={() => setSelectedCategory(null)}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
              selectedCategory === null
                ? 'bg-white/10 border border-white/20 text-white'
                : 'bg-white/5 border border-white/10 text-white/60 hover:border-white/30 hover:text-white'
            }`}
          >
            All
          </button>

          {/* Category Buttons */}
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                selectedCategory === cat.category
                  ? 'bg-white/10 border border-white/20 text-white'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.category}
            </button>
          ))}

        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {skillCategories
              .filter(
                (cat) =>
                  selectedCategory === null ||
                  cat.category === selectedCategory
              )
              .map((cat) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="glass p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                >

                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">

                    <div
                      className="w-10 h-10 rounded-lg border flex items-center justify-center"
                      style={{
                        backgroundColor: `${cat.color}15`,
                        borderColor: `${cat.color}40`,
                      }}
                    >
                      <cat.icon
                        className="w-5 h-5"
                        style={{ color: cat.color }}
                      />
                    </div>

                    <h3 className="font-semibold">
                      {cat.category}
                    </h3>

                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">

                    {cat.skills.map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.04,
                        }}
                        className="px-3 py-2 text-sm font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg hover:text-white hover:border-white/25 transition-all tech-mono"
                      >
                        {skill.name}
                      </motion.span>
                    ))}

                  </div>

                </motion.div>
              ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}