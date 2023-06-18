import User from "../../models/User";

export default async function userDetails(req, res) {
    switch (req.method) {
        case "GET": {
            try {

                const id = req.query.id;
                const getResult = await User.findOne({ _id: id });
                if (getResult) {
                    res.send(getResult);
                }
            } catch (err) {
                console.log("Something went wrong", err);
                res.status(500).send("Internal Server Error");
            }
        }
    }
}