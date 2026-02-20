'use client'

import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  className?: string
}

const links: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
]

export function Navbar({ className }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur-sm',
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <Container size="xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
              <svg
                width="18"
                height="18"
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
            <span className="font-heading text-lg font-semibold text-text">
              ACME
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-lg">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-subdued transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-sm">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden h-10 w-10 items-center justify-center rounded text-text-subdued hover:text-text hover:bg-surface-subtle transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border py-md">
            <div className="flex flex-col gap-sm">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-md py-sm text-sm font-medium text-text-subdued hover:text-text hover:bg-surface-subtle rounded transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-sm mt-sm px-md">
                <Button variant="ghost" size="sm" className="w-full justify-center">
                  Sign In
                </Button>
                <Button variant="primary" size="sm" className="w-full justify-center">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}
