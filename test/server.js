var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('heapi', function () {
  describe('/GET ', function () {
    it('it should GET /', function (done) {
      chai.request(server)
        .get('/')
        .end(function (err, res) {
          res.should.have.status(200);
          res.text.should.eql('');
         done();
        });
    });
  });

  describe('/GET 31.31.76.199', function () {
    it('it should GET 31.31.76.199', function (done) {
      chai.request(server)
        .get('/31.31.76.199')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('serverv4').eql('216.66.86.122');
          done();
        });
    });
  });

  describe('/GET 31.31.76.199/serverv4', function () {
    it('it should GET 31.31.76.199 serverv4', function (done) {
      chai.request(server)
        .get('/31.31.76.199/serverv4')
        .end(function (err, res) {
          res.should.have.status(200);
          res.text.should.eql('216.66.86.122');
         done();
        });
    });
  });
});
