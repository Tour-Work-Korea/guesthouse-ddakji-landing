"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Smartphone, Apple, Play, X, AlertCircle } from "lucide-react"
import { HostRegistrationModal } from "@/components/landing/host-registration-modal"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const benefits = [
  "예약부터 정산까지 한 번에 관리",
  "체크인 안내 메시지 자동 발송",
  "파티 안내 및 참여 관리 자동화",
  "스탭 모집과 관리까지 한 곳에서",
]

export function HostCtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="hosts" className="bg-[#E3EBFF]/30 py-16 md:py-24 border-t border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="mb-4 sm:mb-5 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl leading-[1.3]">
              게딱지 파트너가 되어
              <br />
              <span className="text-[#4351EC]">게스트하우스 운영을 간편하게</span>
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
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#4351EC] shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA & Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-2 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-[#4351EC] hover:bg-[#4351EC]/90 text-white px-2 sm:px-6 md:px-8 shadow-sm h-11 sm:h-12 text-sm sm:text-base font-semibold w-full sm:w-fit shrink-0"
                  asChild
                >
                  <a href="https://host.ddakji.kr" target="_blank" rel="noopener noreferrer">
                    파트너센터 알아보기
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                <div className="flex -space-x-2 sm:-space-x-3">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-2 ring-white dark:ring-background bg-muted overflow-hidden shadow-sm">
                    <Image src="/images/partners/gimnyeong.jpg" alt="게딱지 파트너 게스트하우스" width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-2 ring-white dark:ring-background bg-muted overflow-hidden shadow-sm">
                    <Image src="/images/partners/hyeopjae.jpg" alt="게딱지 파트너 게스트하우스" width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-2 ring-white dark:ring-background bg-[#E3EBFF] flex items-center justify-center text-[10px] sm:text-xs font-bold text-[#4351EC] shadow-sm">
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4351EC]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-white border border-border/50 shadow-sm flex items-center justify-center mb-6 overflow-hidden">
                <Image src="/images/ddakji-partner-logo.jpg" alt="파트너센터 로고" width={128} height={128} className="w-full h-full object-contain p-1" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                게딱지 파트너센터
              </h3>
              <p className="text-muted-foreground mb-10 leading-relaxed text-sm md:text-base">
                언제 어디서나 스마트폰으로 간편하게<br className="sm:hidden" /> 게스트하우스를 관리하세요. <br className="hidden md:block" />
                예약 현황부터 정산, 스탭 관리까지 전용 앱 하나로 끝납니다.
              </p>

              <div className="flex flex-row gap-2 sm:gap-4 mt-auto">
                <Button variant="outline" className="h-12 md:h-14 w-full flex-1 justify-center sm:justify-start px-2 sm:px-4 gap-1.5 md:gap-3 hover:bg-[#E3EBFF]/50 hover:text-[#4351EC] hover:border-[#4351EC]/50 transition-all border-border/80" asChild>
                  <a href="https://apps.apple.com/kr/app/%EA%B2%8C%EB%94%B1%EC%A7%80-%ED%8C%8C%ED%8A%B8%EB%84%88%EC%84%BC%ED%84%B0/id6761244097" target="_blank" rel="noopener noreferrer">
                    <Apple className="w-5 h-5 md:w-6 md:h-6" />
                    <div className="flex flex-col items-start text-left">
                      <span className="text-[9px] md:text-[10px] uppercase tracking-wider font-semibold opacity-70 leading-none">Download</span>
                      <span className="text-xs md:text-sm font-bold leading-tight">App Store</span>
                    </div>
                  </a>
                </Button>
                <Button variant="outline" className="h-12 md:h-14 w-full flex-1 justify-center sm:justify-start px-2 sm:px-4 gap-1.5 md:gap-3 hover:bg-[#E3EBFF]/50 hover:text-[#4351EC] hover:border-[#4351EC]/50 transition-all border-border/80" onClick={() => setIsModalOpen(true)}>
                  <Play className="w-5 h-5 md:w-6 md:h-6" />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-wider font-semibold opacity-70 leading-none">Coming Soon</span>
                    <span className="text-xs md:text-sm font-bold leading-tight">Google Play</span>
                  </div>
                </Button>
              </div>
              </div>
            </div>

            {/* Coming Soon Modal */}
            <AnimatePresence>
              {isModalOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsModalOpen(false)}
                    className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-40%" }}
                    animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                    exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-40%" }}
                    className="fixed top-1/2 left-1/2 z-[101] w-[90%] max-w-sm bg-background border border-border/50 shadow-2xl rounded-[2rem] p-6 outline-none"
                  >
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors p-1"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="flex flex-col items-center text-center mt-2">
                      <div className="w-14 h-14 bg-[#4351EC]/10 rounded-[1.2rem] flex items-center justify-center mb-5 border border-[#4351EC]/20 shadow-sm">
                        <AlertCircle className="w-7 h-7 text-[#4351EC]" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">출시 준비 중입니다</h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        안드로이드 앱은 현재 출시 준비 중입니다.<br />
                        최대한 빠르게 플레이 스토어에서 뵙겠습니다!
                      </p>
                      <Button
                        className="w-full rounded-xl h-12 bg-[#4351EC] text-white hover:bg-[#4351EC]/90 font-bold text-base shadow-md shadow-[#4351EC]/20"
                        onClick={() => setIsModalOpen(false)}
                      >
                        확인
                      </Button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
    </section>
  )
}
