class baseLogin {
  email = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  password = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  loginBtn = ".oxd-button";
  dashboardImg = ".oxd-topbar-header-breadcrumb > .oxd-text";
  alertError = ".oxd-alert";
  formValidation = ":nth-child(2) > .oxd-input-group > .oxd-text";

  inputEmail(email) {
    cy.get(this.email).type(email);
  }
  inputPassword(password) {
    cy.get(this.password).type(password);
  }
  clickLogin() {
    cy.get(this.loginBtn, { timeout: 2000 }).click();
  }
  verifyDashboard() {
    cy.contains("Dashboard");
    cy.get(this.dashboardImg).should("be.visible");
  }
  showErrorAlert() {
    cy.get(this.alertError).should("be.visible");
  }
  showformValidation() {
    cy.get(this.formValidation).should("contain.text", "Required");
  }
}

export default baseLogin;
