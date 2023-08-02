const connection = require("../../db");

// this fn is used to get all categories
const getNews = async ({ category_id = '', author = '', region_id = '' }) => {
    let conditions = [];

    if (category_id) conditions.push(`category_id = ${category_id}`);
    if (author) conditions.push(`author = ${author}`);
    if (region_id) conditions.push(`region_id = ${region_id}`);

    let query = `SELECT *, (SELECT COUNT(*) FROM news) as total FROM news`;

    if (conditions.length > 0) {
        query += ` WHERE ${conditions.join(' AND ')}`;
    }

    console.log(query);
    return connection.query(query);
}



module.exports = { getNews };