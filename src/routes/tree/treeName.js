const Router = require("restify-router").Router;

const router = new Router();

router.get("/", (req, res, next) => {

	res.send(req.params.treeName)
    return next();

});

router.add("/search", require("./treeName/search.js"));
router.add("/nodes", require("./treeName/nodes.js"));

module.exports = router;
