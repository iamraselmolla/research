import { isAdmin } from "../../middlewares/user";
import Research from "../../models/Research";

export default async function getAllResearches(req, res) {
    switch (req.method) {
        case "GET":
            {
                try {
                    isAdmin(req, res, async(req, res, next, decoded)=> {
                        const allResearches = await Research.find()
                        return res.status(200).json(allResearches)
                    })
                } catch (err) {
                    console.log(err)
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
