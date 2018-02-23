/*eslint-env node, es6*/
const restify = require("restify");
const config = require("./config");
const treeRouter = require("./routes/tree.js");
const homeResponse = require("./json-resolved/swagger.json")

const server = restify.createServer();

server.get("/", (req, res, next) => {

    res.json(homeResponse);
    return next();

});

treeRouter.applyRoutes(server, "/tree");

if ( !config.neo4jURL || !config.neo4jUser || !config.neo4jPass ) {

    console.error("environment variables NEO4J_URL, NEO4J_USER and NEO4J_PASS must be set.\n"
        + "Please set these and try again");

} else {

    server.listen(config.port, () => {

        console.log("%s listening at %s", server.name, server.url);

    });

}

