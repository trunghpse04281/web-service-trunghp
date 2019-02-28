const db = require('./../db')

module.exports = {
    getAllProduct: (req, res) => {
        let sql = "SELECT * FROM tbl_product";
        console.log(sql);
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
}