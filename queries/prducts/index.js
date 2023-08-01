const connection = require("../../db");

const getProductsQuery = async () => {
    try {
        const [rows, fields] = await connection.query(` SELECT *,
        products.name as title,
        (SELECT COUNT(*) FROM products join stocks WHERE stocks.prod_id = products.id) AS total,
        GROUP_CONCAT(image_gallery.image) AS images,
        stocks.batch, stocks.mfd_on, stocks.expired_on, stocks.stock, stocks.will_expire_on, stocks.mrp, price,
        categories.name as category
        FROM products
        JOIN stocks ON stocks.prod_id = products.id
        LEFT JOIN image_gallery ON image_gallery.prod_id = products.id
        LEFT JOIN categories ON categories.id = products.category_id
        GROUP BY products.id, stocks.batch, stocks.mfd_on, stocks.expired_on, stocks.stock, stocks.will_expire_on, stocks.mrp, price
    `);
        const { total } = rows?.at(0);
        return { rows, success: true, total }
    } catch (error) {
        return { error, success: false }
    }
}
//  join stocks where stocks.prod_id = products.id

module.exports = { getProductsQuery }