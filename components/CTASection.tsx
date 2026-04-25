'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <motion.div variants={itemVariants}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
            Ready to explore?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's talk about AI integration, creative problem-solving, or anything in between.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-brand-teal text-white font-medium rounded hover:bg-brand-teal-dark transition"
          >
            Learn About Me
          </Link>
          <a
            href="mailto:hello@talia.dev"
            className="inline-block px-8 py-3 border-2 border-brand-orange text-brand-orange font-medium rounded hover:bg-brand-orange hover:text-white transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
