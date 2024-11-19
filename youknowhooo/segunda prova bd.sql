
USE prova_bd2;

CREATE TABLE cliente (
id_cliente INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
cpf BIGINT(14) UNIQUE,
PRIMARY KEY (id_cliente)
);

CREATE TABLE compra (
id_compra INT NOT NULL AUTO_INCREMENT,
data_horário DATETIME,
quantidade INT,
produto_id INT,
cliente_id INT,
PRIMARY KEY (id_compra),
FOREIGN KEY (cliente_id)
REFERENCES cliente (id_cliente)
);

CREATE TABLE produto (
id_produto INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
codigo VARCHAR(45),
estoque INT,
PRIMARY KEY (id_produto),
FOREIGN KEY (compra_id)
REFERENCES compra (id_compra)
);

INSERT IGNORE INTO cliente
(id_cliente, nome, cpf)
VALUES
('1','João','18161227688');
INSERT INTO cliente
(id_cliente, nome, cpf)
VALUES
('2','Carlos','18161227299');
INSERT INTO cliente
(id_cliente, nome, cpf)
VALUES
('3','Maria','18161227211');
INSERT INTO cliente
(id_cliente, nome, cpf)
VALUES
('4','Ana','18161227233');
INSERT INTO cliente
(id_cliente, nome, cpf)
VALUES
('5','Thiago','18161227244');

INSERT INTO compra
(id_compra, data_horário, quantidade, produto_id, cliente_id)
VALUES
('1','2024-09-10 20:00:00','5','1','3');
INSERT INTO compra
(id_compra, data_horário, quantidade, produto_id, cliente_id)
VALUES
('2','2024-09-10 21:00:00','5','2','2');
INSERT INTO compra
(id_compra, data_horário, quantidade, produto_id, cliente_id)
VALUES
('3','2024-09-10 22:00:00','4','1','3');
INSERT INTO compra
(id_compra, data_horário, quantidade, produto_id, cliente_id)
VALUES
('4','2024-09-10 23:00:00','8','2','2');
INSERT INTO compra
(id_compra, data_horário, quantidade, produto_id, cliente_id)
VALUES
('5','2024-09-11 18:00:00','2','5','5');

INSERT INTO produto
(id_produto, nome, codigo, estoque)
VALUES
('1','Maçã','001','110');
INSERT INTO produto
(id_produto, nome, codigo, estoque)
VALUES
('2','Melância','002','120');
INSERT INTO produto
(id_produto, nome, codigo, estoque)
VALUES
('3','Mamão','003','130');
INSERT INTO produto
(id_produto, nome, codigo, estoque)
VALUES
('4','Morango','004','140');
INSERT INTO produto
(id_produto, nome, codigo, estoque)
VALUES
('5','Melão','005','150');


SELECT * FROM cliente
JOIN compra
ON cliente.id_cliente = compra.id_compra
JOIN produto
ON cliente.id_cliente = produto.id_produto

