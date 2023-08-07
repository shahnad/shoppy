const { getNews, insertNews, insertNewsImages } = require("../queries/news");
const { SUCCESS } = require("../utils/config");
const logger = require("../utils/logger");

const getNewsController = async (req, res, next) => {
    try {
        const [rows, fields] = await getNews(req.query);
        const { total } = rows?.at(0) || 0;
        let result = [...rows]?.map(row => ({
            ...row,
            images: row?.images.split(',')?.map((image, index) => ({
                image: image,
                id: row?.image_ids?.split(',')[index]
            }))
        }))
        res.send({
            ...SUCCESS,
            data: { result, total: total }
        })
    } catch (error) {
        logger.error(error)
        res.send({ error: error })
    }
}

const insertNewsController = async (req, res, next) => {
    try {
        const [result] = await insertNews(req.body);
        const { insertId } = result;
        const [images] = await insertNewsImages({ ...req.body, news_id: insertId });
    
        res.send({
            ...SUCCESS, data: { insertId }
        })
    } catch (error) {
        logger.error(error)
        res.status(400).send({ error: error })
    }
}

module.exports = { getNewsController, insertNewsController }