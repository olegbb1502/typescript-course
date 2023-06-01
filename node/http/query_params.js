const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const queryParams = parsedUrl.query;

  // Отримання параметрів запиту
  const name = queryParams.name;
  const age = queryParams.age;

  // Використання параметрів запиту
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Привіт, ${name}! Тобі ${age} років.`);
});

server.listen(3000, () => {
  console.log('Сервер запущено на порті 3000');
});
