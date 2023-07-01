module.exports = (req, res, next) => {
    console.log(`[${new Date(
        Date.now())
        .toISOString()
        }] ${req.method} ${req.path} ${req.httpVersion} ${res.statusCode}`);
    next()
}