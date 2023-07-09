import { isAdmin } from "../../middlewares/user";
import Conference from "../../models/Conference";
import dbConnect from "../../utils/dbConnect";

export default async function getAllConferences(req, res) {
    switch (req.method) {
        case "GET":
            {
                try {
                    let allConference;
                    await dbConnect();
                    const userType = req.query.user;
                    if (userType === 'user') {

                        allConference = await Conference.find({ status: "approved" });
                        return res.status(200).json(allConference)
                    }
                    if (userType === 'admin') {
                        isAdmin(req, res, async (req, res, next, decoded) => {
                            allConference = await Conference.find();
                            return res.status(200).json(allConference)
                        })
                    }

                }
                catch (err) {
                    return res.status(500).json({
                        message: 'Something went wrong',
                        error: err.message,
                    });
                }
            }
    }
}