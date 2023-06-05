import baseLogin from "../../support/PageObject/POM-denise.cy";
const loginData = require("../../fixtures/orangedemoDenise/denise.json");

describe('TB02_03: List Employee', () => {
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

  describe('TB02_04: Search Employee', () => {
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
  