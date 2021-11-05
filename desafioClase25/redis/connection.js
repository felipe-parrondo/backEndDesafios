const redis = require("redis");

const client = redis.createClient(
    19540,
    "redis-19540.c262.us-east-1-3.ec2.cloud.redislabs.com"
);

client.auth("COIHLVEsDesqUTLhYS4M9DNf1eWvsjNC", (err) => {
    if (err) throw err;
});

module.exports = client;