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
              I built a system that needed to work.
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-4 text-lg sm:text-xl text-gray-700 font-light">
              <p>
                And I had to choose: let AI run it, or keep control.
              </p>
              <p className="text-brand-teal font-semibold">
                I chose control. But differently than I thought I would.
              </p>
              <p>
                This is what I learned.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="#work"
                className="inline-block px-8 py-3 bg-brand-teal text-white font-medium rounded hover:bg-brand-teal-dark transition duration-300"
              >
                See My Work →
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
