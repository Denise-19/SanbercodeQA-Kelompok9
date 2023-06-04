describe('TC03_07 : Successfully Edit Location', () => {
	it('passes', () => {
	  cy.visit('https://opensource-demo.orangehrmlive.com/')
	  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
	  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
	  cy.get('.oxd-button').click()
	  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
	  cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
	  cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
	  cy.get('.orangehrm-header-container > div > .oxd-button').click()
	  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('WaingapuA1')
	  cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Waingapu')
	  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('NTT')
	  cy.get('.oxd-select-text').click()
	  cy.contains('Indonesia').click()
	  cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('081234567890')
	  cy.get('.oxd-button--secondary').click()
	  cy.get('.oxd-toast').should('contain','Successfully Updated')
	})
  })
  
  describe('TC03_08 : Failed Edit Location', () => {
	it('passes', () => {
	  cy.visit('https://opensource-demo.orangehrmlive.com/')
	  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
	  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
	  cy.get('.oxd-button').click()
	  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
	  cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
	  cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
	  cy.get(':nth-child(11) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click()
	  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
	  cy.get('.oxd-button--secondary').click()
	  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text').should('contain','Required')
	})
  })