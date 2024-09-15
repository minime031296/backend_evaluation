const Route = require("../model/route.model")

const PostRoute = async(req, res) => {
    const {routeNum, destination, fare, aseats} = req.body

    const details = new Route({
        routeNum,
        destination,
        fare,
        aseats
    })
    await details.save()

    res.status(200).json({
        success:true,
        message: "details added successfully",
        details: details
    })
}

const GetRoute = async(req, res) => {
    try {
        const details = await Route.find({})
        res.status(200).json({
                    success: true,
                    message: "List of all routes",
                    details: details
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "error in getting route details",
            
})
    }

}

module.exports = {
    PostRoute, GetRoute
}