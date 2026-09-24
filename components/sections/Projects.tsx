'use client';

import { motion } from 'framer-motion';
import { Github, Play, Code2, Workflow } from 'lucide-react';

import { featuredProjects, Project } from '@/data/projects';

export function Projects() {
  return (
    <section
      id="projects"
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
            Featured Engineering Work
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>

          <p className="text-white/50 mt-2 max-w-2xl mx-auto">
            A selection of projects I have built across full-stack development,
            AI-powered applications, and cloud & DevOps.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const hasPipelineFlow = Boolean(project.pipelineImageUrl);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: 0.1 * index,
      }}
      className="glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden"
    >

      {/* Project Header */}
      <div className="flex items-start gap-3 mb-4">

        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
          <Code2 className="w-6 h-6 text-primary" />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-lg">
            {project.name}
          </h4>

          <span className="text-xs font-mono text-primary/70">
            {project.id}
          </span>
        </div>

      </div>

      {/* Description */}
      <p className="text-white/60 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">

        {project.technologies.slice(0, 7).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-mono text-white/50 bg-white/5 border border-white/10 rounded hover:border-primary/30 hover:text-primary transition-all"
          >
            {tech}
          </span>
        ))}

        {project.technologies.length > 7 && (
          <span className="px-2 py-1 text-xs font-mono text-white/40 bg-white/5 border border-white/10 rounded">
            +{project.technologies.length - 7} more
          </span>
        )}

      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">

        {/* Demo Video / Pipeline Flow */}
        {hasPipelineFlow ? (
          <a
            href={project.pipelineImageUrl!}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-all"
          >
            <Workflow className="w-4 h-4" />
            {project.pipelineLabel || 'Pipeline Flow'}
          </a>
        ) : project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-all"
          >
            <Play className="w-4 h-4" />
            Demo Video
          </a>
        ) : (
          <span
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white/30 bg-white/5 border border-white/10 rounded-lg cursor-not-allowed"
          >
            <Play className="w-4 h-4" />
            Demo Video
          </span>
        )}

        {/* GitHub */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-white/50 hover:text-primary transition-colors"
          aria-label={`View ${project.name} on GitHub`}
        >
          <Github className="w-5 h-5" />
        </a>

      </div>

    </motion.article>
  );
}