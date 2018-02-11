const Router = require("restify-router").Router;

const router = new Router();

router.get("/", (req, res, next) => {

	res.send("nodes");
	return next();

} );

router.add("/:nodeID", require("./nodes/nodeID.js") );

module.exports = router;