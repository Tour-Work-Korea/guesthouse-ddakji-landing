"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const reviews = [
  {
    id: 1,
    name: "이**",
    avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Jae&hairColor=000000&skinColor=ffd1b2&backgroundColor=c0aede",
    location: "20대 여성",
    rating: 5,
    text: "괜찮은 게스트하우스를 찾고 싶었는데, 대형 플랫폼에서는 잘 안 보이더라고요. 게딱지에서는 숨겨진 좋은 숙소들을 발견하는 느낌이라 보는 것만으로도 재밌었어요.",
    date: "2024년 3월",
  },
  {
    id: 2,
    name: "황**",
    avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Minho&hairColor=000000&skinColor=f5b389&backgroundColor=b6e3f4",
    location: "20대 남성",
    rating: 5,
    text: "게스트하우스 파티 정보 보려고 인스타랑 네이버 계속 찾아봤었는데 여기서는 한 번에 볼 수 있어서 편했어요. 바로 신청까지 되는 것도 좋았어요.",
    date: "2024년 2월",
  },
  {
    id: 3,
    name: "박**",
    avatar: "https://api.dicebear.com/9.x/personas/svg?seed=Jisu&hairColor=000000&skinColor=ffd1b2&backgroundColor=ffdfbf",
    location: "30대 남성",
    rating: 5,
    text: "혼자 여행 와서 처음엔 조금 어색했지만, 게스트하우스에서 만난 사람들과 금방 친해질 수 있었어요. 단순히 스쳐가는 인연이 아니라 ‘친구’를 사귈 수 있었고, 혼자였지만 전혀 혼자가 아닌 여행이었습니다.",
    date: "2024년 1월",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-10 md:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-foreground text-balance md:text-4xl">
            게딱지에서 <br className="block sm:hidden" />시작된 이야기들
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground px-4">
            여행자들이 직접 남긴 진짜 경험을 만나보세요!
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
            >
              <Card className="border-border bg-card h-full hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-5 sm:p-6 flex flex-col h-full">
                  {/* Quote Icon */}
                  <Quote className="mb-3 sm:mb-4 h-6 w-6 sm:h-8 sm:w-8 text-primary/20" />

                  {/* Rating */}
                  <div className="mb-3 sm:mb-4 flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="mb-5 sm:mb-6 text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
                    {`"${review.text}"`}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium text-foreground">{review.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{review.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
