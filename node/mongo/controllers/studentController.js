const Student = require('../models/student');

// Отримання всіх студентів
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Отримання студента за його id
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Створення нового студента
exports.createStudent = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const student = new Student({ name, age, email });
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Оновлення інформації про студента за його id
exports.updateStudent = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { name, age, email },
      { new: true }
    );
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Видалення студента за його id
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndRemove(req.params.id);
    res.json({ message: 'Студента успішно видалено' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
