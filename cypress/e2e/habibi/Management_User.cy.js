import baseLogin from "../../support/PageObject/POM-habibi.cy";
const loginData = require("../../fixtures/orangedemo/habibi.json");
describe("Management User", () => {
	const BaseLogin = new baseLogin();
	it("TC_A01 : Seacrh Valid User Name", () => {
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

		// Input User
		cy.get(":nth-child(2) > .oxd-input").type("Admin");
		cy.get(".oxd-form-actions > .oxd-button--secondary").click({ force: true }); //click search button
		cy.get(".orangehrm-horizontal-padding > .oxd-text").should("contain", "Records Found"); //validate user found
	});

	it("TC_A02 : Seacrh Invalid User Name", () => {
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

		// Input User
		cy.get(":nth-child(2) > .oxd-input").type("tidak.ada");
		cy.get(".oxd-form-actions > .oxd-button--secondary").click({ force: true }); //click search button
		cy.get(".orangehrm-horizontal-padding > .oxd-text").should("contain", "No Records Found"); //validate user found
	});
});
