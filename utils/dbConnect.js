import mongoose from "mongoose";

const dbConnect=async()=>{
    if(mongoose.connection.readyState>=1){
        return;
    }

    return mongoose.connect('mongodb+srv://3plwarehouseservicez:zZTZ6PzvqNlSldod@cluster0.pmxzwjj.mongodb.net/3plwarehouseservicez?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

export default dbConnect;