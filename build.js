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
fs.copyFileSync('style.css', 'dist/apple-touch-icon.png');
fs.copyFileSync('style.css', 'dist/favicon.ico');
fs.copyFileSync('style.css', 'dist/favicon.svg');
fs.copyFileSync('style.css', 'dist/favicon-96x96.png');
fs.copyFileSync('style.css', 'dist/Microsoft_Power_Automate.svg');
fs.copyFileSync('style.css', 'dist/script.js');
fs.copyFileSync('style.css', 'dist/site.webmanifest');
fs.copyFileSync('style.css', 'dist/style.css');
fs.copyFileSync('style.css', 'dist/web-app-manifest-192x192.png');
fs.copyFileSync('style.css', 'dist/web-app-manifest-512x512.png');



