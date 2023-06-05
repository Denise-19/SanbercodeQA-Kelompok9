import baseLogin from "../../support/PageObject/POM-habibi.cy";
const loginData = require("../../fixtures/orangedemo/habibi.json");
describe("Manegement User Edit", () => {
	const BaseLogin = new baseLogin();
	it("TC_A05 : Successfully Edit User Name", () => {
		// Visit the URL
		cy.visit("https://opensource-demo.orangehrmlive.com/");

		// Log in as admin
		BaseLogin.inputUserName(loginData.validUserName);
		BaseLogin.inputPassword(loginData.validPassword);
		BaseLogin.clickLogin();
		BaseLogin.verify();

		// Go to Location menu
		BaseLogin.clickMenuAdmin(); //click menu Admin
		BaseLogin.validateMenuAdmin(); //validate Menu

		// Edit User
		cy.get(":nth-child(2) > .oxd-input").type("kitabisa");
		cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").click({ force: true });
		cy.wait(4000);
		cy.get(".oxd-table-cell-actions > :nth-child(2) > .oxd-icon").click({ multiple: true });
		cy.get(".orangehrm-card-container > .oxd-text--h6").should("contain", "Edit User"); //validate Edit User
		cy.get(":nth-child(2) > .oxd-input").clear().type("kitadapat");
		cy.get(".oxd-button--secondary").click();
		cy.get(".oxd-text--toast-message").should("contain", "Successfully Updated");
	});

	it("TC_A06 : Successfully Edit Status", () => {
		// Visit the URL
		cy.visit("https://opensource-demo.orangehrmlive.com/");

		// Log in as admin
		BaseLogin.inputUserName(loginData.validUserName);
		BaseLogin.inputPassword(loginData.validPassword);
		BaseLogin.clickLogin();
		BaseLogin.verify();

		// Go to Location menu
		BaseLogin.clickMenuAdmin(); //click menu Admin
		BaseLogin.validateMenuAdmin(); //validate Menu

		// Edit User
		cy.get(":nth-child(2) > .oxd-input").type("kitadapat");
		cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").click({ force: true });
		cy.wait(4000);
		cy.get(".oxd-table-cell-actions > :nth-child(2) > .oxd-icon").click({ multiple: true });
		cy.get(".orangehrm-card-container > .oxd-text--h6").should("contain", "Edit User"); //validate Edit User
		cy.get(
			":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
		).click();
		cy.get(".oxd-select-dropdown > :nth-child(3)").click();
		cy.get(".oxd-button--secondary").click();
		cy.get(".oxd-text--toast-message").should("contain", "Successfully Updated");
	});

	it("TC_A07 : Failed Edit User Password Not Match", () => {
		// Visit the URL
		cy.visit("https://opensource-demo.orangehrmlive.com/");

		// Log in as admin
		BaseLogin.inputUserName(loginData.validUserName);
		BaseLogin.inputPassword(loginData.validPassword);
		BaseLogin.clickLogin();
		BaseLogin.verify();

		// Go to Location menu
		BaseLogin.clickMenuAdmin(); //click menu Admin
		BaseLogin.validateMenuAdmin(); //validate Menu

		// Edit User
		cy.get(":nth-child(2) > .oxd-input").type("kitadapat");
		cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").click({ force: true });
		cy.wait(4000);
		cy.get(".oxd-table-cell-actions > :nth-child(2) > .oxd-icon").click({ multiple: true });
		cy.get(".orangehrm-card-container > .oxd-text--h6").should("contain", "Edit User"); //validate Edit User
		cy.get(".oxd-checkbox-input > .oxd-icon").click();
		cy.get(".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input").type("testing1234");
		cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("testing12345");
		cy.get(".oxd-button--secondary").click();
		cy.get(".oxd-input-group > .oxd-text").should("contain", "Passwords do not match");
	});
});
