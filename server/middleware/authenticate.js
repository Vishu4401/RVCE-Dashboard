// Authenticate is the Middleware here
// It will be checked before the response

const Users = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    try {
        // Get Cookies
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).send("No token")
        }else{
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            const rootUser = await Users.findOne({_id : verifyToken._id, "tokens.token" : token});

            if(!rootUser){
                res.status(401).send("User Not found");
            }else{
                res.status(200).send("Authorized User")
            }
        }
        next()
    } catch(error){
        res.status(401).send("Error")
        console.log(error)
    }
}

module.exports = authenticate;