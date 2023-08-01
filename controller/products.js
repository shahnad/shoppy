const { getProductsQuery } = require("../queries/prducts");
const { SUCCESS } = require("../utils/config");

const getProductsController = async (req, res, next) => {
    const { rows, success, error, total } = await getProductsQuery();

    

    success ? res.send({
        ...SUCCESS,
        data: { rows, total }
    }) : res.send({
        error
    })
}

module.exports = { getProductsController }