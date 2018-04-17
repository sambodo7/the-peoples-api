/*eslint-env node, es6*/
const Router = require("restify-router").Router;
const errs = require('restify-errors');
const runCypher = require("../../../../db/neo4j.js")

const router = new Router();

const nodeIDBaseResponse = { 
    methods: ["GET", "PUT", "DELETE" ],
    mappings: { 
        firstName: "string",
        middleName: "string",
        lastName: "string"

    } 
};

router.get("/", (req, res, next) => {

    const nodeID = req.params.nodeID;
    const cypher = `match (n{id:"${nodeID}"}) return n;`;

    console.trace( `running cypher on tree ${req.params.treeName}: ${cypher}` );

    runCypher( req.params.treeName, cypher, (err, data) => {

        if (err) {

            console.error( `Failed cypher: ${cypher}`, err );
            return next( new errs.ServiceUnavailableError( `We are having problems with the ${req.params.treeName} tree`) );
            
        }

        if ( !data.records.length ) {

            console.info( `No results for ${req.getPath()}` );
            return next( new errs.NotFoundError( `we could not find a result for personID ${req.params.nodeID}` ) );

        }

        res.json(Object.assign ( {}, res.jsonBase, data.records[0]) );
        return next();

    } );

} );

router.put("/", (req, res, next) => {

    const nodeID = req.params.nodeID;
    const cypher = `match (n{id:"${nodeID}"}) DETACH DELETE n;`;

    runCypher( req.params.treeName, cypher, (err, data) => {

        if (err) {

            console.error( `Failed cypher: ${cypher}`, err );
            return next( new errs.ServiceUnavailableError( `We are having problems with the ${req.params.treeName} tree`) );
            
        }

        res.json(data.records[0]);
        return next();

    } );

} );

router.del("/", (req, res, next) => {

    return next();

} );

module.exports = router;