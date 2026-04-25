'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function IronSwordsPage() {
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
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-teal-50 to-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-light text-gray-900">
            national volunteer network
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-teal-600">
            crisis operations pipeline at humanitarian scale
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
            how do you coordinate thousands of volunteers during a crisis? by building systems where humans make decisions, but technology handles the rest.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-12 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900">
            the problem
          </h2>
          
          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              when the war broke out, the media organization i worked for was flooded with thousands of incoming messages daily — from people seeking help and individuals offering it. requests arrived across multiple channels (whatsapp, phone, instagram, email), in inconsistent formats, often incomplete — and some were fraudulent.
            </p>

            <div className="bg-teal-50 border-l-4 border-teal-600 p-8 rounded-lg space-y-4">
              <h3 className="text-2xl font-medium text-gray-900">
                four specific needs were identified:
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-xl mt-0">•</span>
                  <span>separate aid seekers from volunteers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-xl mt-0">•</span>
                  <span>centralize all incoming messages into one organized place</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-xl mt-0">•</span>
                  <span>ensure messages were structured, verified, and matched accurately</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-xl mt-0">•</span>
                  <span>guarantee no request went unanswered</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What I Built */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-12 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900">
            what i built
          </h2>
          
          <p className="text-xl text-gray-700">
            five layers working together:
          </p>

          <div className="space-y-6">
            <div className="bg-white border-l-4 border-teal-600 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-medium text-teal-600 mb-4">1. intake</h3>
              <p className="text-gray-700 mb-3">
                <strong>whatsapp bot</strong> (messagebird + make + whatsapp api) — intake and real-time classification of incoming messages
              </p>
              <p className="text-gray-700">
                <strong>structured intake flow</strong> — short, adaptive questions that collected only essential information without overwhelming users in distress
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-500 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-medium text-orange-500 mb-4">2. centralization</h3>
              <p className="text-gray-700">
                <strong>airtable dashboard</strong> — centralized operations board with properties per item: category, need type, contact info, team status
              </p>
            </div>

            <div className="bg-white border-l-4 border-teal-600 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-medium text-teal-600 mb-4">3. context</h3>
              <p className="text-gray-700">
                <strong>chatgpt integration</strong> — connected via airtable to generate structured, context-aware messages from incoming data using predefined templates, with minor adaptive changes per message
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-500 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-medium text-orange-500 mb-4">4. verification</h3>
              <p className="text-gray-700">
                <strong>human-in-the-loop verification layer</strong> — i reviewed each item, confirmed legitimacy, validated or rewrote the message, then sent it via a button triggering whatsapp api through make
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-12 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900">
            key decisions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 border-l-4 border-teal-600 p-8 rounded-lg">
              <h3 className="text-2xl font-medium text-gray-900 mb-3">automation vs. control</h3>
              <p className="text-gray-700 leading-relaxed">
                did i automate everything for speed, or keep humans in critical decisions? i chose human verification at every critical decision point.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-teal-600 p-8 rounded-lg">
              <h3 className="text-2xl font-medium text-gray-900 mb-3">structure vs. burden</h3>
              <p className="text-gray-700 leading-relaxed">
                did i ask for lots of data to improve matching, or keep it simple? i reduced questions to only what was essential, so distressed people weren't overwhelmed.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-teal-600 p-8 rounded-lg">
              <h3 className="text-2xl font-medium text-gray-900 mb-3">speed vs. reliability</h3>
              <p className="text-gray-700 leading-relaxed">
                did i build something complex and cutting-edge, or something simple and proven? i chose a simple architecture (make + airtable) that would be reliable under crisis conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-teal-50">
        <div className="max-w-4xl mx-auto space-y-12 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900">
            the impact
          </h2>

          <div className="bg-white border-l-4 border-teal-600 p-8 md:p-12 rounded-lg">
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl mt-0">•</span>
                <span>scaled from fragmented manual handling to 10,000+ volunteers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl mt-0">•</span>
                <span>hundreds of aid requests processed and distributed in real time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl mt-0">•</span>
                <span>reduced operational workload from dozens of volunteers to one operator per shift</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl mt-0">•</span>
                <span>improved response speed, consistency, and reliability under high-volume crisis conditions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* If I Built This Today */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-12 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900">
            if i built this today
          </h2>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              rather than fixed make scenarios, an <strong>agent-based orchestration layer</strong> would dynamically manage routing, validation, and messaging — detecting anomalies, missing information, and mismatches in real time.
            </p>

            <p>
              but agents would be applied <strong>selectively</strong>: rule-based automation for deterministic flows, agents only for high-variance, ambiguous decision points. the hybrid approach prevents unnecessary complexity and maintains stability.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 md:px-8 bg-gray-900 text-gray-400 text-center">
        <p className="text-lg mb-4">
          clear thinking. shipped systems. human-centered operations.
        </p>
        <p className="text-sm text-gray-500">
          <a href="/about#contact" className="text-teal-400 hover:text-teal-300 transition-colors">get in touch</a>
        </p>
      </footer>
    </div>
  );
}
