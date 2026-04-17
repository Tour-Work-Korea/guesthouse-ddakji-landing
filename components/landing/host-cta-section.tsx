import { Button } from "@/components/ui/button"
import { CheckCircle2, Smartphone, Apple, Play } from "lucide-react"
import { HostRegistrationModal } from "@/components/landing/host-registration-modal"
import Image from "next/image"

const benefits = [
  "예약부터 정산까지 한 번에 관리",
  "체크인 안내 메시지 자동 발송",
  "파티 안내 및 참여 관리 자동화",
  "스탭 모집과 관리까지 한 곳에서",
]

export function HostCtaSection() {
  return (
    <section id="hosts" className="bg-primary/5 py-16 md:py-24 border-t border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="mb-4 sm:mb-5 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl leading-[1.3]">
              게딱지 파트너가 되어
              <br />
              <span className="text-primary">게스트하우스 운영을 간편하게</span>
            </h2>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              게스트하우스를 운영하고 있다면 게딱지 호스트로 등록하세요.
              <br className="hidden md:block" />
              숙박 예약, 파티, 스탭 관리까지 하나로 통합해 간편하게 운영할 수 있습니다.
            </p>

            {/* Benefits */}
            <ul className="mb-8 md:mb-10 space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2.5 sm:gap-3 text-foreground font-medium text-sm sm:text-base">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA & Stats */}
            <div className="flex flex-row items-center gap-3 sm:gap-6 mt-2 flex-nowrap w-full">
              <HostRegistrationModal>
                <Button
                  size="lg"
                  className="px-2 sm:px-6 md:px-8 shadow-sm h-11 sm:h-12 text-sm sm:text-base font-semibold w-full flex-1 sm:flex-none sm:w-fit shrink-0"
                >
                  내 게스트하우스 등록하기
                </Button>
              </HostRegistrationModal>

              <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                <div className="flex -space-x-2 sm:-space-x-3">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-2 ring-white dark:ring-background bg-muted overflow-hidden shadow-sm">
                    <Image src="https://picsum.photos/seed/p1/100/100" alt="파트너" width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-2 ring-white dark:ring-background bg-muted overflow-hidden shadow-sm">
                    <Image src="https://picsum.photos/seed/p2/100/100" alt="파트너" width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-2 ring-white dark:ring-background bg-primary/10 flex items-center justify-center text-[10px] sm:text-xs font-bold text-primary shadow-sm">
                    +
                  </div>
                </div>
                <div className="text-[10px] sm:text-sm font-medium text-muted-foreground leading-tight tracking-tighter sm:tracking-normal">
                  <span className="text-foreground font-bold text-xs sm:text-base">45+</span> 파트너<br />게스트하우스
                </div>
              </div>
            </div>
          </div>

          {/* Partner App Promo Card */}
          <div className="rounded-3xl border border-border/60 bg-card p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col justify-center h-full min-h-[400px]">
            {/* Soft decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-white border border-border/50 shadow-sm flex items-center justify-center mb-6 overflow-hidden">
                <Image src="/images/ddakji-partner-logo.jpg" alt="파트너센터 로고" width={128} height={128} className="w-full h-full object-contain p-1" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                게딱지 파트너센터
              </h3>
              <p className="text-muted-foreground mb-10 leading-relaxed text-base md:text-lg">
                언제 어디서나 스마트폰으로 간편하게 게스트하우스를 관리하세요. <br className="hidden md:block" />
                예약 현황부터 정산, 스탭 관리까지 전용 앱 하나로 끝납니다.
              </p>

              <div className="flex flex-row gap-2 sm:gap-4 mt-auto">
                <Button variant="outline" className="h-12 md:h-14 w-full flex-1 justify-center sm:justify-start px-2 sm:px-4 gap-1.5 md:gap-3 hover:bg-primary/5 hover:text-primary hover:border-primary/50 transition-all border-border/80">
                  <Apple className="w-5 h-5 md:w-6 md:h-6" />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-wider font-semibold opacity-70 leading-none">Download</span>
                    <span className="text-xs md:text-sm font-bold leading-tight">App Store</span>
                  </div>
                </Button>
                <Button variant="outline" className="h-12 md:h-14 w-full flex-1 justify-center sm:justify-start px-2 sm:px-4 gap-1.5 md:gap-3 hover:bg-primary/5 hover:text-primary hover:border-primary/50 transition-all border-border/80">
                  <Play className="w-5 h-5 md:w-6 md:h-6" />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-wider font-semibold opacity-70 leading-none">Get it on</span>
                    <span className="text-xs md:text-sm font-bold leading-tight">Google Play</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
