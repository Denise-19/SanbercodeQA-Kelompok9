class baseLogin {
	userName = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
	password = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
	loginButton = ".oxd-button";
	trueVerify = ".oxd-brand-banner > img";
	menuAdmin = ":nth-child(1) > .oxd-main-menu-item";

	inputUserName(userName) {
		cy.get(this.userName).should("be.visible").type(userName);
		// cy.ketik(this.userName, userName);
	}
	inputPassword(password) {
		cy.get(this.password).should("be.visible").type(password);
		// cy.ketik(this.password, password);
	}
	clickLogin() {
		cy.get(".oxd-button").click();
		// cy.klik(this.loginButton);
	}
	verify() {
		cy.get(this.trueVerify).should("be.visible");
	}
	clickMenuAdmin() {
		cy.get(this.menuAdmin).click();
		// cy.klik(this.loginButton);
	}
	validateMenuAdmin() {
		cy.get(".oxd-table-filter-header-title > .oxd-text").should("contain", "System Users");
	}
}
export default baseLogin;
