import formStep from "../selector/formSteps2.selector"

Cypress.Commands.add("preencherTodosCamposComSucesso2", () => { 
    cy.get(formStep.campoInstituicaoDeEnsino).type('Instituição de Ensino')
    cy.get(formStep.campoCurso).type('Curso')
    cy.get(formStep.campoNivelIngles).click()
    cy.get(formStep.niveisIngles).eq(2).click()
    cy.get(formStep.campoNivelEspanhol).click()
    cy.get(formStep.niveisEspanhol).eq(2).click()
    cy.get(formStep.campoOrientacaoSexual).click()
    cy.get(formStep.optsOrientacaoSexual).eq(2).click()
    cy.get(formStep.campoGenero).click()
    cy.get(formStep.optsGenero).eq(2).click()
    cy.get('#s2-select-etnia-candidato').click()
    cy.get('[id="menu-etnia"] li').eq(2).click()
    
    cy.get(formStep.campoLinguagens).click()
    cy.get(formStep.optsLinguagens).eq(0).click({ force: true })
    cy.get(formStep.optsLinguagens).eq(1).click({ force: true })
    cy.get(formStep.optsLinguagens).eq(2).click({ force: true })
    cy.get(formStep.campoLinguagens).click({ force: true })

    cy.get(formStep.optsTrilhas).eq(0).click({ force: true })
    cy.get(formStep.optsTrilhas).eq(1).click({ force: true })
    cy.get(formStep.optsTrilhas).eq(2).click({ force: true })
    cy.get(formStep.optsTrilhas).eq(3).click({ force: true })

   
    
    cy.get(formStep.campoDeficiencia).click()
    cy.get(formStep.listaOpc).eq(1).click({ force: true })
    cy.get(formStep.campoDescricaoDeficiencia).click()
    cy.get(formStep.campoDescricaoDeficiencia).type('Descrição da deficiência')
    cy.get(formStep.campoMotivoInteresse).type('Motivo de interesse')
    cy.get(formStep.campoEnsinamento).type('Ensinamento Importante')


    cy.get(formStep.campoGithub).type('https://github.com')
    cy.get(formStep.campoLinkedin).type('https://linkedin.com')

    cy.get(formStep.btnAddCv).click()
    cy.get('input#fileInput').selectFile('C:\Users\luiz.barbosa\Desktop\DBC\TF\captacao-qa-web-cypress\cypress\support\data\anexos\CV - QA .pdf', { force: true });
    

    cy.get(formStep.btnLGPD).click()



})
