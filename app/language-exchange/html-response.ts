import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function languageExchangeResponse(language: "ko" | "en" = "ko") {
  let html = await readFile(
    join(process.cwd(), "public", "language-exchange", "index.html"),
    "utf8",
  );

  if (language === "en") {
    html = html
      .replace('<html lang="ko">', '<html lang="en">')
      .replace('<body class="ko">', '<body class="en">')
      .replace(
        'href="https://ddakji.kr/about/language-exchange"',
        'href="https://ddakji.kr/about/language-exchange/en"',
      )
      .replace(
        'content="https://ddakji.kr/about/language-exchange"',
        'content="https://ddakji.kr/about/language-exchange/en"',
      )
      .replaceAll(
        "홍대에서 치킨을 함께 먹으며 한국어와 영어로 대화하는 Koin × Ddakji 언어교환 모임입니다.",
        "Join Koin × Ddakji in Hongdae for chicken and conversation in Korean and English.",
      )
      .replace('content="ko_KR"', 'content="en_US"');
  }

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
