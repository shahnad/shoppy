const { getNews } = require("../queries/news");
const { SUCCESS } = require("../utils/config");

const getNewsController = async (req, res, next) => {
    console.log(req.query);
    try {
        const [rows, fields] = await getNews(req.query);
        const {total} = rows?.at(0) || 0
        res.send({
            ...SUCCESS,
            data: { rows, total: total }
        })
    } catch (error) {
        res.send({ error:error })
    }
}

module.exports = { getNewsController }