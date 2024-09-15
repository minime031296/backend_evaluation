const {Schema, model} = require('mongoose')

const routeSchema = new Schema({
    routeNum: {
        type: Number,
        required: true 
    },
    destination: {
        type: String,
        required: true
    },
    fare: {
        type: String,
        required: true
    },
    aseats: {
        type: [Number]
    }
}, {versionKey: false})

const Route =  new model("route", routeSchema) 

module.exports = Route