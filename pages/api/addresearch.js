import { isStudent } from "../../middlewares/user";
import Research from "../../models/Research";
import dbConnect from "../../utils/dbConnect";

export default async function addResearchPaper(req, res) {
    switch (req.method) {
        case "PUT":
            {
                try {
                    isStudent(req, res, async (req, res, next, decoded) => {
                        const id = decoded.id
                        await dbConnect();
                        const { title, description, file } = req.body
                        const findUser = await Research({ title, description, file, user: id })
                        if (findUser) {
                            // const newResearchPaper = {
                            //     file: fileLink,
                            //     status: 'pending'
                            //   };
                            //   findUser.research.push(newResearchPaper);

                            await findUser.save();

                            return res.status(200).json({ message: "Research file added successfully" });

                        }
                    })

                }
                catch (err) {
                    console.log()
                    return res.status(500).json({
                        message: 'Something went wrong',
                        error: err.message,
                    });
                }
            }
    }
}