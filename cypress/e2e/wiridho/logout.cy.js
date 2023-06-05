const loginData = require("../../fixtures/orangeHRM/login.json");

describe("Logout", () => {
  it.only("Success Logout", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.login(loginData.validEmail, loginData.validPassword);
    cy.get(".oxd-userdropdown-tab", { timeout: 2000 }).click();
    cy.get(":nth-child(4) > .oxd-userdropdown-link", { timeout: 2000 }).click();
    cy.get(".orangehrm-login-branding > img").should("be.visible");
    cy.get(".orangehrm-login-form").should("be.visible");
  });
});
