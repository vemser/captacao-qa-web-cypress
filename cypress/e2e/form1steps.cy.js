import cadastro from "../support/data/cadastroCandidatoPasso1"
import formSeletores from "../support/selector/formSteps.selector"
import geraDataDepoisDeHoje from "../support/utils/geraDataDepoisDeHoje"
import geraDataNoPassado from "../support/utils/geraDataNoPassado"

/// <reference types="cypress" />

describe('Testes da primeira etapa do formulário de inscrição do Vem Ser', () => {
  beforeEach(() => {
    cy.allure().feature("Primiro formulário de cadastro do candidato")
    cy.allure().severity('Crítico');

    cy.visit("/subscription").wait(3000)
  })

  afterEach(() => {
    cy.screenshot({ capture: 'runner' })
  })

  it('Test 1 - Validar preenchimento de campos com sucesso', () => {
    cy.preencherTodosCamposComSucesso()
    cy.clicarEmProximo()

    cy.validarSeEstaNaSegundaEtapa()
  })

  it('Test 2 - Validar preenchimento de campos com data de nascimento inferior a 18 anos', () => {
    const dados = cadastro()
    dados.dataNascimento = "2024-01-01"

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("A data de nascimento deve ter no mínimo 16 anos", formSeletores.erroCampoDataDeNascimento)
  })

  it('Test 3 - Validar preenchimento de campos sem sobrenome', () => {
    const dados = cadastro()
    dados.nome = "nome"

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("O nome deve ter no mínimo sobrenome", formSeletores.erroCampoNome)
  })

  it('Test 4 - Validar preenchimento de campos com data de nascimento igual a 16 anos', () => {
    const dados = cadastro()
    dados.dataNascimento = geraDataNoPassado(16)

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarSeEstaNaSegundaEtapa()
  })

  it('Test 5 - Validar preenchimento de campos com data de nascimento no futuro', () => {
    const dados = cadastro()
    dados.dataNascimento = geraDataDepoisDeHoje()

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("A data de nascimento deve ser anterior a data atual", formSeletores.erroCampoDataDeNascimento)
  })

  it('Test 6 - Validar preenchimento de campos com campo', () => {
    const dados = cadastro()
    dados.dataNascimento = ""

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("A data de nascimento deve ser uma data válida", formSeletores.erroCampoDataDeNascimento)
  })

  it('Test 7 - Validar preenchimento de campos com cpf invalido', () => {
    const dados = cadastro()
    dados.cpf = "123.456.789-00"

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("O CPF deve ser válido", formSeletores.erroCampoCpf)
  })

  it('Test 8 - Validar preenchimento de campos com nome contendo caractere especial', () => {
    const dados = cadastro()
    dados.nome = dados.nome + "@"

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("O nome deve ter apenas letras e espaços", formSeletores.erroCampoNome)
  })

  it('Test 9 - Validar preenchimento de campos com sem preencher telefone', () => {
    const dados = cadastro()
    dados.telefone = ""

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("O celular é obrigatório", formSeletores.erroCampoTel)
  })

  it('Test 10 - Validar preenchimento de campos com nome maior que 50 letras', () => {
    const dados = cadastro()
    dados.nome = "abcdefghijklmnopqrstuvxyz1234567890abcdfghijklmnopq"

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("O nome deve ter no máximo 50 letras", formSeletores.erroCampoNome)
  })

  it('Test 11 - Validar preenchimento de campos com rg invalido', () => {
    const dados = cadastro()
    dados.rg = "12345 67890"

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("O RG não pode conter espaços ou símbolos", formSeletores.erroCampoRg)
  })


  it('Test 12 - Validar preenchimento de campos com cidade maior que 50 caracteres', () => {
    const dados = cadastro()
    dados.cidade = "abcdefghijklmnopqrstuvxyz1234567890abcdfghijklmnopq"

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("A cidade deve ter no máximo 50 letras", formSeletores.erroCampoCidade)
  })

  it('Test 13 - Validar preenchimento de campos com rg vazio', () => {
    const dados = cadastro()
    dados.rg = ""

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("O RG é obrigatório", formSeletores.erroCampoRg)
  })

  it('Test 14 - Validar preenchimento de campos com email inválio', () => {
    const dados = cadastro()
    dados.email = "emailinvalido.com"

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("O email deve ser um endereço de email válido", formSeletores.erroCampoEmail)
  })

  it('Test 15 - Validar preenchimento de campos com email vazio', () => {
    const dados = cadastro()
    dados.email = ""

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("O email é obrigatório", formSeletores.erroCampoEmail)
  })

  it('Test 16 - Validar preenchimento de campos com nome vazio', () => {
    const dados = cadastro()
    dados.nome = ""

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("O nome é obrigatório", formSeletores.erroCampoNome)
  })

  it('Test 17 - Validar preenchimento de campos com cidade vazio', () => {
    const dados = cadastro()
    dados.cidade = ""

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("A cidade é obrigatória", formSeletores.erroCampoCidade)
  })

  it('Test 18 - Validar preenchimento de campos com cpf vazio', () => {
    const dados = cadastro()
    dados.cpf = ""

    cy.preencherTodosOsCamposInscricao(dados)
    cy.clicarEmProximo()

    cy.validarMensagemDeErro("O CPF é obrigatório", formSeletores.erroCampoCpf)
  })
})