import baseLogin from "../../support/PageObject/POM-habibi.cy";
const loginData = require("../../fixtures/orangedemo/habibi.json");
describe("Management Add User", () => {
	const BaseLogin = new baseLogin();
	it("TC_A03 : Successfully Add User Name", () => {
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

		// Add User
		cy.get(".orangehrm-header-container > .oxd-button").click();
		cy.get(
			":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"
		).click();
		cy.get(".oxd-select-dropdown.--positon-bottom").click();
		cy.get(".oxd-autocomplete-text-input > input").type("Jadine  Jackie");
		cy.wait(4000);
		cy.get(".oxd-autocomplete-dropdown.--positon-bottom").click();
		cy.get(
			":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"
		).click();
		cy.get(".oxd-select-dropdown.--positon-bottom").click();
		cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input").type("kitacoba").should("be.visible");
		cy.get(".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input").type("testing1234");
		cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("testing1234");
		cy.get(".oxd-button--secondary").should("be.visible").click({ force: true });
		cy.get(".oxd-text--toast-message").should("contain", "Successfully Saved");
	});
	it("TC_A04 : Failed Add User Name", () => {
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

		// Add User
		cy.get(".orangehrm-header-container > .oxd-button").click();
		cy.get(
			":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"
		).click();
		cy.get(".oxd-select-dropdown.--positon-bottom").click();
		cy.get(".oxd-autocomplete-text-input > input").type("Jadine  Jackie");
		cy.wait(4000);
		cy.get(".oxd-autocomplete-dropdown.--positon-bottom").click();
		cy.get(
			":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"
		).click();
		cy.get(".oxd-select-dropdown.--positon-bottom").click();
		cy.get(".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input").type("testing1234");
		cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("testing1234");
		cy.get(".oxd-button--secondary").should("be.visible").click({ force: true });
		cy.get(".oxd-input-group > .oxd-text").should("contain", "Required");
	});
});
