/*eslint-env node, es6*/
const neo4j = require("neo4j-driver").v1;
const config = require("../config")

const driver = neo4j.driver( config.neo4jURL, neo4j.auth.basic(config.neo4jUser, config.neo4jPass) );


function runCypher(statement, callback) {

const session = driver.session();
session
    .run(statement)
    .then( result => {
        
        session.close();
        callback(null, result);
    })
    .catch( error => {
        console.log(error);
        callback(error);
    });

}

module.exports = runCypher
