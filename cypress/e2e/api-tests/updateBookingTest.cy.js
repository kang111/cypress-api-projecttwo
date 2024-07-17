describe('PUT Api Tests: Update Booking', ()=>{
    it('PUT Request: Should update a current booking', ()=>{
        let bId = 764
        cy.request({
            url: `https://restful-booker.herokuapp.com/booking/${bId}`,
            method: "PUT",
            headers: {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Cookie': 'token=abc123',
              'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
            },
            body: {
              "firstname": "Samron",
              "lastname": "Kangh",
              "totalprice": 5211,
              "depositpaid": true,
              "bookingdates": {
                "checkin": "2025-02-01",
                "checkout": "2025-04-01"
              },
              "additionalneeds": "Breakfast Lunch"
            },
          }).then((res)=>{
              expect(res.status).to.equal(200);
              cy.log(res.body)
              expect(res.body["lastname"]).to.equal("Kangh");
          });
    })
})