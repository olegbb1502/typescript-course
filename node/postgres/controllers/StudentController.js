const Student = require('../models/Student');

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.getStudentById(id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createStudent = async (req, res) => {
  const { name, age, grade } = req.body;
  try {
    const student = await Student.createStudent({ name, age, grade });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, age, grade } = req.body;
  try {
    const student = await Student.updateStudent(id, { name, age, grade });
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    await Student.deleteStudent(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
