import { isAdmin } from "../../middlewares/user";
import Research from "../../models/Research";
import dbConnect from "../../utils/dbConnect";


export default async function updateResearchPaper(req, res){
    switch(req.method){
        case "PUT" :
            {
                try{
                 await dbConnect()
                 isAdmin(req, res, async(req, res, next, decoded) => {
                    const findResearch = await Research.findOneAndUpdate()
                 })
                }
                catch (err) {
                    return res.status(500).json({
                        message: 'Something went wrong',
                        error: err.message,
                    });
                }
            }
            break;
            default: {
                return res.status(500).json({ message: "API NOT FOUND" })
            }
    }
}