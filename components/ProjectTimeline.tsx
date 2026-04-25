'use client'

import { motion } from 'framer-motion'

const timeline = [
  {
    phase: 'Research & Design',
    duration: 'Week 1',
    description: 'Understood the system requirements, identified critical decision points, designed the three-layer architecture.',
    color: 'brand-teal',
  },
  {
    phase: 'Prototype AI Layer',
    duration: 'Weeks 2-3',
    description: 'Built initial automation using pattern matching and rule-based logic. Tested with sample data.',
    color: 'brand-teal',
  },
  {
    phase: 'Human Review Interface',
    duration: 'Week 4',
    description: 'Created tools for humans to see AI reasoning, verify recommendations, and provide feedback.',
    color: 'brand-orange',
  },
  {
    phase: 'Integration & Testing',
    duration: 'Weeks 5-6',
    description: 'Connected all layers, ran simulation tests, measured accuracy and speed.',
    color: 'brand-teal',
  },
  {
    phase: 'Deployment & Training',
    duration: 'Weeks 7-8',
    description: 'Launched with live data, trained the team, monitored performance in real conditions.',
    color: 'brand-orange',
  },
]

export default function ProjectTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {timeline.map((item, idx) => (
        <motion.div key={idx} variants={itemVariants} className="relative pl-8">
          {/* Timeline dot */}
          <div className={`absolute left-0 top-2 w-4 h-4 rounded-full bg-${item.color === 'brand-teal' ? 'brand-teal' : 'brand-orange'}`} />
          
          {/* Content */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-baseline gap-3 mb-2">
              <h4 className="font-semibold text-lg text-brand-charcoal">{item.phase}</h4>
              <span className="text-sm text-gray-500">{item.duration}</span>
            </div>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
