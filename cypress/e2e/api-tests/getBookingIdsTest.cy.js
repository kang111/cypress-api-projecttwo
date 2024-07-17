describe('Get Booking Ids', ()=>{
    
    beforeEach( ()=>{
        //cy.visit(Cypress.env('loginpage_url'));
    })

    it('Should get all booking ids', ()=>{
        cy.request({
            url: 'https://restful-booker.herokuapp.com/booking/',
            method: 'GET'
        }).then((res)=>{
                expect(res.status).to.eq(200);
                expect(res.statusText).to.eq("OK");
                expect(res.headers["x-powered-by"]).to.eq("Express")
                //cy.log(res);
    
            })
    })
    it('Should get all booking ids with specified full name', ()=>{
        cy.request({
            url: 'https://restful-booker.herokuapp.com/booking',
            method: 'GET',
            qs:{
                firstname: "John",
                lastname: "Smith"
            }
        }).then((res)=>{
                expect(res.status).to.eq(200);
                expect(res.body.length).to.be.greaterThan(0);
            })
    })
    it('Should get all booking ids with between checkin, checkout time', ()=>{
        cy.request({
            url: 'https://restful-booker.herokuapp.com/booking',
            method: 'GET',
            qs:{
                checkin: '2017-12-31',
                checkout: "2019-01-01"
            }
        }).then((res)=>{
                expect(res.status).to.eq(200);
                expect(res.body.length).to.be.greaterThan(0);
            })
    })
})