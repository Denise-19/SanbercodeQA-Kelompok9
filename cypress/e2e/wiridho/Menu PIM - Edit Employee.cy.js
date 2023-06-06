const loginData = require("../../fixtures/orangeHRMwiridho/login.json");
const dataEmployee = require("../../fixtures/orangeHRMwiridho/editEmployee.json");
import baseLogin from "../../support/PageObject/login-wiridho.cy";
import actionEditEmployee from "../../support/PageObject/PIM-wiridho.cy";

describe("Menu PIM - Edit Employee", () => {
  const ACTION_EDIT = new actionEditEmployee();
  it("TC_D05 : Successfully Edit Employee", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.menuPIM();
    ACTION_EDIT.clickEdit();
    ACTION_EDIT.inputName(
      dataEmployee.firstName,
      dataEmployee.middleName,
      dataEmployee.lastName,
      dataEmployee.nickName
    );
    ACTION_EDIT.clickSave();
    ACTION_EDIT.successToast();
  });
  it.only("TC_D06 : Failed Edit Employee : Check Required Functionality", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.menuPIM();
    ACTION_EDIT.clickEdit();
    ACTION_EDIT.inputName(
      dataEmployee.blankFirstName,
      dataEmployee.middleName,
      dataEmployee.blankLastName,
      dataEmployee.nickName
    );
    ACTION_EDIT.formValidation;
  });
});
