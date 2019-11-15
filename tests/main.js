const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should();
const server = require('../bin/www');

chai.use(chaiHttp);

describe('Chatroom server test', () => {
    it('Should return \'Hello world\'', (done) => {
        chai.request(server)
            .get('/hi')
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.text).to.be.equal("Hello world!");
                done();
            })
    })
})

describe('Hello world string test', function () {
    it('should be equal to \'hello world\'', function (done) {
        var test = () => { return 'Hello world' };
        expect(test()).to.be.equal('Hello world');
        done();
    });
})