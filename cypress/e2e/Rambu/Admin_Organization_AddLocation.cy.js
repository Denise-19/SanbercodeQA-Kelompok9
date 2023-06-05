import baseLogin from "../../support/PageObject/POM-habibi.cy";
const loginData = require("../../fixtures/orangedemo/habibi.json");

describe('Organization_Add Location', () => {
	const BaseLogin = new baseLogin();
	it('TC_B04 : Successfully Add Location', () => {
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

		// Add Location
		cy.get('.orangehrm-header-container > div > .oxd-button').click();
		cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Waingapu');
		cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Waingapu');
		cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('NTT');
		cy.get('.oxd-select-text').click();
		cy.contains('Indonesia').click();
		cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('081234567890');
		cy.get('.oxd-button--secondary').click(); //click save button
		cy.get('.oxd-toast').should('contain','Successfully Saved');
		  
	});
  
	it('TC_B05 : Location Already Exists', () => {
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

		// Add Location
		cy.get('.orangehrm-header-container > div > .oxd-button').click();
		cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Waingapu');
		cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Waingapu');
		cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('NTT');
		cy.get('.oxd-select-text').click();
		cy.contains('Indonesia').click();
		cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('081234567890');
		cy.get('.oxd-button--secondary').click();
		cy.get('.oxd-input-group > .oxd-text').should('contain','Already exists');
	  
	})
  
  
  
	it('TC_B06 : Blank Field Add Location', () => {
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

		//Add Location
		cy.get('.orangehrm-header-container > div > .oxd-button').click();
		cy.get('.oxd-button--secondary').click();
		cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text').should('contain','Required');
		cy.get(':nth-child(4) > .oxd-input-group > .oxd-text').should('contain','Required');
	  
	});
});
  
  
  
  
