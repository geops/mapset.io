describe("ContactForm", () => {
  beforeEach(() => {
    cy.visit("/de");
  });

  it("should fill the form and send it", () => {
    cy.get("[name=name]").type("Cypress Test");
    cy.get("[name=company]").type("Geops");
    cy.get("[name=interest]").select("mapset maxi");
    cy.get("[name=email]").type("cypress@geops.com");
    cy.get("[name=message]").type(
      "Message from cypress send on " + new Date().toISOString(),
    );
    cy.get("[name=called-back]").check();
    cy.get("[name=telephone]").type("+41 1234 56789");
    cy.get("[name=newsletter]").check();
    cy.get("[name=privacy]").check();
    cy.get("[type=submit]").click();
    cy.get("[data-testid=success]").should("be.visible");
  });
});
