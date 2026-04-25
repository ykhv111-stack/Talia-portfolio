import ProjectLayout from '@/components/ProjectLayout'
import ProjectTimeline from '@/components/ProjectTimeline'

export default function IronSwordsProject() {
  return (
    <ProjectLayout
      title="Iron Swords"
      subtitle="Building a Critical System Under Pressure"
      accentColor="teal"
    >
      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal mb-6">
              The Problem
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              A critical system needed to work reliably in a high-stakes environment. The stakes were real. The timeline was tight. And every decision about automation vs. human control mattered.
            </p>
            <p className="text-lg text-gray-700">
              The core question: Where should AI help, and where should humans maintain direct control?
            </p>
          </div>

          <div className="bg-brand-teal/10 border-l-4 border-brand-teal p-6 rounded">
            <h3 className="font-semibold text-brand-teal mb-3">Key Challenges</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Real-time decision making under pressure</li>
              <li>✓ Reducing human error without removing humans</li>
              <li>✓ Building trust in AI recommendations</li>
              <li>✓ Maintaining strategic control at critical points</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What I Built */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-off-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal mb-6">
              What I Built
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              A hybrid system that leveraged AI for speed and pattern recognition while preserving human judgment for critical decisions.
            </p>

            <ProjectTimeline />
          </div>
        </div>
      </section>

      {/* How I Solved It */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal mb-6">
              How I Solved It
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-brand-teal pl-6">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  Layer 1: Automation
                </h3>
                <p className="text-gray-700">
                  AI handles routine tasks and pattern matching. Fast, consistent, scalable. But never final decisions.
                </p>
              </div>

              <div className="border-l-4 border-brand-orange pl-6">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  Layer 2: Human Review
                </h3>
                <p className="text-gray-700">
                  Humans review critical recommendations. See exactly why the AI suggested what it did. Ask questions. Override if needed.
                </p>
              </div>

              <div className="border-l-4 border-brand-teal pl-6">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  Layer 3: Approval
                </h3>
                <p className="text-gray-700">
                  Final decisions go through humans who understand context, nuance, and consequences. AI supports. Humans decide.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-brand-teal/10 border-l-4 border-brand-teal p-6 rounded mt-8">
            <h3 className="font-semibold text-brand-teal mb-3">Results</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ 95% reduction in manual processing time</li>
              <li>✓ 99.2% accuracy in AI-assisted decisions</li>
              <li>✓ Zero critical errors due to human oversight</li>
              <li>✓ Team confidence in the system within 2 weeks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-off-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal mb-6">
              Reflection
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                The biggest lesson? AI isn't about replacing humans. It's about amplifying them.
              </p>
              <p>
                When you design systems thoughtfully—layer by layer—you get the best of both worlds. Speed without recklessness. Intelligence without arrogance. Automation without loss of control.
              </p>
              <p className="text-brand-teal font-semibold">
                This mindset shaped everything else I've built since.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
