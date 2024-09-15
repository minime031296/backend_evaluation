const {Router} = require('express')
const { PostTicket, GetTicket} = require('../controller/bookTicketController')


const setBookTicket = Router()

setBookTicket.post('/post-ticket', PostTicket)
setBookTicket.get('/get-ticket/:ticketId', GetTicket)


module.exports = setBookTicket