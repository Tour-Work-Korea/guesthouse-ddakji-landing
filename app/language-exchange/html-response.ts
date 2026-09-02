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
      .replace('<body class="ko">', '<body class="en">');
  }

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
