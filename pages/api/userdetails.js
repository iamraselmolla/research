import isStudent from "../../middlewares/user";
import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";

export default async function userDetails(req, res) {
    switch (req.method) {
        case "GET": {
            try {
                await dbConnect();
                const userId = req.headers['user-id'];
                const getResult = await User.findOne({ _id: userId });
                if (getResult) {
                    res.send(getResult);
                }
            } catch (err) {
                res.status(500).send("Internal Server Error");
            }
        }
    }
}

export const config = {
    api: {
      bodyParser: false, 
    },
    middleware: [isStudent],
  };