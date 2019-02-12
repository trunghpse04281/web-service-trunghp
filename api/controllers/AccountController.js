const mssql = require('mssql')
const db = require('../db')



module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM TBLAccount';
        mssql.connect(db, async function (err) {
            if (err) console.log(err);
            var request = new mssql.Request();
            await request.query(sql, function (err, record) {
                if (err) console.log(err);
                res.send(record);
                mssql.close();
            })
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM TBLAccount WHERE id = @id_param';
        mssql.connect(db, async function (err) {
            if (err) console.log(err);
            var request = new mssql.Request();
            await request.input('id_param', mssql.Int, [req.params.productId])
                .query(sql, function (err, record) {
                    if (err) console.log(err);
                    res.send(record);
                    mssql.close();
                })
        })
    },
    update: (req, res) => {
        let data = req.body; 
        let sql = 'UPDATE TBLAccount SET user_name = @username,'
            + ' password = @password WHERE id = @id_param';
        mssql.connect(db, async function (err) {
            if (err) console.log(err);
            var request = new mssql.Request();
            await request.input('username', mssql.TYPES.NVarChar, data.username)
                .input('password', mssql.TYPES.NVarChar, data.password)
                .input('id_param', mssql.TYPES.Int, [req.params.productId])
                .query(sql, function (err, record) {
                    if (err) console.log(err);
                    res.send(record);
                    mssql.close();
                })
        })
    },
};