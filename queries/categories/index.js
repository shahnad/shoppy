const connection = require("../../db");

// this fn is used to get all categories
const getCategories = async () => {
    try {
        const [rows, fields] = await connection.query('SELECT *, (SELECT COUNT(*) FROM `categories`) as total FROM `categories`');
        const { total } = rows?.at(0);
        return { rows, success: true, total }
    } catch (error) {
        return { error, success: false }
    }
}



module.exports = { getCategories };