import cors from "cors";
import express from "express";
import UsuariosController from "./controllers/UsuariosController.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

// Rotas de /usuarios
const usuariosController = new UsuariosController();
const listaUsuarios = [];
app.get("/usuarios", (req, res) => {
  res.send(listaUsuarios);
});
app.post("/usuarios", usuariosController.adicionar);

app.put("/usuarios", (req, res) => {
  res.send("Chamou o PUT!");
});
app.delete("/usuarios", (req, res) => {
  res.send("Chamou o DELETE!");
});

// Dados de clientes e produtos
let listaClientes = [];
let listaProdutos = [];

// Função para verificar campos obrigatórios e duplicidade de CPF
function validarCliente(cliente, isUpdate = false) {
  const { nome, email, cpf } = cliente;
  if (!nome || !email || !cpf) {
    return "Os campos nome, email e CPF são obrigatórios.";
  }

  const cpfDuplicado = listaClientes.some(c => c.cpf === cpf);
  if (cpfDuplicado && !isUpdate) {
    return "CPF já cadastrado.";
  }

  return null;
}

// Endpoints para Clientes
app.get('/clientes', (req, res) => {
  res.json(listaClientes);
});

app.post('/clientes', (req, res) => {
  const erro = validarCliente(req.body);
  if (erro) {
    return res.status(400).json({ mensagem: erro });
  }
  listaClientes.push(req.body);
  res.status(201).json(req.body);
});

app.put('/clientes', (req, res) => {
  const erro = validarCliente(req.body, true);
  if (erro) {
    return res.status(400).json({ mensagem: erro });
  }
  const index = listaClientes.findIndex(c => c.cpf === req.body.cpf);
  if (index === -1) {
    return res.status(404).json({ mensagem: "Cliente não encontrado." });
  }
  listaClientes[index] = req.body;
  res.status(200).json(req.body);
});

app.delete('/clientes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0 || id >= listaClientes.length) {
    return res.status(404).json({ mensagem: "Cliente não encontrado." });
  }
  listaClientes.splice(id, 1);
  res.status(204).send();
});

// Endpoints para Produtos
app.get('/produtos', (req, res) => {
  res.json(listaProdutos);
});

app.post('/produtos', (req, res) => {
  listaProdutos.push(req.body);
  res.status(201).json(req.body);
});

app.put('/produtos', (req, res) => {
  const index = listaProdutos.findIndex(p => p.id === req.body.id);
  if (index === -1) {
    return res.status(404).json({ mensagem: "Produto não encontrado." });
  }
  listaProdutos[index] = req.body;
  res.status(200).json(req.body);
});

app.delete('/produtos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0 || id >= listaProdutos.length) {
    return res.status(404).json({ mensagem: "Produto não encontrado." });
  }
  listaProdutos.splice(id, 1);
  res.status(204).send();
});

const port = 3000;
app.listen(port, () => {
  console.log(`API está rodando na porta ${port}`);
});
