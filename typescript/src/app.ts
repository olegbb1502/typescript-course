import express, { Request, Response } from 'express';
import { User } from './interface/user'

// Фейковий список користувачів
const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

// Створення екземпляру веб-сервера
const app = express();

// Налаштування парсера JSON для обробки тіла запиту
app.use(express.json());

// Маршрут для отримання списку користувачів
app.get('/api/users', (req: Request, res: Response) => {
  res.json(users);
});

// Маршрут для отримання інформації про користувача за його ідентифікатором
app.get('/api/users/:id', (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Маршрут для додавання нового користувача
app.post('/api/users', (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required' });
  } else {
    const newUser: User = {
      id: users.length + 1,
      name,
      email,
    };

    users.push(newUser);
    res.status(201).json(newUser);
  }
});

// Обробка некоректних запитів або недоступних ресурсів
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Запуск сервера на певному порту
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
