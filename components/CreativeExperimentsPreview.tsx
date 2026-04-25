'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const experiments = [
  {
    title: 'Workflow Automation',
    description: 'Systematic approach to delegating tasks to AI while maintaining strategic human control.',
    color: 'teal',
  },
  {
    title: 'Creative Prompting',
    description: 'Techniques for unlocking AI creativity through structured, reverse-engineerable prompts.',
    color: 'orange',
  },
  {
    title: 'Hybrid Thinking',
    description: 'Methods for combining human intuition with AI pattern recognition.',
    color: 'teal',
  },
]

export default function CreativeExperimentsPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-off-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
              Creative Experiments
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              Exploring how AI and human creativity can work together.
            </p>
          </motion.div>

          {/* Experiments Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {experiments.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-8 rounded-lg border-2 transition hover:shadow-lg ${
                  exp.color === 'teal'
                    ? 'border-brand-teal bg-white hover:bg-blue-50'
                    : 'border-brand-orange bg-white hover:bg-orange-50'
                }`}
              >
                <h3 className={`font-serif text-xl font-bold mb-4 ${
                  exp.color === 'teal' ? 'text-brand-teal' : 'text-brand-orange'
                }`}>
                  {exp.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <Link
              href="/creative-experiments"
              className="inline-block px-8 py-3 bg-brand-orange text-white font-medium rounded hover:bg-brand-orange-dark transition"
            >
              Explore All Experiments →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
