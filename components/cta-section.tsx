import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'

interface CtaSectionProps {
  className?: string
}

export function CtaSection({ className }: CtaSectionProps) {
  return (
    <section
      className={cn('py-xl md:py-[80px] lg:py-[100px]', className)}
      aria-labelledby="cta-heading"
    >
      <Container size="xl">
        <div className="relative overflow-hidden rounded-lg bg-surface-subtle border border-border px-lg py-xl md:px-xl md:py-[64px]">
          {/* Background accent */}
          <div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-500 to-accent"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <Heading
              level={2}
              id="cta-heading"
              className="text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.1] mb-md"
            >
              Ready to transform how your team works?
            </Heading>
            <Text size="md" className="text-text-subdued mb-xl max-w-lg mx-auto">
              Join 2,400+ teams who&apos;ve already made the switch. Start your free
              14-day trial — no credit card required.
            </Text>
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
                Talk to Sales
              </Button>
            </div>
            <Text size="xs" className="text-text-subdued mt-md">
              Free 14-day trial &bull; No credit card required &bull; Cancel anytime
            </Text>
          </div>
        </div>
      </Container>
    </section>
  )
}
