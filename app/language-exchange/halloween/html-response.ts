import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function halloweenResponse(language: "ko" | "en" = "ko") {
  let html = await readFile(
    join(process.cwd(), "public/language-exchange/halloween/index.html"),
    "utf8",
  );

  if (language === "en") {
    html = html
      .replace('<html lang="ko">', '<html lang="en">')
      .replace('<body class="ko">', '<body class="en">')
      .replace('rel="canonical" href="https://ddakji.kr/about/language-exchange/halloween"', 'rel="canonical" href="https://ddakji.kr/about/language-exchange/halloween/en"')
      .replace('property="og:url" content="https://ddakji.kr/about/language-exchange/halloween"', 'property="og:url" content="https://ddakji.kr/about/language-exchange/halloween/en"')
      .replaceAll("10월 31일 홍대에서 만나는 할로윈 언어교환. 코스튬, 한국어·영어 대화, 보드게임, 선물과 음악을 함께 즐겨요.", "Join our Halloween language exchange in Hongdae on October 31. Costumes, Korean & English conversation, board games, treats and music.")
      .replace('content="ko_KR"', 'content="en_US"')
      .replace('data-lang="ko" aria-pressed="true"', 'data-lang="ko" aria-pressed="false"')
      .replace('data-lang="en" aria-pressed="false"', 'data-lang="en" aria-pressed="true"');
  }

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
