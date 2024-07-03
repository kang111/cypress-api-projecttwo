describe('Get Booking Ids', ()=>{
    
    beforeEach( ()=>{
        //cy.visit(Cypress.env('loginpage_url'));
    })

    it('get request: booking ids', ()=>{
        cy.request('GET', 'https://restful-booker.herokuapp.com/booking').then((res)=>{
            expect(res.status).to.eq(200);
            cy.log(res);

        })
    })
})