describe('TB02_05: Add Employee', () => {
	it('passes', () => { 
		// Visit the URL
		cy.visit("https://opensource-demo.orangehrmlive.com/");
		
		// Log in as admin
		cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
		cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
		cy.get('.oxd-button').click()

		// Go to PIM menu
		cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        
		// Add Employee
		cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Denise');
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Gratia');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Aruan');

        //save
        cy.get('.oxd-button--secondary').click({ force: true });
        cy.wait(8000);
        cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('contain.text', 'Personal Details');
        // cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6')
	})
  })
  