'use client';

import React from 'react';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-lg hover:text-teal-600">Talia</a>
          <div className="hidden md:flex gap-8">
            <a href="/iron-swords" className="text-sm hover:text-teal-600 transition-colors">Iron Swords</a>
            <a href="/book-distribution" className="text-sm hover:text-teal-600 transition-colors">Book Distribution</a>
            <a href="/portfolio-website" className="text-sm hover:text-teal-600 transition-colors">Portfolio Website</a>
            <a href="/about" className="text-sm hover:text-teal-600 transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            about
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            based in jerusalem and tel aviv. thinking about systems, people, and what's possible when we combine them intentionally.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Personal Intro */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              i'm based in jerusalem and tel aviv, always thinking about systems, people, and what's possible when we combine them intentionally. i love talking about ai boundaries, creative operations, and building things that matter.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              i love when my work speaks for itself. but if you want my cv, here it is.
            </p>
          </div>

          {/* CV Button */}
          <div className="py-8">
            <a
              href="https://drive.google.com/file/d/1N_J-ftpPsxeKh4UkIF2TKd1HmrZ-fvti/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              Download CV
            </a>
          </div>

          {/* Contact Ways */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light text-gray-900">
              ways to reach me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/talia-tamir?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-teal-400 hover:bg-teal-50 transition-all"
              >
                <Linkedin className="text-teal-600 group-hover:text-teal-700" size={24} />
                <div>
                  <p className="font-medium text-gray-900">linkedin</p>
                  <p className="text-sm text-gray-600">connect with me</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/972502577434"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-teal-400 hover:bg-teal-50 transition-all"
              >
                <MessageCircle className="text-teal-600 group-hover:text-teal-700" size={24} />
                <div>
                  <p className="font-medium text-gray-900">whatsapp</p>
                  <p className="text-sm text-gray-600">050-2577434</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:taliatamirg@gmail.com"
                className="group flex items-center gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-teal-400 hover:bg-teal-50 transition-all"
              >
                <Mail className="text-teal-600 group-hover:text-teal-700" size={24} />
                <div>
                  <p className="font-medium text-gray-900">email</p>
                  <p className="text-sm text-gray-600">taliatamirg@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 md:px-8 bg-gray-900 text-gray-400 text-center">
        <p className="text-lg mb-4">
          clear thinking. shipped systems. human-centered operations.
        </p>
        <p className="text-sm text-gray-500">
          <a href="https://github.com" className="text-teal-400 hover:text-teal-300 transition-colors">github</a>
          {' '} / {' '}
          <a href="https://linkedin.com" className="text-teal-400 hover:text-teal-300 transition-colors">linkedin</a>
        </p>
      </footer>
    </div>
  );
}
