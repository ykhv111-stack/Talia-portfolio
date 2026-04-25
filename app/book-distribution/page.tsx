'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function BookDistributionPage() {
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
            book <span className="text-teal-600">distribution</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-800 mb-6 font-light leading-relaxed">
            how do you build a <span className="font-semibold">direct-to-store network</span> for a publishing house without going bankrupt?
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
            the answer wasn't a fancy system. it was <span className="font-semibold">automation that let me focus on relationships.</span>
          </p>
          <a
            href="#problem"
            className="inline-flex px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 font-medium"
          >
            read the story
          </a>
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
              when i joined radical publishing house as production and distribution manager, the vision was clear: distribute books independently. no middlemen. no distributors taking 40% of every sale.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              the goal was twofold. first, financial: prove that direct distribution is sustainable. second, ideological: prove that there's an audience in israel that actually buys books—and that you can reach them by building personal relationships with independent bookstores, one by one.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              but here's the operational reality: how do you maintain close, personal relationships with 100+ independent bookstores while simultaneously managing inventory, tracking shipments, invoicing, and collecting payments—all without a team built for it?
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mt-8">
              <p className="text-orange-900 font-semibold mb-3">my answer:</p>
              <p className="text-orange-900">make everything that wasn't relationship-building automatic. automate the system. keep the human touch for what actually matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT I BUILT */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-gray-900">
            what i built
          </h2>
          <div className="space-y-12">
            <p className="text-xl text-gray-800 leading-relaxed">
              i started by studying how the israeli book industry actually works. how do bookstores order? how do independent publishers handle collections? what's the pain point that distributors solve—and can we solve it without them?
            </p>

            {/* System Component 1 */}
            <div className="p-8 md:p-10 bg-white rounded-lg border border-gray-300 hover:border-teal-400 transition-colors duration-300">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
                inventory & shipment tables
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                every book in every store, tracked in real time.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-teal-600 flex-shrink-0 font-bold">•</span>
                  <span><strong>automated data pulls:</strong> connected to our wordpress store, google drive invoices, and delivery receipts</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 flex-shrink-0 font-bold">•</span>
                  <span><strong>manual store entries:</strong> for stores that didn't have online systems, i entered data directly</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 flex-shrink-0 font-bold">•</span>
                  <span><strong>real-time tracking:</strong> updated daily to show what's where, what's moving, what's stuck</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 flex-shrink-0 font-bold">•</span>
                  <span><strong>the payoff:</strong> at any moment, i could see: "store X has 47 units of book Y and hasn't sold one in 3 months. we need to talk."</span>
                </li>
              </ul>
            </div>

            {/* System Component 2 */}
            <div className="p-8 md:p-10 bg-white rounded-lg border border-gray-300 hover:border-teal-400 transition-colors duration-300">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
                contact & distribution database
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                a living registry of every bookstore and distribution point.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-teal-600 flex-shrink-0 font-bold">•</span>
                  <span><strong>one source of truth:</strong> store names, owners, contact info, payment terms, book preferences</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 flex-shrink-0 font-bold">•</span>
                  <span><strong>auto-updated:</strong> when a new store was added to our CRM, it fed into this database automatically</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 flex-shrink-0 font-bold">•</span>
                  <span><strong>relationship history:</strong> notes on each store—who owns it, what they care about, when was our last real conversation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 flex-shrink-0 font-bold">•</span>
                  <span><strong>the payoff:</strong> before i called or visited a store, i knew their full history. no surprises. that's respect.</span>
                </li>
              </ul>
            </div>

            {/* System Component 3 */}
            <div className="p-8 md:p-10 bg-white rounded-lg border border-gray-300 hover:border-teal-400 transition-colors duration-300">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
                automated billing flow
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                when collection time came, the system did the heavy lifting.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-teal-600 flex-shrink-0 font-bold">•</span>
                  <span><strong>scan shipment tables:</strong> system calculated how much each store owed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 flex-shrink-0 font-bold">•</span>
                  <span><strong>draft invoices:</strong> automatically generated based on shipment history</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 flex-shrink-0 font-bold">•</span>
                  <span><strong>draft payment request emails:</strong> ready to send, personalized by store</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 flex-shrink-0 font-bold">•</span>
                  <span><strong>the payoff:</strong> what could have taken 20 hours of manual invoicing took 2 hours of system setup and review</span>
                </li>
              </ul>
            </div>

            {/* AI's Role */}
            <div className="p-8 md:p-10 bg-teal-50 rounded-lg border border-teal-200">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-teal-900">
                where ai fit in (2023)
              </h3>
              <p className="text-teal-900 mb-6 leading-relaxed">
                this was 2022–2024. llms were just becoming available.
              </p>
              <p className="text-teal-900 mb-6 leading-relaxed">
                i used ai for three specific things:
              </p>
              <ul className="space-y-4 text-teal-900">
                <li className="flex gap-3">
                  <span className="font-bold">1.</span>
                  <span>designing the inventory table logic and structure</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">2.</span>
                  <span>mapping the workflow for automated billing</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">3.</span>
                  <span>drafting the payment request emails</span>
                </li>
              </ul>
              <p className="text-teal-900 mt-8 italic">
                ai's role was limited to brainstorming and text output. it couldn't touch the system itself. the logic stayed with me. the execution stayed with me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY DECISIONS */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-gray-900">
            key decisions
          </h2>
          <div className="space-y-12">
            {/* Decision 1 */}
            <div className="border-l-4 border-orange-500 pl-8">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                automation vs. relationship
              </h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>the question:</strong> do i automate everything, or keep the human touch?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>what i chose:</strong> automate the system infrastructure. keep the personal store relationships human.
              </p>
              <p className="text-gray-600 mt-6 italic leading-relaxed">
                here's why: the whole point was to prove that a direct relationship with bookstores matters. if i automate that away, i've defeated the purpose. so i built a system that gave me <span className="font-semibold">time</span> to be personal. that's the trade.
              </p>
            </div>

            {/* Decision 2 */}
            <div className="border-l-4 border-orange-500 pl-8">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                tools vs. custom build
              </h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>the question:</strong> do i use existing software (shopify, inventory management tools), or build something from scratch?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>what i chose:</strong> google sheets. custom built. tailored to our specific needs.
              </p>
              <p className="text-gray-600 mt-6 italic leading-relaxed">
                here's why: off-the-shelf solutions were built for retail chains and large distributors. they didn't fit a 5-person publishing house with a radical mission. so i studied the industry, modeled our system after how it actually works, and built in sheets. that meant i could iterate fast, and i could see all the logic at once.
              </p>
            </div>

            {/* Decision 3 */}
            <div className="border-l-4 border-orange-500 pl-8">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                ai's role in the system
              </h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>the question:</strong> do i let ai run the system, or assist with specific tasks?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>what i chose:</strong> ai assists. i execute.
              </p>
              <p className="text-gray-600 mt-6 italic leading-relaxed">
                here's why: the system is sensitive. it handles money, relationships, and operational continuity. ai can help design and draft, but the system logic and execution have to be human-verified. especially when it comes to billing and collections—you can't automate trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE IMPACT */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-gray-900">
            the impact
          </h2>
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-white rounded-lg border border-gray-300">
                <p className="text-4xl font-light text-teal-600 mb-2">12,000+</p>
                <p className="text-lg text-gray-700 font-semibold">books distributed</p>
                <p className="text-gray-600 mt-2 text-sm">across independent bookstores in israel</p>
              </div>

              <div className="p-8 bg-white rounded-lg border border-gray-300">
                <p className="text-4xl font-light text-teal-600 mb-2">5</p>
                <p className="text-lg text-gray-700 font-semibold">books published</p>
                <p className="text-gray-600 mt-2 text-sm">by radical publishing house</p>
              </div>

              <div className="p-8 bg-white rounded-lg border border-gray-300">
                <p className="text-4xl font-light text-teal-600 mb-2">120+</p>
                <p className="text-lg text-gray-700 font-semibold">independent bookstores</p>
                <p className="text-gray-600 mt-2 text-sm">a record for independent publishers in israel</p>
              </div>

              <div className="p-8 bg-white rounded-lg border border-gray-300">
                <p className="text-4xl font-light text-teal-600 mb-2">250,000+</p>
                <p className="text-lg text-gray-700 font-semibold">NIS in revenue</p>
                <p className="text-gray-600 mt-2 text-sm">direct from stores</p>
              </div>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-600 p-8 rounded-r-lg mt-8">
              <p className="text-teal-900 text-lg leading-relaxed">
                more important than the numbers: we proved that the model works. that there's an audience willing to buy from independent publishers. that bookstores want to work with people they can trust. that the middle man isn't necessary if you're willing to do the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: IF I BUILT THIS TODAY */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-gray-900">
            if i built this today
          </h2>
          <div className="space-y-8">
            <p className="text-xl text-gray-800 leading-relaxed">
              looking back, here's what i'd do differently in 2024:
            </p>

            <div className="p-8 md:p-10 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-semibold mb-6 text-orange-900">
                define boundaries first
              </h3>
              <p className="text-orange-900 mb-6 leading-relaxed">
                before building anything, i'd formalize the system boundaries:
              </p>
              <ul className="space-y-3 text-orange-900">
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>what's a "store"? what data must we track?</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>what triggers billing? what's the payment flow?</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>what's automated? what stays human?</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>what are the constraints we'll never violate?</span>
                </li>
              </ul>
            </div>

            <div className="p-8 md:p-10 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-semibold mb-6 text-orange-900">
                then ask ai to build the workflow
              </h3>
              <p className="text-orange-900 mb-6 leading-relaxed">
                once boundaries are locked, i'd ask ai to:
              </p>
              <ul className="space-y-3 text-orange-900">
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>design the inventory system logic</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>build the automated workflow connecting inventory to billing</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>draft all outgoing communications (emails, invoices, reports)</span>
                </li>
              </ul>
              <p className="text-orange-900 mt-6 italic">
                ai handles the system architecture and communication layer. that's where it shines in 2024.
              </p>
            </div>

            <div className="p-8 md:p-10 bg-teal-50 rounded-lg border-l-4 border-teal-600">
              <h3 className="text-2xl font-semibold mb-6 text-teal-900">
                but keep the store relationships human
              </h3>
              <p className="text-teal-900 mb-6 leading-relaxed">
                here's the part that stays human-only:
              </p>
              <p className="text-teal-900 mb-6 leading-relaxed">
                calling a store owner. visiting them. talking about what they need. negotiating terms. handling disputes. building trust.
              </p>
              <p className="text-teal-900 italic">
                that's not a technical system. that's relationship work. ai can assist with context (here's what they ordered last year, here's what they haven't paid), but the conversation has to be me. supervised by me. executed by me.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-8 rounded-lg border border-teal-200 mt-8">
              <p className="text-gray-900 text-lg leading-relaxed">
                <strong>summary:</strong> define boundaries → ai builds system → i manage relationships. that's the split that works. ai handles the system. i handle the people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: THE REFLECTION */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-gray-900">
            what this taught me
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="text-xl">
              <strong>first:</strong> automation isn't about removing humans. it's about removing friction so humans can do what they do best.
            </p>
            <p className="text-lg">
              i automated the busywork—data entry, invoice generation, tracking. that freed me to do the hard, personal work: building relationships with store owners, understanding their needs, negotiating deals. the system served the mission, not the other way around.
            </p>

            <p className="text-xl mt-8">
              <strong>second:</strong> constraints create solutions.
            </p>
            <p className="text-lg">
              we were tiny. no budget for software. no team. so we built something bespoke and small. turns out, that was an advantage. we could move faster than a big publisher. we could customize for each store. we could iterate.
            </p>

            <p className="text-xl mt-8">
              <strong>third:</strong> transparency builds trust.
            </p>
            <p className="text-lg">
              every store owner could see our shipping data. our inventory. our invoices. no hidden markup, no mysterious calculations. when you're asking someone to trust you with stock and payment terms, you have to show them the system is fair. automation helped us do that.
            </p>

            <p className="text-xl mt-8">
              <strong>fourth:</strong> ai's job is to think at scale about boring stuff.
            </p>
            <p className="text-lg">
              in 2023, i used ai to design the billing workflow because that's a lot of edge cases to think through. ai was good at that. but i stayed in the loop. every design choice got reviewed. every email draft got edited. ai isn't your employee. it's your thinking partner.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-lg mt-12">
              <p className="text-orange-900 italic text-lg leading-relaxed">
                the book distribution system wasn't sophisticated. it was simple, tailored, and human-centered. that's why it worked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 md:px-8 bg-gray-900 text-gray-400 text-center">
        <p className="text-lg mb-4">
          120+ bookstores. 12,000+ books. one spreadsheet and a lot of phone calls.
        </p>
        <p className="text-sm text-gray-500">
          radical publishing house, 2022–2024
        </p>
      </footer>
    </div>
  );
}
