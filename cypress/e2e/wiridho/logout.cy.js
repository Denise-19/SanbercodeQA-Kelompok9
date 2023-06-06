const loginData = require("../../fixtures/orangeHRMwiridho/login.json");

describe("Logout", () => {
  it.only("TC_D04 : Logout Successfully", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.login(loginData.validUsername, loginData.validPassword);
    cy.get(".oxd-userdropdown-tab", { timeout: 2000 }).click();
    cy.get(":nth-child(4) > .oxd-userdropdown-link", { timeout: 2000 }).click();
    cy.get(".orangehrm-login-branding > img").should("be.visible");
    cy.get(".orangehrm-login-form").should("be.visible");
  });
});
