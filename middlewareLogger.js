const logRequest = (req, res, next) => { 
    var logPayload = {};
    logPayload.path = req.path;
    logPayload.hostName = req.hostname;
    logPayload.method = req.method;
    logPayload.params = req.params;
    logPayload.headers = req.headers;
    
    console.log(JSON.stringify(logPayload)); 
    next(); 
}

module.exports = { 
    logRequest
};

