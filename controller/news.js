const { getNews } = require("../queries/news");
const { SUCCESS } = require("../utils/config");
const logger = require("../utils/logger");

const getNewsController = async (req, res, next) => {
    try {
        const [rows, fields] = await getNews(req.query);
        const {total} = rows?.at(0) || 0
        res.send({
            ...SUCCESS,
            data: { rows, total: total }
        })
    } catch (error) {
        logger.info(error)
        res.send({ error:error })
    }
}

module.exports = { getNewsController }