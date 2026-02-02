import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

interface Stat {
  value: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    value: '10K+',
    label: 'Active Teams',
    description: 'Companies trust ACME for their project management',
  },
  {
    value: '99.9%',
    label: 'Uptime SLA',
    description: 'Enterprise-grade reliability you can depend on',
  },
  {
    value: '40%',
    label: 'Faster Delivery',
    description: 'Average improvement in project delivery times',
  },
  {
    value: '24/7',
    label: 'Support',
    description: 'Dedicated support team ready to help anytime',
  },
]

interface StatsProps {
  className?: string
}

export function Stats({ className }: StatsProps) {
  return (
    <section className={cn('py-20 md:py-28 bg-surface-subtle', className)}>
      <Container size="xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                'text-center',
                'relative',
                // Add separator line between stats on desktop
                index !== stats.length - 1 &&
                  'md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-16 md:after:w-px md:after:bg-border'
              )}
            >
              <Heading
                level={2}
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
              >
                {stat.value}
              </Heading>
              <Text className="font-semibold text-text mb-1">
                {stat.label}
              </Text>
              <Text size="sm" className="text-text-subdued hidden md:block">
                {stat.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
