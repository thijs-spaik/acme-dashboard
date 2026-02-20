import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Text } from '@/components/ui/text'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  className?: string
}

const columns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
]

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn('border-t border-border bg-surface-elevated py-xl md:py-[64px]', className)}
      role="contentinfo"
    >
      <Container size="xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-lg md:gap-xl">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-sm mb-md">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-primary">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 1L16 5V13L9 17L2 13V5L9 1Z"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M9 1V17M2 5L16 13M16 5L2 13"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="font-heading text-md font-semibold text-text">
                ACME
              </span>
            </a>
            <Text size="sm" className="text-text-subdued max-w-[200px]">
              Streamlined project management for modern enterprise teams.
            </Text>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <Text
                size="xs"
                className="font-semibold text-text uppercase tracking-wider mb-md"
              >
                {column.title}
              </Text>
              <ul className="space-y-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-subdued hover:text-text transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-xl pt-lg border-t border-border flex flex-col sm:flex-row items-center justify-between gap-sm">
          <Text size="xs" className="text-text-subdued">
            &copy; {new Date().getFullYear()} ACME Corporation. All rights reserved.
          </Text>
          <div className="flex items-center gap-md">
            {/* Social links */}
            {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-text-subdued hover:text-text transition-colors"
                aria-label={`Follow us on ${social}`}
              >
                <Text size="xs">{social}</Text>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
