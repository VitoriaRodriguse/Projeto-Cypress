Cypress.Commands.add('submitForms', (nome, email, senha, genero, dataDeNascimento, telefone, endereço, estado, cidade) => {

    cy.get('#name').should('be.visible').and('have.value', '').type(nome, { force: true});
        cy.get('#email').should('be.visible').and('have.value', '').type(email, { force: true});
        cy.get('#password').should('be.visible').and('have.value', '').type(senha, { log: false});
        cy.get('#gender').should('be.visible').type(genero);
        cy.get('#birthdate').should('be.visible').and('have.value', '').type(dataDeNascimento);
        cy.get('#phone').should('be.visible').and('have.value', '').type(telefone);
        cy.get('#address').should('be.visible').and('have.value', '').type(endereço);
        cy.get('#state').should('be.visible').and('have.value', '').select(estado);
        cy.get('#city').should('be.visible').type(cidade);

})