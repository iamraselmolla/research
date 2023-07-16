import { isAdmin } from "../../middlewares/user";
import Conference from "../../models/Conference";
import dbConnect from "../../utils/dbConnect";

export default async function markConferenceStatus(req, res) {
    switch (req.method) {
        case "PUT":
            {
                try {
                    isAdmin(req, res, async (req,res) => {
                        await dbConnect();
                        const { id } = req.body;
                        if (id) {
                            const findConference = await Conference.findById(id);
                            
                            if (findConference) {
                              findConference.isActive = !findConference.isActive; // Toggle isActive value
                              await findConference.save(); // Save the updated document
                              return res.status(200).json({ message: "Status Changed" });
                            }
                          }
                    })
                }
                catch (err) {
                    return res.status(500).json({
                        message: 'Something went wrong',
                        error: err.message,
                    });
                }
            }
            break;
        default:
            return res.status(500).json({ message: "API NOT FOUND.." })
    }
}
