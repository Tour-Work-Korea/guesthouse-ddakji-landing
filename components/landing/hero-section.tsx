"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"
import { track } from "@vercel/analytics"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/3 to-background pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Content - Centered */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            게스트하우스 특화 플랫폼
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-balance text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            단순한 숙박이 아닌,
            <br />
            <span className="text-primary">사람을 만나는 시작점</span>으로
          </h1>

          {/* Subheadline */}
          <p className="mb-8 mx-auto max-w-xl text-pretty text-base sm:text-lg text-muted-foreground md:text-xl">
            게스트하우스 딱, 지금! 게딱지 추천 게스트하우스에서
            새로운 인연을 만나고, 진정한 여행의 의미를 발견하세요.
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 mb-12">
            <Button size="lg" className="h-12 md:h-14 px-3 md:px-6 text-sm md:text-base gap-1.5 md:gap-3 w-full max-w-[160px] sm:max-w-none sm:w-auto" asChild>
              <a href="https://apps.apple.com/kr/app/%EA%B2%8C%EB%94%B1%EC%A7%80-%EA%B2%8C%EC%8A%A4%ED%8A%B8%ED%95%98%EC%9A%B0%EC%8A%A4-%EB%94%B1-%EC%A7%80%EA%B8%88/id6746732522" target="_blank" rel="noopener noreferrer" onClick={() => track("Download_AppStore")}>
                <Apple className="h-5 w-5 md:h-6 md:w-6" />
                <div className="flex flex-col items-start">
                  <span className="text-[9px] md:text-[10px] opacity-80 leading-none">Download on the</span>
                  <span className="text-xs md:text-sm font-semibold leading-tight">App Store</span>
                </div>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 md:h-14 px-3 md:px-6 text-sm md:text-base gap-1.5 md:gap-3 w-full max-w-[160px] sm:max-w-none sm:w-auto bg-card" asChild>
              <a href="https://play.google.com/store/apps/details?id=com.triofrontendapp" target="_blank" rel="noopener noreferrer" onClick={() => track("Download_GooglePlay")}>
                <Play className="h-5 w-5 md:h-6 md:w-6 fill-current" />
                <div className="flex flex-col items-start">
                  <span className="text-[9px] md:text-[10px] opacity-80 leading-none">GET IT ON</span>
                  <span className="text-xs md:text-sm font-semibold leading-tight">Google Play</span>
                </div>
              </a>
            </Button>
          </div>
        </div>

        {/* Phone Mockup - Centered at Bottom */}
        <div className="relative flex justify-center">
          {/* Glow Effect Behind Phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative">
            {/* Phone Frame - Thinner, lighter border */}
            <div className="relative z-10 rounded-[2rem] md:rounded-[2.5rem] bg-gray-200 p-1.5 md:p-2 shadow-xl">
              <div className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem] bg-white">
                {/* Dynamic Island */}
                <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 z-20 h-5 w-20 md:h-6 md:w-24 bg-gray-900 rounded-full" />
                {/* Screen */}
                <Image
                  src="/images/recommend.svg"
                  alt="게딱지 앱 화면"
                  width={300}
                  height={650}
                  className="w-[240px] md:w-[300px] h-auto"
                  priority
                />
              </div>
            </div>

            {/* Shadow under phone */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
