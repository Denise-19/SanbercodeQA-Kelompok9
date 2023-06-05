describe('TB02_03: List Employee', () => {
	it('passes', () => { 
		// Visit the URL
		cy.visit("https://opensource-demo.orangehrmlive.com/");
		
		// Log in as admin
		cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
		cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
		cy.get('.oxd-button').click()

		// Go to PIM menu
		cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-container').scrollIntoView();
		
		
	})
  })

  describe('TB02_04: Search Employee', () => {
	it('passes', () => { 
		// Visit the URL
		cy.visit("https://opensource-demo.orangehrmlive.com/");
		
		// Log in as admin
		cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
		cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
		cy.get('.oxd-button').click()

		// Go to PIM menu
		cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get(':nth-child(2) > .oxd-input').type('EMP0001');
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true });
        
		
		
	})
  })
  