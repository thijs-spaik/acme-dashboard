import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        'relative pt-32 pb-20 md:pt-40 md:pb-32',
        'bg-gradient-to-b from-surface-subtle to-surface',
        className
      )}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--color-text) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-text) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <Container size="xl" className="relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary-50 border border-primary-100">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <Text size="sm" className="text-primary font-medium">
              Trusted by 10,000+ teams worldwide
            </Text>
          </div>

          {/* Headline */}
          <h1 className="mb-6">
            Streamlined Project Management for{' '}
            <span className="text-primary">Modern Teams</span>
          </h1>

          {/* Subheadline */}
          <Text
            size="lg"
            className="max-w-2xl mx-auto mb-10 text-text-subdued leading-relaxed"
          >
            Boost productivity, align your team, and deliver projects on time.
            ACME brings clarity to complex workflows with enterprise-grade tools
            designed for the way you work.
          </Text>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="primary" size="lg" className="w-full sm:w-auto px-8">
              Start Free Trial
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto px-8">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <Text size="sm" className="text-text-subdued">
              Trusted by teams at
            </Text>
            {['Microsoft', 'Google', 'Stripe', 'Shopify'].map((company) => (
              <span
                key={company}
                className="font-heading font-semibold text-text-subdued text-sm tracking-wide"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image/Dashboard Preview */}
        <div className="mt-16 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-2xl opacity-30" />
          <div className="relative bg-surface border border-border rounded-lg shadow-card-hover overflow-hidden">
            {/* Mock Dashboard UI */}
            <div className="aspect-[16/9] bg-surface-subtle p-4 md:p-8">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-error" />
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-24 bg-surface rounded" />
                  <div className="h-6 w-6 bg-primary rounded" />
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-4 gap-4">
                {/* Sidebar */}
                <div className="col-span-1 space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={cn(
                        'h-8 rounded',
                        i === 1 ? 'bg-primary' : 'bg-surface'
                      )}
                    />
                  ))}
                </div>

                {/* Main Content */}
                <div className="col-span-3 space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-24 bg-surface rounded border border-border" />
                    ))}
                  </div>
                  <div className="h-40 bg-surface rounded border border-border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
