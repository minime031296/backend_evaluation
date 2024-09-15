const Ticket = require("../model/bookTicket.model")

const PostTicket = async(req, res) => {
    const {ticketId, username, destination, dateOfJourney,  seatNum, aBalance} = req.body

    const ticketDetails = new Ticket({
        ticketId,
        username,
        destination,
        dateOfJourney,
        seatNum,
        aBalance

    })
    await ticketDetails.save()

    res.status(200).json({
        success: true,
        message: "Ticket details created",
        details: ticketDetails
    })
}

const GetTicket = async(req, res) => {
    const {id} = req.params

    const {username, destination, dateOfJourney, seatNum, aBalance }= req.body 

    

    await Ticket.findById(id)
    res.status(200).json({
        success: true,
        message: `Hey ${username}, Reservation Confirmed!!! -> ${destination} -> Date of Journey: ${dateOfJourney} -> Seat Number: ${seatNum} -> Available Balance: Rs. ${aBalance}.
`       
}) 

}

const GetReservationTicketDetails = async(req, res) => {
    const {ticketId} = req.params

    const {destination, dateOfJourney, seatNum }= req.body 


    await Ticket.findOne({ticketId: ticketId})
    res.status(200).json({
        success: true,
        message: `${destination} -> Date of Journey: ${dateOfJourney} -> Seat Number: ${seatNum} .
`       
}) 

}

module.exports = {
    PostTicket, GetTicket, GetReservationTicketDetails
}