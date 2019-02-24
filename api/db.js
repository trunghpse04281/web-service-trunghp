const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: process.env.DB_HOST || "remotemysql.com",
//     user: process.env.DB_USER || "NCdebdV3oK",
//     password: process.env.DB_PASS || "42yte9ZobR",
//     database: process.env.DB_NAME || "NCdebdV3oK",
//     port: process.env.DB_PORT || 3306
// });

const db = mysql.createConnection({
    server: "localhost",
    database: "android_final_project",
    user: "root",
    password: "123456"
})

db.connect(err => {
    if (err) throw err;
    console.log('DB Connected!');
});
module.exports = db;


