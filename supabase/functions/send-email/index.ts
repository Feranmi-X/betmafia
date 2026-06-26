import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  const { to, subject, body } = await req.json();

  // Use any email provider — here's with Resend (free tier, easiest)
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Bet Mafia VIP <noreply@betmafia.vip>",
      to,
      subject,
      html: body,
    }),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
});