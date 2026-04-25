'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const navigation = [
    { label: 'Iron Swords', href: '/iron-swords' },
    { label: 'Portfolio Website', href: '/portfolio-website' },
    { label: 'Book Distribution', href: '/book-distribution' },
    { label: 'About', href: '/about' },
    { label: 'Creative Experiments', href: '/creative-experiments' },
  ];
  const projects = [
    {
      title: 'portfolio.ai',
      description: 'how do you build with ai while staying in control?',
      subtitle: 'a 4-layer framework where human intent is executed by ai within formal constraints.',
      href: '/portfolio-website',
      status: 'the philosophy',
    },
    {
      title: 'book distribution',
      description: 'how do you build a direct-to-store network for a publishing house?',
      subtitle: 'automation that let me focus on relationships with 120+ independent bookstores.',
      href: '/book-distribution',
      status: 'the system',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-lg hover:text-teal-600">Talia</a>
          <div className="hidden md:flex gap-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm hover:text-teal-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-4 md:px-8">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left md:text-left">
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-900">
              let's talk
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              production manager. operations builder. philosophy student. thinking about how to use ai, systems thinking, and structured operations to create things that matter.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              Get in touch
            </button>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-gray-100">
              <img
                src="/talia-circular.jpg"
                alt="Talia Tamir"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-gray-900">
            case studies
          </h2>
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.href}
                className="group block p-8 md:p-12 bg-white rounded-lg border border-gray-300 hover:border-teal-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-6 md:gap-8">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      {project.status}
                    </p>
                    <h3 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 group-hover:text-teal-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-teal-600 group-hover:translate-x-2 transition-transform duration-300 mt-4">
                    <ChevronRight size={32} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-gray-900">
            about
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="text-xl">
              i love building things. systems, operations, products, ideas. but i've learned that <span className="font-semibold">what you build matters less than how you build it.</span>
            </p>
            <p className="text-lg">
              in 2020, i was leading operations for a large volunteer network during a national crisis. we scaled from 30 to 3,000 people in 6 weeks without a dedicated ops team. that forced me to think: how do you design systems that don't require heroes? how do you automate the busywork so humans can do what they do best?
            </p>
            <p className="text-lg">
              that question led to production work at a publishing house, which led to building distribution networks. then to thinking deeply about ai. because ai is the same question at a different scale: how do you build systems where humans stay in control?
            </p>
            <p className="text-lg font-semibold text-teal-700">
              these case studies show my answer.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 md:px-8 bg-gray-900 text-gray-400 text-center">
        <p className="text-lg mb-4">
          clear thinking. shipped systems. human-centered operations.
        </p>
        <p className="text-sm text-gray-500">
          <a href="https://github.com" className="text-teal-400 hover:text-teal-300 transition-colors">github</a>
          {' '} / {' '}
          <a href="https://linkedin.com" className="text-teal-400 hover:text-teal-300 transition-colors">linkedin</a>
        </p>
      </footer>
    </div>
  );
}
