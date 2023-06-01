const express = require('express');
const bodyParser = require('body-parser');
const studentController = require('./studentController');

const app = express();

// Додайте middleware для обробки тіла запиту у форматі JSON
app.use(bodyParser.json());

// Маршрут для отримання всіх студентів
app.get('/students', studentController.getAllStudents);

// Маршрут для отримання студента за його ідентифікатором
app.get('/students/:id', studentController.getStudentById);

// Маршрут для створення нового студента
app.post('/students', studentController.createStudent);

// Маршрут для оновлення інформації про студента
app.put('/students/:id', studentController.updateStudent);

// Маршрут для видалення студента
app.delete('/students/:id', studentController.deleteStudent);

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущений на порту 3000');
});
