/// <reference types="cypress" />

import provaPratica from "../support/data/provaPratica";
import questaoPraticaSelector from "../support/selector/questaoPratica.selector";

describe('Testes de CRUD da questão prática', () => {
  beforeEach(() => {
    cy.visit("/login").wait(3000)
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      
      return false;
    });

    cy.fixture("login").then(({ admin }) => {
      cy.preencherCamposDeLogin(admin)
      cy.clicarEmLogin()
    })
  })

  it('Test 1 - Cadastro de questão prática com sucesso', () => {
    const numeroDeExemplos = 1

    const dados = provaPratica(numeroDeExemplos)

    cy.navegarParaQuestoes()
    cy.navegarParaCriacaoQuestaoPratica()
    
    cy.preencherTodosOsCampos(dados, numeroDeExemplos)
    cy.clicarEmCriarQuestao()

    cy.validarMsgSucesso('Questão prática cadastrada com sucesso!')
    cy.voltarParaPagQuestoes()
    cy.filtrarQuestaoPorTitulo(dados.titulo)
    cy.validarRegistroDeQuestao(dados.titulo)

    cy.deletarRegistro()
  })

  it('Test 2 - Cadastro de questão prática sem título', () => {
    const numeroDeExemplos = 1

    const dados = provaPratica(numeroDeExemplos)
    dados.titulo = ""

    cy.navegarParaQuestoes()
    cy.navegarParaCriacaoQuestaoPratica()
    
    cy.preencherTodosOsCampos(dados, numeroDeExemplos)
    cy.clicarEmCriarQuestao()

    cy.validarErro(questaoPraticaSelector.msgErroTitulo, "O título é obrigatório.")
  })

  it('Test 3 - Cadastro de questão prática sem enunciado', () => {
    const numeroDeExemplos = 1

    const dados = provaPratica(numeroDeExemplos)
    dados.enunciado = ""

    cy.navegarParaQuestoes()
    cy.navegarParaCriacaoQuestaoPratica()
    
    cy.preencherTodosOsCampos(dados)
    cy.clicarEmCriarQuestao()

    cy.validarErro(questaoPraticaSelector.msgErroEnunciado, "O enunciado é obrigatório.")
  })

  it('Test 4 - Cadastro de questão prática sem dificuldade', () => {
    const numeroDeExemplos = 1

    const dados = provaPratica(numeroDeExemplos)
    dados.dificuldade = ""

    cy.navegarParaQuestoes()
    cy.navegarParaCriacaoQuestaoPratica()
    
    cy.preencherTodosOsCampos(dados)
    cy.clicarEmCriarQuestao()

    cy.validarErro(questaoPraticaSelector.msgErroDificuldade, "A dificuldade é obrigatória.")
  })

  it('Test 5 - Cadastro de questão prática sem entrada', () => {
    const numeroDeExemplos = 1

    const dados = provaPratica(numeroDeExemplos)
    dados["entrada-0"] = ""

    cy.navegarParaQuestoes()
    cy.navegarParaCriacaoQuestaoPratica()
    
    cy.preencherTodosOsCampos(dados)
    cy.clicarEmCriarQuestao()

    cy.validarErro(questaoPraticaSelector.msgErroEntrada.replace("*", 0), "O exemplo de entrada é obrigatório.")
  })

  it('Test 6 - Cadastro de questão prática sem saida', () => {
    const numeroDeExemplos = 1

    const dados = provaPratica(numeroDeExemplos)
    dados["saida-0"] = ""

    cy.navegarParaQuestoes()
    cy.navegarParaCriacaoQuestaoPratica()
    
    cy.preencherTodosOsCampos(dados)
    cy.clicarEmCriarQuestao()

    cy.validarErro(questaoPraticaSelector.msgErroSaida.replace("*", 0), "O exemplo de saída é obrigatório.")
  })

  it('Test 7 - Cadastro de questão prática sem explicação da entrada', () => {
    const numeroDeExemplos = 1
  
    const dados = provaPratica(numeroDeExemplos)
    dados["explicacaoEntrada-0"] = ""

    cy.navegarParaQuestoes()
    cy.navegarParaCriacaoQuestaoPratica()
    
    cy.preencherTodosOsCampos(dados)
    cy.clicarEmCriarQuestao()

    cy.validarErro(questaoPraticaSelector.msgErroExplicacaoEntrada.replace("*", 0), "A explicação da entrada é obrigatória.")
  })

  it('Test 8 - Cadastro de questão prática sem explicação da saida', () => {
    const numeroDeExemplos = 1
  
    const dados = provaPratica(numeroDeExemplos)
    dados["explicacaoSaida-0"] = ""

    cy.navegarParaQuestoes()
    cy.navegarParaCriacaoQuestaoPratica()
    
    cy.preencherTodosOsCampos(dados)
    cy.clicarEmCriarQuestao()

    cy.validarErro(questaoPraticaSelector.msgErroExplicacaoSaida.replace("*", 0), "A explicação da saída é obrigatória.")
  })

  it('Test 9 - Tentar adicionar mais de 5 cinco entrada/saida', () => {
    cy.navegarParaQuestoes()
    cy.navegarParaCriacaoQuestaoPratica()
    
    cy.adicionarExemplo()
    cy.adicionarExemplo()
    cy.adicionarExemplo()
    cy.adicionarExemplo()

    cy.verificarBotaoAdicionarExemplo()
  })

  it('Test 10 - Criar questão prática com 5 entrada/saida', () => {
    const numeroDeExemplos = 5

    const dados = provaPratica(numeroDeExemplos)

    cy.navegarParaQuestoes()
    cy.navegarParaCriacaoQuestaoPratica()

    cy.adicionarExemplo()
    cy.adicionarExemplo()
    cy.adicionarExemplo()
    cy.adicionarExemplo()
    
    cy.preencherTodosOsCampos(dados, numeroDeExemplos)
    cy.clicarEmCriarQuestao()

    cy.validarMsgSucesso('Questão prática cadastrada com sucesso!')
    cy.voltarParaPagQuestoes()
    cy.filtrarQuestaoPorTitulo(dados.titulo)
    cy.validarRegistroDeQuestao(dados.titulo)

    cy.deletarRegistro()
  })

  it('Test 11 - Editar questão prática', () => {
    const numeroDeExemplos = 1

    let dados = provaPratica(numeroDeExemplos)

    cy.navegarParaQuestoes()
    cy.navegarParaCriacaoQuestaoPratica()
    
    cy.preencherTodosOsCampos(dados, numeroDeExemplos)
    cy.clicarEmCriarQuestao()

    cy.voltarParaPagQuestoes()
    cy.filtrarQuestaoPorTitulo(dados.titulo)
    cy.editarRegistro()

    dados = provaPratica(numeroDeExemplos)
    cy.preencherTodosOsCampos(dados, numeroDeExemplos)
    cy.clicarEmEditarQuestao()

    cy.validarMsgSucesso('Questão técnica editada com sucesso!')
    cy.filtrarQuestaoPorTitulo(dados.titulo)
    cy.validarRegistroDeQuestao(dados.titulo)
    cy.deletarRegistro()
  })
})