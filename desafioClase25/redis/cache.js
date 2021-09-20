const redisClient = require("./connection");

exports.cacheInfo = (req, res, next) => {
    const { id } = req.params;
    redisClient.get(id, (err, data) => {
        if (err) throw err;
        if (data) res.json(JSON.parse(data));
        next();
    })
}