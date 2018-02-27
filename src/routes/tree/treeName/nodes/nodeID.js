/*eslint-env node, es6*/
const Router = require("restify-router").Router;
const runCypher = require("../../../../db/neo4j.js")

const router = new Router();

router.get("/", (req, res, next) => {

	const nodeID = req.params.nodeID;

	runCypher( req.param.treeName, `match (n) where id(n) = ${nodeID} return n;`, (err, data) => {

		if (err) { return next(err) }

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