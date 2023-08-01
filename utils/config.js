const success = {
    status: 200,
    statusText: 'OK'
}

const notFound = {
    status: 404,
    statusText: 'Not Found'
}


const forbidden = {
    status: 400,
    statusText: 'Forbidden Error'
}

module.exports = {
    success,
    notFound,
    forbidden
}
