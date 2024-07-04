describe("Create Booking Tests: POST Request", () => {
  it("POST request: Should create new Booking", () => {
    cy.request({
      url: `https://restful-booker.herokuapp.com/booking`,
      method: "POST",
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json"
      },
      body: {
        "firstname": "Samron",
        "lastname": "Kang",
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
        expect(res.body.booking["firstname"]).to.equal("Samron");
    });
  });
});
