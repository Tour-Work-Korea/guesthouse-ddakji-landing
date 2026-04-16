"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PhoneCall, FileText, CheckCircle2, ArrowLeft } from "lucide-react"

type Step = "selection" | "online_form" | "success"

export function HostRegistrationModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [step, setStep] = React.useState<Step>("selection")
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // Reset step when modal opens/closes
  React.useEffect(() => {
    if (open) {
      setStep("selection")
    }
  }, [open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 임시: 1.5초 후 성공 화면으로 전환 (실제 API 연동 부분)
    setTimeout(() => {
      setIsSubmitting(false)
      setStep("success")
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] overflow-hidden">
        {step === "selection" && (
          <div className="flex flex-col gap-6 pt-2">
            <DialogHeader>
              <DialogTitle className="text-2xl text-center">어떤 방법으로 입점을 도와드릴까요?</DialogTitle>
              <DialogDescription className="text-center text-base mt-2">
                편하신 방법을 선택해 주시면 빠르게 안내해 드릴게요.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              {/* Online Form Card */}
              <button
                onClick={() => setStep("online_form")}
                className="flex flex-col items-center justify-center p-6 gap-4 rounded-xl border-2 border-border/50 bg-card hover:border-primary/50 hover:bg-primary/5 transition-all text-left"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-foreground">온라인 신청</h3>
                  <p className="text-sm text-muted-foreground mt-1">간단한 정보 입력으로<br />빠르게 신청하기</p>
                </div>
              </button>

              {/* Phone Call Card */}
              <a 
                href="tel:010-6627-2653"
                className="flex flex-col items-center justify-center p-6 gap-4 rounded-xl border-2 border-border/50 bg-card hover:border-primary/50 hover:bg-primary/5 transition-all text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">전화 상담</h3>
                  <p className="text-sm text-foreground font-semibold mt-1">010-6627-2653</p>
                  <p className="text-xs text-muted-foreground mt-1">평일 10:00 - 18:00</p>
                </div>
              </a>
            </div>
          </div>
        )}

        {step === "online_form" && (
          <div className="flex flex-col gap-6">
            <DialogHeader className="text-left relative">
              <button
                onClick={() => setStep("selection")}
                className="absolute -top-1 -left-2 p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="뒤로 가기"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <DialogTitle className="text-xl pl-8">온라인 입점 신청</DialogTitle>
              <DialogDescription className="pl-8">
                신청 정보를 남겨주시면, 담당자가 빠르게 연락드리겠습니다.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 px-1">
              <div className="space-y-2">
                <Label htmlFor="business-name">상호명 <span className="text-destructive">*</span></Label>
                <Input id="business-name" placeholder="게스트하우스 이름을 입력해 주세요" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business-type">사업장 유형 <span className="text-destructive">*</span></Label>
                <Select required>
                  <SelectTrigger id="business-type">
                    <SelectValue placeholder="사업장 유형 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="guesthouse">게스트하우스</SelectItem>
                    <SelectItem value="hostel">호스텔</SelectItem>
                    <SelectItem value="pension">펜션/풀빌라</SelectItem>
                    <SelectItem value="sharehouse">쉐어하우스</SelectItem>
                    <SelectItem value="other">기타</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="manager-name">담당자 이름 <span className="text-destructive">*</span></Label>
                  <Input id="manager-name" placeholder="홍길동" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="manager-phone">전화번호 <span className="text-destructive">*</span></Label>
                  <Input id="manager-phone" type="tel" placeholder="010-0000-0000" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">이메일 <span className="text-destructive">*</span></Label>
                <Input id="email" type="email" placeholder="example@email.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business-license">사업자 등록증 이미지 (선택)</Label>
                <Input id="business-license" type="file" accept="image/*,.pdf" className="cursor-pointer file:text-primary file:font-semibold file:bg-primary/10 file:border-0 file:mr-4 file:px-4 file:py-1 file:rounded-full hover:file:bg-primary/20" />
              </div>

              <Button type="submit" className="w-full mt-4 h-11 text-base font-semibold" disabled={isSubmitting}>
                {isSubmitting ? "신청서 전송 중..." : "신청 완료하기"}
              </Button>
            </form>
          </div>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-500 mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <DialogTitle className="text-2xl">신청이 완료되었습니다!</DialogTitle>
            <DialogDescription className="text-base text-foreground/80">
              보내주신 소중한 신청 정보가 정상적으로 접수되었습니다.<br />
              담당자가 내용을 확인 후, 영업일 기준 1~2일 내로 연락드리겠습니다.
            </DialogDescription>
            <Button
              className="mt-6 px-8"
              onClick={() => setOpen(false)}
            >
              확인
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
