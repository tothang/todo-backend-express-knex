module.exports = function (req, res, next) {
    if (req.method === "GET" || req.method === "POST") {
        if (!req.query.limit) {
            req.query.limit = 10;
        }
        if (!req.query.page) {
            req.query.page = 1;
        }
    }
    return next();
};
