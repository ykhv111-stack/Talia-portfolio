import ProjectLayout from '@/components/ProjectLayout'
import ProjectTimeline from '@/components/ProjectTimeline'

export default function PortfolioWebsiteProject() {
  return (
    <ProjectLayout
      title="This Portfolio Website"
      subtitle="A Case Study in AI-Assisted Design and Development"
      accentColor="orange"
    >
      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal mb-6">
              The Problem
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              How do I present my work in a way that shows my thinking?
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Most portfolios show the final product. This portfolio needed to show the process, the decisions, and the reasoning behind them.
            </p>
            <p className="text-lg text-gray-700">
              And I wanted to do it using the same AI-assisted methods I write about.
            </p>
          </div>

          <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded">
            <h3 className="font-semibold text-brand-orange mb-3">Design Constraints</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Show decision-making, not just outcomes</li>
              <li>✓ Demonstrate systematic thinking about AI integration</li>
              <li>✓ Build it using AI-assisted tools (but with human control)</li>
              <li>✓ Make it responsive, fast, and accessible</li>
              <li>✓ Use design that reflects the content (teal for AI, orange for creativity)</li>
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
              A modern portfolio website using Next.js, React, and Framer Motion for animations.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-brand-charcoal mb-2">Tech Stack</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• <strong>Framework:</strong> Next.js 15 with TypeScript</li>
                  <li>• <strong>Styling:</strong> Tailwind CSS with custom design system</li>
                  <li>• <strong>Animations:</strong> Framer Motion for scroll-triggered reveals</li>
                  <li>• <strong>Deployment:</strong> Vercel (automatic CI/CD from GitHub)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-brand-charcoal mb-2">Design System</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Color Palette</p>
                    <div className="flex gap-3 mt-2">
                      <div className="w-12 h-12 rounded bg-brand-teal" title="Teal - Systems/AI" />
                      <div className="w-12 h-12 rounded bg-brand-orange" title="Orange - Creativity/Human" />
                      <div className="w-12 h-12 rounded bg-brand-off-white border border-gray-300" title="Off-white - Background" />
                      <div className="w-12 h-12 rounded bg-brand-charcoal" title="Charcoal - Text" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mt-4">Typography</p>
                    <p className="font-serif text-lg mt-2">Georgia for Headlines (Serif)</p>
                    <p className="font-sans text-base mt-2">System fonts for Body Text (Sans-serif)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Built It */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal mb-6">
              How I Built It
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-brand-orange pl-6">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  1. Define the Architecture
                </h3>
                <p className="text-gray-700">
                  Established information architecture: Home → Projects → Experiments → About. Each project follows: Problem → Built → Solved → Reflection.
                </p>
              </div>

              <div className="border-l-4 border-brand-teal pl-6">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  2. Design System First
                </h3>
                <p className="text-gray-700">
                  Created a design system in Tailwind CSS that enforces consistency and accessibility. Colors map to content (teal for AI/systems, orange for human/creativity).
                </p>
              </div>

              <div className="border-l-4 border-brand-orange pl-6">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  3. Component-Driven Development
                </h3>
                <p className="text-gray-700">
                  Built reusable components for common patterns: Hero sections, Project cards, Timelines. Each component handles its own animations.
                </p>
              </div>

              <div className="border-l-4 border-brand-teal pl-6">
                <h3 className="font-semibold text-lg text-brand-charcoal mb-2">
                  4. Animations & Interactions
                </h3>
                <p className="text-gray-700">
                  Added scroll-triggered reveals with Framer Motion. Decision tree visualizations. Responsive layouts that work on all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-off-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal mb-6">
              Results
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-2 border-brand-orange">
                <h3 className="font-semibold text-brand-orange mb-3">Performance</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Lighthouse Score: 95+</li>
                  <li>✓ Mobile-first responsive design</li>
                  <li>✓ Automatic deployment on every commit</li>
                  <li>✓ Zero manual deployment steps</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-brand-teal">
                <h3 className="font-semibold text-brand-teal mb-3">Accessibility</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ WCAG 2.1 AA compliance</li>
                  <li>✓ High contrast color palette</li>
                  <li>✓ Respects prefers-reduced-motion</li>
                  <li>✓ Semantic HTML and ARIA labels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="font-serif text-4xl font-bold text-brand-charcoal mb-6">
              What I Learned
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Building this portfolio taught me that the medium can reinforce the message. By using a modern tech stack and documenting decisions, I show exactly what I write about.
              </p>
              <p>
                It's not just a portfolio. It's a working example of AI-assisted development with human oversight, systematic thinking, and intentional design.
              </p>
              <p className="text-brand-orange font-semibold">
                Show don't tell. Build it yourself. Let people see how it works.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
