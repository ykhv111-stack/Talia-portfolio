'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'Iron Swords Project',
    slug: 'iron-swords',
    excerpt: 'Building a critical system under pressure and making deliberate choices about AI integration.',
    accentColor: 'brand-teal',
    problem: 'A system needed to work reliably under real operational pressure.',
    built: 'Automated workflow with strategic AI delegation.',
    solved: 'Reduced errors by 95% while maintaining human oversight.',
  },
  {
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    excerpt: 'This portfolio itself—a case study in AI-assisted design and development.',
    accentColor: 'brand-orange',
    problem: 'How do I present my work while showing my thinking?',
    built: 'Next.js + Design System + Framer Motion animations.',
    solved: 'A living portfolio that demonstrates systematic thinking.',
  },
]

export default function ProjectPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
              Key Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Two projects that shaped how I think about AI integration, control, and creative problem-solving.
            </p>
          </motion.div>

          {/* Projects */}
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              className="border-l-4 border-gray-200 pl-8 py-8 hover:border-brand-teal transition-colors duration-300"
            >
              <Link href={`/projects/${project.slug}`}>
                <h3 className="font-serif text-3xl font-bold text-brand-charcoal hover:text-brand-teal transition mb-4">
                  {project.title}
                </h3>
              </Link>

              <p className="text-lg text-gray-700 mb-6">
                {project.excerpt}
              </p>

              {/* Problem → Built → Solved */}
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="space-y-2">
                  <h4 className="font-semibold text-brand-charcoal">Problem</h4>
                  <p className="text-gray-600 text-sm">{project.problem}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-brand-charcoal">Built</h4>
                  <p className="text-gray-600 text-sm">{project.built}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-brand-charcoal">Solved</h4>
                  <p className="text-gray-600 text-sm">{project.solved}</p>
                </div>
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-block text-brand-teal hover:text-brand-orange font-medium transition"
              >
                Read Full Case Study →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
