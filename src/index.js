/*eslint-env node, es6*/
const restify = require("restify");
const config = require("./config");

const server = restify.createServer();

server.get("/", (req, res, next) => {

    res.send("home")
    return next();

});

server.get("/tree", (req, res, next) => {

    return next();

});

/*
//// I the future sometime we can create non human tree
//// for all Galactic kind!!!!!!
server.post("/tree", (req, res, next) => {

    return next();

});

server.put("/tree", (req, res, next) => {

    return next();

});

server.delete("/tree", (req, res, next) => {

    return next();

});

*/
server.get("/tree/:treeName", (req, res, next) => {

    return next();

});

server.get("/tree/:treeName/search", (req, res, next) => {

	return next();

} );

server.get("/tree/:treeName/nodes", (req, res, next) => {

	return next();

} );

server.get("/tree/:treeName/nodes/:nodeID", (req, res, next) => {

	return next();

} );

server.post("/tree/:treeName/nodes/:nodeID", (req, res, next) => {

	return next();

} );

server.put("/tree/:treeName/nodes/:nodeID", (req, res, next) => {

	return next();

} );

server.delete("/tree/:treeName/nodes/:nodeID", (req, res, next) => {

	return next();

} );


server.listen(config.port, () => {

    console.log("%s listening at %s", server.name, server.url);

});
