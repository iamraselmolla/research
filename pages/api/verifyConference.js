import Conference from "../../models/Conference";
import dbConnect from "../../utils/dbConnect";

export default async function verifyConference(req, res) {
    switch (req.method) {
        case "PUT":
            {
                try {
                    await dbConnect();
                    const {id} = req.body;
                    if(id){
                        const findConference = await Conference.findByIdAndUpdate(id, {
                            status: "approved"
                        }, {new: true});
                        if(findConference){
                            console.log(findConference)
                            return res.status(200).json({message: "Verfied"});
                        }
                    }
                }
                catch (err) {
                    return res.status(500).json({
                        message: 'Something went wrong',
                        error: err.message,
                    });
                }
            }
        default:
            return res.status(500).json({ message: "API NOT FOUND" })
    }
}
