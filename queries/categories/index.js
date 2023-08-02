const connection = require("../../db");

// this fn is used to get all categories
const getCategories = async () => {
   return connection.query('SELECT *, (SELECT COUNT(*) FROM `category`) as total FROM `category`');     
}



module.exports = { getCategories };