describe('GET Test 1 i 2', () => {
    it('should make GET request to /get', () => {
        cy.request('GET', 'https://httpbin.org/get').then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('url');
        });
    });

    it('should make POST request to /post with data', () => {
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                key: 'value'
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.json).to.deep.equal({ key: 'value' });
        });
    });
});
describe('DELETE Test 3', () => {
    it('should make a successful DELETE request', () => {
        cy.request('DELETE', 'https://httpbin.org/delete').then((response) => {
            expect(response.status).to.equal(200);
        });
    });
});
describe('POST test 4', () => {
    const request = {
      method: 'POST',
      url: 'https://httpbin.org/post',
      failOnStatusCode: false
    };
  
    it('response code should be 200 and body should contain expected data', () => {
        cy.request(request).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('url');
        });
    });
});
describe('GET Test 5', () => {
    it('should make a successful GET request with random query parameter', () => {
        const randomNumber = getRandomInt(100);
        
        cy.request(`GET`, `https://httpbin.org/get?random${randomNumber}`).then((response) => {
            expect(response.status).to.equal(200);
        });
    });
});
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

describe('POST test 6', () => {
    it('should send a POST request with form data and check the response', () => {
        const formData = {
            name: 'John Doe',
            email: 'john@example.com'
        };
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: formData
        }).then((response) => {
            expect(response.status).to.equal(200);

            expect(response.body).to.have.property('json');
            expect(response.body.json).to.deep.equal(formData);
        });
    });
});
describe('GET Test 7', () => {
    it('should check if the request duration is less than 1500 ms', () => {
    
        cy.request('GET', 'https://httpbin.org/delay/1').then((response) => {
            expect(response.duration).to.be.lessThan(1500);
        });
    });
});
describe('API Test 8', () => {
    it('should validate the response data', () => {
        cy.request('GET', 'https://httpbin.org/ip').then((response) => {
            expect(response.status).to.equal(200); 
            expect(response.body).to.have.property('origin'); 
        });
    });
});
describe('API Test 9', () => {
    it('should validate the response status', () => {
        cy.request('GET', 'https://httpbin.org/status/200').then((response) => {
            expect(response.status).to.equal(200);
        });
    });
});
describe('GET Test 10', () => {
    it('should validate the response status from a GET request with a 404 status code', () => {
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/status/404',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(404);
        });
    });
});
