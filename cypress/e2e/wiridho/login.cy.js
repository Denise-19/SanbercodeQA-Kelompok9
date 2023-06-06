import baseLogin from "../../support/PageObject/login-wiridho.cy";
const loginData = require("../../fixtures/orangeHRMwiridho/login.json");

describe("Login Functionality", () => {
  const BASE_LOGIN = new baseLogin();
  context("Login Success", () => {
    it("TC_D01 : Sukses Login dengan valid credential", () => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      cy.login(loginData.validUsername, loginData.validPassword);
      BASE_LOGIN.verifyDashboard();
    });
  });
  context("Login Failure", () => {
    it("TC_D02 : Login gagal (Wrong username)", () => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      cy.login(loginData.wrongUsername, loginData.validPassword);
      BASE_LOGIN.showErrorAlert();
    });
    it("TC_D03 : Login gagal (Input blank data)", () => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      cy.login(loginData.blankUsername, loginData.blankPassword);
      BASE_LOGIN.showformValidation();
    });
  });
});
