describe('All Booking GET Tests',()=>{
    it('GET Request: Should return booking info in xml format', ()=>{
        let bid = 465;
        cy.request({
            url: `https://restful-booker.herokuapp.com/booking/${bid}`,
            method: 'GET',
            headers:{
                'Accept':'application/xml'
            }
        }).then((res)=>{
            expect(res.status).to.equal(200);

            expect(res.headers['content-type']).to.contain("text/html; charset=utf-8");
        
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(res.body, 'application/xml');
            const specificNode = xmlDoc.getElementsByTagName('totalprice')[0];
            expect(specificNode.textContent).to.equal('111');
        })
    })
    it('GET Reqest: Should return booking info in JSON format when accept header not specified', ()=>{
        let bid = 465;
        cy.request({
            url: `https://restful-booker.herokuapp.com/booking/${bid}`,
            method: 'GET'
        }).then((res)=>{
            expect(res.status).to.equal(200);
            // expect(res.body.firstname).to.eq("Josh");
            // expect(res.body.lastname).to.eq("Allen");
            // expect(res.body.bookingdates.checkin).to.eq("2018-01-01");
            // expect(res.body.bookingdates.checkout).to.eq("2019-01-01");
            expect(res.headers['content-type']).to.contain("application/json; charset=utf-8");
            expect(res.body.totalprice).to.eq(111);
            expect(res.body.depositpaid).to.eq(true);
        })
    })
})