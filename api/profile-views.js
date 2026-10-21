
export default async function handler(req, res) {
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="180" height="28" viewBox="0 0 180 28">
    <rect width="180" height="28" rx="5" fill="#0d1117"/>
    <rect width="105" height="28" rx="5" fill="#24292f"/>
    <g fill="#ffffff" font-family="Verdana,Arial,sans-serif" font-size="10">
      <text x="10" y="17.5">Profile Views</text>
      <text x="116" y="17.5" fill="#58a6ff">ONLINE</text>
    </g>
  </svg>`;

  res.status(200).send(svg);
}
