import { Search, Filter, CheckCircle, PartyPopper } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Search,
    title: "게스트하우스만 모아서",
    description: "흩어져 있던 게스트하우스를 한 곳에 모아, 더 이상 여러 플랫폼을 헤매지 않아도 됩니다.",
    className: "bg-primary/5 dark:bg-primary/10",
    imageBg: "bg-gradient-to-t from-primary/15 to-transparent dark:from-primary/20",
    imageUrl: "/images/guesthouse.png",
  },
  // {
  //   icon: Filter,
  //   title: "분위기별로 찾기",
  //   description: "조용한 휴식부터 파티 중심까지, 원하는 분위기의 게스트하우스를 쉽게 찾을 수 있습니다.",
  //   className: "bg-muted/40 dark:bg-muted/10",
  //   imageBg: "bg-gradient-to-t from-muted/60 to-transparent dark:from-muted/20",
  //   // imageUrl: "/images/your-screenshot2.png", // 주석 슬래시(//)를 지우고 경로를 넣으세요!
  // },
  {
    icon: CheckCircle,
    title: "직접 검증한 숙소",
    description: "모든 게스트하우스를 직접 방문해 확인하고, 신뢰할 수 있는 곳만 소개합니다.",
    className: "bg-muted/40 dark:bg-muted/10",
    imageBg: "bg-gradient-to-t from-muted/60 to-transparent dark:from-muted/20",
    imageUrl: "/images/recommend.svg",
  },
  {
    icon: PartyPopper,
    title: "게스트하우스 파티 탐색",
    description: "각 게스트하우스에서 열리는 파티 정보를 한눈에 보고, 원하는 파티를 선택할 수 있습니다.",
    className: "bg-muted/40 dark:bg-muted/10",
    imageBg: "bg-gradient-to-t from-muted/60 to-transparent dark:from-muted/20",
    imageUrl: "/images/contents.svg",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            왜 게딱지인가요?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            게스트하우스를 찾는 여행자를 위해 설계된 플랫폼으로 더 재밌고, 편안한 여행을 경험하세요
          </p>
        </div>

        {/* Features Vertical Layout */}
        <div className="flex flex-col gap-16 lg:gap-20 max-w-5xl mx-auto mt-16 md:mt-24 pb-8">
          {features.map((feature, index) => {
            // 항목이 홀수 번째(1, 3, ...)일 때는 좌우를 반전시킵니다.
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`relative z-10 group flex flex-col items-center gap-12 lg:gap-16 ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${index > 0 ? '-mt-4 lg:-mt-12' : ''}`}
              >
                {/* Text Area */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto lg:mx-0 shadow-sm border border-primary/20">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {feature.description}
                  </p>
                </div>

                {/* Smartphone App Screen Mockup Area */}
                <div className={`w-full lg:w-1/2 flex justify-center ${isReversed ? 'lg:justify-start' : 'lg:justify-end'} px-4 lg:px-0`}>
                  <div className="relative flex items-center justify-center w-full max-w-[250px]">
                    {/* Decorative Background Blob */}
                    <div className={`absolute inset-0 scale-[1.5] blur-3xl rounded-full opacity-60 ${feature.imageBg.replace('bg-gradient-to-t', 'bg-gradient-to-tr')}`} />

                    {/* Phone Container - Fully visible, completely uncropped */}
                    <div className="relative z-10 w-full aspect-[9/19] rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border-[4px] lg:border-[6px] border-white dark:border-zinc-800 bg-background overflow-hidden hover:-translate-y-3 transition-transform duration-700 ease-out">
                      {(feature as any).imageUrl ? (
                        /* Real Image (Fills phone entirely) */
                        <Image src={(feature as any).imageUrl} alt={feature.title} fill className="object-cover" />
                      ) : (
                        /* Fake Phone Layout */
                        <div className="w-full h-full bg-background/95 dark:bg-card/95 pt-12 px-4 flex flex-col gap-4 relative">
                          {/* Notch */}
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/80 dark:bg-black rounded-full z-20" />
                          {/* UI Elements */}
                          <div className="flex items-center gap-3 mt-4">
                            <div className="w-12 h-12 rounded-full bg-muted/80 animate-pulse" />
                            <div className="space-y-2">
                              <div className="w-20 h-2.5 bg-muted/80 rounded-full" />
                              <div className="w-12 h-2 bg-muted/50 rounded-full" />
                            </div>
                          </div>
                          <div className="w-full flex-1 bg-muted/30 rounded-2xl mb-6" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
