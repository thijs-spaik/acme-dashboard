import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

interface Step {
  number: string
  title: string
  description: string
}

interface HowItWorksProps {
  className?: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Create your workspace',
    description:
      'Set up your team workspace in minutes. Import existing projects from Jira, Asana, or start fresh with our smart templates.',
  },
  {
    number: '02',
    title: 'Organize your projects',
    description:
      'Structure work with boards, timelines, and lists. Customize views for each team member to see exactly what matters to them.',
  },
  {
    number: '03',
    title: 'Track & deliver',
    description:
      'Monitor progress with real-time dashboards and automated status reports. Hit deadlines consistently with AI-powered forecasting.',
  },
]

export function HowItWorks({ className }: HowItWorksProps) {
  return (
    <section
      className={cn('py-xl md:py-[80px] lg:py-[100px]', className)}
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
    >
      <Container size="xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-xl md:mb-[64px]">
          <Text
            size="xs"
            className="text-primary font-semibold tracking-widest uppercase mb-sm"
          >
            How It Works
          </Text>
          <Heading
            level={2}
            id="how-it-works-heading"
            className="text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.1] mb-md"
          >
            Up and running in minutes
          </Heading>
          <Text size="md" className="text-text-subdued max-w-lg mx-auto">
            No complex setup. No lengthy onboarding. Just a clear path from
            sign-up to shipping.
          </Text>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg md:gap-xl">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line (hidden on mobile, shown between items on desktop) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-border"
                  aria-hidden="true"
                />
              )}

              <div className="text-center">
                {/* Step number */}
                <div className="mx-auto mb-lg flex h-16 w-16 items-center justify-center rounded border-2 border-border bg-surface font-display text-xl font-semibold text-primary transition-colors group-hover:border-primary group-hover:bg-primary-50">
                  {step.number}
                </div>

                {/* Content */}
                <Heading level={3} className="text-md font-semibold mb-sm">
                  {step.title}
                </Heading>
                <Text size="sm" className="text-text-subdued max-w-xs mx-auto leading-relaxed">
                  {step.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
