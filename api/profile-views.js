export default async function handler(req, res) {
  res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="310" height="40" viewBox="0 0 310 40">
    <rect width="210" height="40" rx="6" fill="#24292f"/>
    <rect x="210" width="100" height="40" rx="6" fill="#24292f"/>

    <g font-family="Verdana, Arial, sans-serif" font-size="16">
      <text x="18" y="25" fill="#ffffff">Profile Views</text>
      <text x="224" y="25" fill="#58a6ff">ONLINE</text>
    </g>
  </svg>`;

  res.status(200).send(svg);
}
