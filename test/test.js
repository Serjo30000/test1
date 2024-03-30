const request = require('supertest');
const assert  = require('assert');
var app = require('../index');

describe('GET /api/hello', function () {
  afterEach(function (done) {
    app.close(done);
  });

  it('should return status 200', function (done) {
    request(app)
      .get('/api/hello')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        assert.strictEqual(res.text, 'Hello Test');
        done();
      });
  });
});
