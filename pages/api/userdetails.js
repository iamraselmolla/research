
import { isStudent } from "../../middlewares/user";
import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";

export default async function userDetails(req, res) {
    switch (req.method) {
        case "GET": {
            // isStudent(req,res,async(req,res,next,decoded)=>{
            const userId = req.headers['user-id'];
            try {
                await dbConnect();
                // const userId = decoded.id;
                const getResult = await User.findOne({ _id: userId });
                if (getResult) {
                    return res.status(200).json(getResult);
                }
            } catch (err) {
                return res.status(500).json("Internal Server Error");
            }
        // })
        }
    }
}
