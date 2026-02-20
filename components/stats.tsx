import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

interface Stat {
  value: string
  label: string
}

interface StatsProps {
  className?: string
}

const stats: Stat[] = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '2,400+', label: 'Teams Worldwide' },
  { value: '40%', label: 'Faster Delivery' },
  { value: '4.9/5', label: 'Customer Rating' },
]

export function Stats({ className }: StatsProps) {
  return (
    <section
      className={cn(
        'py-xl md:py-[64px] bg-primary',
        className
      )}
      aria-label="Key statistics"
    >
      <Container size="xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-lg">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <Heading
                level={3}
                className="text-[32px] sm:text-[40px] lg:text-[48px] font-light text-text-inverse mb-xs"
              >
                {stat.value}
              </Heading>
              <Text size="sm" className="text-primary-200 font-medium uppercase tracking-wider">
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
