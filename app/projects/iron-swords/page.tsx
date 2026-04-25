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
      {/* What I Built Section */}
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
                What I Built
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Five layers working together:
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="bg-brand-teal/5 border-l-4 border-brand-teal p-6 rounded">
                <h3 className="font-semibold text-brand-teal mb-2 text-lg">1. INTAKE</h3>
                <p className="text-gray-700 mb-2">
                  <strong>WhatsApp bot</strong> (MessageBird + Make + WhatsApp API) — intake and real-time classification of incoming messages
                </p>
                <p className="text-gray-700">
                  <strong>Structured intake flow</strong> — short, adaptive questions that collected only essential information without overwhelming users in distress
                </p>
              </div>

              <div className="bg-brand-orange/5 border-l-4 border-brand-orange p-6 rounded">
                <h3 className="font-semibold text-brand-orange mb-2 text-lg">2. CENTRALIZATION</h3>
                <p className="text-gray-700">
                  <strong>Airtable dashboard</strong> — centralized operations board with properties per item: category, need type, contact info, team status
                </p>
              </div>

              <div className="bg-brand-teal/5 border-l-4 border-brand-teal p-6 rounded">
                <h3 className="font-semibold text-brand-teal mb-2 text-lg">3. CONTEXT</h3>
                <p className="text-gray-700">
                  <strong>ChatGPT integration</strong> — connected via Airtable to generate structured, context-aware messages from incoming data using predefined templates, with minor adaptive changes per message
                </p>
              </div>

              <div className="bg-brand-orange/5 border-l-4 border-brand-orange p-6 rounded">
                <h3 className="font-semibold text-brand-orange mb-2 text-lg">4. VERIFICATION</h3>
                <p className="text-gray-700">
                  <strong>Human-in-the-loop verification layer</strong> — I reviewed each item, confirmed legitimacy, validated or rewrote the message, then sent it via a button triggering WhatsApp API through Make
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Decisions */}
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
              Key Decisions
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="border-l-4 border-brand-teal p-6 bg-white rounded">
                <h3 className="font-semibold text-brand-charcoal mb-3 text-lg">Automation vs. Control</h3>
                <p className="text-gray-700">
                  Did I automate everything for speed, or keep humans in critical decisions? I chose human verification at every critical decision point.
                </p>
              </div>

              <div className="border-l-4 border-brand-teal p-6 bg-white rounded">
                <h3 className="font-semibold text-brand-charcoal mb-3 text-lg">Structure vs. Burden</h3>
                <p className="text-gray-700">
                  Did I ask for lots of data to improve matching, or keep it simple? I reduced questions to only what was essential, so distressed people weren't overwhelmed.
                </p>
              </div>

              <div className="border-l-4 border-brand-teal p-6 bg-white rounded">
                <h3 className="font-semibold text-brand-charcoal mb-3 text-lg">Speed vs. Reliability</h3>
                <p className="text-gray-700">
                  Did I build something complex and cutting-edge, or something simple and proven? I chose a simple architecture (Make + Airtable) that would be reliable under crisis conditions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Impact */}
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
              The Impact
            </motion.h2>

            <motion.div variants={itemVariants} className="bg-brand-teal/10 border-l-4 border-brand-teal p-8 rounded-lg">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold text-lg">•</span>
                  <span>Scaled from fragmented manual handling to 10,000+ volunteers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold text-lg">•</span>
                  <span>Hundreds of aid requests processed and distributed in real time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold text-lg">•</span>
                  <span>Reduced operational workload from dozens of volunteers to one operator per shift</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold text-lg">•</span>
                  <span>Improved response speed, consistency, and reliability under high-volume crisis conditions</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What People Say */}
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
              What People Say
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6">
              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-brand-teal italic text-gray-700">
                "שלום בנות ויישר כח על הקבוצה. בזכותכן שינעתי כבר 4 פעמים חבילות לחיילים, ציוד ביגוד למשפחה שביתה נשרף ועוד. יישר כח!"
              </blockquote>

              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-brand-orange italic text-gray-700">
                "היי! קוראים לי ליאור ואני הצטרפתי לקבוצה של ההתנדבות בתחילת המלחמה, מאז הלכתי למספר מקומות מבתי מלון ועד בייביסיטרים דרך הקבוצה וכבר כמה פעמים לבחורה עם שיתוק מוחין שהתפנתה מהאזור. האמא ביקשה למסור תודה ענקית על העשייה והיוזמה המבורכת שבזכותה מגיעות כל כך הרבה מתנדבות שמנעימות את זמנה בתקופה המאוד מאתגרת הזאת. ואני אישית רוצה להודות על הפלטפורמה הזאת שהופכת את ההתנדבות להרבה יותר קלה ונגישה❤️❤️ יוזמה מדהימה"
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* If I Built This Today */}
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
              If I Built This Today
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-gray-700">
              <p>
                Rather than fixed Make scenarios, an <strong>agent-based orchestration layer</strong> would dynamically manage routing, validation, and messaging — detecting anomalies, missing information, and mismatches in real time.
              </p>

              <p>
                But agents would be applied <strong>selectively</strong>: rule-based automation for deterministic flows, agents only for high-variance, ambiguous decision points. The hybrid approach prevents unnecessary complexity and maintains stability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ProjectLayout>
  )
}
