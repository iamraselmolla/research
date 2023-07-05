import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";

export default async function addResearchPaper (req, res){
    switch(req.method){
        case "PUT" : 
        {
            try{
                await dbConnect();
                const {fileLink,localid} = req.body
                const findUser = await User.findOne({_id: localid});
                if(findUser){
                    const newResearchPaper = {
                        file: fileLink,
                        status: 'pending'
                      };
                      findUser.research.push(newResearchPaper);

                    await  findUser.save();

                    return res.status(200).json({ message: "Research file added successfully" });

                }

                console.log(req.body)
            }
            catch(err){
                console.log()
                return res.status(500).json({
                    message: 'Something went wrong',
                    error: err.message,
                });
            }
        }
    }
}