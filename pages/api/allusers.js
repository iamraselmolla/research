import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";
import { verifyUser } from "../../utils/middleware";


export default async function handler(req, res) {

    switch (req.method) {
        case 'GET':
            {
                try {
                    // await verifyUser(req, res);
                    console.log(req.query.token)
                    await dbConnect();
                    const findAllUsers = await User.find().select("-password")
                    return res.status(200).json(findAllUsers)
                }
                catch (err) {
                    return res.status(500).json({ message: 'Server error' })
                }
            }

        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}