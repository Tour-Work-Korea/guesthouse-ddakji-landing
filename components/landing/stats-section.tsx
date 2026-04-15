const stats = [
  { value: "45+", label: "제주 파트너 게스트하우스" },
  { value: "15+", label: "제주 주요 지역" },
  { value: "1,000+", label: "누적 예약" },
  { value: "4.9", label: "평균 만족도" },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
