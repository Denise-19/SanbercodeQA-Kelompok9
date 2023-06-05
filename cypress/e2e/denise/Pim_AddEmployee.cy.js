import baseLogin from "../../support/PageObject/POM-denise.cy";
const loginData = require("../../fixtures/orangedemoDenise/denise.json");

describe('TC_C06: Input Valid Value Employee', () => {
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

		// Add Employee
		BaseLogin.clickAddEmployee();
		BaseLogin.inputFirstName(loginData.firstName);
		BaseLogin.inputMiddleName(loginData.middleName);
		BaseLogin.inputLastName(loginData.lastName);

        //save
		BaseLogin.clickSaveEmployee();
		BaseLogin.verifySaveSuccess();
	})
  })

  describe('TC_C07: Blank Filed Employee Name', () => {
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

		// Add Employee
		BaseLogin.clickAddEmployee();

        //save
		BaseLogin.clickSaveEmployee();
		BaseLogin.requiredValidation();
	
	})
  })

  describe.only('TC_C08: Input Invalid Value Employee', () => {
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

		// Add Employee
		BaseLogin.clickAddEmployee();
		BaseLogin.inputFirstName(loginData.invalidfirstName);
		BaseLogin.inputMiddleName(loginData.invalidmiddleName);
		BaseLogin.inputLastName(loginData.invalidlastName);
		
		//save
		BaseLogin.clickSaveEmployee();
		BaseLogin.verifySaveSuccess();
	})
  })


  