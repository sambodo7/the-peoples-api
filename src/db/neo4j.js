/*eslint-env node, es6*/
const neo4j = require("neo4j-driver").v1;
const config = require("../config")

const driver = neo4j.driver("bolt://hobby-geefdaeefcom.dbs.graphenedb.com:24786", neo4j.auth.basic("v303", "GtGq5rldxu"));


function runCyper(statement, callback) {

const session = driver.session();
session
    .run(statement)
    .then( result => {
        
        session.close();
        callback(result);
    })
    .catch( error => {
        console.log(error);
    });

}

module.exports = runCyper
