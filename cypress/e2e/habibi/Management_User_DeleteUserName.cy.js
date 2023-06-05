import baseLogin from "../../support/PageObject/POM-habibi.cy";
const loginData = require("../../fixtures/orangedemo/habibi.json");
describe("Manegement User Delete", () => {
	const BaseLogin = new baseLogin();
	it("TC_A08 : Successfully Delete", () => {
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
		cy.get(":nth-child(2) > .oxd-input").type("MaryNish");
		cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").click({ force: true });
		cy.wait(4000);
		cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").click({ force: true });
		cy.get(".oxd-table-cell-actions > :nth-child(1) > .oxd-icon").click({ multiple: true });
		cy.get(".oxd-button--label-danger").click();
		cy.get(".oxd-text--toast-message").should("contain", "Successfully Deleted");
	});

	it("TC_A09 : Successfully Cancel Delete", () => {
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
		cy.get(":nth-child(2) > .oxd-input").type("NishaGeorge");
		cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").click({ force: true });
		cy.wait(4000);
		cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").click({ force: true });
		cy.get(".oxd-table-cell-actions > :nth-child(1) > .oxd-icon").click({ multiple: true });
		cy.get(".oxd-button--text").click();
		cy.get(".oxd-table-filter-header-title > .oxd-text").should("contain", "System Users");
	});
});
