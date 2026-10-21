
export default function handler(req, res) {
  res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="28" viewBox="0 0 180 28">
    <title>Profile Views Online</title>
    <defs>
      <clipPath id="badge">
        <rect width="180" height="28" rx="3"/>
      </clipPath>
    </defs>
    <g clip-path="url(#badge)">
      <rect width="105" height="28" fill="#555555"/>
      <rect x="105" width="75" height="28" fill="#4c71f2"/>
    </g>
    <g fill="#ffffff" font-family="Verdana,Arial,sans-serif" font-size="10" font-weight="bold" letter-spacing=".4">
      <text x="52.5" y="17.5" text-anchor="middle">PROFILE VIEWS</text>
      <text x="142.5" y="17.5" text-anchor="middle">ONLINE</text>
    </g>
  </svg>`;

  return res.status(200).send(svg);
}
