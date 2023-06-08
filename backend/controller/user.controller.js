const { hasGeneratePass, compareHashPass } = require("../middleware/bcrypt");
const jwt = require("jsonwebtoken")
const User = require("../models/User");

const signUp = async (req, res) => {
    try {
        const { firstName, lastName, username, password, role } = req.body;

        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return res.status(409).json({ error: 'Username already exists' });
        }

        const securePass = await hasGeneratePass(password);
        console.log(firstName, lastName, username, securePass)

        const newUser = new User({ firstName, lastName, username, password: securePass, role: "user" });
        const result = await newUser.save();

        return res.status(200).json({ message: "User Created Successfully", data: result });

    }
    catch (err) {
        return res.status(500).json({
            message: 'Something went wrong',
            error: err.message,
        });
    }

}
const secretKey = "f4c1e7001409121f1db8aa18f8dc841c4a861fb03e116717abb1ef95b5f4cd609046109907876726261eeb21b4dcd57a0b97849fb090abb74e2c10e1"
const logIn = async (req, res) => {
    const { username, password } = req.body;
    try {
        const matchFind = await User.findOne({ username: username });
        if (!matchFind) {
            return res.status(401).json({ message: "User not found" })
        } else {
            const passCheck = await compareHashPass(password, matchFind.password);
            if (passCheck) {
                const tokenData = {
                    username: matchFind.username
                };
                const token = jwt.sign(tokenData,secretKey);
                return res.status(200).json({ message: "Logged In Successfully", token })
            } else {
                return res.status(401).json({ message: "Invalid  password" })
            }
        }
    }
    catch (err) {
        return res.status(500).json({
            message: 'Something went wrong',
            error: err.message,
        });
    }
}

module.exports = { signUp, logIn };