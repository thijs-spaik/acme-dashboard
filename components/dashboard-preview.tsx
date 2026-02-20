import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

interface DashboardPreviewProps {
  className?: string
}

export function DashboardPreview({ className }: DashboardPreviewProps) {
  return (
    <section
      className={cn('py-xl md:py-[80px] lg:py-[100px] overflow-hidden', className)}
      aria-labelledby="preview-heading"
    >
      <Container size="xl">
        <div className="mx-auto max-w-2xl text-center mb-xl">
          <Text
            size="xs"
            className="text-primary font-semibold tracking-widest uppercase mb-sm"
          >
            Product Preview
          </Text>
          <Heading
            level={2}
            id="preview-heading"
            className="text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.1] mb-md"
          >
            A dashboard that works for you
          </Heading>
          <Text size="md" className="text-text-subdued">
            See all your projects, team activity, and deadlines at a glance.
          </Text>
        </div>

        {/* Mock Dashboard UI */}
        <div className="relative mx-auto max-w-5xl">
          {/* Browser chrome */}
          <div className="rounded-t border border-border border-b-0 bg-surface-elevated px-md py-sm flex items-center gap-sm">
            <div className="flex gap-[6px]">
              <div className="h-3 w-3 rounded-full bg-border" />
              <div className="h-3 w-3 rounded-full bg-border" />
              <div className="h-3 w-3 rounded-full bg-border" />
            </div>
            <div className="flex-1 mx-lg">
              <div className="mx-auto max-w-sm rounded bg-surface-subtle px-md py-xs">
                <Text size="xs" className="text-text-subdued text-center">
                  app.acmecorp.com/dashboard
                </Text>
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="rounded-b border border-border bg-surface-elevated p-md md:p-lg overflow-hidden">
            <div className="grid grid-cols-12 gap-md">
              {/* Sidebar mock */}
              <div className="col-span-12 md:col-span-3 space-y-sm">
                <div className="flex items-center gap-sm p-sm rounded bg-primary-50">
                  <div className="h-4 w-4 rounded bg-primary" />
                  <Text size="xs" className="font-medium text-primary">Dashboard</Text>
                </div>
                {['Projects', 'Tasks', 'Team', 'Reports', 'Settings'].map((item) => (
                  <div key={item} className="flex items-center gap-sm p-sm rounded hover:bg-surface-subtle transition-colors">
                    <div className="h-4 w-4 rounded bg-border" />
                    <Text size="xs" className="text-text-subdued">{item}</Text>
                  </div>
                ))}
              </div>

              {/* Main content mock */}
              <div className="col-span-12 md:col-span-9 space-y-md">
                {/* Stats row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-sm">
                  {[
                    { label: 'Active Projects', value: '12', change: '+2' },
                    { label: 'Tasks Due', value: '28', change: '-5' },
                    { label: 'Team Members', value: '34', change: '+3' },
                    { label: 'Completion Rate', value: '94%', change: '+8%' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded border border-border bg-surface p-sm"
                    >
                      <Text size="xs" className="text-text-subdued">
                        {stat.label}
                      </Text>
                      <div className="flex items-baseline gap-xs mt-xs">
                        <Text size="lg" className="font-semibold font-heading">
                          {stat.value}
                        </Text>
                        <Text
                          size="xs"
                          className={cn(
                            'font-medium',
                            stat.change.startsWith('+') ? 'text-success' : 'text-primary'
                          )}
                        >
                          {stat.change}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="rounded border border-border bg-surface p-md">
                  <div className="flex items-center justify-between mb-md">
                    <Text size="sm" className="font-semibold">Project Velocity</Text>
                    <div className="flex gap-sm">
                      {['Week', 'Month', 'Quarter'].map((period) => (
                        <Text
                          key={period}
                          size="xs"
                          className={cn(
                            'px-sm py-xs rounded cursor-pointer transition-colors',
                            period === 'Month'
                              ? 'bg-primary text-text-inverse'
                              : 'text-text-subdued hover:bg-surface-subtle'
                          )}
                        >
                          {period}
                        </Text>
                      ))}
                    </div>
                  </div>
                  {/* Bar chart mock */}
                  <div className="flex items-end gap-[6px] h-32">
                    {[40, 65, 45, 80, 55, 70, 90, 60, 85, 75, 95, 70].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-primary-100 hover:bg-primary-200 transition-colors"
                        style={{ height: `${height}%` }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                {/* Task list placeholder */}
                <div className="rounded border border-border bg-surface p-md">
                  <Text size="sm" className="font-semibold mb-md">Recent Tasks</Text>
                  <div className="space-y-sm">
                    {[
                      { task: 'Update API documentation', status: 'In Progress', priority: 'High' },
                      { task: 'Design sprint review', status: 'Done', priority: 'Medium' },
                      { task: 'Deploy v2.4 release', status: 'In Review', priority: 'High' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-sm border-b border-border last:border-0">
                        <div className="flex items-center gap-sm">
                          <div
                            className={cn(
                              'h-2 w-2 rounded-full',
                              item.status === 'Done' ? 'bg-success' : item.status === 'In Progress' ? 'bg-primary' : 'bg-warning'
                            )}
                          />
                          <Text size="sm">{item.task}</Text>
                        </div>
                        <div className="flex items-center gap-sm">
                          <Text
                            size="xs"
                            className={cn(
                              'px-sm py-xs rounded',
                              item.priority === 'High'
                                ? 'bg-error/10 text-error'
                                : 'bg-surface-subtle text-text-subdued'
                            )}
                          >
                            {item.priority}
                          </Text>
                          <Text size="xs" className="text-text-subdued">
                            {item.status}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shadow beneath */}
          <div
            className="absolute -bottom-4 left-4 right-4 h-8 rounded-b bg-border/50 blur-lg -z-10"
            aria-hidden="true"
          />
        </div>
      </Container>
    </section>
  )
}
