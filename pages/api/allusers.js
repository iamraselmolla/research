import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";


export default async function handler(req, res) {

    switch (req.method) {
        case 'GET':
            {
                try {
                    await dbConnect();
                   const findAllUsers = await User.find().select("-password")
                   return res.status(200).json(findAllUsers)
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