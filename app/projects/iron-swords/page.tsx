'use client'

import ProjectLayout from '@/components/ProjectLayout'
import { motion } from 'framer-motion'

export default function IronSwordsProject() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <ProjectLayout
      title="National Volunteer Network — Iron Swords"
      subtitle="Crisis Operations Pipeline at Humanitarian Scale"
      accentColor="teal"
    >
      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="font-serif text-4xl font-bold text-brand-charcoal mb-6">
                The Problem: Chaos and Scale
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                When the war broke out, the media organization Talia worked for was flooded with thousands of incoming messages daily — from people seeking help and individuals offering it. Requests arrived across multiple channels (WhatsApp, phone, Instagram, email), in inconsistent formats, often incomplete — and some were fraudulent.
              </p>
              <p className="text-lg text-gray-700">
                The organization faced a fundamental crisis: how to process, verify, and match aid requests and volunteer offers in real-time without losing critical information or making life-threatening mistakes.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-brand-teal/10 border-l-4 border-brand-teal p-6 rounded">
              <h3 className="font-semibold text-brand-teal mb-4 text-lg">Four Critical Needs</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold mt-1">1.</span>
                  <span>Separate aid seekers from volunteers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold mt-1">2.</span>
                  <span>Centralize all incoming messages into one organized place</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold mt-1">3.</span>
                  <span>Ensure messages were structured, verified, and matched accurately</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold mt-1">4.</span>
                  <span>Guarantee no request went unanswered</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-off-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg border-l-4 border-brand-orange shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-6">Before: Crisis Mode</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold mt-1">✗</span>
                  <span>Messages scattered across channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold mt-1">✗</span>
                  <span>Manual sorting by multiple people</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold mt-1">✗</span>
                  <span>Inconsistent response formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold mt-1">✗</span>
                  <span>Slow, error-prone processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold mt-1">✗</span>
                  <span>No way to track status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange font-bold mt-1">✗</span>
                  <span>Volunteer burnout from context-switching</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg border-l-4 border-brand-teal shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-6">After: Centralized Pipeline</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal font-bold mt-1">✓</span>
                  <span>All channels feed into one system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal font-bold mt-1">✓</span>
                  <span>Automated classification and routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal font-bold mt-1">✓</span>
                  <span>Consistent, AI-generated messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal font-bold mt-1">✓</span>
                  <span>Real-time processing and delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal font-bold mt-1">✓</span>
                  <span>Complete audit trail and tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal font-bold mt-1">✓</span>
                  <span>One operator per shift replaces 12+ volunteers</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Was Built */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="font-serif text-4xl font-bold text-brand-charcoal mb-6">
                What Was Built: End-to-End Pipeline
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                A complete, integrated architecture designed for humanitarian scale under crisis conditions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="bg-brand-teal/5 border-l-4 border-brand-teal p-6 rounded">
                <h3 className="font-semibold text-brand-teal mb-2 text-lg">WhatsApp Bot (MessageBird + Make + WhatsApp API)</h3>
                <p className="text-gray-700">Intake and real-time classification of incoming messages across all channels. Automatically routes requests to the right category.</p>
              </div>

              <div className="bg-brand-orange/5 border-l-4 border-brand-orange p-6 rounded">
                <h3 className="font-semibold text-brand-orange mb-2 text-lg">Structured Intake Flow</h3>
                <p className="text-gray-700">Short, adaptive questions that collected only essential information without overwhelming users in distress. Balances data granularity with user burden.</p>
              </div>

              <div className="bg-brand-teal/5 border-l-4 border-brand-teal p-6 rounded">
                <h3 className="font-semibold text-brand-teal mb-2 text-lg">Airtable Dashboard</h3>
                <p className="text-gray-700">Centralized operations board with properties per item: category, need type, contact info, team status, and verification state. Single source of truth.</p>
              </div>

              <div className="bg-brand-teal/5 border-l-4 border-brand-teal p-6 rounded">
                <h3 className="font-semibold text-brand-teal mb-2 text-lg">ChatGPT Integration</h3>
                <p className="text-gray-700">Connected via Airtable to generate structured, context-aware messages from incoming data using predefined templates with minor adaptive changes per message.</p>
              </div>

              <div className="bg-brand-orange/5 border-l-4 border-brand-orange p-6 rounded">
                <h3 className="font-semibold text-brand-orange mb-2 text-lg">Human-in-the-Loop Verification</h3>
                <p className="text-gray-700">Volunteers reviewed each item, confirmed legitimacy, validated or rewrote the message, then sent it via a button triggering WhatsApp API through Make. Critical decisions remain human-controlled.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-off-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="font-serif text-4xl font-bold text-brand-charcoal">
              System Architecture
            </motion.h2>

            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-semibold text-brand-charcoal mb-6 text-lg">Iron Swords Pipeline</h3>
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 overflow-x-auto pb-4">
                <div className="flex-shrink-0 px-4 py-3 bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white rounded font-semibold">Messages</div>
                <div className="hidden md:block text-2xl text-brand-teal font-bold">→</div>
                <div className="flex-shrink-0 px-4 py-3 bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white rounded font-semibold">WhatsApp Bot</div>
                <div className="hidden md:block text-2xl text-brand-teal font-bold">→</div>
                <div className="flex-shrink-0 px-4 py-3 bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white rounded font-semibold">Make</div>
                <div className="hidden md:block text-2xl text-brand-teal font-bold">→</div>
                <div className="flex-shrink-0 px-4 py-3 bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white rounded font-semibold">Airtable</div>
                <div className="hidden md:block text-2xl text-brand-teal font-bold">→</div>
                <div className="flex-shrink-0 px-4 py-3 bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white rounded font-semibold">ChatGPT</div>
                <div className="hidden md:block text-2xl text-brand-orange font-bold">→</div>
                <div className="flex-shrink-0 px-4 py-3 bg-gradient-to-r from-brand-orange to-orange-600 text-white rounded font-semibold">Human Review</div>
                <div className="hidden md:block text-2xl text-brand-teal font-bold">→</div>
                <div className="flex-shrink-0 px-4 py-3 bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white rounded font-semibold">Send</div>
              </div>
              <div className="mt-6 text-sm text-gray-600 bg-brand-orange/10 p-4 rounded border border-brand-orange/30">
                <strong>🟦 Teal (AI layers):</strong> WhatsApp Bot, Make, Airtable, ChatGPT — Handle routing, structuring, and content generation.<br/>
                <strong>🟧 Orange (Human layer):</strong> Human Verification — Final authority on message validity and content.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Design Decisions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="font-serif text-4xl font-bold text-brand-charcoal mb-6">
              Key Design Decisions
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="border-l-4 border-brand-teal p-6 bg-brand-teal/5 rounded">
                <h3 className="font-semibold text-brand-charcoal mb-3 text-lg">Automation vs. Control</h3>
                <p className="text-gray-700">
                  Full automation would have been faster, but in a humanitarian context errors were unacceptable. Human verification was kept at critical decision points. Every message needed human eyes before being sent.
                </p>
              </div>

              <div className="border-l-4 border-brand-teal p-6 bg-brand-teal/5 rounded">
                <h3 className="font-semibold text-brand-charcoal mb-3 text-lg">Structure vs. User Burden</h3>
                <p className="text-gray-700">
                  More data granularity improves matching accuracy, but overwhelming distressed users with complex forms was a real risk. Input was reduced to minimal essential fields—only what would enable accurate matching and routing.
                </p>
              </div>

              <div className="border-l-4 border-brand-teal p-6 bg-brand-teal/5 rounded">
                <h3 className="font-semibold text-brand-charcoal mb-3 text-lg">Flexibility vs. Maintainability</h3>
                <p className="text-gray-700">
                  A simpler architecture (Make + Airtable) was chosen over a more complex custom solution to ensure reliability and fast iteration under crisis conditions. Maintainability under pressure was non-negotiable.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-off-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="font-serif text-4xl font-bold text-brand-charcoal mb-6">
              What It Solved
            </motion.h2>

            <motion.div variants={itemVariants} className="bg-brand-teal/10 border-l-4 border-brand-teal p-8 rounded-lg">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong>Scaled from fragmented manual handling to 10,000+ volunteers</strong><br/>
                    <span className="text-sm text-gray-600">Coordinated volunteer base grew exponentially without proportional operational overhead</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong>Hundreds of aid requests processed and distributed in real-time</strong><br/>
                    <span className="text-sm text-gray-600">Matching improved accuracy while maintaining human-level verification standards</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong>Reduced operational workload from dozens of volunteers to one operator per shift</strong><br/>
                    <span className="text-sm text-gray-600">Freed up skilled volunteers for other critical work during the crisis</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong>Improved response speed, consistency, and reliability under high-volume conditions</strong><br/>
                    <span className="text-sm text-gray-600">Guaranteed no request went unanswered while maintaining message quality</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="font-serif text-4xl font-bold text-brand-charcoal mb-6">
              Reflection: The Future of Orchestration
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-gray-700">
              <p>
                Rather than fixed automation scenarios, an <strong>agent-based orchestration layer</strong> would dynamically manage routing, validation, and messaging — detecting anomalies, missing information, and mismatches in real time.
              </p>

              <p>
                But agents would be applied <strong>selectively</strong>: rule-based automation for deterministic flows, agents only for high-variance, ambiguous decision points. The hybrid approach prevents unnecessary complexity and maintains stability.
              </p>

              <p className="text-brand-teal font-semibold text-xl">
                The real lesson: Systems that matter require human judgment at critical points. AI amplifies human capability; it doesn't replace it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ProjectLayout>
  )
}
