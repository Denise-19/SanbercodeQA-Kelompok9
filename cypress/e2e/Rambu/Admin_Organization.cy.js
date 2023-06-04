describe('TC03_01 : Seacrh Valid Location', () => {
	it('passes', () => {
	  cy.visit('https://opensource-demo.orangehrmlive.com/')
	  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
	  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
	  cy.get('.oxd-button').click()
	  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
	  cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
	  cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
	  cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain','Locations')
	  cy.get('.oxd-select-text').click()
	  cy.contains('Afghanistan').click()
	  cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true})
	  cy.get('.orangehrm-horizontal-padding > .oxd-text').should('contain','Records Found')
	  
	})
  })
  
  describe('TC03_02 : Seacrh Unvalid Location', () => {
	it('passes', () => {
	  cy.visit('https://opensource-demo.orangehrmlive.com/')
	  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
	  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
	  cy.get('.oxd-button').click()
	  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
	  cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
	  cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
	  cy.get('.oxd-table-filter-header-title > .oxd-text').should('be.visible')
	  cy.get('.oxd-select-text').click()
	  cy.contains('Kenya').click()
	  cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true})
	  cy.get('.oxd-toast').should('contain','No Records Found')
	  
	})
  })
  
  describe('TC03_03 : Verify Reset Button', () => {
	it('passes', () => {
	  cy.visit('https://opensource-demo.orangehrmlive.com/')
	  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
	  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
	  cy.get('.oxd-button').click()
	  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
	  cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
	  cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
	  cy.get('.oxd-table-filter-header-title > .oxd-text').should('be.visible')
	  cy.get('.oxd-select-text').click()
	  cy.contains('Kenya').click()
	  cy.get('.oxd-button--ghost').click({force:true})
	  //cy.get('.orangehrm-horizontal-padding > .oxd-text').should('be.visible')
  
  
	})
  })
  