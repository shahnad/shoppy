const { success: SUCCESS } = require('../utils/config');
const { getCategories } = require("../queries/categories")

const getCategoriesController = async (req, res, next) => {
    const { rows, success, error, total } = await getCategories();
    success ? res.send({
        ...SUCCESS,
        data: { rows, total }
    }) : res.send({
        error
    })

}

module.exports = { getCategoriesController }