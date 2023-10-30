const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch(statusCode) {
        case constants.VALIDATION_ERROR: 
            res.json({
                tiltle: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                tiltle: "Not Found",
                message: err.message, 
                stackTrace: err.stack
            })
            break;
        case constants.UNAUTHORIZED:
            res.json({
                tiltle: "Un Authorized",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.FORBIDDEN:
            res.json({
                tiltle: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                tiltle: "Server Error",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        default:
            console.log("No error ,good to go");
            break;
    }
    
};

module.exports = errorHandler;