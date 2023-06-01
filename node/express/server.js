const express = require('express');
const app = express();

// Налаштування сервера
app.set('port', process.env.PORT || 3000);

// Маршрутизація
app.get('/', (req, res) => {
  res.send('Привіт, світ!');
});

// Маршрутизація
app.get('/users', (req, res) => {
// Логіка обробки запиту для шляху /users
});

app.post('/users', (req, res) => {
// Логіка обробки запиту POST на шляху /users
});

// Обробка параметрів шляху
app.get('/users/:id', (req, res) => {
const userId = req.params.id;
// Логіка обробки запиту з параметром
});

// Обробка запитів з використанням middleware
app.get('/users', authMiddleware, (req, res) => {
// Логіка обробки запиту, яка вимагає автентифікації
});

// Запуск сервера
app.listen(app.get('port'), () => {
  console.log(`Сервер запущено на порту ${app.get('port')}`);
});
