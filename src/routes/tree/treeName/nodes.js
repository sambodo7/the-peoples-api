/*eslint-env node, es6*/
const Router = require("restify-router").Router;

const router = new Router();

router.get("/", (req, res, next) => {

	const {host, protocol, url} = req;

	res.json({
		nodesURI: `${protocol}://${host}${url}/{nodeID}`
	});
	return next();

} );

router.add("/:nodeID", require("./nodes/nodeID.js") );

module.exports = router;