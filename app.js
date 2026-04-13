const http = require('http');
const PORT = 3000;
const VERSION = 'v3.0.0';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello from ${VERSION} — Deployed automatically by CI/CD! 🎉\n`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} — ${VERSION}`);
});
