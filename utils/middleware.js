const jwt = require("jsonwebtoken");
const { default: User } = require("../models/User");
const secretKey = "f4c1e7001409121f1db8aa18f8dc841c4a861fb03e116717abb1ef95b5f4cd609046109907876726261eeb21b4dcd57a0b97849fb090abb74e2c10e1";

const verifyUser = async (req, res, next) => {
    const token = req.query.token
    if (!token) {
        return res.status(401).send({ message: 'unauthorized access 2' });
    };
    const decodedToken = jwt.verify(token, secretKey);
    const userType = await User.findOne({ 'basicInfo.username': decodedToken.username }).select("role");
    console.log(userType)
    if (userType.role === "user") {
        next()
    }
     else {
        console.log("Unauthorized Access")
    }
}


module.exports = {verifyUser}