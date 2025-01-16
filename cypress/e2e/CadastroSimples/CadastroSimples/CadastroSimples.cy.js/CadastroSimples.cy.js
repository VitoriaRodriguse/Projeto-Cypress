/// <reference types="cypress" />
import { pt_BR, en, Faker } from '@faker-js/faker';

export const faker = new Faker({
    locale: [pt_BR, en],
});

describe('Cadastro Simples', () => {

    let nome, email, senha, genero, dataDeNascimento, telefone, endereço, estado, cidade
    
    beforeEach(() => {
        cy.visit('/projectqatesterweb/cadastro-simples.html')
        nome = faker.person.fullName();
        email = faker.internet.email();
        senha = faker.internet.password();
        genero = faker.person.gender();
        dataDeNascimento = faker.date.birthdate({ minAge: 18, maxAge: 65}).toISOString().split('T')[0];
        telefone = faker.phone.number('+55549########');
        endereço = faker.location.streetAddress();
        estado = faker.location.state();
        cidade = faker.location.city();
    })

    it('Submeter Formulário de Cadastro Simples', () => {

        cy.submitForms(nome, email, senha, genero, dataDeNascimento, telefone, endereço, estado, cidade);
        cy.get('#terms').should('be.visible').check();
        cy.get('#cadastroForm > button').should('not.be.disabled').click();
        cy.get('#alertMessage').should('contain', 'Cadastro realizado com sucesso!');
        cy.get('#closeAlert').click();
    })

})

