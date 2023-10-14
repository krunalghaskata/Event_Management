const userController = require('./user/index')
const eventController = require('./event/index')

const controller = {
    ...userController,
    ...eventController
}
module.exports = controller;