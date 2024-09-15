const {Schema, model} = require('mongoose')
const {v4: uuidv4} = require('uuid')

const TicketSchema = new Schema({
    ticketId : {
        type: String,
        default: uuidv4
    },
    username: {
        type: String,
        required: true 
    },
    destination: {
        type: String,
        required: true
    },
    dateOfJourney: {
        type: Date,
        required: true
    },
    seatNum: {
        type: Number
    },
    aBalance: {
        type: String
    }
}, {versionKey: false})

const Ticket =  new model("ticket", TicketSchema) 

module.exports = Ticket