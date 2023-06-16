import Conference from "../../models/Conference";
import dbConnect from "../../utils/dbConnect";


export default async function conferenceCreate(req, res) {
    switch (req.method) {
        case
            "POST":
            {
                try {

                    await dbConnect();
                    const { organizationName, organizationAddress, organizationCity, organizationState, organizationCountry, conferenceName, conferenceLocation,conferenceDescription, conferenceDate, startTime, endTime, conferenceType, conferenceTheme, committeeChair, committeeMembers, speakers, registrationOpenDate, registrationCloseDate, registrationFee, registrationLink } = req.body;

                    const organisationInfo = {
                        organizationName, organizationAddress, organizationCity, organizationState, organizationCountry
                    }
                    const conferenceInfo = {
                        conferenceName, conferenceLocation, conferenceDate, conferenceTheme, startTime, endTime, conferenceType,conferenceDescription
                    }
                    const committeeInfo = {
                        committeeChair, committeeMembers
                    }

                    const registrationInfo = {
                        registrationOpenDate, registrationCloseDate, registrationFee, registrationLink
                    }
                    const newEvent = new Conference({organisationInfo, conferenceInfo, committeeInfo, speakers,registrationInfo, verified:false, status: 'pending'  });
                    const result = await newEvent.save();
                    

                    return res.status(200).json({ message: "Conference Created Successfully", data: result });

                }
                catch (err) {
                    console.log(err)
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
