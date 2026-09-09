// Preserve existing links while routing all meetup activities through one UI.
export const dynamic = "force-static";

export async function GET() {
  return new Response(null, {
    status: 307,
    headers: { Location: "/about/language-exchange/play#draw" },
  });
}
