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
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="게딱지 로고" 
              width={32} 
              height={32}
              style={{ width: 'auto', height: '32px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              서비스 소개
            </Link>
            <Link href="#reviews" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              이용 후기
            </Link>
            <Link href="#download" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              앱 다운로드
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button size="sm" asChild>
              <Link href="#hosts">입점 문의</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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
              <Link href="#download" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                앱 다운로드
              </Link>
              <div className="pt-4 border-t border-border">
                <Button size="sm" className="w-full" asChild>
                  <Link href="#hosts">입점 문의</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
