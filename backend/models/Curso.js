const db = require('../config/db');

class Curso {
  static async getAll() {
    const result = await db.query('SELECT * FROM public.curso');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM public.curso WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async insert({ nome, sigla, descricao, id_coordenador }) {
    const result = await db.query(
      'INSERT INTO public.curso (nome, sigla, descricao, id_coordenador) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, sigla, descricao, id_coordenador]
    );
    return result.rows[0];
  }

  static async update(id, { nome, sigla, descricao, id_coordenador }) {
    const result = await db.query(
      'UPDATE public.curso SET nome = $1, sigla = $2, descricao = $3, id_coordenador = $4 WHERE id = $5 RETURNING *',
      [nome, sigla, descricao, id_coordenador, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query(
      'DELETE FROM public.curso WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
}

module.exports = Curso;