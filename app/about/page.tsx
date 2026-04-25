'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

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
            Hey, I'm Talia
          </h1>
          <p className="text-2xl text-brand-teal font-light">
            Philosophy & Sociology student | Operations & Systems Specialist | Based in Jerusalem & Tel Aviv
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Intro with Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="flex-1 space-y-4 text-lg text-gray-700">
                <p>
                  I love when my work speaks for itself. But if you want my CV, here it is.
                </p>
              </div>
              
              {/* Photo */}
              <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
                <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                  <Image
                    src="/images/talia-about.jpg"
                    alt="Talia Tamir, Operations & Systems Specialist"
                    width={256}
                    height={256}
                    className="rounded-full shadow-lg object-cover w-full h-full"
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* CV Link Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <a
              href="https://drive.google.com/file/d/1N_J-ftpPsxeKh4UkIF2TKd1HmrZ-fvti/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg font-medium text-brand-teal hover:underline transition"
            >
              Download my CV
            </a>
          </motion.div>
        </div>
      </section>


    </>
  )
}
