describe("The general website", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/olimp/dist");
  });

  it("has a working NavMenu drawer", () => {
    cy.get(".MuiDrawer-root .MuiPaper-root")
      .should("exist")
      .and("not.be.visible");
    cy.get('button[aria-label="Открыть меню"]').click();
    cy.get(".MuiDrawer-root .MuiPaper-root").should("be.visible");
  });

  it("has a GoUpButton when scrolled down", () => {
    cy.get('button[aria-label="Наверх"]')
      .should("exist")
      .and("not.be.visible");
    cy.scrollTo(0, 1200);
    cy.get('button[aria-label="Наверх"]').should("be.visible");
    cy.get('button[aria-label="Наверх"]').click();
    cy.window().its("scrollY").should("be.closeTo", 0, 50);
  });

  it("has a working link to keep studying", () => {
    cy.location("pathname").should("eq", "/olimp/dist");
    cy.get('a[aria-label="Продолжить обучение"]').click();
    cy.location("pathname").should("not.be", "/olimp/dist");
  });
});
