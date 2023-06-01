const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Відправка текстової відповіді
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Привіт, світ!');
  } else if (req.url === '/data') {
    // Відправка JSON-відповіді
    const data = { message: 'Привіт, JSON!' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else if (req.url === '/file') {
    // Відправка відповіді з файлом
    fs.readFile('file.txt', (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Помилка сервера');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(content);
      }
    });
  } else {
    // Обробка невідомого шляху
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Сторінка не знайдена');
  }
});

server.listen(3000, () => {
  console.log('Сервер запущено на порті 3000');
});
