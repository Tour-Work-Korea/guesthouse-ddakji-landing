"use client"

import { useEffect, useRef } from "react"

const partners = [
  "서점숙소",
  "점보네 게스트하우스",
  "리틀포레스트",
  "제철주택",
  "노마드인제주",
  "소담소담",
  "131 게스트하우스",
  "이호웨이브",
  "히든스테이",
  "524 게스트하우스"
]

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const speed = 0.5

    const scroll = () => {
      scrollPosition += speed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="border-y border-border bg-card py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-6">
        <p className="text-center text-base md:text-lg font-medium text-muted-foreground">
          게딱지와 함께하는 게스트하우스
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-hidden whitespace-nowrap"
      >
        {/* 두 번 반복해서 무한 스크롤 효과 */}
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="group flex-shrink-0 flex items-center gap-3 px-2 py-2 pr-6 rounded-full bg-white dark:bg-card text-foreground font-medium text-sm md:text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-muted overflow-hidden flex-shrink-0 border border-border transition-transform duration-300 group-hover:scale-110 shadow-sm">
              <img
                src={`https://picsum.photos/seed/${encodeURIComponent(partner)}/100/100`}
                alt={`${partner} 로고`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span>{partner}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
