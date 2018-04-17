/*eslint-env node, es6*/

module.exports = function empowerReq(req, res, next) {
    
    req.protocol = req.isSecure() ? "https" : "http";
    req.host = req.headers.host;
    return next();

}