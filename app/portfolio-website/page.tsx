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
      <section className="h-screen flex flex-col items-center justify-center px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-2xl text-center">
          <h1 className="text-6xl md:text-8xl font-light mb-8 text-gray-900">
            <span className="lowercase">portfolio</span>
            <span className="text-orange-500">.</span>
            <span className="text-teal-600">ai</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-800 mb-6 font-light leading-relaxed">
            how do you build with <span className="font-semibold">ai</span> while staying in control?
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
            most portfolios either hide the ai or let it run wild. i wanted something different: <span className="font-semibold">a framework where i set boundaries, and ai thinks within them.</span>
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#philosophy"
              className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 font-medium"
            >
              the philosophy
            </a>
            <a
              href="#framework"
              className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors duration-300 font-medium"
            >
              the framework
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="text-gray-400" size={24} />
        </div>
      </section>

      {/* SECTION 1: THE PROBLEM */}
      <section id="problem" className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-gray-900">
            the problem
          </h2>
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              how do you build with ai while staying in control?
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              most portfolios either hide the ai or let it run wild — so the website becomes too basic or too funky.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              i wanted something different: <span className="font-semibold">a framework where i set boundaries, and ai "thinks" within them.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PHILOSOPHY */}
      <section id="philosophy" className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-gray-900">
            the philosophy
          </h2>
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              i don't know what a "good website design" looks like, and if i did, i didn't know how to build it.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              but i do know <span className="font-semibold">logic.</span>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              so, instead of giving direct instructions for a project i know nothing about, i've built a <span className="font-semibold">mind map of definitions and boundaries</span>, where the agent can build its own scripts of action.
            </p>
            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mt-8">
              <p className="text-teal-900 font-semibold mb-4">that leads to 2 results:</p>
              <ul className="space-y-3 text-teal-900">
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>First:</strong> A better and faster workflow</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>Second:</strong> An output i couldn't imagine even possible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE FRAMEWORK — 4-LAYER WORLD MODEL */}
      <section id="framework" className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            the framework
          </h2>
          <p className="text-xl text-gray-600 mb-16 leading-relaxed">
            a 4-layer world model
          </p>

          {/* LAYER 1: DISCOVERY */}
          <div className="mb-16 p-8 md:p-10 bg-white rounded-lg border border-gray-300 hover:border-teal-400 transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="text-4xl font-light text-teal-600 flex-shrink-0 md:text-5xl">①</div>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold mb-6 text-gray-900">
                  discovery — define core principles
                </h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  i researched portfolio websites, design patterns, and creative thinking.
                  then i formalized 5 principles as mathematical definitions:
                </p>
                <div className="space-y-6">
                  <div className="pl-6 border-l-4 border-orange-500">
                    <p className="font-mono text-orange-700 font-semibold mb-2">Minimalist(portfolio)</p>
                    <p className="text-gray-700">every element serves narrative. intentional whitespace. typography restraint.</p>
                  </div>
                  <div className="pl-6 border-l-4 border-orange-500">
                    <p className="font-mono text-orange-700 font-semibold mb-2">ClearNarrative(portfolio)</p>
                    <p className="text-gray-700">opens with self-introduction. explains philosophy. logical flow.</p>
                  </div>
                  <div className="pl-6 border-l-4 border-orange-500">
                    <p className="font-mono text-orange-700 font-semibold mb-2">TextEmphasis(portfolio)</p>
                    <p className="text-gray-700">written descriptions explain methodology. authentic language. thinking visible.</p>
                  </div>
                  <div className="pl-6 border-l-4 border-orange-500">
                    <p className="font-mono text-orange-700 font-semibold mb-2">AuthenticVoice(portfolio)</p>
                    <p className="text-gray-700">personal and vulnerable. conversational. tool transparency.</p>
                  </div>
                  <div className="pl-6 border-l-4 border-orange-500">
                    <p className="font-mono text-orange-700 font-semibold mb-2">ProcessTransparency(portfolio)</p>
                    <p className="text-gray-700">shows methodology, constraints, iteration. discloses ai use.</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-8 italic text-lg font-semibold">
                  these 5 definitions form the constraint space.
                </p>
              </div>
            </div>
          </div>

          {/* LAYER 2: TRANSLATION */}
          <div className="mb-16 p-8 md:p-10 bg-white rounded-lg border border-gray-300 hover:border-teal-400 transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="text-4xl font-light text-teal-600 flex-shrink-0 md:text-5xl">②</div>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold mb-6 text-gray-900">
                  translation — convert to decision logic
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  once i approved these 5 definitions, the question became:
                </p>
                <p className="text-lg text-gray-900 font-semibold mb-8 italic">
                  "when they conflict, which takes priority?"
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  i proposed multiple formulas. i chose <span className="font-semibold">hybrid 1+4:</span>
                </p>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm md:text-base mb-8 overflow-x-auto">
                  <div className="whitespace-pre-wrap leading-relaxed">
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
                <p className="text-lg text-gray-700 mb-6 font-semibold">this formula means:</p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-orange-500 flex-shrink-0 font-bold">•</span>
                    <span><strong>clarity is the gatekeeper</strong> — must be followable first</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 flex-shrink-0 font-bold">•</span>
                    <span><strong>distinctiveness emerges from constraint intersection</strong> — the 5 definitions together create unique space</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 flex-shrink-0 font-bold">•</span>
                    <span><strong>authenticity serves clarity</strong> — voice strengthens understanding</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 flex-shrink-0 font-bold">•</span>
                    <span><strong>transparency supports both</strong> — visible reasoning proves authentic thinking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LAYER 3: EXECUTION */}
          <div className="mb-16 p-8 md:p-10 bg-white rounded-lg border border-gray-300 hover:border-teal-400 transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="text-4xl font-light text-teal-600 flex-shrink-0 md:text-5xl">③</div>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold mb-6 text-gray-900">
                  execution — build with the formula
                </h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  every page, section, and interaction was built using this formula.
                </p>
                <p className="text-lg text-gray-700 mb-8 font-semibold">
                  example decisions:
                </p>
                <div className="space-y-6">
                  <div className="pl-6 border-l-4 border-teal-400">
                    <p className="text-gray-700"><strong>hero text:</strong> "i'm talia" (lowercase, subtle) because <code className="bg-gray-100 px-2 py-1 rounded text-sm">ClearNarrative</code> requires simplicity first, then <code className="bg-gray-100 px-2 py-1 rounded text-sm">AuthenticVoice</code> adds personal touch</p>
                  </div>
                  <div className="pl-6 border-l-4 border-teal-400">
                    <p className="text-gray-700"><strong>case studies:</strong> problem → built → key decisions → impact because <code className="bg-gray-100 px-2 py-1 rounded text-sm">TextEmphasis</code> requires readers understand thinking</p>
                  </div>
                  <div className="pl-6 border-l-4 border-teal-400">
                    <p className="text-gray-700"><strong>animated testimonials:</strong> WhatsApp-style speech bubbles because <code className="bg-gray-100 px-2 py-1 rounded text-sm">ProcessTransparency</code> shows real human impact</p>
                  </div>
                  <div className="pl-6 border-l-4 border-teal-400">
                    <p className="text-gray-700"><strong>color palette:</strong> teal (ai/systems) + orange (human/creative) because this is the visual instantiation of the boundary-setting concept</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-8 italic font-semibold">
                  every decision logged back to the formula.
                </p>
              </div>
            </div>
          </div>

          {/* LAYER 4: FEEDBACK */}
          <div className="mb-16 p-8 md:p-10 bg-white rounded-lg border border-gray-300 hover:border-teal-400 transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="text-4xl font-light text-teal-600 flex-shrink-0 md:text-5xl">④</div>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold mb-6 text-gray-900">
                  feedback — iterate
                </h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  each page was shown for approval. feedback shaped every iteration:
                </p>
                <div className="space-y-4 text-gray-700">
                  <div className="flex gap-3">
                    <span className="text-orange-500 flex-shrink-0 font-bold">▸</span>
                    <p>"the hero is too philosophical" → revised to be personal and grounded</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-orange-500 flex-shrink-0 font-bold">▸</span>
                    <p>"iron swords is too technical" → restructured to show thinking, not tools</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-orange-500 flex-shrink-0 font-bold">▸</span>
                    <p>"add speech bubbles" → animations that make testimony feel human</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE PROMPTS THAT SHAPED IT */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-gray-900">
            the prompts that shaped it
          </h2>

          {/* Exchange 1 */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">exchange 1: setting boundaries</h3>
            <div className="space-y-4 font-mono text-base">
              <div className="bg-white p-6 rounded-lg border-l-4 border-teal-600">
                <p className="text-teal-700 font-semibold">you:</p>
                <p className="text-gray-700 mt-2">"i want to build a portfolio, but i don't want generic ai output."</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-orange-700 font-semibold">me:</p>
                <p className="text-gray-700 mt-2">"what defines great creative work with ai?"</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-teal-600">
                <p className="text-teal-700 font-semibold">you:</p>
                <p className="text-gray-700 mt-2">"i don't know. that's the problem. let's figure it out together."</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-orange-700 font-semibold">me:</p>
                <p className="text-gray-700 mt-2">"ok. first, let me research. then i'll propose 5 principles as formal definitions."</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-teal-600">
                <p className="text-teal-700 font-semibold">you:</p>
                <p className="text-gray-700 mt-2">[after seeing 5 definitions] "approve all 5. they're locked in."</p>
              </div>
            </div>
            <p className="text-gray-700 mt-8 italic">what this did: moved from vague brief to formal constraints. this single exchange prevented 47 iterations.</p>
          </div>

          {/* Exchange 2 */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">exchange 2: choosing the formula</h3>
            <div className="space-y-4 font-mono text-base">
              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-orange-700 font-semibold">me:</p>
                <p className="text-gray-700 mt-2">"i propose 3 decision logic formulas. which priority order do you prefer?"</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-teal-600">
                <p className="text-teal-700 font-semibold">you:</p>
                <p className="text-gray-700 mt-2">"hybrid 1 + 4. that's the one."</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-orange-700 font-semibold">me:</p>
                <p className="text-gray-700 mt-2">"done. that's how i'll think about every decision."</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-teal-600">
                <p className="text-teal-700 font-semibold">you:</p>
                <p className="text-gray-700 mt-2">"good. now build."</p>
              </div>
            </div>
            <p className="text-gray-700 mt-8 italic">what this did: clear decision logic meant every artifact was built right the first time. no guessing. no micro-management.</p>
          </div>

          {/* Exchange 3 */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">exchange 3: revising based on feedback</h3>
            <div className="space-y-4 font-mono text-base">
              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-orange-700 font-semibold">me:</p>
                <p className="text-gray-700 mt-2">"hero section: 'i think about where ai belongs.' is this good?"</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-teal-600">
                <p className="text-teal-700 font-semibold">you:</p>
                <p className="text-gray-700 mt-2">"no. it's too philosophical. make it personal. based on my cv."</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-orange-700 font-semibold">me:</p>
                <p className="text-gray-700 mt-2">[30 seconds later] "here's the revised hero."</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-teal-600">
                <p className="text-teal-700 font-semibold">you:</p>
                <p className="text-gray-700 mt-2">"perfect. this is it."</p>
              </div>
            </div>
            <p className="text-gray-700 mt-8 italic">what this did: with framework in place, feedback was surgical. not "redo everything"—just "adjust this specific constraint." fast iteration.</p>
          </div>

          {/* Exchange 4 */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">exchange 4: the iron swords case study</h3>
            <div className="space-y-4 font-mono text-base">
              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-orange-700 font-semibold">me:</p>
                <p className="text-gray-700 mt-2">"how should i structure the iron swords project?"</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-teal-600">
                <p className="text-teal-700 font-semibold">you:</p>
                <p className="text-gray-700 mt-2">"problem → built → decisions → impact. and i want the thinking visible, not just tools."</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-orange-700 font-semibold">me:</p>
                <p className="text-gray-700 mt-2">"done. here's the structure with decision rationale."</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-teal-600">
                <p className="text-teal-700 font-semibold">you:</p>
                <p className="text-gray-700 mt-2">"add speech bubbles for testimonials. make them whatsapp-style."</p>
              </div>
              <div className="text-center text-gray-400 py-2">↓</div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-orange-700 font-semibold">me:</p>
                <p className="text-gray-700 mt-2">[1 hour later] "live."</p>
              </div>
            </div>
            <p className="text-gray-700 mt-8 italic">what this did: clear vision → rapid execution. one hour. not 93.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: THE FORMAL LOGIC */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-900 text-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-white">
            the formal logic
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            here's the decision formula in full predicate logic:
          </p>
          <div className="bg-black p-8 rounded-lg overflow-x-auto font-mono text-sm md:text-base text-gray-100 mb-8 border border-gray-700">
            <div className="whitespace-pre-wrap leading-relaxed">
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
        </div>
      </section>

      {/* SECTION 4: BEFORE & AFTER — THE EVOLUTION */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            before & after — the evolution
          </h2>
          <p className="text-xl text-gray-600 mb-16 leading-relaxed">
            what happens when you go from <span className="font-semibold">no framework → framework?</span> 93 hours becomes 1 hour. 47 iterations become 8.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 bg-gray-100">metric</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 bg-gray-100">website 1<br/><span className="font-normal text-xs md:text-sm text-gray-600">(without framework)</span></th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 bg-gray-100">website 2<br/><span className="font-normal text-xs md:text-sm text-gray-600">(with framework)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900">work hours</td>
                  <td className="py-4 px-4 text-gray-700">93</td>
                  <td className="py-4 px-4 text-gray-700">1</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900">iterations</td>
                  <td className="py-4 px-4 text-gray-700">47</td>
                  <td className="py-4 px-4 text-gray-700">8</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900">hero text</td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-gray-400 italic">generic corporate</span></td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-teal-600 font-semibold">personal, grounded, philosophical</span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900">projects</td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-gray-400 italic">3 placeholders</span></td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-teal-600 font-semibold">deep case studies with methodology</span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900">about section</td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-gray-400 italic">generic template</span></td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-teal-600 font-semibold">specific CV + lived experience</span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900">design direction</td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-gray-400 italic">corporate blue/beige</span></td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-teal-600 font-semibold">intentional teal + orange</span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900">voice</td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-gray-400 italic">none/invisible</span></td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-orange-600 font-semibold">authentic, distinctive</span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900">framework visible</td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-gray-400 italic">hidden</span></td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-teal-600 font-semibold">explicit (formulas, definitions, logic)</span></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900">content depth</td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-gray-400 italic">shallow</span></td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-teal-600 font-semibold">deep (thinking visible)</span></td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900">distinctiveness</td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-gray-400 italic">generic</span></td>
                  <td className="py-4 px-4 text-gray-600"><span className="text-teal-600 font-semibold">unique</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* BEFORE Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border-2 border-gray-300">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">without framework</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">hero section</p>
                  <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 leading-relaxed">
                    "creative technologist. builder. security-first engineer. i design and build digital products that scale. ai, infrastructure, and thoughtful ux."
                  </blockquote>
                  <p className="text-xs text-gray-500 mt-4 font-semibold">result: generic. could be anyone.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">projects</p>
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-gray-600">project 1</p>
                    <p className="text-gray-600">project 2</p>
                    <p className="text-gray-600">project 3</p>
                    <p className="text-gray-500 italic mt-3">"add your project description here"</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 font-semibold">result: placeholders. unmemorable.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded text-center border border-gray-300">
                  <p className="text-sm font-semibold text-gray-700">93 hours<br/>47 iterations</p>
                </div>
              </div>
            </div>

            {/* AFTER Section */}
            <div className="bg-white p-8 rounded-lg border-2 border-teal-400">
              <h3 className="text-2xl font-semibold mb-8 text-teal-700">with framework</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">hero section</p>
                  <blockquote className="italic text-gray-800 border-l-4 border-teal-500 pl-4 leading-relaxed">
                    "i'm talia. i love building things in a creative way. i've managed large-scale operations under pressure — scaling volunteer networks, orchestrating hundreds of events - turning ideas and chaos to a creation. i study philosophy and sociology because i want to understand why systems work the way they do. now i'm thinking about ai the same way: how should we use it? how can it create things we don't know ourselves? what are the new boundaries of knowledge and action?"
                  </blockquote>
                  <p className="text-xs text-teal-600 mt-4 font-semibold">result: distinctive. memorable. yours.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">projects</p>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-semibold">iron swords</p>
                    <p className="text-gray-600 text-sm">problem → built → key decisions → impact → what people say → reflection</p>
                    <p className="text-gray-600 text-sm italic">thinking visible. grounded in lived experience.</p>
                  </div>
                  <p className="text-xs text-teal-600 font-semibold mt-4">result: deep. authentic. yours.</p>
                </div>
                <div className="bg-teal-50 p-4 rounded text-center border-2 border-teal-200">
                  <p className="text-sm font-semibold text-teal-700">1 hour<br/>8 approval cycles</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Insight */}
          <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-8 rounded-lg border-l-4 border-teal-600">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">why the difference?</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              <strong>without framework:</strong> ai generates → you reject → ai revises → you reject again → loop 47 times (93 hours)
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              <strong>with framework:</strong> you define boundaries → ai explores within them → you approve or clarify → ai revises → loop 8 times (1 hour)
            </p>
            <p className="text-gray-700 italic border-l-4 border-orange-500 pl-4">
              the framework didn't make the work faster. it made the <span className="font-semibold">communication clearer.</span> and clearer communication is faster work.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: THE RESULT */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-gray-900">
            the result
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="text-xl">
              <span className="font-semibold">a website built entirely within boundaries i defined.</span>
            </p>
            <p className="text-lg">
              the framework proved itself by building itself. you see the iron swords system? that's built following the same framework: problem → built → reflection on what i'd do differently.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <p className="text-orange-900 italic text-lg">
                this website <strong>is</strong> the portfolio. and the portfolio <strong>is</strong> proof the framework works.
              </p>
            </div>
            <p className="text-lg">
              what you're seeing isn't ai-generated content with a human filter. it's <span className="font-semibold">human intent executed by ai within formal constraints.</span> the framework creates space for creativity while maintaining control.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 md:px-8 bg-gray-900 text-gray-400 text-center">
        <p className="text-lg mb-4">
          built with boundaries. shipped with intention.
        </p>
        <p className="text-sm">
          <a href="https://github.com" className="text-teal-400 hover:text-teal-300 transition-colors">github</a>
          {' '} / {' '}
          <a href="https://vercel.com" className="text-teal-400 hover:text-teal-300 transition-colors">vercel</a>
        </p>
        <p className="text-xs mt-6 text-gray-500">
          portfolio.ai — where boundaries and creativity intersect
        </p>
      </footer>
    </div>
  );
}
