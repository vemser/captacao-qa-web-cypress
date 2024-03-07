/// <reference types="cypress" />



describe('Form 2 Steps', () => {
    beforeEach(() => {
      cy.allure().feature("Segundo formulário de cadastro do candidato")
      cy.allure().severity('Crítico')

      cy.visit("/subscription")
    })

    afterEach(() => {
      cy.screenshot({ capture: 'runner' })
    })
  
    it.only('Test 1 - Validar Preenchimento de campo com sucesso', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherTodosCamposComSucesso2()
      cy.botaoEnviar()
    })

    it('Test 2 - Validar Preenchimento sem colocar a Instituição', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherTodosCamposComSucesso2()
      cy.get('[id="instituicao-de-ensino-candidato"]').clear()
      cy.botaoEnviar()
      cy.get('#instituicao-de-ensino-candidato-helper-text').should('contain', 'A Instituição de ensino deve ter apenas letras,espaços ou pontuações')
    })

    it('Test 3 - Validar Preenchimento sem preencher curso', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherTodosCamposComSucesso2()
      cy.get('[id="curso-candidato"]').clear()
      cy.botaoEnviar()
      cy.get('#curso-candidato-helper-text').should('contain', 'O Curso deve ter apenas letras,espaços ou pontuações')
    })

    it('Test 4 - Validar Preenchimento sem responder a pergunta: Por qual o outro motivo voce se interessou ela area de tecnologia?', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherTodosCamposComSucesso2()
      cy.get('#s2-candidato-motivo').clear()
      cy.botaoEnviar()
      cy.get('#s2-candidato-motivo-helper-text').should('contain', 'Campo obrigatório')
    })

    it('Test 5 - Validar Preenchimento sem responder a pergunta: Alguem te ensinou algo importante...?', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherTodosCamposComSucesso2()
      cy.get('[id="textarea-importante-candidato"]').clear()
      cy.botaoEnviar()
      cy.get('#textarea-importante-candidato-helper-text').should('contain', 'Campo obrigatório')
    })

    it('Test 6 - Validar sem selecionar a linguagem', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherSemSelecionarLinguagem()
      cy.botaoEnviar()
      cy.get('.MuiFormHelperText-root').should('contain', 'Pelo menos uma linguagem deve ser selecionada')
    })

    it('Test 7 - Validar sem selecionar a trilha', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherSemSelecionarTrilha()
      cy.botaoEnviar()
      cy.get('#root > div.MuiBox-root.css-uqekie > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-620t2 > form > div:nth-child(12) > p').should('contain', 'A escolha de uma trilha é obrigatória')
    })

    it('Test 8 - Validar sem adicionar curriculo', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherSemAdicionarCurriculo()
      cy.botaoEnviar()
      cy.get('.MuiFormHelperText-root').should('contain', 'O currículo é obrigatório');
    });

    it('Test 9 - Validar sem adicionar print configuração computador', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherSemAdicionarPrintPC()
      cy.botaoEnviar()
      cy.get('.MuiFormHelperText-root').should('contain', 'O print é obrigatório');
    });

    it('Test 10 - Validar sem selecionar: Você concorda com o tratamento dos seus dados pessoais...', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.SemSelecionarQueConcorda()
      cy.botaoEnviar()
      cy.get('#mensagem-erro-lgpd').should('contain', 'É necessário aceitar os termos para prosseguir');
    });

    it('Test 11 - Validar selecionando a matriculado em curso de graducao: nao', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.get('#matriculado-nao > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
      cy.get('#erro-não-matriculado').should('contain', 'Devido as restrições impostas pelas leis brasileiras, somente alunos que possuem vínculo com uma instituição de ensino podem se candidatar às vagas de estágio.')
    })

    it('Test 12 - Validar sem selecionando nenhum nivel de ingles', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.semSelecionarNenhumNivelIngles()
      cy.botaoEnviar()
    });

    it('Test 13 - Validar sem selecionando nenhum nivel de espanhol', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.semSelecionarNenhumNivelEspanhol()
      cy.botaoEnviar()
    });

    it('Test 14 - Validar preenchendo "motivo" menos de 10 caracteres', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherMotivoMenos10Caracteres()
      cy.botaoEnviar()
      cy.get('#s2-candidato-motivo-helper-text').should('contain', 'São necessários 10 caracteres, no mínimo')
    });

    it('Test 15 - Validar preenchendo "ensinamento" menos de 10 caracteres', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherEnsinoMenos10Caracteres()
      cy.botaoEnviar()
      cy.get('#textarea-importante-candidato-helper-text').should('contain', 'São necessários 10 caracteres, no mínimo')
    });

    it('Test 16 - Validar preenchendo numero no campo instituicao', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preencherNumeroCampoInstituicao()
      cy.botaoEnviar()    
      cy.get('#instituicao-de-ensino-candidato-helper-text').should('contain', 'A Instituição de ensino deve ter apenas letras,espaços ou pontuações')
    });

    it('Test 17 - Validar preenchendo instituicao mais de 80 caracteres', () => {
      cy.preencherTodosCamposComSucesso()
      cy.clicarEmProximo()
      cy.preenchendoInstituicaoMais80Caracteres()
      cy.botaoEnviar()    
      cy.get('[data-testid="instituicao"]').should('contain', 'O nome da instituição deve ter no máximo 80 letras')
    });

  })