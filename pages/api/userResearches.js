import { isStudent } from "../../middlewares/user";
import Research from "../../models/Research";
import dbConnect from "../../utils/dbConnect";

export default async function getUserResearch(req, res){
    switch(req.method){
        case "GET" :
            {
                try{
                    isStudent(req, res, async (req, res, next, decoded) => {
                        await dbConnect();
                        const id = decoded.id;
                    
                    const getAllResearch = await Research.find({user: id});
                    return res.status(200).json(getAllResearch)
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