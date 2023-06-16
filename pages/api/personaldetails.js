import PersonalDetails from "../../models/PersonalDetails";
import dbConnect from "../../utils/dbConnect";

export default async function personalDetails(req, res) {
    switch(req.method){
        case "POST" : 
        {
            try{

                await dbConnect()
                const {basicInfo,contactInfo,education} = req.body;
                const newInfo = new PersonalDetails({basicInfo,contactInfo,education});

                const result = await newInfo.save();
                return res.status(200).json({ message: "Personal Details saved Successfully" });
                
            }
            catch(err){
                console.log(err)
                return res.status(500).json({
                    message: 'Something went wrong',
                    error: err.message,
                });
            }
        }
    }
}