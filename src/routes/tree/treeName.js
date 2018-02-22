/*eslint-env node, es6*/
const Router = require("restify-router").Router;

const router = new Router();

router.get("/", (req, res, next) => {

	const {host} = req.headers;
	const {url} = req;
	const protocol = req.isSecure() ? "https" : "http";

	res.json({
		searchURI: `${protocol}://${host}${url}/{search}`,
		nodesURI: `${protocol}://${host}${url}/{nodes}`
	});
    return next();

});

router.add("/search", require("./treeName/search.js"));
router.add("/nodes", require("./treeName/nodes.js"));

module.exports = router;
