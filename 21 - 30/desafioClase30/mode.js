const { exec } = require("child_process");

if(process.argv[2] == "pm2" && process.argv[3] == "fork") {
    exec("npm run pm2Fork");
} else if(process.argv[2] == "pm2" && process.argv[3] == "cluster") {
    exec("npm run pm2Cluster");
} else if(process.argv[2] == "forever" && process.argv[3] == "fork") {
    exec("npm run forever");
};