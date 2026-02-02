import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Card } from '@/components/ui/card'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
    ),
    title: 'Kanban Boards',
    description:
      'Visualize your workflow with customizable Kanban boards. Drag and drop tasks, set priorities, and track progress in real-time.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Team Collaboration',
    description:
      'Seamlessly collaborate with your team. Comment on tasks, share files, and get real-time notifications to stay aligned.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: 'Analytics Dashboard',
    description:
      'Make data-driven decisions with comprehensive analytics. Track team velocity, identify bottlenecks, and measure productivity.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: 'Enterprise Security',
    description:
      'Rest easy with SOC 2 compliance, SSO integration, and role-based access controls. Your data is always protected.',
  },
]

interface FeaturesProps {
  className?: string
}

export function Features({ className }: FeaturesProps) {
  return (
    <section id="features" className={cn('py-20 md:py-32 bg-surface', className)}>
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Text size="sm" className="text-primary font-semibold mb-4 uppercase tracking-wider">
            Features
          </Text>
          <Heading level={2} className="mb-4">
            Everything you need to ship faster
          </Heading>
          <Text className="text-text-subdued">
            Powerful features designed for modern product teams. Focus on what matters
            while we handle the complexity.
          </Text>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              variant="elevated"
              className={cn(
                'group p-6 lg:p-8',
                'transition-all duration-300',
                'hover:border-primary/20 hover:-translate-y-1'
              )}
            >
              {/* Icon */}
              <div
                className={cn(
                  'w-12 h-12 rounded-lg mb-6',
                  'bg-primary/10 text-primary',
                  'flex items-center justify-center',
                  'transition-colors duration-300',
                  'group-hover:bg-primary group-hover:text-text-inverse'
                )}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <Heading level={3} className="text-lg mb-3">
                {feature.title}
              </Heading>
              <Text className="text-text-subdued leading-relaxed">
                {feature.description}
              </Text>

              {/* Learn more link */}
              <div className="mt-4">
                <a
                  href="#"
                  className={cn(
                    'inline-flex items-center text-sm font-medium',
                    'text-primary hover:text-primary-hover',
                    'transition-colors duration-200'
                  )}
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
