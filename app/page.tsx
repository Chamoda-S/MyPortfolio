'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioConfig } from '@/lib/portfolio-config';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { personal, contact, projects, skills, experience } = portfolioConfig;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="w-10 h-10 relative">
            <Image
              src="/monogram.jpg"
              alt="Monogram logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {[
              { label: 'About', id: 'about' },
              { label: 'Projects', id: 'projects' },
              { label: 'Skills', id: 'skills' },
              { label: 'Experience', id: 'experience' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                suppressHydrationWarning
                className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            suppressHydrationWarning
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="flex flex-col gap-4 px-6 py-4">
              {[
                { label: 'About', id: 'about' },
                { label: 'Projects', id: 'projects' },
                { label: 'Skills', id: 'skills' },
                { label: 'Experience', id: 'experience' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  suppressHydrationWarning
                  className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity text-left"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p
                className="text-sm uppercase tracking-widest font-medium"
                style={{ color: 'var(--accent-burgundy)' }}
              >
                  Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight text-balance">
                {personal.name}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {personal.tagline}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                suppressHydrationWarning
                className="px-6 sm:px-8 py-3 text-sm sm:text-base text-primary-foreground font-medium hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                Get in Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                suppressHydrationWarning
                className="px-6 sm:px-8 py-3 text-sm sm:text-base border hover:opacity-70 transition-opacity w-full sm:w-auto text-center"
                style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
              >
                View Work
              </button>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary order-first md:order-last">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/chamodaSuraweera.jpeg"
                alt="Chamoda Suraweera portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-border">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p
              className="text-sm uppercase tracking-widest font-medium mb-4"
              style={{ color: 'var(--accent-burgundy)' }}
            >
              About
            </p>
            <h2 className="text-3xl font-serif font-bold">A Bit About Me</h2>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personal.description}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personal.bio}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coursework, I contribute to public knowledge through long-form writing on{' '}
              <a
                href={contact.medium}
                className="font-medium hover:opacity-70 transition-opacity"
                style={{ color: 'var(--accent-burgundy)' }}
              >
                Medium
              </a>
              {' '}and research-based editorial work on{' '}
              <a
                href={contact.wikipedia}
                className="font-medium hover:opacity-70 transition-opacity"
                style={{ color: 'var(--accent-burgundy)' }}
              >
                Wikipedia
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-border">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          <div>
            <p
              className="text-sm uppercase tracking-widest font-medium mb-4"
              style={{ color: 'var(--accent-burgundy)' }}
            >
              Featured Work
            </p>
            <h2 className="text-3xl font-serif font-bold">Selected Projects</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.slice(0, 4).map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary mb-6 group-hover:opacity-80 transition-opacity">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-serif font-bold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <a
                  href={project.githubUrl}
                  className="inline-block px-6 py-2 border border-border hover:opacity-70 transition-opacity text-sm font-medium mt-4"
                  style={{ color: 'var(--accent-burgundy)', borderColor: 'var(--accent-burgundy)' }}
                >
                  GitHub Repo
                </a>
                <p className="text-xs text-muted-foreground mt-2">{project.skills.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-border">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          <div>
            <p
              className="text-sm uppercase tracking-widest font-medium mb-4"
              style={{ color: 'var(--accent-burgundy)' }}
            >
              Skills
            </p>
            <h2 className="text-3xl font-serif font-bold">Technical Expertise</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Skill Category 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wide">Frontend</h3>
            <ul className="space-y-3">
              {skills.frontend.map((skill) => (
                <li key={skill} className="text-muted-foreground flex items-center gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent-burgundy)' }}
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Skill Category 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wide">Backend</h3>
            <ul className="space-y-3">
              {skills.backend.map((skill) => (
                <li key={skill} className="text-muted-foreground flex items-center gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent-burgundy)' }}
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Skill Category 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wide">Design & Other</h3>
            <ul className="space-y-3">
              {skills.design.map((skill) => (
                <li key={skill} className="text-muted-foreground flex items-center gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent-burgundy)' }}
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-border">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          <div>
            <p
              className="text-sm uppercase tracking-widest font-medium mb-4"
              style={{ color: 'var(--accent-burgundy)' }}
            >
              Career
            </p>
            <h2 className="text-3xl font-serif font-bold">Experience</h2>
          </div>
        </div>

        <div className="space-y-12">
          {experience.map((item) => (
            <div key={`${item.company}-${item.title}-${item.period}`} className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">{item.period}</p>
                <p className="font-bold text-lg mt-2">{item.title}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                <p className="text-sm text-muted-foreground">{item.company} • {item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-border">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          <div>
            <p
              className="text-sm uppercase tracking-widest font-medium mb-4"
              style={{ color: 'var(--accent-burgundy)' }}
            >
              Get In Touch
            </p>
            <h2 className="text-3xl font-serif font-bold">Let's Connect</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 order-last md:order-first">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in discussing new projects, innovative ideas, or just connecting 
              with like-minded professionals. Feel free to reach out!
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 text-lg font-medium hover:opacity-70 transition-opacity"
              >
                <Mail size={20} style={{ color: 'var(--accent-burgundy)' }} />
                {contact.email}
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-lg font-medium hover:opacity-70 transition-opacity"
              >
                <Linkedin size={20} style={{ color: 'var(--accent-burgundy)' }} />
                LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-lg font-medium hover:opacity-70 transition-opacity"
              >
                <Github size={20} style={{ color: 'var(--accent-burgundy)' }} />
                GitHub
              </a>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-secondary text-foreground placeholder-muted-foreground border border-border rounded focus:outline-none transition-colors"
        style={{ "--focus-color": "var(--accent-burgundy)" } as React.CSSProperties}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider font-medium">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-secondary text-foreground placeholder-muted-foreground border border-border rounded focus:outline-none transition-colors"
        style={{ "--focus-color": "var(--accent-burgundy)" } as React.CSSProperties}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider font-medium">Message</label>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 bg-secondary text-foreground placeholder-muted-foreground border border-border rounded focus:outline-none focus:border-accent-teal transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                suppressHydrationWarning
                className="w-full px-8 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-border text-center text-muted-foreground text-sm">
        <p>© 2024 {personal.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
