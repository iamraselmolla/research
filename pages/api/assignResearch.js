
import { isAdmin } from "../../middlewares/user";
import Research from "../../models/Research";
import dbConnect from "../../utils/dbConnect";

export default async function handleAssignPaper(req, res) {

    switch (req.method) {
        case 'PUT':
            {
                isAdmin(req,res,async(req,res,next,decoded)=>{
                    try {
                        await dbConnect();
                        const {userId, researchId} = req.body
                        const findAndUpdate = await Research.findByIdAndUpdate(researchId, {
                            assigned: userId
                        },{ new: true, runValidators: true });

                        return res.status(200).json(findAndUpdate)
                    }
                    catch (err) {
                        return res.status(500).json({ message: 'Server error' })
                    }
                })
            }
            break;

        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}