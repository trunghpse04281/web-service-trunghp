const db = require('./../db')

module.exports = {
    getAllProduct: (req, res) => {
        let sql = "SELECT * FROM( " +
            "SELECT row_number() over (order by id) as row_num, " +
            "id, name, price, description, image_url, category, owner " +
            "FROM android_final_project.tbl_product  as T ) as T " +
            "WHERE row_num >= ? and row_num <= ?";
        db.query(sql, [req.params.begin, req.params.end], (err, response) => {
            if (err) throw err;
            res.json(response);
        })
    },
    getProductByCategory: (req, res) => {
        let sql;
        if (req.body.catName.trim() === 'Tất cả') {
            sql = "SELECT a.*, b.phone_number as 'ownerPhone' FROM tbl_product a JOIN tbl_user b ON a.owner = b.user_name ORDER BY ID DESC;";
        } else {
            sql = "SELECT a.*, b.phone_number as 'ownerPhone' FROM tbl_product a JOIN tbl_user b ON a.owner = b.user_name WHERE category = ? ORDER BY ID DESC";
        }
        db.query(sql, [req.body.catName], (err, response) => {
            if (err) throw err;
            console.log(req.body.catName);
            res.json(response);
        })
    },
    insertProduct: (req, res) => {
        let sql = "INSERT INTO tbl_product(name, price, description, image_url, category, owner, status) " +
            "VALUES(?,?,?,?,?,?,?); ";
        db.query(sql, [req.body.name,
        req.body.price,
        req.body.description,
        req.body.image_url,
        req.body.category,
        req.body.owner,
        req.body.status], (err, response) => {
            if (err) throw err;
            res.json(response.insertId);
        })
    },
    updateImageProduct: (req, res) => {
        let sql = "UPDATE tbl_product SET image_url = ? WHERE id = ?";
        console.log('update nè');
        db.query(sql, [req.body.imageString, req.body.id], (err, response) => {
            if (err) throw err;
            res.json(req.body.id);
        })
    },
    getProductByUser: (req, res) => {
        let sql = "SELECT * FROM tbl_product WHERE owner = ?";
        console.log('getProductByUser');
        db.query(sql, [req.body.user], (err, response) => {
            if (err) throw err;
            res.json(response);
        })
    },
}