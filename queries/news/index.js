const connection = require("../../db");
const logger = require("../../utils/logger");

// this fn is used to get all categories
const getNews = async ({ category_id = '', author = '', region_id = '', limit = 10, offset = 0 }) => {
    let conditions = [];
    if (category_id) conditions.push(`news.category_id = ${category_id}`);
    if (author) conditions.push(`news.author = ${author}`);
    if (region_id) conditions.push(`news.region_id = ${region_id}`);

    let query = `SELECT *, 
    GROUP_CONCAT(images.id) AS image_ids,
    GROUP_CONCAT(images.images) AS images,
    (SELECT COUNT(*) FROM news) as total FROM news 
    LEFT JOIN images ON images.news_id = news.id `;
    if (conditions.length > 0) query += ` WHERE ${conditions.join(' AND ')}`;
    query += ` limit ${limit} offset ${offset}`

    logger.info(query)
    return connection.query(query);
}

const insertNews = async ({ title = '', description = '', category_id = '', author = '', region_id = '' }) => {
    const insertQuery = 'INSERT INTO news (title, description,category_id,author,region_id) VALUES (?, ? , ? ,? , ?)';
    const insertData = [title, description, category_id, author, region_id];
    logger.info(insertQuery, insertData)
    return await connection.query(insertQuery, insertData);
}

const insertNewsImages = async ({ news_id, images }) => {
    try {
        const query = `INSERT INTO images (news_id, images, created_at, updated_at) VALUES (?, ?, ?, ?)`;

        const insertionPromises = images.map(async (image) => {
            const insertData = [news_id, image, new Date(), new Date()];
            return await connection.query(query, insertData);
        });

        const insertResults = await Promise.all(insertionPromises);
        return insertResults;
    } catch (error) {
        logger.error('Error inserting news images:', error);
        throw error;
    }
}



module.exports = { getNews, insertNews, insertNewsImages };