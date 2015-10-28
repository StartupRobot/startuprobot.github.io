var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('should respond with hello Jenkins4.', function(done) {
    request(app).get('/').expect('hello Jenkins4.', done);
  });
});
