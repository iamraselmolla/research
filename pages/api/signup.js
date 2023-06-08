import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";

export default async function signup(req, res) {
    switch (req.method) {
        case
            "POST":
            {
                try {
                    console.log(req.body)
                    const { firstName, lastName, username, password, role } = req.body;
                    await dbConnect();
                    const existingUser = await User.findOne({ username: username });
                    if (existingUser) {
                        return res.status(409).json({ error: 'Username already exists' });
                    }

                    // const securePass = await hasGeneratePass(password);
                    const newUser = new User({ firstName, lastName, username, password, role: "user" });
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
