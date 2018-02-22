/*eslint-env node, es6*/
const Router = require("restify-router").Router;

const router = new Router();

router.get("/", (req, res, next) => {

	return next();

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