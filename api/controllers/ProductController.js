const db = require('./../db')

module.exports = {
    getAllProduct: (req, res) => {
        let sql = "SELECT * FROM( " +
            "SELECT row_number() over (order by id) as row_num, " +
            "id, name, price, description, image_url, category, owner " +
            "FROM android_final_project.tbl_product  as T ) as T " +
            "WHERE row_num >= ? and row_num <= ?";
        console.log(sql);
        db.query(sql, [req.params.begin, req.params.end], (err, response) => {
            if (err) throw err;
            res.json(response);
        })
    },
    getProductByCategory: (req, res) => {
        let sql;
        if (req.body.catName.trim() === 'Tất cả') {
            sql = "SELECT * FROM tbl_product WHERE 1 = 1 OR category = ? ";
        } else {
            sql = "SELECT * FROM tbl_product WHERE category = ? ";
        }
        console.log(sql);
        db.query(sql, [req.body.catName], (err, response) => {
            if (err) throw err;
            console.log(req.body.catName);
            res.json(response);
        })
    },
}