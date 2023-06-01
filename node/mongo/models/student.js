const mongoose = require('mongoose');

// Визначення схеми моделі "Студент"
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true }
});

// Експорт моделі "Студент"
module.exports = mongoose.model('Student', studentSchema);
