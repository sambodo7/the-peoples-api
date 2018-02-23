/*eslint-env node, es6*/

const env = process.env;

const config = {

	neo4jURL: env.NEO4J_URL,
	neo4jUser: env.NEO4J_USER,
	neo4jPass: env.NEO4J_PASS,
	port: env.START_PORT || 8280

}

module.exports = config;
