import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";

export default async function studentVerification(req, res) {
    switch (req.method) {
        case "PUT":
            {
                try {
                    await dbConnect();
                    const { id, verificationOrder } = req.body;
                    console.log(id, verificationOrder)
                    if (id) {
                        const updatedUser = await User.findByIdAndUpdate(id,
                            { $set: { "verification.status": verificationOrder } },
                            { new: true }
                        )

                        if (!updatedUser) {
                            return res.status(404).json({ error: "Something Wrong" });
                        }
                    }
                    return res.status(200).json({ message: "Student has been verified" });

                }
                catch (err) {
                    return res.status(500).json({
                        message: 'Something went wrong',
                        error: err.message,
                    });
                }
            }
            break;
        default: {
            return res.status(500).json({ message: "API NOT FOUND" })
        }
    }
}