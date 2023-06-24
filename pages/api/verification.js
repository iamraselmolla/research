import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import { hashPassGenerate } from "../../utils/bcrypt";

export default async function signup(req, res) {
    switch (req.method) {
        case
            "PUT":
            {
                try {
                    await dbConnect();
                    const { verification, localid } = req.body;
                    const userFound = await User.findOne({ _id: localid });

                    if (userFound) {
                        if (req.query.type === "file") {
                            userFound.verification.file = verification;

                            // Save the updated user
                            await userFound.save();

                            return res.status(200).json({ message: "User verification added successfully", data: userFound });
                        } else {
                            userFound.verification.img = verification;

                            // Save the updated user
                            await userFound.save();

                            return res.status(200).json({ message: "User verification added successfully", data: userFound });
                        }
                    } else {
                    }

                    // return res.status(200).json({ message: "User Created Successfully", data: result });

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
