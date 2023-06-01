const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Обробка головної сторінки
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Головна сторінка');
  } else if (req.url === '/about') {
    // Обробка сторінки "Про нас"
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Сторінка "Про нас"');
  } else if (req.url === '/contact') {
    // Обробка сторінки "Контакти"
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Сторінка "Контакти"');
  } else {
    // Обробка невідомого шляху
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Сторінка не знайдена');
  }
});

server.listen(3000, () => {
  console.log('Сервер запущено на порті 3000');
});
