import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "박진경",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    location: "30대 남성",
    rating: 5,
    text: "게스트하우스 가보고 싶었는데 큰 플랫폼에는 정보가 거의 없어서 찾기 힘들었어요. 게딱지에서는 게스트하우스만 모여 있어서 훨씬 쉽게 찾을 수 있었어요.",
    date: "2024년 3월",
  },
  {
    id: 2,
    name: "황진욱",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    location: "20대 남성",
    rating: 5,
    text: "게스트하우스 파티 정보 보려고 인스타랑 네이버 계속 찾아봤었는데 여기서는 한 번에 볼 수 있어서 편했어요. 바로 신청까지 되는 것도 좋았어요.",
    date: "2024년 2월",
  },
  {
    id: 3,
    name: "이하늘",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    location: "20대 여성",
    rating: 5,
    text: "스탭 구하려고 항상 네이버 카페만 봤었는데 게딱지에서도 지원할 수 있어서 훨씬 편했어요. 한 곳에서 다 해결되는 느낌이에요.",
    date: "2024년 1월",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            여행자들의 이야기
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            실제 여행자들이 전하는 생생한 경험담을 확인하세요
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id} className="border-border bg-card">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="mb-4 h-8 w-8 text-primary/20" />

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {`"${review.text}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
