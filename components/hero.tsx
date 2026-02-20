import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn('relative overflow-hidden py-xl md:py-[80px] lg:py-[120px]', className)}
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      {/* Gradient accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-md inline-flex items-center gap-sm rounded-full border border-border bg-surface-elevated px-md py-xs">
            <span className="inline-block h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            <Text size="xs" className="text-text-subdued font-medium tracking-wide uppercase">
              Now with AI-powered insights
            </Text>
          </div>

          {/* Headline */}
          <Heading
            level={1}
            id="hero-heading"
            className="text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-light tracking-tight mb-lg"
          >
            Streamlined{' '}
            <span className="text-primary font-medium">Project Management</span>{' '}
            for Modern Teams
          </Heading>

          {/* Subheadline */}
          <Text
            size="lg"
            className="text-text-subdued max-w-xl mx-auto mb-xl leading-relaxed"
          >
            Keep your teams aligned, your projects on track, and your stakeholders
            informed — all from one powerful, intuitive platform.
          </Text>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-sm">
            <Button variant="primary" size="lg" className="min-w-[200px]">
              Start Free Trial
              <svg
                className="ml-sm"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M10 5L13 8L10 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button variant="ghost" size="lg" className="min-w-[200px]">
              Watch Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-xl flex flex-col sm:flex-row items-center justify-center gap-md text-text-subdued">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-surface bg-primary-100 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-[10px] font-medium text-primary">
                    {String.fromCharCode(65 + i)}
                  </span>
                </div>
              ))}
            </div>
            <Text size="sm" className="text-text-subdued">
              <span className="font-semibold text-text">2,400+</span> teams already onboard
            </Text>
          </div>
        </div>
      </Container>
    </section>
  )
}
