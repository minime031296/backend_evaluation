require('dotenv').config()
const express = require('express')
const app = express()
const {log} = require('console')
const connetToDB = require('./src/config/db')
const setRoute = require('./src/route/route.route')
const setBookTicket = require('./src/route/bookTicket.route')
const { GetReservationTicketDetails } = require('./src/controller/bookTicketController')
const Pt = process.env.PORT || 3001


app.use(express.json())

app.use('/route', setRoute)
app.use('/book-ticket', setBookTicket)
app.get('/get-reservation/:ticketId', GetReservationTicketDetails)

app.listen(Pt, ()=> {
    try {
        connetToDB(process.env.MONGO_URI)
        log('Connected to Database')
    } catch (error) {
        console.error('!Connected to Database');
        
    }
    log(`Server Running at port: ${Pt}`)
})