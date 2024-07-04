describe('Patch Api Tests: Partially update Booking', ()=>{
    it('PUT Request: Should update a current booking', ()=>{
        let bId = 2152
        cy.request({
            url: `https://restful-booker.herokuapp.com/booking/${bId}`,
            method: "PATCH",
            headers: {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Cookie': 'token=abc123',
              'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
            },
            body: {
              "firstname": "Simron",
              "lastname": "Kungh",
              "additionalneeds": "Lunch"
            },
          }).then((res)=>{
              expect(res.status).to.equal(200);
              cy.log(res.body)
              expect(res.body["lastname"]).to.equal("Kangh");
          });
    })
})