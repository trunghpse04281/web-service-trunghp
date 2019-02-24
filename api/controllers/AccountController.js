const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM TBLAccount';
        console.log(sql);
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    login: (req, res) => {
        let sql = 'SELECT * FROM TBLAccount WHERE user_name = ? AND password = ? ';
        console.log(sql);
        db.query(sql, [req.params.user_name, req.params.password], (err, response) => {
            if (err) throw err
            console.log(req.params.user_name);
            res.json(response[0]);
        })
    },
};