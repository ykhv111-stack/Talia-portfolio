'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function PortfolioWebsitePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 animate-fade-in">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-900">
            <span className="text-teal-600">portfolio</span>
            <span className="text-orange-500">.</span>ai
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
            how do you build with <span className="font-semibold">ai</span> while staying in control?
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
            most portfolios either hide the ai or let it run wild. this one lives at the boundary.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#framework"
              className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 font-medium"
            >
              explore the framework
            </a>
            <a
              href="#results"
              className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-lg hover:border-orange-500 transition-colors duration-300 font-medium"
            >
              see the results
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="text-gray-400" size={24} />
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-gray-900">
            the problem
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            how do you build with ai while staying in control? most portfolios either hide the ai or let it run wild. i wanted something different: <span className="font-semibold">a framework where i set boundaries, and ai thinks within them.</span>
          </p>
          <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
            <p className="text-gray-700 italic">
              this portfolio is proof. it was built using its own framework. the methodology you're reading about is the methodology that created the methodology.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section id="framework" className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-gray-900">
            the framework: a 4-layer world model
          </h2>

          {/* Layer 1 */}
          <div className="mb-16 p-8 bg-white rounded-lg border border-gray-200 hover:border-teal-300 transition-colors duration-300">
            <div className="flex items-start gap-6">
              <div className="text-4xl font-light text-teal-600 flex-shrink-0">①</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  discovery — define core principles
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  i researched portfolio websites, design patterns, and creative thinking. then i formalized 5 principles as mathematical definitions:
                </p>
                <div className="space-y-4">
                  <div className="pl-4 border-l-2 border-orange-500">
                    <p className="font-mono text-sm text-orange-600 mb-1">Minimalist(portfolio)</p>
                    <p className="text-gray-600">every element serves narrative. intentional whitespace. typography restraint.</p>
                  </div>
                  <div className="pl-4 border-l-2 border-orange-500">
                    <p className="font-mono text-sm text-orange-600 mb-1">ClearNarrative(portfolio)</p>
                    <p className="text-gray-600">opens with self-introduction. explains philosophy. logical flow.</p>
                  </div>
                  <div className="pl-4 border-l-2 border-orange-500">
                    <p className="font-mono text-sm text-orange-600 mb-1">TextEmphasis(portfolio)</p>
                    <p className="text-gray-600">written descriptions explain methodology. authentic language. thinking visible.</p>
                  </div>
                  <div className="pl-4 border-l-2 border-orange-500">
                    <p className="font-mono text-sm text-orange-600 mb-1">AuthenticVoice(portfolio)</p>
                    <p className="text-gray-600">personal and vulnerable. conversational. tool transparency.</p>
                  </div>
                  <div className="pl-4 border-l-2 border-orange-500">
                    <p className="font-mono text-sm text-orange-600 mb-1">ProcessTransparency(portfolio)</p>
                    <p className="text-gray-600">shows methodology, constraints, iteration. discloses ai use.</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-6 italic">these 5 definitions form the constraint space.</p>
              </div>
            </div>
          </div>

          {/* Layer 2 */}
          <div className="mb-16 p-8 bg-white rounded-lg border border-gray-200 hover:border-teal-300 transition-colors duration-300">
            <div className="flex items-start gap-6">
              <div className="text-4xl font-light text-teal-600 flex-shrink-0">②</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  translation — convert to decision logic
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  once i approved these 5 definitions, the question became: <span className="font-semibold">"when they conflict, which takes priority?"</span>
                </p>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm mb-6 overflow-x-auto">
                  <div className="whitespace-pre-wrap">
{`Decision_Logic_Talia_Portfolio :=
[
  ClearNarrative(choice) ≻ AuthenticVoice(choice)
  ∧
  "What can only be done here?"
    → Intersection of 5 definitions
  ∧
  When_definitions_conflict
    → Resolve_creatively_within_clarity
]`}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  this formula means:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>clarity is the gatekeeper</strong> — must be followable first</li>
                  <li><strong>distinctiveness emerges from constraint intersection</strong> — the 5 definitions together create unique space</li>
                  <li><strong>authenticity serves clarity</strong> — voice strengthens understanding</li>
                  <li><strong>transparency supports both</strong> — visible reasoning proves authentic thinking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Layer 3 */}
          <div className="mb-16 p-8 bg-white rounded-lg border border-gray-200 hover:border-teal-300 transition-colors duration-300">
            <div className="flex items-start gap-6">
              <div className="text-4xl font-light text-teal-600 flex-shrink-0">③</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  execution — build with the formula
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  every page, section, and interaction was built using this formula. example decisions:
                </p>
                <div className="space-y-4 text-gray-700">
                  <div className="pl-4 border-l-2 border-teal-400">
                    <p><strong>hero text:</strong> "i'm talia" (lowercase, subtle) because <code className="bg-gray-100 px-2 py-1 rounded text-sm">ClearNarrative</code> requires simplicity first, then <code className="bg-gray-100 px-2 py-1 rounded text-sm">AuthenticVoice</code> adds personal touch</p>
                  </div>
                  <div className="pl-4 border-l-2 border-teal-400">
                    <p><strong>case studies:</strong> problem → built → decisions → impact because <code className="bg-gray-100 px-2 py-1 rounded text-sm">TextEmphasis</code> requires readers understand thinking</p>
                  </div>
                  <div className="pl-4 border-l-2 border-teal-400">
                    <p><strong>color palette:</strong> teal (ai/systems) + orange (human/creative) because this is the visual instantiation of the boundary-setting concept</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-6 italic">every decision logged back to the formula.</p>
              </div>
            </div>
          </div>

          {/* Layer 4 */}
          <div className="mb-16 p-8 bg-white rounded-lg border border-gray-200 hover:border-teal-300 transition-colors duration-300">
            <div className="flex items-start gap-6">
              <div className="text-4xl font-light text-teal-600 flex-shrink-0">④</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  feedback — iterate
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  each page was shown for approval. feedback shaped every iteration:
                </p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex gap-3">
                    <span className="text-orange-500 flex-shrink-0">▸</span>
                    <p>"the hero is too philosophical" → revised to be personal and grounded</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-orange-500 flex-shrink-0">▸</span>
                    <p>"case study is too technical" → restructured to show thinking, not tools</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-orange-500 flex-shrink-0">▸</span>
                    <p>"make it conversational" → shifted to more authentic voice throughout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formal Logic */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-900 text-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-white">
            the formal logic
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            here's the decision formula in full predicate logic:
          </p>
          <div className="bg-black p-8 rounded-lg overflow-x-auto font-mono text-sm text-gray-100 mb-8">
            <div className="whitespace-pre-wrap">
{`Decision_Logic_Talia_Portfolio(Marcus) :=
[
  When_choosing
    → ClearNarrative(choice) ≻ AuthenticVoice(choice)
  ∧
  ∀ decision
    → (Can_reader_follow_this?
       → Can_it_be_more_authentic?)
  ∧
  ∀ decision
    → Think: "What_can_only_be_done_here?"
       → Intersection_of_5_constraints_enables_distinctiveness
  ∧
  Minimalist(decision) ∧ TextEmphasis(decision)
    → Dense_language_in_sparse_form = High_meaning_density
  ∧
  When_definitions_conflict
    → Resolve_creatively_within_clarity
  ∴ Priority: Clarity → Distinctiveness → Authenticity → Transparency
]`}
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <p className="text-gray-300">
              <strong>in plain language:</strong> clarity is the foundation. everything else serves clarity. then we layer in distinctiveness (what makes this unique), authenticity (what makes this personal), and transparency (what proves it's genuine).
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-gray-900">
            the result
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="text-xl">
              <span className="font-semibold">a website built entirely within boundaries i defined.</span>
            </p>
            <p>
              the framework proved itself by building itself. you see the methodology you're reading about? that's built following the same framework: <code className="bg-gray-100 px-2 py-1 rounded text-sm">problem → built → reflection on what i'd do differently</code>.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <p className="text-orange-900 italic">
                this website IS the portfolio. and the portfolio IS proof the framework works.
              </p>
            </div>
            <p>
              what you're seeing isn't ai-generated content with a human filter. it's <strong>human intent executed by ai within formal constraints.</strong> the framework creates space for creativity while maintaining control.
            </p>
          </div>
        </div>
      </section>

      {/* Prompts That Shaped It */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-gray-900">
            the conversation that shaped it
          </h2>
          <div className="space-y-6 font-mono text-sm">
            <div className="bg-white p-6 rounded-lg border-l-4 border-teal-600">
              <p className="text-teal-700 font-semibold">talia:</p>
              <p className="text-gray-700 mt-2">"no. first, let's understand what we're building. what defines great creative work with ai?"</p>
            </div>
            <div className="text-center text-gray-400 py-2">↓</div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-orange-700 font-semibold">marcus:</p>
              <p className="text-gray-700 mt-2">"i propose 5 definitions..."</p>
            </div>
            <div className="text-center text-gray-400 py-2">↓</div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-teal-600">
              <p className="text-teal-700 font-semibold">talia:</p>
              <p className="text-gray-700 mt-2">"approve. now, when they conflict, what's the priority order?"</p>
            </div>
            <div className="text-center text-gray-400 py-2">↓</div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-orange-700 font-semibold">marcus:</p>
              <p className="text-gray-700 mt-2">"i propose 3 formula variations..."</p>
            </div>
            <div className="text-center text-gray-400 py-2">↓</div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-teal-600">
              <p className="text-teal-700 font-semibold">talia:</p>
              <p className="text-gray-700 mt-2">"hybrid 1 + 4. that's the one."</p>
            </div>
          </div>
          <p className="text-gray-700 mt-12">
            every decision flowed from that framework. approval, iteration, and the conversation itself are part of the methodology.
          </p>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">
            technical implementation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">design</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ first-person voice throughout</li>
                <li>✓ formal logic notation</li>
                <li>✓ code-block styling</li>
                <li>✓ mobile-first responsive</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">accessibility</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ teal + orange color scheme</li>
                <li>✓ subtle scroll animations</li>
                <li>✓ wcag 2.1 aa compliant</li>
                <li>✓ semantic html structure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 bg-gray-900 text-gray-400 text-center text-sm">
        <p>
          built with boundaries. shipped with intention.
        </p>
        <p className="mt-2">
          <a href="https://github.com" className="text-teal-400 hover:text-teal-300 transition-colors">github</a>
          {' '} / {' '}
          <a href="https://vercel.com" className="text-teal-400 hover:text-teal-300 transition-colors">vercel</a>
        </p>
      </footer>
    </div>
  );
}
