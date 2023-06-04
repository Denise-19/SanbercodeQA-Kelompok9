describe("Delete Employee from PIM menu", () => {
    beforeEach(() => {
      // Visit the URL
      cy.visit("https://opensource-demo.orangehrmlive.com/");
  
      // Log in as admin
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click()
  
      // Go to PIM menu
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    });
  
    it("should delete an employee", () => {
        // Search for the employee
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type("Hope");
        cy.contains("Search").click({ force: true }); // Click the search button by its text
    
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div').should('contain.text', 'Hope');
    
        // Select the employee from the search results
        cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').each(($el) => {
          cy.wrap($el).click(); // Click each delete button one by one
        });
    
        // Confirm the deletion
        cy.get('.oxd-button--label-danger').click({ force: true }); // Click the confirmation button with force
    
        // Verify the deletion message
        cy.contains("Successfully Deleted");
      });
    });