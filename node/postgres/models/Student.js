const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://username:password@localhost:5432/database',
});

class Student {
  static async getAllStudents() {
    const query = 'SELECT * FROM students';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async getStudentById(id) {
    const query = 'SELECT * FROM students WHERE id = $1';
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async createStudent(studentData) {
    const { name, age, grade } = studentData;
    const query = 'INSERT INTO students (name, age, grade) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, age, grade];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async updateStudent(id, studentData) {
    const { name, age, grade } = studentData;
    const query = 'UPDATE students SET name = $1, age = $2, grade = $3 WHERE id = $4 RETURNING *';
    const values = [name, age, grade, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async deleteStudent(id) {
    const query = 'DELETE FROM students WHERE id = $1';
    const values = [id];
    await pool.query(query, values);
  }
}

module.exports = Student;
