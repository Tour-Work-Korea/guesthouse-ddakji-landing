import Script from "next/script"
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
      <Script
        id="schema-software-app"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "게딱지 - 게스트하우스 딱, 지금!",
            "operatingSystem": "iOS, Android",
            "applicationCategory": "TravelApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "KRW"
            },
            "description": "게스트하우스 딱, 지금! 단순한 숙박이 아닌 사람을 만나는 시작점. 전 세계 유니크한 파티 게스트하우스를 찾고 예약하세요.",
            "url": "https://ddakji.kr"
          })
        }}
      />
    </div>
  )
}
