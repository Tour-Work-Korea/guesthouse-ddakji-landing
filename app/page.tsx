import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { PartnersSection } from "@/components/landing/partners-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { StatsSection } from "@/components/landing/stats-section"
import { ReviewsSection } from "@/components/landing/reviews-section"
import { HostCtaSection } from "@/components/landing/host-cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        {/* <StatsSection /> */}
        <FeaturesSection />
        <ReviewsSection />
        <PartnersSection />
        <HostCtaSection />
      </main>
      <Footer />
    </div>
  )
}
