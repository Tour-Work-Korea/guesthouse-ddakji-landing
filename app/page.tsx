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
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "게딱지(Ddakji)",
            "url": "https://ddakji.kr",
            "logo": "https://ddakji.kr/icon.svg",
            "sameAs": [
              "https://www.instagram.com/guesthouse_ddakji/",
              "https://apps.apple.com/kr/app/%EA%B2%8C%EB%94%B1%EC%A7%80-%EA%B2%8C%EC%8A%A4%ED%8A%B8%ED%95%98%EC%9A%B0%EC%8A%A4-%EB%94%B1-%EC%A7%80%EA%B8%88/id6746732522",
              "https://play.google.com/store/apps/details?id=com.triofrontendapp"
            ]
          })
        }}
      />
      <Script
        id="schema-sitelinks"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SiteNavigationElement",
                "name": "서비스 소개",
                "url": "https://ddakji.kr/#features"
              },
              {
                "@type": "SiteNavigationElement",
                "name": "이용 후기",
                "url": "https://ddakji.kr/#reviews"
              },
              {
                "@type": "SiteNavigationElement",
                "name": "게딱지 파트너",
                "url": "https://ddakji.kr/#partners"
              },
              {
                "@type": "SiteNavigationElement",
                "name": "이용약관",
                "url": "https://ddakji.kr/terms"
              },
              {
                "@type": "SiteNavigationElement",
                "name": "개인정보처리방침",
                "url": "https://ddakji.kr/privacy"
              }
            ]
          })
        }}
      />
    </div>
  )
}
