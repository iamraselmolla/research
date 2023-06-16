import Conference from "../../models/Conference";
import dbConnect from "../../utils/dbConnect";

export default async function getAllConferences(req, res) {
    switch(req.method){
        case "GET" :
            {
                try{
                    await dbConnect();
                    const allConferences = await Conference.find();

                    return res.status(200).json(allConferences)

                }
                catch(err){
                    return res.status(500).json({
                        message: 'Something went wrong',
                        error: err.message,
                    });
                }
            }
    }
}