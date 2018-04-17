/*eslint-env node, es6*/

module.exports = function baseJSONResponse(req, res, next) {
    
    res.jsonBase = {
    	url: req.url
    };
    return next();

}