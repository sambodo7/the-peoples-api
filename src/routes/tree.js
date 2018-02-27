/*eslint-env node, es6*/
const Router = require("restify-router").Router;
const http = require("http");
const config = require("../config");

const router = new Router();

router.get("/", (req, res, next) => {

	const {host, protocol, url} = req;

	const response = {
		trees: config.trees.map( x => x.name ),
		uri: `${protocol}://${host}${url}/{treeName}`
	}

	res.json(response);
    return next();

});

/*
//// In the future sometime we can create non human tree
//// for all Galactic kind!!!!!!
router.post("/", (req, res, next) => {

    return next();

});

router.put("/", (req, res, next) => {

    return next();

});

router.delete("/", (req, res, next) => {

    return next();

});

*/

router.add("/:treeName", require("./tree/treeName.js"));


module.exports = router;