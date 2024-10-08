const request = require('request');
const { expect } = require('chai');

describe('Index Page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return status code 200', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should have the correct content-type header', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(response.headers['content-type']).to.contain('text/html');
      done();
    });
  });
});
