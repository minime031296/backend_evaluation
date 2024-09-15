const {Router} = require('express')
const { PostRoute, GetRoute } = require('../controller/routeController')


const setRoute = Router()

setRoute.post('/post-route', PostRoute)
setRoute.get('/get-route', GetRoute)


module.exports = setRoute