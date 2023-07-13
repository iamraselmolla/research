import Conference from "../../models/Conference";
import dbConnect from "../../utils/dbConnect";

export default async function getConferenceDetilsFromDB (req, res){
    switch(req.method){
        case "POST" : 
        {
            try{
                await dbConnect();
                const {id} = req.body.id;
                

                const getConference = await Conference.findOne({_id: id});
                
                if(getConference){
                    return res.status(200).json(getConference);
                }
            }
            
            catch (err) {
                console.log(err)
                return res.status(500).json({ message: 'Server error' })
            }
            break;
        }
        default:
            return res.status(500).json({ message: "API NOT FOUND" })
    }
}