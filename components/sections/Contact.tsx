'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  Send,
  Loader2,
  Phone,
} from 'lucide-react';
import { useState, FormEvent } from 'react';

const PHONE_NUMBER = '+91 9901918795';

export function Contact() {
  const [formState, setFormState] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormState('submitting');

    try {
      const form = e.currentTarget;

      const response = await fetch('https://formspree.io/f/xkjgblod', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(form),
      });

      if (response.ok) {
        setFormState('success');

        setFormData({
          name: '',
          email: '',
          message: '',
        });

        setTimeout(() => {
          setFormState('idle');
        }, 4000);
      } else {
        const data = await response.json().catch(() => null);

        console.error('Formspree error:', data);

        setFormState('error');

        setTimeout(() => {
          setFormState('idle');
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);

      setFormState('error');

      setTimeout(() => {
        setFormState('idle');
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-background/50"
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-primary mb-4 block">
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            LET&apos;S BUILD SOMETHING
          </h2>

          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            I&apos;m always interested in discussing new projects, technical
            challenges, or opportunities. Whether you have a question about
            my work or want to collaborate, feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=manjugowda200523@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link group glass p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors"
            aria-label="Email"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>

            <span className="font-mono text-xs tracking-widest uppercase text-white/50 block mb-1">
              Email
            </span>

            <span className="text-sm font-medium text-white truncate block">
              manjugowda200523@gmail.com
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/manjugowda-l"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link group glass p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors"
            aria-label="GitHub"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/20 transition-colors">
              <Github className="w-6 h-6 text-secondary" />
            </div>

            <span className="font-mono text-xs tracking-widest uppercase text-white/50 block mb-1">
              GitHub
            </span>

            <span className="text-sm font-medium text-white truncate block">
              @manjugowda-l
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/manjugowda-l"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link group glass p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors"
            aria-label="LinkedIn"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600/30 transition-colors">
              <Linkedin className="w-6 h-6 text-blue-400" />
            </div>

            <span className="font-mono text-xs tracking-widest uppercase text-white/50 block mb-1">
              LinkedIn
            </span>

            <span className="text-sm font-medium text-white truncate block">
              manjugowda-l
            </span>
          </a>

          {/* Phone */}
          <div className="contact-link group glass p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-success/10 border border-success/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-success/20 transition-colors">
              <Phone className="w-6 h-6 text-success" />
            </div>

            <span className="font-mono text-xs tracking-widest uppercase text-white/50 block mb-1">
              Phone
            </span>

            <span className="text-sm font-medium text-white truncate block">
              {PHONE_NUMBER}
            </span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass p-8 rounded-2xl border border-white/5 text-left max-w-xl mx-auto"
        >
          <h3 className="font-mono text-sm font-semibold tracking-widest uppercase text-primary mb-6 flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send a Message
          </h3>

          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-success/20 border border-success/30 flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-success" />
              </div>

              <h4 className="text-lg font-semibold mb-2">
                Message Sent!
              </h4>

              <p className="text-white/50">
                Thanks for reaching out. I&apos;ll get back to you as soon
                as possible.
              </p>
            </motion.div>
          ) : (
            <form
              name="contact"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono tracking-widest uppercase text-white/50 mb-2"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={formState === 'submitting'}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                  placeholder="Your Name"
                  aria-required="true"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono tracking-widest uppercase text-white/50 mb-2"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={formState === 'submitting'}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                  placeholder="your@email.com"
                  aria-required="true"
                />

                <p className="text-xs text-white/30 mt-2">
                  So I can reply to you.
                </p>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono tracking-widest uppercase text-white/50 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  disabled={formState === 'submitting'}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50 resize-none"
                  placeholder="What's on your mind?"
                  aria-required="true"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full px-6 py-3.5 text-base font-medium text-white bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formState === 'submitting' && (
                  <Loader2 className="w-5 h-5 animate-spin" />
                )}

                {formState === 'submitting'
                  ? 'Sending...'
                  : 'Send Message'}

                {formState !== 'submitting' && (
                  <Send className="w-4 h-4" />
                )}
              </button>

              {formState === 'error' && (
                <p className="text-xs text-red-400 text-center">
                  Failed to send. Please try again or email me directly.
                </p>
              )}

              <p className="text-xs text-white/30 text-center">
                Your message will be sent directly to my email.
              </p>
            </form>
          )}
        </motion.div>

        {/* Availability Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-5 glass rounded-xl border border-white/5"
        >
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-white/40 font-mono text-center">
              <span className="text-primary">●</span>{' '}
              Open to Opportunities
            </p>

            <p className="text-sm text-white/30 font-mono text-center">
              Full-Time • Internship • Contract • Freelance • Project Opportunities
            </p>

            <p className="flex items-center gap-2 text-sm font-mono text-white/50">
              <Phone className="w-4 h-4" />
              {PHONE_NUMBER}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}