const { model, Schema, default: mongoose } = require("mongoose");

const UserSchema =  new Schema({
    
    basicInfo:{
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        dob:{
            type: Date
        },
        gender:{
            type: String,
            enum: ['Male', 'Female', 'Other']
        }
    },
    contactInfo:{
        email: {
            type: String,
            unique: true
        },
        mobileNo1: {
            type: String
        },
        mobileNo2: {
            type: String
        }
    },
    education:[
        {
            title:{
                type: String
            },
            completion:{
                type: Date
            },
            institute:{
                type: String
            },
        }
    ],    
   
   
    role: {
        type: String
    },
    verification:{
        img:{
            type: String
        },
        file: {
            type: String
        }
    }
})

export default mongoose.models.User || mongoose.model('User', UserSchema);