import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Code2,
  Clock,
  Workflow,
  Play,
} from 'lucide-react';

import { featuredProjects, getProjectBySlug, Project } from '@/data/projects';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const siteUrl = 'https://manju-l-portfolio.vercel.app';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.name,
    description: project.description,
    url: `${siteUrl}/projects/${project.slug}`,
    codeRepository: project.githubUrl,
    programmingLanguage: project.technologies.join(', '),
    author: {
      '@type': 'Person',
      name: 'Manju L',
    },
    dateModified: project.updatedAt,
    keywords: project.topics?.join(', '),
  };

  return (
    <>
      <SEO
        title={project.name}
        description={project.description}
        canonical={`${siteUrl}/projects/${project.slug}`}
        ogType="article"
        structuredData={structuredData}
      />

      <Layout>
        <article className="pt-16 pb-24 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors font-mono text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </motion.div>

            {/* Hero */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {project.pipelineImageUrl ? (
                    <Workflow className="w-6 h-6 text-primary" />
                  ) : (
                    <Code2 className="w-6 h-6 text-primary" />
                  )}
                </div>

                <div>
                  <span className="font-mono text-xs tracking-widest uppercase text-primary">
                    Featured Project
                  </span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                {project.name}
              </h1>

              <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                {project.longDescription || project.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 mt-8 text-sm">
                {project.language && (
                  <span className="flex items-center gap-1 text-white/50">
                    <Code2 className="w-3.5 h-3.5" />
                    {project.language}
                  </span>
                )}

                <span className="flex items-center gap-1 text-white/50">
                  <Clock className="w-3.5 h-3.5" />
                  Updated {formatDate(project.updatedAt)}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-all"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white/70 border border-white/10 rounded-lg hover:border-white/30 hover:text-white transition-all"
                  >
                    <Play className="w-5 h-5" />
                    Demo Video
                  </a>
                )}

                {project.pipelineImageUrl && (
                  <a
                    href={project.pipelineImageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white/70 border border-white/10 rounded-lg hover:border-white/30 hover:text-white transition-all"
                  >
                    <Workflow className="w-5 h-5" />
                    Pipeline Flow
                  </a>
                )}
              </div>
            </motion.header>

            {/* Technology Stack */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="font-mono text-sm font-semibold tracking-widest uppercase text-primary mb-6 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Technology Stack
              </h2>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-lg hover:border-primary/30 hover:text-primary transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Topics */}
            {project.topics && project.topics.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-16"
              >
                <h2 className="font-mono text-sm font-semibold tracking-widest uppercase text-primary mb-6">
                  Project Areas
                </h2>

                <div className="flex flex-wrap gap-3">
                  {project.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-4 py-2 text-sm text-white/60 bg-white/5 border border-white/10 rounded-lg"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Project Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="font-mono text-sm font-semibold tracking-widest uppercase text-primary mb-6">
                Project Overview
              </h2>

              <div className="glass p-6 md:p-8 rounded-xl border border-white/5">
                <p className="text-white/70 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>
            </motion.section>

            {/* Pipeline Image */}
            {project.pipelineImageUrl && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-16"
              >
                <h2 className="font-mono text-sm font-semibold tracking-widest uppercase text-primary mb-6 flex items-center gap-2">
                  <Workflow className="w-4 h-4" />
                  Pipeline Flow
                </h2>

                <a
                  href={project.pipelineImageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass rounded-xl border border-white/5 overflow-hidden hover:border-primary/30 transition-all"
                >
                  <img
                    src={project.pipelineImageUrl}
                    alt={`${project.name} pipeline flow`}
                    className="w-full h-auto object-contain"
                  />
                </a>
              </motion.section>
            )}

            {/* Footer Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-8 border-t border-white/5"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-all"
              >
                <Github className="w-5 h-5" />
                View Source on GitHub
              </a>

              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white/70 border border-white/10 rounded-lg hover:border-white/30 hover:text-white transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Projects
              </Link>
            </motion.div>
          </div>
        </article>
      </Layout>
    </>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = featuredProjects.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};