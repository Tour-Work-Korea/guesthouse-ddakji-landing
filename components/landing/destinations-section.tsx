import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart } from "lucide-react"
import Image from "next/image"

const destinations = [
  {
    id: 1,
    name: "애월 오션뷰 게스트하우스",
    location: "애월읍, 제주",
    price: "₩35,000",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
    tags: ["오션뷰", "공용 주방"],
    featured: true,
  },
  {
    id: 2,
    name: "함덕 서핑 호스텔",
    location: "조천읍, 제주",
    price: "₩28,000",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
    tags: ["서핑 장비 대여", "바베큐"],
    featured: false,
  },
  {
    id: 3,
    name: "성산 일출 게스트하우스",
    location: "성산읍, 제주",
    price: "₩32,000",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    tags: ["일출 명소", "정원"],
    featured: true,
  },
  {
    id: 4,
    name: "협재 비치 하우스",
    location: "한림읍, 제주",
    price: "₩38,000",
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
    tags: ["해변 도보 3분", "자전거 대여"],
    featured: false,
  },
  {
    id: 5,
    name: "서귀포 감귤농장 스테이",
    location: "서귀포시, 제주",
    price: "₩42,000",
    rating: 4.8,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop",
    tags: ["감귤 체험", "조식 포함"],
    featured: true,
  },
  {
    id: 6,
    name: "제주시 올레 게스트하우스",
    location: "제주시, 제주",
    price: "₩25,000",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    tags: ["시내 중심", "24시간 체크인"],
    featured: false,
  },
]

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            제주 인기 게스트하우스
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            제주 곳곳의 매력적인 게스트하우스에서 특별한 여행을 시작하세요
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Favorite Button */}
                <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white">
                  <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500" />
                </button>
                {/* Featured Badge */}
                {destination.featured && (
                  <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
                    추천
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                {/* Location & Rating */}
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{destination.location}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                    <span className="text-sm text-muted-foreground">({destination.reviews})</span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="mb-3 font-semibold text-foreground line-clamp-1">
                  {destination.name}
                </h3>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {destination.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-foreground">{destination.price}</span>
                  <span className="text-sm text-muted-foreground">/ 박</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-muted">
            제주 전체 게스트하우스 보기
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
