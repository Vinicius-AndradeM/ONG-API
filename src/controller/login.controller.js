const loginService = require("../services/login.services.js");

const express = require("express");
const controller = express.Router();

// ---IMPORTANTE---
//Os comentários abaixo estão gerando as informações para o swagger_output.json quando ele é criado.

controller.post("/cadastrarAcesso", (req, res) => {
    // #swagger.tags = ['Credencial']
    // #swagger.summary = 'Cadastra uma nova credencial no banco de dados.'
    // #swagger.description = 'Essa rota é responsável por cadastrar uma nova credencial.'
    /* #swagger.parameters['dados da credencial'] = {
        in: 'body',
        description: 'Informações da credencial.',
        required: true,
        schema: { $ref: "#/definitions/CadastroDaCredencial"}
    }*/
    res.send(loginService.cadastrar(req.body));
});

controller.get("/buscarCadastro", async (req, res) => {
    // #swagger.tags = ['Credencial']    
    // #swagger.summary = 'Retorna uma credencial pelo login.'
    // #swagger.description = 'Retorna uma credencial pelo login.'
    // #swagger.parameters['login'] = { description: 'Login da credencial.', required: true}
    res.send(await loginService.getCadastro(req.query));
});

controller.get("/buscarTodosOsCadastros", async (req, res) => {
    // #swagger.tags = ['Credencial']    
    // #swagger.summary = 'Retorna todas as credenciais cadastradas'
    // #swagger.description = 'Retorna todas as credenciais cadastradas'   
    res.send(await loginService.getAllCadastros());
});

controller.delete("/deletarCadastro", async (req, res) => {
    // #swagger.tags = ['Credencial']
    // #swagger.summary = 'Remove uma credencial do banco de dados.'
    // #swagger.description = 'Remove uma credencial do banco de dados localizando-o através de seu login.'
    // #swagger.parameters['login'] = { description: 'Login da credencial.', required: true}
    res.send(await loginService.deletarCadastro(req.query));
});

controller.put("/atualizarSenha/:login", async (req, res) => {
    // #swagger.tags = ['Credencial']
    // #swagger.summary = 'Atualiza informações do usuário.'
    // #swagger.description = 'Atualiza as informações do usuário, localizando-o através de seu login, atualizando a senha. '
    // #swagger.parameters['login'] = { description: 'Login do usuário.' }
    /* #swagger.parameters['dados atualizados'] = {
        in: 'body',
        description: 'Senha atualizada',
        required: true,
        schema: { $ref: "#/definitions/CadastroDaCredencial"}
    }*/
    res.send(await loginService.atualizarSenha(req.params, req.body))
});

module.exports = controller