import Conference from "../../models/Conference";
import dbConnect from "../../utils/dbConnect";


export default async function conferenceCreate(req, res) {
    switch (req.method) {
        case
            "POST":
            {
                try {
                    
                    await dbConnect();
                    const {organizationName, organizationAddress, organizationCity, organizationState,organizationCountry,committeeChair,committeeMembers,conferenceName,conferenceLocation,conferenceDate,conferenceType,conferenceTheme,speakers,registrationOpenDate,registrationCloseDate,registrationFee,registrationLink,schedule,createdAt,updatedAt} = req.body
                    const newEvent = new Conference({organizationName, organizationAddress, organizationCity, organizationState,organizationCountry,committeeChair,committeeMembers,conferenceName,conferenceLocation,conferenceDate,conferenceType,conferenceTheme,speakers,registrationOpenDate,registrationCloseDate,registrationFee,registrationLink,schedule,createdAt,updatedAt});
                    const result = await newEvent.save();

                    return res.status(200).json({ message: "Conference Created Successfully", data: result });

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
