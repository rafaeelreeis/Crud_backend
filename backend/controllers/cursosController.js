const Curso = require('../models/Curso');

const getCursos = async (req, res) => {
  const cursos = await Curso.getAll();
  res.json(cursos);
};

const getCurso = async (req, res) => {
  const curso = await Curso.getById(req.params.id);
  res.json(curso);
};

const insereCurso = async (req, res) => {
  const novo = await Curso.insert(req.body);
  res.status(201).json(novo);
};

const updateCurso = async (req, res) => {
  const atualizado = await Curso.update(req.params.id, req.body);
  res.json(atualizado);
};

const deleteCurso = async (req, res) => {
  const excluido = await Curso.delete(req.params.id);
  res.json({ mensagem: 'Excluído com sucesso', dados: excluido });
};

module.exports = {
  getCursos,
  getCurso,
  insereCurso,
  updateCurso,
  deleteCurso
};