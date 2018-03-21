/*eslint-env node, es6*/
const Router = require("restify-router").Router;
const errs = require('restify-errors');
const runCypher = require("../../../../db/neo4j.js")

const router = new Router();

router.get("/", (req, res, next) => {

	const nodeID = req.params.nodeID;
	const cypher = `match (n) where id(n) = ${nodeID} return n;`

	console.trace( `running cypher on tree ${req.params.treeName}: ${cypher}` );

	runCypher( req.params.treeName, cypher, (err, data) => {

		if (err) {

		    console.error( `Failed cypher: ${cypher}`, err ) 
			return next( new errs.ServiceUnavailableError( `We are having problems with the ${req.params.treeName} tree`) );
			
		}

	    res.json(data.records[0]);
	    return next();

	} );

} );

router.post("/", (req, res, next) => {

	return next();

} );

router.put("/", (req, res, next) => {

	return next();
} );

router.del("/", (req, res, next) => {

	return next();

} );

module.exports = router;