import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";

export default async function getFacultyDetails(req, res){
    switch(req.method){
        case "GET" : 
        {
            try{
                    await dbConnect();
                    const id = req.query.id;
                    const result = await User.findById(id);
                    if(result){
                        return res.status(200).json(result);
                    }
            }
            catch (err) {
                console.log(err)
                return res.status(500).json({ message: 'Server error' })
            }
            break;
        }
    }
}