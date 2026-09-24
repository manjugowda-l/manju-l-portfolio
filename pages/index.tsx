import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { BuildDevNotes } from '@/components/sections/BuildDevNotes';
import { Leadership } from '@/components/sections/Leadership';import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BuildDevNotes />
        <Leadership />
        <Education />
      
        <Achievements />
        <Contact />
      </Layout>
    </>
  );
}