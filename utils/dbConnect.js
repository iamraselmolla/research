import mongoose from "mongoose";

const dbConnect=async()=>{
    if(mongoose.connection.readyState>=1){
        return;
    }

    return mongoose.connect('mongodb+srv://rasel:rasel@cluster0.q37bxqk.mongodb.net/research',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

export default dbConnect;
