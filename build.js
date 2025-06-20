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
