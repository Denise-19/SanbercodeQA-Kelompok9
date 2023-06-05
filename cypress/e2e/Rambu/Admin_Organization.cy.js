import baseLogin from "../../support/PageObject/POM-habibi.cy";
const loginData = require("../../fixtures/orangedemo/habibi.json");

describe('Organization-Location', () => {
	const BaseLogin = new baseLogin();
	it('TC_B02 : Seacrh Valid Location', () => { 
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

		// Input Country
		cy.get('.oxd-select-text').click();
		cy.contains('Afghanistan').click();
		cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}); //click search button
		cy.get('.orangehrm-horizontal-padding > .oxd-text').should('contain','Records Found');
	  
	});

	it('TC_B02 : Seacrh Unvalid Location', () => {
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

		// Input unvalid value
		cy.get('.oxd-select-text').click();
		cy.contains('Kenya').click();
		cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}); //click search button
		cy.get('.oxd-toast').should('contain','No Records Found');
	  
	});

	it('TC_B03 : Verify Reset Button', () => {

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

		// Input and click reset button	
		cy.get('.oxd-select-text').click();
		cy.contains('Kenya').click();
		cy.get('.oxd-button--ghost').click({force:true});
		cy.get('.orangehrm-horizontal-padding > .oxd-text').should('contain','Records Found');

  	});


});
