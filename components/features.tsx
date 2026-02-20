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

interface FeaturesProps {
  className?: string
}

const features: Feature[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    title: 'Kanban & Sprint Boards',
    description:
      'Visualize workflows with customizable boards. Drag-and-drop tasks, set WIP limits, and track progress across sprints with real-time updates.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20V16" />
      </svg>
    ),
    title: 'Advanced Analytics',
    description:
      'AI-powered dashboards that surface insights automatically. Track velocity, burndown, and team capacity with zero manual setup required.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" />
        <path d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88" />
      </svg>
    ),
    title: 'Team Collaboration',
    description:
      'Real-time commenting, @mentions, and shared workspaces. Keep context where it belongs — attached to the work itself, not scattered in chat.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 6V12L16 14" />
      </svg>
    ),
    title: 'Automated Workflows',
    description:
      'Eliminate repetitive tasks with powerful automation rules. Trigger status updates, assignments, and notifications based on custom conditions.',
  },
]

export function Features({ className }: FeaturesProps) {
  return (
    <section
      className={cn('py-xl md:py-[80px] lg:py-[100px] bg-surface-subtle', className)}
      id="features"
      aria-labelledby="features-heading"
    >
      <Container size="xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-xl md:mb-[64px]">
          <Text
            size="xs"
            className="text-primary font-semibold tracking-widest uppercase mb-sm"
          >
            Features
          </Text>
          <Heading
            level={2}
            id="features-heading"
            className="text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.1] mb-md"
          >
            Everything you need to ship faster
          </Heading>
          <Text size="md" className="text-text-subdued max-w-lg mx-auto">
            Built for product teams who need clarity, speed, and alignment
            across every project and sprint.
          </Text>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
          {features.map((feature, index) => (
            <Card
              key={index}
              variant="elevated"
              className="group relative p-lg hover:shadow-card-hover transition-all duration-300 border border-transparent hover:border-border"
            >
              {/* Icon */}
              <div className="mb-md flex h-12 w-12 items-center justify-center rounded bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-text-inverse">
                {feature.icon}
              </div>

              {/* Content */}
              <Heading level={3} className="text-md font-semibold mb-sm">
                {feature.title}
              </Heading>
              <Text size="sm" className="text-text-subdued leading-relaxed">
                {feature.description}
              </Text>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
