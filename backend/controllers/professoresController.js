const Professor = require('../models/Professor');

const getProfessores = async (req, res) => {
  const professores = await Professor.getAll();
  res.json(professores);
};

const getProfessor = async (req, res) => {
  const professor = await Professor.getById(req.params.id);
  res.json(professor);
};

const insereProfessor = async (req, res) => {
  const novo = await Professor.insert(req.body);
  res.status(201).json(novo);
};

const updateProfessor = async (req, res) => {
  const atualizado = await Professor.update(req.params.id, req.body);
  res.json(atualizado);
};

const deleteProfessor = async (req, res) => {
  const excluido = await Professor.delete(req.params.id);
  res.json({ mensagem: 'Excluído com sucesso', dados: excluido });
};

module.exports = {
  getProfessores,
  getProfessor,
  insereProfessor,
  updateProfessor,
  deleteProfessor
};