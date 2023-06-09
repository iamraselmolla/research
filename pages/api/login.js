import User from "../../models/User";
import { compareHashPass } from "../../utils/bcrypt";
import dbConnect from "../../utils/dbConnect";
import jwt from "jsonwebtoken";

const secretKey = "f4c1e7001409121f1db8aa18f8dc841c4a861fb03e116717abb1ef95b5f4cd609046109907876726261eeb21b4dcd57a0b97849fb090abb74e2c10e1"

export default async function handler(req, res) {

    switch (req.method) {
        case 'POST':
            {
                try {
                    let { username, password } = req.body;
                    await dbConnect();
                    const matchFind = await User.findOne({ username: username }).select("password");
                    if (!matchFind) {
                        return res.status(401).json({ message: "User not found" })
                    } else {
                        const passCheck = await compareHashPass(password, matchFind.password);
                        if (passCheck) {
                            const tokenData = {
                                username
                            };
                            const token = jwt.sign(tokenData, secretKey);
                            return res.status(200).json({ message: "Logged In Successfully", token })
                        } else {
                            return res.status(401).json({ message: "Invalid  password" })
                        }
                    }
                }
                catch (err) {
                    return res.status(500).json({ message: 'Server error' })
                }
                break;
            }

        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}