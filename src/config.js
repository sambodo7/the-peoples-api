/*eslint-env node, es6*/

const env = process.env;

const config = {

    trees: [
        {
            name:"realPeople",
            neo4jURL: env.REAL_NEO4J_URL,
            neo4jUser: env.REAL_NEO4J_USER,
            neo4jPass: env.REAL_NEO4J_PASS
        },
        {
            name:"testPeople",
            neo4jURL: env.NEO4J_URL || "bolt://localhost:7687",
            neo4jUser: env.NEO4J_USER || "neo4j",
            neo4jPass: env.NEO4J_PASS || "password"
        }
    ],
    port: env.START_PORT || 8280,
    testURL: env.TESTURL || "localhost",
    testTree: "testPeople"

}

module.exports = config;
