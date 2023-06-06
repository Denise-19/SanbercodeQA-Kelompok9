class baseLogin {
  username = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  password = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  loginBtn = ".oxd-button";
  dashboardImg = ".oxd-topbar-header-breadcrumb > .oxd-text";
  alertError = ".oxd-alert";
  formValidation = ":nth-child(2) > .oxd-input-group > .oxd-text";

  inputEmail(username) {
    if (username !== "") {
      cy.get(this.username).type(username);
    }
  }
  inputPassword(password) {
    if (password !== "") {
      cy.get(this.password).type(password);
    }
  }
  clickLogin() {
    cy.get(this.loginBtn, { timeout: 2000 }).click();
  }
  verifyDashboard() {
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
