SELECT cliente.nome, count(mensalidade.status_pagamento) AS Qtidade_Mensalidade FROM mensalidade
JOIN cliente
ON cliente.id_cliente = mensalidade.cliente_id
GROUP BY cliente.nome;

SELECT id_estudante, matricula >= 200 FROM estudante;

SELECT id_estudante, nome AS nome_aluno , matricula AS matricula_aluno FROM estudante
WHERE matricula >= 300 AND nome = 'José' OR nome = 'Marcio'
ORDER BY id_estudante DESC;

SELECT (mensalidade.status_pagamento) FROM mensalidade;