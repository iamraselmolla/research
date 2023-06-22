import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import { hashPassGenerate } from "../../utils/bcrypt";

export default async function signup(req, res) {
    switch (req.method) {
        case
            "POST":
            {
                try {
                    const { username, password, basicInfo, contactInfo,education } = req.body;
                    console.log(req.body)

                    await dbConnect();
                    const existingUser = await User.findOne({ username: username });
                    if (existingUser) {
                        return res.status(409).json({ error: 'Username already exists' });
                    }
                    const lowerCaseUserUsername = username.toLowerCase()
                    const securePass = await hashPassGenerate(password);
                 

                  
                    const newUser = new User({username:lowerCaseUserUsername, password: securePass, basicInfo,contactInfo,education:[], role: 'user' });
                    const result = await newUser.save();

                    return res.status(200).json({ message: "User Created Successfully", data: result });

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
