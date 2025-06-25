CREATE TABLE professor (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);

CREATE TABLE curso (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  sigla VARCHAR(20),
  descricao TEXT,
  id_coordenador INTEGER,
  FOREIGN KEY (id_coordenador) REFERENCES professor(id)
);

CREATE TABLE disciplina (
  id SERIAL PRIMARY KEY,
  codigo VARCHAR(20) NOT NULL,
  nome VARCHAR(100) NOT NULL,
  ementa TEXT,
  id_curso INTEGER,
  FOREIGN KEY (id_curso) REFERENCES curso(id)
);