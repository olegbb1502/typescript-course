const http = require('http');

// Створення веб-сервера
const server = http.createServer((req, res) => {
  // Встановлення заголовків відповіді
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Відправка відповіді клієнту
  res.end('Привіт, світ!');
});

// Прослуховування порту 3000
server.listen(3000, () => {
  console.log('Сервер запущено на порті 3000');
});
