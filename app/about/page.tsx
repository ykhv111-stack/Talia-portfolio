'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
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
            About Talia
          </h1>
          <p className="text-2xl text-brand-teal font-light">
            Systems thinking, creative problem-solving, and AI integration
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Who */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal">
              Who I Am
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                I'm a systems thinker obsessed with making complex things work. I build products, automate workflows, and design systems that put humans in control while leveraging AI's strengths.
              </p>
              <p>
                My background spans product design, software engineering, and AI integration. I've led teams through critical problems, built systems under pressure, and learned a lot about what works and what doesn't.
              </p>
              <p>
                What drives me: Creating solutions that are both technically sound and deeply considerate of human needs.
              </p>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 bg-brand-off-white p-8 rounded-lg border-l-4 border-brand-teal"
          >
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal">
              How I Work
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-brand-teal mb-2">Start with clarity</h3>
                <p>
                  Before building anything, I understand the problem deeply. What are we really trying to solve? What are the constraints? What matters most?
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-teal mb-2">Design systematically</h3>
                <p>
                  I create design systems and architectural frameworks that guide decisions at every level. Consistency, scalability, and flexibility from the ground up.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-teal mb-2">Execute with intention</h3>
                <p>
                  Every decision gets documented. Why did we choose this? What were the tradeoffs? This approach keeps things aligned and makes iteration faster.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-orange mb-2">Layer human judgment</h3>
                <p>
                  I use AI as a tool, never a replacement for thinking. The goal is always systems where humans have visibility, understanding, and control over critical decisions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal">
              Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-brand-teal pl-6">
                <h3 className="font-semibold text-lg text-brand-teal mb-2">Clarity</h3>
                <p className="text-gray-700">
                  Complex problems need clear thinking. I prefer explicit trade-offs over hidden compromises.
                </p>
              </div>
              <div className="border-l-4 border-brand-orange pl-6">
                <h3 className="font-semibold text-lg text-brand-orange mb-2">Agency</h3>
                <p className="text-gray-700">
                  Humans should understand and control their systems. Black boxes are dangerous.
                </p>
              </div>
              <div className="border-l-4 border-brand-teal pl-6">
                <h3 className="font-semibold text-lg text-brand-teal mb-2">Excellence</h3>
                <p className="text-gray-700">
                  Good enough isn't good enough when it matters. I care about getting details right.
                </p>
              </div>
              <div className="border-l-4 border-brand-orange pl-6">
                <h3 className="font-semibold text-lg text-brand-orange mb-2">Curiosity</h3>
                <p className="text-gray-700">
                  I'm constantly learning, experimenting, and questioning assumptions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal">
              What I've Built
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  Critical Systems Under Pressure
                </h3>
                <p className="text-gray-700">
                  Designed and built systems that needed to work reliably when it mattered most. Learned how to layer automation with human oversight.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  AI-Assisted Workflows
                </h3>
                <p className="text-gray-700">
                  Built systems that use AI for speed and pattern recognition while keeping humans in control of critical decisions.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  Design Systems & Products
                </h3>
                <p className="text-gray-700">
                  Created frameworks, design systems, and products that prioritize clarity, accessibility, and user control.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  Teams & Leadership
                </h3>
                <p className="text-gray-700">
                  Led teams through complex problems, fostered cultures of clear thinking and intentional decision-making.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-off-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl font-bold text-brand-charcoal">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Whether you're building a critical system, designing an AI workflow, or just want to discuss ideas about technology and creativity, I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@talia.dev"
              className="inline-block px-8 py-3 bg-brand-teal text-white font-medium rounded hover:bg-brand-teal-dark transition"
            >
              Send an Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-brand-orange text-brand-orange font-medium rounded hover:bg-brand-orange hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-brand-teal text-brand-teal font-medium rounded hover:bg-brand-teal hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
