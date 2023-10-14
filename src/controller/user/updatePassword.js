 
const User = require('../../model/userModel')
const auth = require('../../utils/auth')
const getMessage = require('../../utils/message')

const updatePassword = async (req, res) => {
  try {
    const { password } = req.body
    const resetToken = req.params.token

    const user = await User.findOne({ resetToken })
    if (!user) {
      return res.status(404).send(getMessage('USER_NOT_FOUND'))
    }

    user.password = await auth.generateHash(password)
    user.resetToken = null
    await user.save()
    res.clearCookie('token')
    return res.status(200).send(getMessage('PASSWORD_CHANGED_SUCCESSFULLY'))

  } catch (error) {
    return res.status(500).send(error)
  }
}

module.exports = updatePassword