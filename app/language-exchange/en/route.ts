import { languageExchangeResponse } from "../html-response";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  return languageExchangeResponse("en");
}
