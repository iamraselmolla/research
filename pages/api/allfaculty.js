import User from "../../models/User";
import dbConnect from "../../utils/dbConnect"

export default async function getAllFaculty(req, res) {
    switch (req.method) {
        case 'GET':
            {
                try {
                    await dbConnect();
                    const allFaculty = await User.find({role: "faculty"});
                    return res.status(200).json(allFaculty)

                } catch (error) {
                    return res.status(500).json({ message: 'Server error' })
                }
            }
            break;
            default: {
                return res.status(500).json({ message: "API NOT FOUND" })
            }
    }
}