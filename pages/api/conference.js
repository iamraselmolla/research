import { isAdmin, isFaculty } from "../../middlewares/user";
import Conference from "../../models/Conference";
import dbConnect from "../../utils/dbConnect";


export default async function conferenceCreate(req, res) {
    switch (req.method) {
        case
            "POST":
            {
                try {

                    // isFaculty(req, res, async () => {
                    await dbConnect();
                    const { organizationName, organizationAddress, organizationCity, organizationState, organizationCountry, conferenceName, conferenceLocation, conferenceDescription, conferenceDate, startTime, endTime, conferenceType, conferenceTheme, committeeChair, committeeMembers, speakers, registrationOpenDate, registrationCloseDate, registrationFee, registrationLink } = req.body;

                    const organisationInfo = {
                        organizationName, organizationAddress, organizationCity, organizationState, organizationCountry
                    }
                    const conferenceInfo = {
                        conferenceName, conferenceLocation, conferenceDate, conferenceTheme, startTime, endTime, conferenceType, conferenceDescription
                    }
                    const committeeInfo = {
                        committeeChair, committeeMembers
                    }

                    const registrationInfo = {
                        registrationOpenDate, registrationCloseDate, registrationFee, registrationLink
                    }
                    const newEvent = new Conference({ organisationInfo, conferenceInfo, committeeInfo, speakers, registrationInfo, verified: false, status: 'pending' });
                    const result = await newEvent.save();


                    return res.status(200).json({ message: "Conference Submitted Successfully", data: result });
                    // })

                }
                catch (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: 'Something went wrong',
                        error: err.message,
                    });
                }
            }
        case
            "DELETE":
            {
                try {
                    isAdmin(req, res, async (req, res, next, decoded) => {
                        await dbConnect();

                        const  {id}  = req.query;
                        if(!id){
                            return res.status(404).json({ message: "Somethong Wrong" });
                        }

                          const deletedEvent = await Conference.findByIdAndDelete(id);

                          if (!deletedEvent) {
                            return res.status(404).json({ message: "Conference not found" });
                          }

                          return res.status(200).json({ message: "Conference deleted successfully" });
                    });
                } catch (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: "Something went wrong",
                        error: err.message,
                    });
                }
            }
            break;
        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}
