/*eslint-env node, es6*/
const Router = require("restify-router").Router;

const router = new Router();

router.get("/", (req, res, next) => {

	res.send("search");
	return next();

} );

module.exports = router;