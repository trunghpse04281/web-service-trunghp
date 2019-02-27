const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM tblaccount';
        console.log(sql);
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    login: (req, res) => {
        let sql = 'SELECT * FROM tblaccount WHERE user_name = ? AND password = ? ';
        console.log(sql);
        db.query(sql, [req.body.user_name, req.body.password], (err, response) => {
            if (err) throw err
            console.log(req.params.user_name);
            res.json(response[0]);
        })
    },
};