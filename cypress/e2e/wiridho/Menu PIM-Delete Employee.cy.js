const loginData = require("../../fixtures/orangeHRMwiridho/login.json");

describe("Menu PIM - Delete Employee", () => {
  it("TC_D07 : Delete Employee Successfully", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.login(loginData.validUsername, loginData.validPassword);
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
    cy.get(
      ":nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon"
    ).click({ force: true });
    cy.get(".oxd-button--label-danger").click();
  });
});
