export default async function userDetails (req, res){
    switch(req.method){
        case "GET": {
            try{
                const id = req.params.id;
            }catch(err){
                console.log("Something Wrong, err")
            }
        }
    }
}