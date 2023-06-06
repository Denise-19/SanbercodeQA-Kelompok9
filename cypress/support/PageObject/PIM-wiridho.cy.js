class actionEditEmployee {
  // menu
  menuPIM = ":nth-child(2) > .oxd-main-menu-item";
  editButton =
    ":nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon";
  deleteButton =
    ":nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon";

  //Input fields
  firstName =
    ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input";
  middleName = ":nth-child(2) > :nth-child(2) > .oxd-input";
  lastName = ":nth-child(3) > :nth-child(2) > .oxd-input";
  nickName =
    ":nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input";

  // Button Save
  saveButton = ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button";
  // success toast
  toast = ".oxd-toast";
  // form required validation
  required = ".--name-grouped-field > :nth-child(1) > .oxd-text";

  clickDelete() {
    cy.get(this.deleteButton).click({ force: true });
  }

  clickEdit() {
    cy.get(this.editButton).click({ force: true });
  }

  clickMenu() {
    cy.get(this.menuPIM).click();
  }

  inputName(firstName, middleName, lastName, nickName) {
    // if (firstName !== "") {
    cy.get(this.firstName).type(firstName);
    // }
    // if (lastName !== "") {
    cy.get(this.lastName).type(lastName);
    // }
    cy.get(this.middleName).type(middleName);
    cy.get(this.nickName).type(nickName);
  }
  clickSave() {
    cy.get(this.saveButton).click();
  }

  successToast() {
    cy.get(this.toast).should("be.visible");
  }

  formValidation() {
    cy.get(this.required).should('contain.text", "Required');
  }
}

export default actionEditEmployee;
