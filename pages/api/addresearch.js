import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";

export default async function addResearch (req, res){
    switch(req.method){
        case "PUT" : 
        {
            try{
                await dbConnect();
                const userId = req.query.id
                const findUser = await User.findOne({_id: userId});
                const {fileLink} = req.body
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
                return res.status(500).json({
                    message: 'Something went wrong',
                    error: err.message,
                });
            }
        }
    }
}