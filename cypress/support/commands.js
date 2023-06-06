// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
import baseLogin from "./PageObject/login-wiridho.cy";
import actionEditEmployee from "./PageObject/PIM-wiridho.cy";
const loginData = require("../fixtures/orangeHRMwiridho/login.json");

Cypress.Commands.add("login", (email, password) => {
  const BASE_LOGIN = new baseLogin();
  BASE_LOGIN.inputEmail(email);
  BASE_LOGIN.inputPassword(password);
  BASE_LOGIN.clickLogin();
});

Cypress.Commands.add("menuPIM", () => {
  const BASE_LOGIN = new baseLogin();
  const ACTION_EDIT = new actionEditEmployee();
  cy.login(loginData.validUsername, loginData.validPassword);
  BASE_LOGIN.verifyDashboard();
  ACTION_EDIT.clickMenu();
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
