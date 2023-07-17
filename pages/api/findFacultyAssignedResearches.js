import { isFaculty } from "../../middlewares/user";
import Research from "../../models/Research";
import dbConnect from "../../utils/dbConnect";


export default async function facultyAssignedResearch(req, res) {
    switch (req.method) {
        case
            "GET":
            {
                try {

                    isFaculty(req, res, async (req, res, next, decoded) => {
                        await dbConnect();
                        const id = decoded.id
                       
                        const findFacultyAssignResearches = await Research.find({assigned: id});

                        return res.status(200).json(findFacultyAssignResearches);
                    })

                }
                catch (err) {
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
