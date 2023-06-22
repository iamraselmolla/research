import PersonalDetails from "../../models/PersonalDetails";
import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";
import { toast } from "react-toastify";

export default async function personalDetails(req, res) {
    switch (req.method) {
        case "PUT":
            {
                try {
                    await dbConnect();
                    const userId = req.headers['user-id'];
                    const { basicInfo, contactInfo, education } = req.body;
                    const resultFound = await User.findOne({ _id:userId});
                    console.log("PERSONAL DETAILS API "+resultFound)
                    if (resultFound) {
                        resultFound.basicInfo=basicInfo;
                        resultFound.contactInfo=contactInfo;
                        resultFound.education=education;
                        await resultFound.save();
                     return res.status(200).json({ message: "Personal Details saved Successfully", resultFound });
                        
                    }else{
                        return res.status(200).json({ message: "User not found"});
                    }
                }
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