const Router = require("restify-router").Router;

const router = new Router();

router.get("/", (req, res, next) => {

	res.send("tree");
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