import baseLogin from "../../support/PageObject/POM-habibi.cy";
const loginData = require("../../fixtures/orangedemo/habibi.json");

describe('Organization-Edit Location', () => {
	const BaseLogin = new baseLogin();
	it('TC_B07 : Successfully Edit Location', () => {
	  	// Visit the URL
		cy.visit("https://opensource-demo.orangehrmlive.com/");
		
		// Log in as admin
		BaseLogin.inputUserName(loginData.validUserName);
		BaseLogin.inputPassword(loginData.validPassword);
		BaseLogin.clickLogin();
		BaseLogin.verify();

		// Go to Location menu
		cy.get(':nth-child(1) > .oxd-main-menu-item').click(); //click menu Admin
		cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click(); //click Menu Organization
		cy.get('.oxd-dropdown-menu > :nth-child(2)').click(); //click Sub Menu Location
		cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain','Locations');

		// Edit Location
		cy.get(':nth-child(5) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true}); // click Edit 
		cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('edit');
		cy.get('.oxd-button--secondary').click(); //click Save Button
		cy.get('.oxd-toast').should('contain','Successfully Updated');
	});
  
	it('TC_B08 : Failed Edit Location', () => {
	  // Visit the URL
		cy.visit("https://opensource-demo.orangehrmlive.com/");
		
		// Log in as admin
		BaseLogin.inputUserName(loginData.validUserName);
		BaseLogin.inputPassword(loginData.validPassword);
		BaseLogin.clickLogin();
		BaseLogin.verify();

		// Go to Location menu
		cy.get(':nth-child(1) > .oxd-main-menu-item').click(); //click menu Admin
		cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click(); //click Menu Organization
		cy.get('.oxd-dropdown-menu > :nth-child(2)').click(); //click Sub Menu Location
		cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain','Locations');
		
		// Edit Location
		cy.get(':nth-child(5) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({force:true});
		cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
		cy.get('.oxd-button--secondary').click();
		cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text').should('contain','Required');
	})
})
