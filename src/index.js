/*eslint-env node, es6*/
const restify = require('restify');
const config = require( "./config" );

const server = restify.createServer();

server.listen(config.port, function() {
  console.log('%s listening at %s', server.name, server.url);
});
