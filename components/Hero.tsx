'use client'

import { motion } from 'framer-motion'
import DecisionTreeSVG from './DecisionTreeSVG'

export default function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-brand-off-white flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-charcoal leading-tight"
            >
              Hey! I'm Talia.
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-4 text-lg sm:text-xl text-gray-700 font-light">
              <p>
                I love building things in a creative way.
              </p>
              <p>
                I've managed large-scale operations under pressure — scaling volunteer networks, orchestrating hundreds of events - turning Ideas and chaos to a creation.
              </p>
              <p>
                I study philosophy and sociology because I want to understand why systems work the way they do.
              </p>
              <p className="text-brand-teal font-semibold">
                Now I'm thinking about AI the same way: How should we use it? How it can create things we don't know ourselves? What's are the new boundaries of knowledge and action?
              </p>
              <p className="font-semibold">
                See what I've learned.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 flex gap-4">
              <a
                href="#work"
                className="inline-block px-8 py-3 bg-brand-teal text-white font-medium rounded hover:bg-brand-teal-dark transition duration-300"
              >
                View Work →
              </a>
              <a
                href="#contact"
                className="inline-block px-8 py-3 border-2 border-brand-teal text-brand-teal font-medium rounded hover:bg-brand-teal hover:text-white transition duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Visual: Decision Tree */}
          <motion.div
            variants={itemVariants}
            className="hidden md:block"
          >
            <DecisionTreeSVG />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
