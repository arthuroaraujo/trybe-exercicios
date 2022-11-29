CREATE SCHEMA IF NOT EXISTS zoologico;
USE zoologico;

CREATE TABLE animal(
	animal_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    especie VARCHAR(45) NOT NULL,
    sexo VARCHAR(45) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(45) NOT NULL
);

CREATE TABLE gerente(
	gerente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE cuidador(
	cuidador_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
	gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE animal_cuidador(
    animal_id INT,
    cuidador_id INT,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
);