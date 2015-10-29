var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('should respond with hello Jenkins7.', function(done) {
    request(app).get('/').expect('hello Jenkins7.', done);
  });
});
