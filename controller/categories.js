const { SUCCESS } = require('../utils/config');
const { getCategories } = require("../queries/categories");
const logger = require('../utils/logger');

const getCategoriesController = async (req, res, next) => {
    try {
        const [rows, fields] = await getCategories();
        const {total} = rows?.at(0) || 0
        res.send({
            ...SUCCESS,
            data: { rows, total: total }
        })
    } catch (error) {
        logger.error(error)
        res.send({ error:error })
    }
  
}



module.exports = { getCategoriesController }