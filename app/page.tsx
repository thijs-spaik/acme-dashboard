import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { DashboardPreview } from '@/components/dashboard-preview'
import { Stats } from '@/components/stats'
import { HowItWorks } from '@/components/how-it-works'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DashboardPreview />
        <Features />
        <Stats />
        <HowItWorks />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
