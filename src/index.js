/*eslint-env node, es6*/
const restify = require("restify");
const config = require("./config");
const treeRouter = require("./routes/tree.js");
const homeResponse = require("./json-resolved/swagger.json");

const server = restify.createServer();

server.use( require("./middleware/empowerReq") );

server.get("/", (req, res, next) => {

    res.json(homeResponse);
    return next();

});

treeRouter.applyRoutes(server, "/tree");

server.listen(config.port, () => {

    console.log("%s listening at %s", server.name, server.url);

});
