var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('should respond with hello Jenkins9.', function(done) {
    request(app).get('/').expect('hello Jenkins9.', done);
  });
});
