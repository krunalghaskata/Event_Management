 
const User = require('../../model/userModel')
const randomString = require('randomstring')
const getMessage = require('../../utils/message')
const CONFIG = require ('../../config/config.js')

const resetPassword = async (req, res) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(404).send(getMessage('USER_NOT_FOUND'));
    }
    const resetToken = randomString.generate()
    const link = `http://localhost:CONFIG.PORT/users/updatePassword/${resetToken}`
    await user.updateOne({ resetToken: resetToken });
    return res.status(200).send({ link: link })
  } catch (error) {
    return res.status(500).send(error)
  }
}

module.exports = resetPassword