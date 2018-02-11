/*eslint-env node, es6*/
const restify = require("restify");
const config = require("./config");
const treeRouter = require("./routes/tree.js"); // return a Router with only posts route definitions

const server = restify.createServer();

server.get("/", (req, res, next) => {

    res.send("home");
    return next();

});

treeRouter.applyRoutes(server, "/tree");


server.listen(config.port, () => {

    console.log("%s listening at %s", server.name, server.url);

});
