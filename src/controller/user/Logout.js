const User = require('../../model/userModel.js');

const logout = async (req, res) => {

        try {
            const user = await User.findOne({ email: req.body.email });
        
            if (!user) {
              return res.status(404).send( 'User not found');
            }
        
            user.loggedOut = true;         
            await user.save();
        
            res.send('User logged out successfully');
    } catch (error) {
       res.status(500).send(error)
    }
}


module.exports = logout;

