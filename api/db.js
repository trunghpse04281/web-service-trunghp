const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST || "sql12.freemysqlhosting.net",
    user: process.env.DB_USER || "sql12278762",
    password: process.env.DB_PASS || "ulWGBAqUxJ",
    database: process.env.DB_NAME || "sql12278762"
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

// ALTER USER 'sql12278762'@'sql12.freemysqlhosting.net' IDENTIFIED WITH mysql_native_password BY 'ulWGBAqUxJ';


