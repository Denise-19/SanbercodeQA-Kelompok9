class baseLogin {
	//LOCATORS
	// input
	userName = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
	password = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
	employeeID = ":nth-child(2) > .oxd-input";
	firstName = ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input";
	middleName = ":nth-child(2) > :nth-child(2) > .oxd-input";
	lastName = ":nth-child(3) > :nth-child(2) > .oxd-input";
	// button
	loginButton = ".oxd-button";
	searchButton = ".oxd-form-actions > .oxd-button--secondary";
	
	// menu
	menuPIM = ":nth-child(2) > .oxd-main-menu-item";

	// Click
	addEmployee = ":nth-child(3) > .oxd-topbar-body-nav-tab-item"

	// verivy
	trueVerify = ".oxd-brand-banner > img";
	successSave = ".orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6";

	searchInput = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input';
	searchButton = 'Search';
	deleteButton = '.oxd-table-cell-actions > :nth-child(1) > .oxd-icon';
	confirmDeleteButton = '.oxd-button--label-danger';
	deletionMessage = 'Successfully Deleted';

	//ACTIONS
	// input
	inputUserName(userName) {
		cy.get(this.userName).should("be.visible").type(userName);
	}
	inputPassword(password) {
		cy.get(this.password).should("be.visible").type(password);
	}
	inputEmployeeID(employeeID){
		cy.get(this.employeeID).should("be.visible").type(employeeID);
	}
	inputFirstName(firstName){
		cy.get(this.firstName).should("be.visible").type(firstName);
	}
	inputMiddleName(middleName){
		cy.get(this.middleName).should("be.visible").type(middleName);
	}
	inputLastName(lastName){
		cy.get(this.lastName).should("be.visible").type(lastName);
	}

	// click
	clickLogin() {
		cy.get(".oxd-button").click();
	}
	clickSearchButton(){
		cy.get(".oxd-form-actions > .oxd-button--secondary").click({ force: true });
	}
	clickMenuPIM() {
		cy.get(this.menuPIM).click();
	}
	clickAddEmployee(){
		cy.get(":nth-child(3) > .oxd-topbar-body-nav-tab-item").click();
	}
	clickSaveEmployee(){
		cy.get(".oxd-button--secondary").click();
	}
	clickSearchEmployee(name) {
		cy.get(this.searchInput).type(name);
		cy.contains(this.searchButton).click({ force: true });
	}
	clickDeleteEmployee() {
	cy.get(this.deleteButton).each(($el) => {
		cy.wrap($el).click({ force: true });
	});
	cy.get(this.confirmDeleteButton).click({ force: true });
	}
	get(selector) {
		return cy.get(selector);
	}

	// verivy
	verify() {
		cy.get(this.trueVerify).should("be.visible");
	}
	verifySaveSuccess(){
		cy.get(this.successSave).should("be.visible");
	}
	verifyDeletionMessage() {
	cy.contains(this.deletionMessage);
	}
	

}
export default baseLogin;
