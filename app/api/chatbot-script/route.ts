export async function GET() {
  const response = await fetch(
    "https://chatbot.in6.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/2f9d3ceec9194c4295941d1e10f9b044/6ccf7b4ad1fa4cc6b210b201e6fa77b8",
  );
  const text = await response.text();
  return new Response(text, {
    headers: {
      "Content-Type": "application/javascript",
    },
  });
}
