/*eslint-env node, es6*/

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const runCypher = require("/../db/neo4j.js")

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('PersonID', () => {

	beforeEach((done) => { //Before each test we empty the database
        runCypher( "test", `match (n) where id(n) = return n;`, done );     
    });
    
    /*
    * Test the /GET route
    */
    describe('/GET PersonID', () => {
        it('it should GET information about person with ID 1', (done) => {
            chai.request(server)
            .get('/book')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });

});