const {connect} = require('mongoose')

const connetToDB = async(URL) => {
    try {
        await connect(URL)
    } catch (error) {
        
    }
}

module.exports = connetToDB