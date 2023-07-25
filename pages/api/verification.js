import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import { hashPassGenerate } from "../../utils/bcrypt";
import { isStudent } from "../../middlewares/user";

export default async function signup(req, res) {
    switch (req.method) {
        case
            "PUT":
            {
                try {
                    isStudent(req, res, async (req, res, next, decoded) => {
                        await dbConnect();
                        const id = decoded.id
                        const { verification } = req.body;
                        const userFound = await User.findOne({ _id: id });

                        if (userFound) {
                            if (req.query.type === "file") {
                                userFound.verification.file = verification;
                                userFound.verification.status = 'pending';

                                // Save the updated user
                                await userFound.save();

                                return res.status(200).json({ message: "User verification added successfully", data: userFound });
                            } else {
                                userFound.verification.img = verification;
                                userFound.verification.status = 'pending';

                                // Save the updated user
                                await userFound.save();

                                return res.status(200).json({ message: "User verification added successfully", data: userFound });
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
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}
