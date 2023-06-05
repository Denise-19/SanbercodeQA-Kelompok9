import baseLogin from "../../support/PageObject/POM-denise.cy";
const loginData = require("../../fixtures/orangedemoDenise/denise.json");

describe('List Employee', () => {
    const BaseLogin = new baseLogin();
	it('passes', () => { 
		// Visit the URL
		cy.visit("https://opensource-demo.orangehrmlive.com/");
		
		// Log in as admin
		BaseLogin.inputUserName(loginData.validEmail);
		BaseLogin.inputPassword(loginData.validPassword);
		BaseLogin.clickLogin();
        BaseLogin.verify();
		// Go to PIM menu
		BaseLogin.clickMenuPIM();
        BaseLogin.get('.orangehrm-container').scrollIntoView();
		
		
	})
  })

  describe('TC_C03: Input Valid Value', () => {
    const BaseLogin = new baseLogin();
	it('passes', () => { 
		// Visit the URL
		cy.visit("https://opensource-demo.orangehrmlive.com/");
		
		// Log in as admin
		BaseLogin.inputUserName(loginData.validEmail);
		BaseLogin.inputPassword(loginData.validPassword);
        BaseLogin.clickLogin();

		// Go to PIM menu
		BaseLogin.clickMenuPIM();
        BaseLogin.inputEmployeeID(loginData.employeeId);
        BaseLogin.clickSearchButton();
        
	})
  })

  describe('TC_C04: Search with Ivalid EmployeeID', () => {
    const BaseLogin = new baseLogin();
	it('passes', () => { 
		// Visit the URL
		cy.visit("https://opensource-demo.orangehrmlive.com/");
		
		// Log in as admin
		BaseLogin.inputUserName(loginData.validEmail);
		BaseLogin.inputPassword(loginData.validPassword);
        BaseLogin.clickLogin();

		// Go to PIM menu
		BaseLogin.clickMenuPIM();
        BaseLogin.inputEmployeeID(loginData.invalidEmployeeId);
        BaseLogin.clickSearchButton();
        BaseLogin.verifyInvalidSearch();
        
	})
  })

  describe('TC_C05: Search with Blank Field', () => {
    const BaseLogin = new baseLogin();
	it('passes', () => { 
		// Visit the URL
		cy.visit("https://opensource-demo.orangehrmlive.com/");
		
		// Log in as admin
		BaseLogin.inputUserName(loginData.validEmail);
		BaseLogin.inputPassword(loginData.validPassword);
        BaseLogin.clickLogin();

		// Go to PIM menu
		BaseLogin.clickMenuPIM();
        BaseLogin.clickSearchButton();
        
	})
  })
  