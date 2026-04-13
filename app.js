const http = require('http');

const PORT = 3000;
const VERSION = 'v1.0.0';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello from ${VERSION} — My K8s App is running!\n`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} — ${VERSION}`);
});
