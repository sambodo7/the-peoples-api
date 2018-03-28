/*eslint-env node, es6*/
const neo4j = require("neo4j-driver").v1;
const config = require("../config")

const drivers = config.trees.map( x => {
    return { name: x.name, driver: neo4j.driver( x.neo4jURL, neo4j.auth.basic(x.neo4jUser, x.neo4jPass) ) };
} ).reduce( ( acc, cur, i, array ) => { return { ...acc, [cur.name]: cur.driver }; }, {} );

function runCypher(tree, statement, callback) {
	
	const session = drivers[tree].session();
	session
	    .run(statement)
	    .then( result => {
	        
	        session.close();
	        callback(null, result);
	    })
	    .catch( error => {
	        console.error(error);
	        callback(error);
	    });

}

module.exports = runCypher
