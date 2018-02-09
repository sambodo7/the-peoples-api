/*eslint-env node, es6*/
const restify = require("restify");
const config = require("./config");

const server = restify.createServer();

server.get("/", (req, res, next) => {

    res.send("home")
    return next();

});

server.post("/tree", (req, res, next) => {

    return next();

});

server.get("/tree", (req, res, next) => {

    return next();

});

server.get("/tree/:treeName", (req, res, next) => {

    return next();

});

server.listen(config.port, () => {

    console.log("%s listening at %s", server.name, server.url);

});
