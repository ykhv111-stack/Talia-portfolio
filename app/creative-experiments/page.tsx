'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const experiments = [
  {
    title: 'Workflow Automation',
    description: 'Building systems where AI handles routine tasks while humans maintain strategic control.',
    color: 'brand-teal',
    insights: [
      'Layer AI handling for speed',
      'Layer human review for judgment',
      'Layer approval for critical decisions',
      'Result: 10x faster with zero critical errors',
    ],
  },
  {
    title: 'Creative Prompting',
    description: 'Techniques for unlocking AI creativity through structured, reverse-engineerable prompts.',
    color: 'brand-orange',
    insights: [
      'Start with constraints',
      'Be specific about desired output format',
      'Include examples of good vs bad',
      'Build prompts that can be explained to others',
    ],
  },
  {
    title: 'Decision Documentation',
    description: 'Logging the reasoning behind every design decision to build trust and accountability.',
    color: 'brand-teal',
    insights: [
      'Document the "why" not just the "what"',
      'Connect decisions back to goals',
      'Make patterns visible over time',
      'Easier to refine when you see reasoning',
    ],
  },
  {
    title: 'Hybrid Thinking',
    description: 'Combining human intuition with AI pattern recognition for better outcomes.',
    color: 'brand-orange',
    insights: [
      'Humans are better at context and nuance',
      'AI is better at finding patterns',
      'Together they exceed both alone',
      'The key is knowing when to use which',
    ],
  },
  {
    title: 'Constraint-Driven Design',
    description: 'Using limitations as creative fuel rather than obstacles.',
    color: 'brand-teal',
    insights: [
      'Constraints force innovative solutions',
      'They reduce decision paralysis',
      'They make trade-offs explicit',
      'They often lead to better products',
    ],
  },
  {
    title: 'Transparent Automation',
    description: 'Building AI systems that show their work and can be questioned.',
    color: 'brand-orange',
    insights: [
      'Show exactly why AI made a recommendation',
      'Make it easy to override if wrong',
      'Build feedback loops for improvement',
      'Humans stay in the loop, not bypassed',
    ],
  },
]

export default function CreativeExperimentsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/" className="inline-block text-sm text-gray-600 hover:text-brand-charcoal mb-4">
            ← Back
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-charcoal mb-4">
            Creative Experiments
          </h1>
          <p className="text-2xl text-brand-orange font-light">
            Exploring AI and human creativity together
          </p>
        </motion.div>
      </section>

      {/* Grid of Experiments */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {experiments.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-8 rounded-lg border-2 transition hover:shadow-xl ${
                  exp.color === 'brand-teal'
                    ? 'border-brand-teal bg-blue-50 hover:border-brand-teal-dark'
                    : 'border-brand-orange bg-orange-50 hover:border-brand-orange-dark'
                }`}
              >
                <h3 className={`font-serif text-2xl font-bold mb-3 ${
                  exp.color === 'brand-teal' ? 'text-brand-teal' : 'text-brand-orange'
                }`}>
                  {exp.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-gray-600 uppercase tracking-wide">
                    Key Insights
                  </h4>
                  <ul className="space-y-2">
                    {exp.insights.map((insight, i) => (
                      <li key={i} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-brand-charcoal">→</span>
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-off-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal">
              The Philosophy
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                These experiments aren't about replacing human judgment with AI automation. They're about augmenting human capability.
              </p>

              <p>
                The pattern I keep discovering: <span className="font-semibold text-brand-teal">The best systems aren't purely automated or purely manual. They're hybrid.</span>
              </p>

              <p>
                AI excels at:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Finding patterns in large datasets</li>
                <li>Generating options quickly</li>
                <li>Executing repetitive tasks reliably</li>
                <li>Catching inconsistencies</li>
              </ul>

              <p>
                Humans excel at:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Understanding context and nuance</li>
                <li>Making tradeoff decisions</li>
                <li>Recognizing when something seems off</li>
                <li>Asking the right questions</li>
              </ul>

              <p>
                When you layer them thoughtfully—AI doing what it's good at, humans doing what they're good at—you get something neither could achieve alone.
              </p>

              <p className="text-brand-orange font-semibold text-lg border-l-4 border-brand-orange pl-4">
                That's the real creative experiment: not AI vs. Humans, but AI and Humans, working at their best.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl font-bold text-brand-charcoal">
            Interested in exploring further?
          </h2>
          <p className="text-lg text-gray-700">
            Let's talk about how these approaches could work in your context.
          </p>
          <a
            href="mailto:hello@talia.dev"
            className="inline-block px-8 py-3 bg-brand-teal text-white font-medium rounded hover:bg-brand-teal-dark transition"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  )
}
