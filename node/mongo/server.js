const express = require('express');
const mongoose = require('mongoose');
const studentController = require('./controllers/studentController');

// Створення серверу Express
const app = express();

// Підключення до бази даних MongoDB
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Підключено до бази даних MongoDB');
  })
  .catch((error) => {
    console.error('Помилка підключення до бази даних MongoDB:', error);
  });

// Додавання middleware для обробки JSON-даних
app.use(express.json());

// Маршрутизація для отримання всіх студентів
app.get('/students', studentController.getAllStudents);

// Маршрутизація для отримання студента за id
app.get('/students/:id', studentController.getStudentById);

// Маршрутизація для створення нового студента
app.post('/students', studentController.createStudent);

// Маршрутизація для оновлення інформації про студента за id
app.put('/students/:id', studentController.updateStudent);

// Маршрутизація для видалення студента за id
app.delete('/students/:id', studentController.deleteStudent);

// Запуск серверу
app.listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});
