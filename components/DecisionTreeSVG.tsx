'use client'

import { motion } from 'framer-motion'

export default function DecisionTreeSVG() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.svg
      viewBox="0 0 400 500"
      className="w-full h-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Lines connecting nodes */}
      <line x1="200" y1="60" x2="200" y2="120" stroke="#2B9B9E" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
      <line x1="200" y1="180" x2="100" y2="240" stroke="#D97A4E" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
      <line x1="200" y1="180" x2="300" y2="240" stroke="#2B9B9E" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
      <line x1="100" y1="300" x2="100" y2="360" stroke="#D97A4E" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
      <line x1="300" y1="300" x2="300" y2="360" stroke="#2B9B9E" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />

      {/* Top Node: Decision */}
      <motion.g variants={nodeVariants}>
        <circle cx="200" cy="50" r="35" fill="#1A1A1A" opacity="0.05" stroke="#2B9B9E" strokeWidth="2" />
        <text x="200" y="55" textAnchor="middle" className="text-sm font-bold fill-brand-teal">
          Decision
        </text>
      </motion.g>

      {/* Middle Node: Constraints (Orange) */}
      <motion.g variants={nodeVariants}>
        <circle cx="100" cy="150" r="30" fill="#D97A4E" opacity="0.15" stroke="#D97A4E" strokeWidth="2" />
        <text x="100" y="155" textAnchor="middle" className="text-xs font-semibold fill-brand-orange">
          Constraints
        </text>
      </motion.g>

      {/* Middle Node: Exploration (Teal) */}
      <motion.g variants={nodeVariants}>
        <circle cx="300" cy="150" r="30" fill="#2B9B9E" opacity="0.15" stroke="#2B9B9E" strokeWidth="2" />
        <text x="300" y="155" textAnchor="middle" className="text-xs font-semibold fill-brand-teal">
          Exploration
        </text>
      </motion.g>

      {/* Left Branch: Human Layer (Orange) */}
      <motion.g variants={nodeVariants}>
        <circle cx="50" cy="250" r="25" fill="#D97A4E" opacity="0.2" stroke="#D97A4E" strokeWidth="2" />
        <text x="50" y="255" textAnchor="middle" className="text-xs fill-brand-orange font-semibold">
          Human
        </text>
      </motion.g>

      {/* Right Branch: AI Layer (Teal) */}
      <motion.g variants={nodeVariants}>
        <circle cx="350" cy="250" r="25" fill="#2B9B9E" opacity="0.2" stroke="#2B9B9E" strokeWidth="2" />
        <text x="350" y="255" textAnchor="middle" className="text-xs fill-brand-teal font-semibold">
          AI Layer
        </text>
      </motion.g>

      {/* Bottom: Approval (Center) */}
      <motion.g variants={nodeVariants}>
        <rect x="160" y="420" width="80" height="50" rx="8" fill="#1A1A1A" opacity="0.03" stroke="#1A1A1A" strokeWidth="2" />
        <text x="200" y="445" textAnchor="middle" className="text-sm font-bold fill-brand-charcoal">
          Approval
        </text>
      </motion.g>

      {/* Labels */}
      <text x="130" y="200" className="text-xs fill-brand-orange opacity-70">Human Control</text>
      <text x="280" y="200" className="text-xs fill-brand-teal opacity-70">AI Autonomy</text>
      <text x="200" y="410" className="text-xs fill-gray-500 text-center" textAnchor="middle">Smart Integration</text>
    </motion.svg>
  )
}
