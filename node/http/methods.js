const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Обробка GET-запиту
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Це GET-запит');
  } else if (req.method === 'POST') {
    // Обробка POST-запиту
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Це POST-запит');
  } else if (req.method === 'PUT') {
    // Обробка PUT-запиту
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Це PUT-запит');
  } else if (req.method === 'DELETE') {
    // Обробка DELETE-запиту
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Це DELETE-запит');
  } else {
    // Обробка інших типів запитів
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Непідтримуваний тип запиту');
  }
});

server.listen(3000, () => {
  console.log('Сервер запущено на порті 3000');
});
