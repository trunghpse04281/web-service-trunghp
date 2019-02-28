const db = require('./../db')

module.exports = {
    getAllCategory: (req, res) => {
        let sql = "SELECT * FROM tbl_category";
        console.log(sql);
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
}