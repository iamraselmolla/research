import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";


export default async function facultyAssignedFaculty(req, res) {
    switch (req.method) {
        case
            "GET":
            {
                try {


                    await dbConnect();
                    const { id } = req.query

                    if (id) {
                        const getResult = await User.findById(id)
                        return res.status(200).json(getResult);
                    }

                    
                    

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
