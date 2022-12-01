import '../fixtures/feedback.json';
describe('Feedback create form', () => {
    it('should redirect to feeback form view', () => {
        cy.visit('/feedback/new');
        cy.url().should('include', '/feedback/new');
    });

    it('should not create a feedback if submit button is disabled', () => {
        cy.visit('/feedback/new');
        cy.get('[data-cy=submit]').should('be.disabled');
    });

    it('should show an error if the field is touched and non-filled', () => {
        cy.get('[data-cy=title-field]').focus().blur();
        cy.get('[data-cy=field-error]').should('be.visible');
    });

    it('should show default category name in Title Case', () => {
        let div: Cypress.Chainable<JQuery<HTMLDivElement>> = cy.get('[data-cy=category-field]').children('div');
        let input: Cypress.Chainable<JQuery<HTMLInputElement>> = div.children('input');
        input.invoke('val').then((val) => {
            let value = val as string;
            expect(val).to.equal(value.split('\\$1').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('\\$1'));
        });
    });

    it('should create a feedback if required fields are filled', () => {
        cy.fixture('feedback.json').then((feedback) => {
            cy.get('[data-cy=title-field]').type(feedback.title);
            cy.get('[data-cy=description-field]').type(feedback.description);
            cy.get('[data-cy=submit]').click();
            cy.get('[data-cy=feedback-list]').should('contain', feedback.title);
        });
    });

});
