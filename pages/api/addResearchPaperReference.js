import { isStudent } from "../../middlewares/user";
import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";

export default async function addResearchRefe(req, res) {
    switch (req.method) {
        case "PUT":
            {
                try {
                    await dbConnect()
                    isStudent(req, res, async (req, res, next, decoded) => {
                        const id = decoded.id;
                        const researchId = req.query.id
                        const findUser = await User.findOne({_id: id});
                        if(findUser && researchId){
                            findUser.research.push(researchId);
                            await findUser.save();
                            return res.status(200).json({ message: "Research file added successfully" });
                        }
                    }
                )}
                catch (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: 'Something went wrong',
                        error: err.message,
                    });
                }
            }
    }
}