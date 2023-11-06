CREATE DATABASE sistema;

USE sistema;

CREATE TABLE categoria(
    codigo INT NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(100) NOT NULL,

    CONSTRAINT PK_CATEGORIA PRIMARY KEY (codigo)
);

CREATE TABLE produto(
    codigo INT NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(100) NOT NULL,
    precoCusto DECIMAL(10, 2) NOT NULL DEFAULT 0,
    precoVenda DECIMAL(10,2) NOT NULL DEFAULT 0,
    dataValidade DATE,
    estoque INT NOT NULL DEFAULT 0,
    codigoCategoria INT NOT NULL,

    CONSTRAINT PK_PRODUTO PRIMARY KEY (codigo),

    CONSTRAINT FK_PRODUTO_CATEGORIA FOREIGN KEY (codigoCategoria) REFERENCES categoria (codigo)
);