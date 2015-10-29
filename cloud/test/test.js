var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('should respond with hello Jenkins8.', function(done) {
    request(app).get('/').expect('hello Jenkins8.', done);
  });
});
