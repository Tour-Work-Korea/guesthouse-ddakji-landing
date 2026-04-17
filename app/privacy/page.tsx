import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32 max-w-4xl pt-32">
        <div className="bg-card border border-border rounded-3xl p-6 md:p-12 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground tracking-tight">개인정보처리방침</h1>
          <p className="text-muted-foreground mb-12">게딱지 서비스 개인정보처리방침 및 마케팅 수신 동의</p>
          
          <div className="space-y-12 text-sm sm:text-base text-muted-foreground leading-loose break-keep">
            
            <section>
              <p className="mb-6">회사는 서비스 이용 시 아래와 같이 개인정보를 처리합니다. 추가적인 개인정보를 수집하는 경우 해당 사실을 알리고 동의를 구하고 있습니다.</p>
              
              <div className="overflow-x-auto rounded-xl border border-border/50">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead className="bg-muted/50 text-foreground text-sm">
                    <tr>
                      <th className="border-b border-border/50 p-4 font-semibold w-1/5">법적 근거</th>
                      <th className="border-b border-border/50 p-4 font-semibold w-1/4">수집·이용목적</th>
                      <th className="border-b border-border/50 p-4 font-semibold w-1/4">항목</th>
                      <th className="border-b border-border/50 p-4 font-semibold w-1/4">보유·이용기간</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-border/50">
                    <tr>
                      <td className="p-4 align-top">개인정보 보호법 제15조<br/>제1항 제4호(계약이행)</td>
                      <td className="p-4 align-top">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>이메일 및 간편 회원가입</li>
                          <li>서비스 이용</li>
                          <li>상담·불만·민원처리</li>
                          <li>결제 취소 및 환불</li>
                          <li>불법·부정 이용방지</li>
                        </ul>
                      </td>
                      <td className="p-4 align-top">
                        <p className="font-semibold text-foreground mb-1">이메일로 가입시</p>
                        <p className="mb-3">ID(이메일), 비밀번호, 이름, 닉네임, 휴대폰 번호</p>
                        <p className="font-semibold text-foreground mb-1">서비스 이용시</p>
                        <p className="mb-3">공통 - 예약내역(예약일시, 결제금액, 업체명)<br/>예약자 및 이용자 - 이름, 휴대폰 번호, 이메일주소, (필요한 서비스의 경우)생년월일</p>
                        <p className="font-semibold text-foreground mb-1">고객상담 시</p>
                        <p>상담내용 및 상담에 필요한 개인정보</p>
                      </td>
                      <td className="p-4 align-top">
                        <ul className="list-disc pl-4 space-y-2 text-foreground font-medium">
                          <li>회원 탈퇴 시까지</li>
                          <li>단, 관계법령에 의해 보존할 경우 그 의무 기간 동안 보관(부정거래 방지 및 대응목적으로 탈퇴 후 7일간 보관)</li>
                          <li>회원 탈퇴 시 상담 등 민원처리, 정산 및 환불 처리를 위해 30일 후 삭제</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">개인정보 보호법 제15조<br/>제1항 제4호(계약이행)</td>
                      <td className="p-4 align-top">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>본인인증 및 성인인증이 필요한 서비스 제공</li>
                          <li>본인인증 정보로 회원정보 반영</li>
                        </ul>
                      </td>
                      <td className="p-4 align-top">이름, 생년월일, 성별, 휴대폰번호, CI(연계정보), 내외국인 정보</td>
                      <td className="p-4 align-top">
                        <ul className="list-disc pl-4 space-y-2 text-foreground font-medium">
                          <li>회원 탈퇴 시까지</li>
                          <li>단, 관계법령에 의해 보존할 경우 그 의무 기간 동안 보관(부정거래 방지 및 대응목적으로 탈퇴 후 7일간 보관)</li>
                          <li>회원 탈퇴 시 상담 등 민원처리, 정산 및 환불 처리를 위해 30일 후 삭제</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">개인정보 보호법 제15조<br/>제1항 제4호(계약이행)</td>
                      <td className="p-4 align-top">만 14세 미만 회원의 법정대리인 인증이 필요한 서비스 제공</td>
                      <td className="p-4 align-top">이메일, 이름, 휴대폰 번호, 생년월일(저장하지 않음)</td>
                      <td className="p-4 align-top">
                        <ul className="list-disc pl-4 space-y-2 text-foreground font-medium">
                          <li>회원 탈퇴 시까지</li>
                          <li>단, 관계법령에 의해 보존할 경우 의무 기간 동안 보관</li>
                          <li>30일 후 삭제</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">개인정보 보호법 제15조<br/>제1항 제1호(정보주체 동의)</td>
                      <td className="p-4 align-top font-semibold text-foreground">개인 맞춤형 상품·서비스 혜택에 관한 정보 제공</td>
                      <td className="p-4 align-top">예약내역, 서비스 이용기록(이름, 이메일, 휴대폰 번호, 생년월일, 성별, IP주소, 접속로그, Cookie, 광고식별자 등), 단말기 정보, 브라우저 정보, 상담내용</td>
                      <td className="p-4 align-top font-semibold text-foreground">동의 철회, 회원 탈퇴 시까지</td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">개인정보 보호법 제15조<br/>제1항 제1호(정보주체 동의)</td>
                      <td className="p-4 align-top font-semibold text-foreground">위치정보 기반 서비스 제공</td>
                      <td className="p-4 align-top">위치정보</td>
                      <td className="p-4 align-top font-semibold text-foreground">동의 철회, 회원 탈퇴 시까지</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm bg-primary/5 p-4 rounded-lg">※ 동의를 거부할 권리가 있으나, 서비스 제공에 필수적인 항목이므로 동의하지 않을 경우 이용이 제한됩니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border/50">개인정보의 보유기간 및 파기</h2>
              
              <div className="space-y-6">
                <p>회사는 이용자가 동의를 철회하거나 개인정보 보유기간의 경과, 처리목적을 달성 할 경우 지체없이 해당 개인정보를 파기합니다.</p>
                <p>부정 이용 방지를 위해 ID 와 CI는 탈퇴 요청 7일 후 자동으로 파기됩니다.</p>
                <p>이용자로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 법령에 따라 개인정보를 일정기간 보관해야 하는 경우, 해당 기간 동안 법령의 규정에 따라 개인정보를 별도 분리 보관합니다.</p>

                <div className="overflow-x-auto rounded-xl border border-border/50 mt-6 !mb-8">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead className="bg-muted/50 text-foreground text-sm">
                      <tr>
                        <th className="border-b border-border/50 p-4 font-semibold w-1/4">보유 정보</th>
                        <th className="border-b border-border/50 p-4 font-semibold w-1/3">보유 항목</th>
                        <th className="border-b border-border/50 p-4 font-semibold w-1/6">보유 기간</th>
                        <th className="border-b border-border/50 p-4 font-semibold w-1/4">법적 근거</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-border/50">
                      <tr>
                        <td className="p-4 align-top">계약/청약철회 기록</td>
                        <td className="p-4 align-top">예약내역, 이름, 휴대폰번호, 생년월일</td>
                        <td className="p-4 align-top">5년</td>
                        <td className="p-4 align-top text-xs">전자상거래법</td>
                      </tr>
                      <tr>
                        <td className="p-4 align-top">대금결제/재화공급 기록</td>
                        <td className="p-4 align-top">예약내역, 이름, 휴대폰번호, 생년월일</td>
                        <td className="p-4 align-top">5년</td>
                        <td className="p-4 align-top text-xs">전자상거래법</td>
                      </tr>
                      <tr>
                        <td className="p-4 align-top">소비자 불만/분쟁처리</td>
                        <td className="p-4 align-top">상담내용 및 개인정보</td>
                        <td className="p-4 align-top">3년</td>
                        <td className="p-4 align-top text-xs">전자상거래법</td>
                      </tr>
                      <tr>
                        <td className="p-4 align-top">표시·광고 기록</td>
                        <td className="p-4 align-top">ID, 휴대폰번호</td>
                        <td className="p-4 align-top">6개월</td>
                        <td className="p-4 align-top text-xs">전자상거래법</td>
                      </tr>
                      <tr>
                        <td className="p-4 align-top">웹 방문 기록</td>
                        <td className="p-4 align-top">접속로그, IP, 쿠키, 기기정보</td>
                        <td className="p-4 align-top">3개월</td>
                        <td className="p-4 align-top text-xs">통신비밀보호법</td>
                      </tr>
                      <tr>
                        <td className="p-4 align-top">전자금융거래 기록</td>
                        <td className="p-4 align-top">예약내역, 이름, 휴대폰 등</td>
                        <td className="p-4 align-top">5년</td>
                        <td className="p-4 align-top text-xs">전자금융거래법</td>
                      </tr>

                    </tbody>
                  </table>
                </div>

                <div className="space-y-4">
                  <p>개인정보 처리목적을 달성하거나 보유기간이 경과 할 경우 지체없이 해당 개인정보는 안전하게 파기합니다. 단, 법령에 따라 개인정보를 일정기간 보관해야 하는 경우 별도 분리 보관합니다.</p>
                  <p className="font-semibold text-foreground">개인정보의 파기 절차 및 방법은 다음과 같습니다.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-semibold text-foreground">파기 절차</span>: 개인정보 목적 달성 후 내부 지침 및 관련 법령에 의한 의무에 따라 일정기간 동안 별도로 분리하여 저장 후 파기합니다.</li>
                    <li><span className="font-semibold text-foreground">파기 방법</span>: 전자적 파일 형태로 저장된 개인정보는 기록을 재사용할 수 없는 방법으로 영구 파기하며, 종이문서에 출력된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 p-6 md:p-8 rounded-2xl border border-border/50">
              <h2 className="text-xl font-bold text-foreground mb-4">마케팅 알림 수신 동의 (선택)</h2>
              
              <div className="space-y-6">
                <p className="font-semibold text-primary">회사는 이용자에게 유용한 정보와 맞춤 혜택을 전달하기 위해 마케팅 알림을 전송할 수 있습니다.</p>
                
                <div>
                  <h3 className="font-medium text-foreground mb-2">수신 내용 예시:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>이벤트 소식: 특정 숙소 할인, 시즌별 스페셜 이벤트, 광고성 이벤트</li>
                    <li>신규 등록 알림: 신규 게스트하우스, 신규 일자리 채용 정보</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-2">발송 채널:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>문자 메시지 (SMS)</li>
                    <li>이메일</li>
                    <li>앱 푸시 알림</li>
                  </ul>
                </div>

                <div className="p-4 bg-background rounded-xl border border-border text-sm">
                  <h3 className="font-bold text-foreground mb-2">유의사항:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>마케팅 수신 동의는 선택사항이며, 동의하지 않아도 서비스 이용에 불이익은 없습니다.</li>
                    <li>수신을 원하지 않을 경우 앱 내 [설정] 또는 각 알림 내 ‘수신거부’ 버튼을 통해 언제든지 해지할 수 있습니다.</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
