import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'

interface CTAProps {
  className?: string
}

export function CTA({ className }: CTAProps) {
  return (
    <section className={cn('py-20 md:py-32 bg-surface', className)}>
      <Container size="xl">
        <div
          className={cn(
            'relative overflow-hidden',
            'bg-primary rounded-lg md:rounded-xl',
            'px-6 py-12 md:px-16 md:py-20',
            'text-center'
          )}
        >
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }}
          />

          {/* Decorative Shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <Heading level={2} className="text-text-inverse mb-4 md:mb-6">
              Ready to streamline your workflow?
            </Heading>
            <Text className="text-primary-100 mb-8 text-lg">
              Join 10,000+ teams already using ACME to deliver projects faster.
              Start your free 14-day trial today—no credit card required.
            </Text>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className={cn(
                  'w-full sm:w-auto px-8',
                  'bg-white text-primary',
                  'hover:bg-primary-50',
                  'shadow-none hover:shadow-none'
                )}
              >
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
              <Button
                variant="ghost"
                size="lg"
                className={cn(
                  'w-full sm:w-auto px-8',
                  'text-white border border-white/30',
                  'hover:bg-white/10 hover:text-white',
                  'bg-transparent'
                )}
              >
                Talk to Sales
              </Button>
            </div>

            {/* Trust indicator */}
            <div className="mt-8 flex items-center justify-center gap-2 text-primary-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <Text size="sm" className="text-primary-200">
                Free 14-day trial • No credit card required • Cancel anytime
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
