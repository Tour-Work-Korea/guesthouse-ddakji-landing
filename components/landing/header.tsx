"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center z-10">
            <Image
              src="/images/logo.png"
              alt="게딱지 로고"
              width={160}
              height={40}
              className="h-7 md:h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 w-max">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              서비스 소개
            </Link>
            <Link href="#reviews" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              이용 후기
            </Link>
            <Link href="#partners" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              파트너
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2 z-10">
            <Link href="https://host.ddakji.kr" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="hidden lg:flex">
                파트너센터
              </Button>
            </Link>
            <Link href="/apply">
              <Button size="sm">
                입점 문의
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                서비스 소개
              </Link>
              <Link href="#reviews" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                이용 후기
              </Link>
              <Link href="#partners" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                파트너
              </Link>
              <div className="pt-4 border-t border-border flex flex-col gap-2">
                <Link href="https://host.ddakji.kr" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full">
                    파트너센터 알아보기
                  </Button>
                </Link>
                <Link href="/apply" className="w-full">
                  <Button size="sm" className="w-full">
                    입점 문의
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
