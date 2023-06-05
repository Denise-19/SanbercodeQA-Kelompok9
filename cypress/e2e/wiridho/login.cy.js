import baseLogin from "../../support/PageObject/loginPage.cy";
const loginData = require("../../fixtures/orangeHRM/login.json");

describe("Login Functionality", () => {
  const BASE_LOGIN = new baseLogin();
  context("Login Success", () => {
    it("TC-D01 : Sukses Login dengan valid credential", () => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      cy.login(loginData.validEmail, loginData.validPassword);
    });
  });
  context("Login Failure", () => {
    it("TC-D02 : Login gagal (Wrong username)", () => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      BASE_LOGIN.inputEmail(loginData.wrongEmail);
      BASE_LOGIN.inputPassword(loginData.validPassword);
      BASE_LOGIN.clickLogin();
      BASE_LOGIN.showErrorAlert();
    });
    it("TC-D03 : Login gagal (Input blank data)", () => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      BASE_LOGIN.clickLogin();
      BASE_LOGIN.showformValidation();
    });
  });
});
