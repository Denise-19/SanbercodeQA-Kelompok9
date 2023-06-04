describe('TC03_04 : Successfully Add Location', () => {
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
	  cy.get('.oxd-toast').should('contain','Successfully Saved')
		  
	})
  })
  
  describe('TC03_05 : Location Already Exists', () => {
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
	  cy.get('.oxd-input-group > .oxd-text').should('contain','Already exists')
	  
	})
  })
  
  
  describe('TC03_06 : Blank Field Add Location', () => {
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
	  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text').should('contain','Required')
	  cy.get(':nth-child(4) > .oxd-input-group > .oxd-text').should('contain','Required')
	  
	})
  })
  
  
  
  