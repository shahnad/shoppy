const connection = require("../../db");

// this fn is used to get all categories
const getCategories = async () => {
    try {
        const [rows, fields] = await connection.query('SELECT * FROM `categories`');
        return { rows, success: true }
    } catch (error) {
        return { error, success: false }
    }
}



module.exports = getCategories;