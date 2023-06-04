describe('Successfully_Add_Location', () => {
	it('passes', () => {
	  cy.visit('https://opensource-demo.orangehrmlive.com/')
	  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
	  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
	  cy.get('.oxd-button').click()
	  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
	  cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
	  cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
	  cy.get('.orangehrm-header-container > div > .oxd-button').click()
	  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Waingapu')
	  cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Waingapu')
	  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('NTT')
	  cy.get('.oxd-select-text').click()
	  cy.contains('Indonesia').click()
	  cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('081234567890')
	  cy.get('.oxd-button--secondary').click()
	  cy.get('.oxd-toast').should('be.visible')
		  
	})
  })
  
  describe('Location_Already_Exists', () => {
	it('passes', () => {
	  cy.visit('https://opensource-demo.orangehrmlive.com/')
	  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
	  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
	  cy.get('.oxd-button').click()
	  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
	  cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
	  cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
	  cy.get('.orangehrm-header-container > div > .oxd-button').click()
	  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Waingapu')
	  cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Waingapu')
	  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('NTT')
	  cy.get('.oxd-select-text').click()
	  cy.contains('Indonesia').click()
	  cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('081234567890')
	  cy.get('.oxd-button--secondary').click()
	  cy.get('.oxd-input-group > .oxd-text').should('be.visible')
	  
	})
  })
  
  
  describe('Blank_Field_AddLocation', () => {
	it('passes', () => {
	  cy.visit('https://opensource-demo.orangehrmlive.com/')
	  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
	  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
	  cy.get('.oxd-button').click()
	  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
	  cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
	  cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
	  cy.get('.orangehrm-header-container > div > .oxd-button').click()
	  cy.get('.oxd-button--secondary').click()
	  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text').should('be.visible')
	  cy.get(':nth-child(4) > .oxd-input-group > .oxd-text').should('be.visible')
	  
	})
  })
  
  
  
  