const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST || "remotemysql.com",
    user: process.env.DB_USER || "XwcCLxaOuP",
    password: process.env.DB_PASS || "f6mbcvHCko",
    database: process.env.DB_NAME || "XwcCLxaOuP",
    port: process.env.DB_PORT || 3306
});

// const db = mysql.createConnection({
//     server: "localhost",
//     database: "android_final_project",
//     user: "root",
//     password: "123456"
// })

db.connect(err => {
    if (err) throw err;
    console.log('DB Connected!');
});
module.exports = db;


