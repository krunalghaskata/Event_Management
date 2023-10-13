const User = require ('../../model/userModel.js')


const allUserFind = async (req, res) => {
    try {
        const userInstance = await User.find();
        return res.status(200).send(userInstance)
        
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = allUserFind;