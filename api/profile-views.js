export default async function handler(req, res) {
  res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="230" height="32" viewBox="0 0 230 32">
    <rect width="230" height="32" rx="0" fill="#24292f"/>
    <rect x="0" y="0" width="151" height="32" fill="#555555"/>
    <g font-family="Verdana, Arial, sans-serif" font-size="13" font-weight="bold" letter-spacing="1">
      <text x="12" y="20.5" fill="#ffffff">◉ PROFILE VIEWS</text>
    </g>
    <rect x="151" y="0" width="79" height="32" fill="#4c68d7"/>
    <text x="190.5" y="20.5" text-anchor="middle" fill="#ffffff" font-family="Verdana, Arial, sans-serif" font-size="12" font-weight="bold" letter-spacing="0.5">ONLINE</text>
  </svg>`;

  res.status(200).send(svg);
}
