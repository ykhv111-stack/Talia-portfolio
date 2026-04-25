'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-charcoal text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold">Talia</h3>
            <p className="text-sm text-gray-400">
              AI integration, systems thinking, and creative experiments.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects/iron-swords" className="hover:text-white transition">
                  Iron Swords
                </Link>
              </li>
              <li>
                <Link href="/creative-experiments" className="hover:text-white transition">
                  Experiments
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:hello@talia.dev" className="hover:text-white transition">
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Values */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Values</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Clarity First</li>
              <li>Systematic Thinking</li>
              <li>Human + AI</li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Talia Tamir. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-white transition">
                Privacy
              </a>
              <a href="#terms" className="hover:text-white transition">
                Terms
              </a>
              <a href="#accessibility" className="hover:text-white transition">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
