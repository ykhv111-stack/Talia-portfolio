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
            Operations. Infrastructure. Systems that move at human scale.
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
              Who
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                I'm Talia—an Ops & Systems Specialist studying Philosophy and Sociology at Hebrew University. I build infrastructure that lets people move faster, think clearer, and stay in control.
              </p>
              <p>
                I've spent the last few years designing systems that scale. Running 200+ events for tens of thousands of people. Matching 10,000+ volunteers to critical needs in 72 hours. Translating complex organizational goals into workflows that actually work.
              </p>
              <p>
                What I've learned: Great infrastructure is invisible. It doesn't demand attention. It just gets out of the way and lets humans do what they do best.
              </p>
            </div>
          </motion.div>

          {/* What */}
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
              <div className="border-l-4 border-brand-teal pl-6">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  CRM Architecture at Scale
                </h3>
                <p className="text-gray-700">
                  Built end-to-end Zoho CRM infrastructure for Radical—automating customer lifecycles and complex data segmentation. Turned 12,000+ titles across 100 points of sale into a coherent, automated system for repeat engagement and community retention.
                </p>
              </div>

              <div className="border-l-4 border-brand-orange pl-6">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  Operations & Events Backbone
                </h3>
                <p className="text-gray-700">
                  As Operations Lead at Radical (2021–2024), I orchestrated 200+ events, managed diverse teams and vendors, and translated organizational goals into efficient technical workflows. Kept the entire complex ecosystem of an academic-cultural institution running smoothly.
                </p>
              </div>

              <div className="border-l-4 border-brand-teal pl-6">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  Rapid-Response Aid Network
                </h3>
                <p className="text-gray-700">
                  During the "Iron Swords" crisis (Oct 2023–Feb 2024), I built real-time matching infrastructure using Airtable and Make.com, orchestrating 10,000+ volunteers. Automated mass-communication via WhatsApp API to drastically cut response time when people needed help most.
                </p>
              </div>

              <div className="border-l-4 border-brand-orange pl-6">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  Data Analysis Under Pressure
                </h3>
                <p className="text-gray-700">
                  As Epidemiological Investigator in the IDF (2020–2022), I analyzed large-scale data patterns and performed contact tracing to cut infection chains under extreme time pressure. Also mentored youth-at-risk, designing educational pathways that mattered.
                </p>
              </div>
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
              How
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-brand-teal mb-2">Understand before building</h3>
                <p>
                  I start with the actual problem, not the assumed one. What are the constraints? Who needs what? What happens when systems break? This grounding prevents expensive mistakes later.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-orange mb-2">Design with data and intention</h3>
                <p>
                  Whether it's ERD modeling, API architecture, or workflow design—every choice gets grounded in reality. I map the system, find the bottlenecks, then automate what can be automated while keeping humans in the loop for judgment calls.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-teal mb-2">Favor clarity over cleverness</h3>
                <p>
                  Complex systems need clear documentation. Why did we choose this path? What are the tradeoffs? This makes iteration faster and keeps teams aligned even at scale.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-orange mb-2">Layer AI, not replace thinking</h3>
                <p>
                  AI is a tool for speed and pattern recognition. But humans need to see inside critical systems. My approach: automation handles repetitive work, humans make judgment calls, systems are transparent.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal">
              Skills & Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg text-brand-teal mb-3">Architecture & Design</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• System Design & ERD Modeling</li>
                  <li>• API Architecture & Integration</li>
                  <li>• Database Mapping & Schema Design</li>
                  <li>• Workflow Automation (Make.com, Zapier)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-brand-orange mb-3">Platforms & Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Zoho CRM, Airtable, Google Sheets</li>
                  <li>• WhatsApp API & Messaging Infrastructure</li>
                  <li>• Excel Logic & Data Analysis</li>
                  <li>• AI Implementation & Prompt Engineering</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-brand-teal mb-3">Core Strengths</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rapid Technical Learning</li>
                  <li>• Independent Execution</li>
                  <li>• Critical Thinking & Problem-Solving</li>
                  <li>• Teams & Leadership</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-brand-orange mb-3">Languages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hebrew (Native)</li>
                  <li>• English (Academic)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* What Now */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 bg-blue-50 p-8 rounded-lg"
          >
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal">
              What Now
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                I'm focused on the intersection of AI and boundaries. How do we build systems where AI amplifies human judgment without replacing it? Where automation makes people faster but not careless? Where infrastructure serves humans, not the reverse.
              </p>
              <p>
                I'm exploring how to design AI workflows, prompt engineering, and system architecture that keeps humans in control, visible, and thinking. That's where the interesting work is right now.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-off-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl font-bold text-brand-charcoal">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I'm interested in systems work, infrastructure challenges, AI integration, and interesting conversations about how technology shapes what we can do.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:taliatamirg@gmail.com"
              className="inline-block px-8 py-3 bg-brand-teal text-white font-medium rounded hover:bg-opacity-90 transition"
            >
              Email
            </a>
            <a
              href="tel:+972502577434"
              className="inline-block px-8 py-3 border-2 border-brand-orange text-brand-orange font-medium rounded hover:bg-brand-orange hover:text-white transition"
            >
              Call: 050-2577434
            </a>
          </div>

          <p className="text-sm text-gray-600 mt-8">
            Based in Israel | Available for remote work
          </p>
        </div>
      </section>
    </>
  )
}
