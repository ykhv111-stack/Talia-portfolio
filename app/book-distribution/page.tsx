'use client'

import { motion } from 'framer-motion'

export default function BookDistribution() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-lg hover:text-teal-600">Talia</a>
          <div className="flex gap-8">
            <a href="/iron-swords" className="text-sm hover:text-teal-600">Iron Swords</a>
            <a href="/portfolio-website" className="text-sm hover:text-teal-600">Portfolio</a>
            <a href="/book-distribution" className="text-sm font-bold text-teal-600">Books</a>
            <a href="/about" className="text-sm hover:text-teal-600">About</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.h1 className="text-5xl font-bold mb-4" initial={{opacity: 0}} animate={{opacity: 1}}>
          Book Distribution System
        </motion.h1>
        <motion.p className="text-xl text-gray-600 mb-2" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.1}}>
          Radical Publishing House
        </motion.p>
        <motion.p className="text-sm text-gray-500" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}}>
          2022–2024
        </motion.p>
      </section>

      {/* The Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <motion.h2 className="text-3xl font-bold mb-6" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}}>
          The Problem
        </motion.h2>
        <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            When I joined Radical as production and distribution manager, the publishing house had a clear ambition: distribute books independently, without relying on distributors and retail chains that take a significant cut of sales revenue. The goal wasn't just financial — it was to prove that there's an audience in Israel that loves to read, and that you can reach them directly and build a personal relationship with every store, without going bankrupt.
          </p>
          <p>
            That ambition created a real operational challenge: how do you maintain close, personal relationships with 100+ independent bookstores while also managing inventory, shipments, invoicing, and collections across all of them — without a team built for it?
          </p>
          <p>
            My answer: make everything that wasn't relationship-building automatic, so I could focus on what actually mattered.
          </p>
        </div>
      </section>

      {/* What I Built */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <motion.h2 className="text-3xl font-bold mb-6" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}}>
          What I Built
        </motion.h2>
        <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            I studied how the Israeli book industry actually operates, then modeled our system after it. The result was a complete inventory and distribution management system built in Google Sheets and integrated with our existing tools:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Inventory & shipment tables</strong> — per-book tracking that updated automatically by pulling data from our WordPress store, manually entered store data, outgoing delivery receipts, and invoices uploaded to Google Drive</li>
            <li><strong>Contact & distribution database</strong> — a live registry of all stores and distribution points that updated automatically when new stores were added</li>
            <li><strong>Automated billing flow</strong> — at collection time, the system scanned shipment tables, calculated amounts owed per store, and drafted ready-to-send payment request emails</li>
          </ul>
          <p className="pt-4">
            <strong>Where AI fit in:</strong> AI (LLMs available in 2023) assisted in three specific ways: designing the inventory table logic and structure, mapping the inventory management workflow, and drafting the billing emails. Given the tools available at the time, AI's role was limited to brainstorming and text-output tasks — it couldn't touch the system itself.
          </p>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <motion.h2 className="text-3xl font-bold mb-6" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}}>
          Key Decisions
        </motion.h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">Automation vs. Relationship</h3>
            <p className="text-gray-700">Did I automate everything, or keep the human touch? I automated the system infrastructure. I kept the personal store relationships human — that was the whole point.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Tools vs. Custom Build</h3>
            <p className="text-gray-700">Did I use existing software, or build from scratch? I studied the industry, then used Google Sheets to build something tailored to our specific needs. Off-the-shelf solutions didn't fit our mission.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">AI's Role in 2023</h3>
            <p className="text-gray-700">Did I let AI run the system, or assist with specific tasks? I used AI for brainstorming, logic design, and email drafting. The system logic and human execution stayed with me.</p>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <motion.h2 className="text-3xl font-bold mb-6" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}}>
          The Impact
        </motion.h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>12,000+ books distributed</li>
          <li>5 books published</li>
          <li>120+ independent bookstores — a record for an independent publisher in Israel</li>
          <li>250,000+ NIS in revenue</li>
        </ul>
      </section>

      {/* If I Built This Today */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <motion.h2 className="text-3xl font-bold mb-6" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}}>
          If I Built This Today
        </motion.h2>
        <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            If I were doing this project now, I'd define the boundaries and logic of the system first — the tools, the rules, the constraints — and then ask AI to build the workflow connecting them and draft all outgoing communications automatically.
          </p>
          <p>
            But I wouldn't fully automate the store relationships. The personal connection with each bookstore was the whole point. So I'd keep that human — supervised by me, but executed by me. AI handles the system. I handle the people.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-500">
          <p>© 2026 Talia Tamir. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
