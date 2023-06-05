import baseLogin from "../../support/PageObject/POM-denise.cy";
const loginData = require("../../fixtures/orangedemoDenise/denise.json");

describe('TB02_05: Add Employee', () => {
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
  