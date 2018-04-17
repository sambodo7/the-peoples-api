/*eslint-env node, es6*/
const restify = require("restify");
const errs = require('restify-errors');
const config = require("./config");
const treeRouter = require("./routes/tree.js");
const homeResponse = require("./json-resolved/swagger.json");

const server = restify.createServer();
const trees = config.trees.map( x => x.name );

server.use( require("./middleware/empowerReq") );
server.use( require("./middleware/baseJSONResponse") );

server.param( "treeName", (req, res, next) => {

    if ( !~trees.indexOf( req.params.treeName ) ) {
        return next( new errs.NotFoundError(`There is no tree called ${req.params.treeName} here`) );
    } else {
        return next();
    }

} );

server.get("/", (req, res, next) => {

    res.json(homeResponse);
    return next();

});

treeRouter.applyRoutes(server, "/tree");

server.listen(config.port, () => {

    console.log("%s listening at %s", server.name, server.url);

});
