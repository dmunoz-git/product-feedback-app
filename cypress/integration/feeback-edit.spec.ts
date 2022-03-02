import '../fixtures/feedback.json';

describe('Feedback edit form', () => {
    beforeEach(() => {
        cy.visit('/feedback/edit/1');
    });
    it('should redirect to feeback form view', () => {
        cy.url().should('include', '/feedback/edit/1');
    });

    it('should show a back, delete, edit and cancel button', () => {
        cy.get('[data-cy=back]').should('be.visible');
        cy.get('[data-cy=delete]').should('be.visible');
        cy.get('[data-cy=edit]').should('be.visible');
        cy.get('[data-cy=cancel]').should('be.visible');
    });

    it('should edit a edit an feedback', () => {
        cy.get('[data-cy=title-field]').clear().type('Edited feedback');
        cy.get('[data-cy=description-field]').clear().type('Edited description');
        cy.get('[data-cy=edit]').click();
        cy.get('[data-cy=feedback-list]').contains('Edited feedback').click();

        cy.get('[data-cy=title]').should('have.text', 'Edited feedback');
        cy.get('[data-cy=description]').should('have.text', 'Edited description');
    });

    it('should cancel the action and return to home view', () => {
        cy.get('[data-cy=cancel]').click();
        cy.url().should('include', '/');
    });

    it('should return back to home page', () => {
        cy.visit('/feedback/detail/1');
        cy.get('[data-cy="edit"]').click();
        cy.get('[data-cy=back]').click();
        cy.url().should('include', '/feedback/detail/1');
    });

    it('should delete the feedback', () => {
        cy.get('[data-cy=delete]').click();
        cy.get('[data-cy=feedback-list]').contains('Edited feedback').should('not.exist');
    });
});
