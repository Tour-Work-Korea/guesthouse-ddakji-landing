import Image from "next/image"

export function AppDownloadSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-muted to-muted/50 p-8 md:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                앱으로 더 쉽게
                <br />
                제주 여행을 준비하세요
              </h2>
              <p className="mb-8 text-muted-foreground">
                게딱지 앱에서 실시간 알림, 오프라인 예약 확인서,
                그리고 더 많은 기능을 만나보세요.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://apps.apple.com/kr/app/%EA%B2%8C%EB%94%B1%EC%A7%80-%EA%B2%8C%EC%8A%A4%ED%8A%B8%ED%95%98%EC%9A%B0%EC%8A%A4-%EB%94%B1-%EC%A7%80%EA%B8%88/id6746732522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 h-14 px-6 rounded-xl border border-border bg-card hover:bg-muted transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Download on the</div>
                    <div className="font-semibold text-foreground">App Store</div>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.triofrontendapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 h-14 px-6 rounded-xl border border-border bg-card hover:bg-muted transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Get it on</div>
                    <div className="font-semibold text-foreground">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Phone Mockup with Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="rounded-[2.5rem] bg-foreground p-3 shadow-2xl">
                  <div className="h-[400px] w-[200px] rounded-[2rem] bg-gradient-to-b from-primary/90 to-primary flex flex-col items-center justify-center text-primary-foreground">
                    <Image
                      src="/images/logo.png"
                      alt="게딱지 로고"
                      width={80}
                      height={80}
                      className="mb-4"
                    />
                    <span className="text-xl font-bold">게딱지</span>
                    <span className="text-sm opacity-80 mt-1">게스트하우스 딱, 지금!</span>
                  </div>
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
