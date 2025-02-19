import ConexaoMySql from '../database/ConexaoMySql.js';

class UsuariosController {
async adicionar(req, resp) {

   const novoUsuario = req.body;

   if( !novoUsuario.nome || !novoUsuario.email || !novoUsuario.senha ){
      resp.status(400).send('Os campos nome, email e senha são obrigatórios.')
      return;
   }

    const conexao = await new ConexaoMySql().getConexao();

    resp.send('Certo, tudo OK!');
 }
}

export default UsuariosController;
