import baseLogin from "../../support/PageObject/POM-denise.cy";
const loginData = require("../../fixtures/orangedemoDenise/denise.json");

describe("Delete Employee from PIM menu", () => {
  const BaseLogin = new baseLogin();
    beforeEach(() => {
      // Visit the URL
      cy.visit("https://opensource-demo.orangehrmlive.com/");
  
 	
		// Log in as admin
		BaseLogin.inputUserName(loginData.validEmail);
		BaseLogin.inputPassword(loginData.validPassword);
		BaseLogin.clickLogin();
		BaseLogin.verify();

		// Go to PIM menu
		BaseLogin.clickMenuPIM();

    });
  
    it("should delete an employee", () => {
      BaseLogin.clickSearchEmployee("David");
      BaseLogin.clickDeleteEmployee();
      BaseLogin.verifyDeletionMessage();
      });
    });