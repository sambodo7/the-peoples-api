/*eslint-env node, es6*/

const runCypher = require("../src/db/neo4j")
const config = require("../src/config")

//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);


describe("PersonID when connection to database is down", () => {

    describe("/GET PersonID @network", () => {

        it("it should respone with a status 503 and message", (done) => {

            chai.request(`http://${config.testURL}:${config.port}`)
            .get("/tree/testPeople/nodes/1")
            .end((err, res) => {

                res.should.have.status(503);
                done();

            });

        });

    });

});

describe("PersonID @integration", () => {

    beforeEach( (done) => {
        
        runCypher( config.testTree, "MATCH (n) DETACH DELETE n", (err) => {
            runCypher( config.testTree, "", done );
        } );

    });

    describe("/GET PersonID", () => {

        it("it should GET information about person with ID 1", (done) => {

            chai.request(`http://${config.testURL}:${config.port}`)
            .get( `/tree/${config.testTree}/nodes/1` )
            .end((err, res) => {

                if ( err ) {
                    throw err;
                }
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();

            });

        });

    });

});
