const express = require('express');
const app = express();

// Middleware для логування
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Виклик next() передає управління наступному middleware або обробнику запиту
};

// Додати middleware до додатка
app.use(loggerMiddleware);

// Обробник запиту
app.get('/', (req, res) => {
  res.send('Привіт, світ!');
});

// Старт сервера
app.listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});
