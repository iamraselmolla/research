import mongoose from "mongoose";

const WarehouseSchema=mongoose.Schema({
    address:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    format:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    enabled:{
        type:Boolean,
        default:true
    },
    imageUrl:{
        type:String,
        default:'https://res.cloudinary.com/da75fckow/image/upload/v1684146205/client-uploads/dummY_warehouse_nnwsfa.avif'
    },
    size:{
        type:String,
        required:true
    },
    zone:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

export default mongoose.models.Warehouse || mongoose.model('Warehouse',WarehouseSchema);