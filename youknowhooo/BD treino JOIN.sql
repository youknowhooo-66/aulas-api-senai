CREATE DATABASE faturas;
USE faturas;

CREATE TABLE cliente (
id_cliente INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
PRIMARY KEY (id_cliente)
);

CREATE TABLE mensalidade (
id_mensalidade INT NOT NULL AUTO_INCREMENT,
cliente_id INT,
valor INT,
status_pagamento VARCHAR(45),
PRIMARY KEY (id_mensalidade),
FOREIGN KEY (cliente_id)
REFERENCES cliente (id_cliente)
);


INSERT INTO cliente
(id_cliente, nome)
VALUES
('1','Jose'),
('2','Carlos'),
('3','Marcos');

INSERT INTO mensalidade
(id_mensalidade, cliente_id, valor, status_pagamento)
VALUES
('1','1',650.00,'Fatura Paga'),
('2','2',670.00,'Fatura Paga'),
('3','3',690.00,'Fatura Paga'),
('4','1',720.00,'Em débito'),
('5','2',740.00,'Em débito'),
('6','3',760.00,'Em débito'),
('7','3',800.00,'Em débito');
