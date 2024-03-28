// describe("Pierwszy blok testów", () => {
//     it("Wizyta na stronie GoIT", () => {
//         cy.visit("https://www.edu.goit.global/account/login")
//     });
//     it("Wpisz email", () => {
//         cy.visit("https://www.edu.goit.global/account/login") 
//         cy.get('#user_email').type("testowyqa@qa.team");
//         cy.get('#user_password').type('QA!automation-1');
//         cy.get('.eckniwg2').click();
//     })
// });
describe("Zalogowanie", () => {
    it("ZalogowanieNumer2", () => {
 cy.logIn("user888@gmail.com", "1234567890");
 cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView();
 cy.wait(2000)
 cy.get(':nth-child(12) > .next-bve2vl').click();
 cy.wait(2000)
});
})
 it("ZalogowanieNumer1", () => {
 cy.logIn("testowyqa@qa.team", "QA!automation-1");
 cy.get(':nth-child(8) > .next-bve2vl').scrollIntoView();
 cy.wait(2000)
 cy.get(':nth-child(8) > .next-bve2vl').click();
 cy.wait(2000)
});