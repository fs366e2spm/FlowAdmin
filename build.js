// build.js
const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const domain = process.env.PLAUSIBLE_DOMAIN;
if (domain) {
  const snippet = `<script defer data-domain="${domain}" src="https://plausible.io/js/script.js"></script>`;
  // Inject before </head>
  html = html.replace('</head>', `${snippet}\n</head>`);
}
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
fs.copyFileSync('apple-touch-icon.png', 'dist/apple-touch-icon.png');
fs.copyFileSync('favicon.ico', 'dist/favicon.ico');
fs.copyFileSync('favicon.svg', 'dist/favicon.svg');
fs.copyFileSync('favicon-96x96.png', 'dist/favicon-96x96.png');
fs.copyFileSync('Microsoft_Power_Automate.svg', 'dist/Microsoft_Power_Automate.svg');
fs.copyFileSync('script.js', 'dist/script.js');
fs.copyFileSync('site.webmanifest', 'dist/site.webmanifest');
fs.copyFileSync('style.css', 'dist/style.css');
fs.copyFileSync('web-app-manifest-192x192.png', 'dist/web-app-manifest-192x192.png');
fs.copyFileSync('web-app-manifest-512x512.png', 'dist/web-app-manifest-512x512.png');



