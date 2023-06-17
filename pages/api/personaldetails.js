import PersonalDetails from "../../models/PersonalDetails";
import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";
import { toast } from "react-toastify";

export default async function personalDetails(req, res) {
    switch (req.method) {
        case "POST":
            {
                try {

                    await dbConnect();

                    const { basicInfo, contactInfo, education } = req.body;
                    const resultFound = await User.findOne({ firstName: basicInfo.firstName, lastName: basicInfo.lastName });
                    if (resultFound) {
                        const newInfo = new PersonalDetails({ basicInfo, contactInfo, education });

                     const newInfoSaved = await  newInfo.save();
                     return res.status(200).json({ message: "Personal Details saved Successfully", newInfoSaved });
                        
                    }else{
                        toast.error("Something Wrong. User not found")
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