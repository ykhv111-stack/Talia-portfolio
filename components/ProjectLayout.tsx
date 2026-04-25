'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProjectLayoutProps {
  title: string
  subtitle: string
  accentColor: 'teal' | 'orange'
  children: React.ReactNode
}

export default function ProjectLayout({ title, subtitle, accentColor, children }: ProjectLayoutProps) {
  const colorClass = accentColor === 'teal' ? 'brand-teal' : 'brand-orange'
  const bgColorClass = accentColor === 'teal' ? 'bg-blue-50' : 'bg-orange-50'

  return (
    <>
      {/* Hero */}
      <section className={`pt-32 pb-16 px-4 sm:px-6 lg:px-8 ${bgColorClass}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/" className="inline-block text-sm text-gray-600 hover:text-brand-charcoal mb-4">
            ← Back
          </Link>
          <h1 className={`font-serif text-5xl md:text-6xl font-bold text-brand-charcoal mb-4`}>
            {title}
          </h1>
          <p className={`text-2xl text-${colorClass} font-light`}>
            {subtitle}
          </p>
        </motion.div>
      </section>

      {/* Content */}
      {children}
    </>
  )
}
