// src/app/page.tsx

import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <main>
      <section id="header">
        <Header />
      </section>

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>


      <section id="education">
        <Education />
      </section>

      
      <section id="projects">
        <Projects />
      </section>

      <section id="certifications">
        <Certifications />
      </section>


      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
