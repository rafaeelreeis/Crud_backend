const db = require('../config/db');

class Professor {
  static async getAll() {
    const result = await db.query('SELECT * FROM public.professor');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM public.professor WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async insert({ nome, email }) {
    const result = await db.query(
      'INSERT INTO public.professor (nome, email) VALUES ($1, $2) RETURNING *',
      [nome, email]
    );
    return result.rows[0];
  }

  static async update(id, { nome, email }) {
    const result = await db.query(
      'UPDATE public.professor SET nome = $1, email = $2 WHERE id = $3 RETURNING *',
      [nome, email, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query(
      'DELETE FROM public.professor WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
}

module.exports = Professor;