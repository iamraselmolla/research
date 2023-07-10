import { isAdmin } from "../../middlewares/user";
import Research from "../../models/Research";
import dbConnect from "../../utils/dbConnect";


export default async function updateResearchPaper(req, res){
    switch(req.method){
        case "PUT" :
            {
                try{
                 await dbConnect()
                 const {id, status} = req.query;
                 const {remarks} = req.body;
                //  if(status !== 'approved' || 'rejected'){
                //    return console.log(status)
                //  }
                
                 isAdmin(req, res, async(req, res, next, decoded) => {
                    const updateStatus = await Research.findByIdAndUpdate(id, {status: status, remarks: remarks},{ new: true, runValidators: true });

                    console.log(updateStatus)
                    return res.status(200).json({ message: `Research File has been ${status}`, updateStatus });

                    
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