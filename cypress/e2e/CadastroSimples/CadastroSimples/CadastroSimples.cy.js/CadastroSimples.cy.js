/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Cadastro Simples', () => {

    let nome, email, senha, dataDeNascimento, telefone, endereço, estado, cidade
    
    beforeEach(() => {
        cy.visit('/projectqatesterweb/cadastro-simples.html')
        nome = faker.person.fullName();
        email = faker.internet.email();
        senha = faker.internet.password();
        dataDeNascimento = faker.date.birthdate({ minAge: 18, maxAge: 65}).tolSOString().split('T')[0];
        telefone = faker.phone.number('+55549########');
        endereço = faker.location.streetAddress();
    })

    it('Submeter Formulário de Cadastro Simples', () => {

        cy.get('#name').should('be.visible').and('have.value', '').type(nome, { force: true});
        cy.get('#email').should('be.visible').and('have.value', '').type(email, { force: true});
        cy.get('#password').should('be.visible').and('have.value', '').type(senha, { log: false});
        cy.get('#birthdate').should('be.visible').and('have.value', '').type(dataDeNascimento);
        cy.get('#phone').should('be.visible').and('have.value', '').type(telefone);
        cy.get('#address').should('be.visible').and('have.value', '').type(endereço);
        cy.get('#state').should('be.visible').and('have.value', '').select('Rio Grande do Sul');
        cy.get('#city').should('be.visible').type('Gramado');
        cy.get('#terms').should('be.visible').check();
        cy.get('#cadastroForm > button').should('not.be.disabled').click();
        cy.get('#alertMessage').should('contain', 'Cadastro realizado com sucesso!');
        cy.get('#closeAlert').click();
    })

})

