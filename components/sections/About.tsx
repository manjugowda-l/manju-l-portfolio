'use client';

import {
  Code,
  Brain,
  Database,
  Cloud,
  Terminal,
  User,
} from 'lucide-react';
import { motion } from 'framer-motion';

const profile = {
  name: 'Manju L',

  title: 'Full-Stack Developer • Cloud & DevOps Enthusiast • AI Explorer',

  location: 'Bengaluru, India',

  email: 'manjugowda200523@gmail.com',

  bio: `I'm an engineering student who enjoys turning ideas into practical software and understanding what happens beyond the code. My interests span full-stack development and DevOps, with a growing curiosity for AI-powered tools. I enjoy building projects that bring together applications, APIs, databases, containers, and cloud infrastructure into something useful and real.`,

  domains: [
    {
      icon: Code,
      label: 'Full-Stack Development',
      desc: 'Java, JavaScript, Node.js, Express.js, REST APIs, React, HTML, CSS, MongoDB, MySQL, and building scalable web applications.',
    },
    {
      icon: Cloud,
      label: 'Cloud & DevOps',
      desc: 'AWS, Docker, Kubernetes, Jenkins, CI/CD, Terraform, Linux, Git, infrastructure automation, container orchestration, and cloud deployment.',
    },
    {
      icon: Brain,
      label: 'AI-Powered Development',
      desc: 'AI-assisted development, LLM-powered applications, prompt engineering, intelligent developer tools, AI APIs, automation, and practical AI integrations.',
    },
    {
      icon: Database,
      label: 'Backend & Systems',
      desc: 'Backend services, APIs, databases, system integration, and understanding how different layers of software work together.Node.js, Express.js, REST APIs, authentication, databases, API integration, system design fundamentals, and building reliable backend services.',
    },
  ],

  interests: [
    'Cloud-Native Development',
    'DevOps & Automation',
    'Full-Stack Applications',
    'AI-Powered Developer Tools',
    'Containerization',
    'CI/CD Pipelines',
    'Backend Systems',
    'Developer Productivity',
  ],

  specializations: [
    'Full-Stack Web Development',
    'Cloud & DevOps',
    'REST API Development',
    'Docker & Kubernetes',
    'CI/CD Automation',
    'AI-Assisted Development',
  ],
};

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background/50">
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
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            A Developer Who Likes to Build
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="glass p-6 rounded-xl border border-white/5">

              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6">

                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
                  <User className="w-10 h-10 text-primary" />
                </div>

                <div>
                  <h3 className="font-mono text-lg font-semibold">
                    {profile.name}
                  </h3>

                  <p className="text-sm text-white/50">
                    {profile.title}
                  </p>
                </div>

              </div>

              {/* Bio */}
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {profile.bio}
              </p>

              {/* Location + Email */}
              <div className="space-y-3 text-sm">

                <div className="flex items-center gap-3 text-white/50">
                  <Terminal className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-mono">
                    {profile.location}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-white/50">
                  <Terminal className="w-4 h-4 text-primary flex-shrink-0" />

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=manjugowda200523@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>

              </div>
            </div>

            {/* Focus Areas */}
            <div className="glass p-6 rounded-xl border border-white/5">

              <h4 className="font-mono text-sm font-semibold mb-4 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Focus Areas
              </h4>

              <ul className="space-y-2">

                {profile.specializations.map((spec, i) => (
                  <li
                    key={i}
                    className="text-sm text-white/60 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {spec}
                  </li>
                ))}

              </ul>

            </div>
          </motion.div>

          {/* Technical Domains */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >

            <h3 className="font-mono text-sm font-semibold tracking-widest uppercase text-primary mb-6">
              What I Work With
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {profile.domains.map((domain, i) => (
                <motion.div
                  key={domain.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * i,
                  }}
                  className="glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group"
                >

                  <div className="flex items-center gap-3 mb-3">

                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <domain.icon className="w-5 h-5 text-primary" />
                    </div>

                    <h4 className="font-semibold">
                      {domain.label}
                    </h4>

                  </div>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {domain.desc}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >

          <h3 className="font-mono text-sm font-semibold tracking-widest uppercase text-primary mb-6">
            What I'm Exploring
          </h3>

          <div className="flex flex-wrap gap-3">

            {profile.interests.map((interest, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.05 * i,
                }}
                className="px-4 py-2 text-sm font-medium text-white/70 bg-white/5 border border-white/10 rounded-full hover:border-primary/30 hover:text-primary transition-all cursor-default"
              >
                {interest}
              </motion.span>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}