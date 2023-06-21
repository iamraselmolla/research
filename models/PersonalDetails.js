import mongoose, { Schema } from "mongoose";

const PersonalSchema = new Schema({
    basicInfo:{
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        dob:{
            type: Date,
            required: true
        },
        gender:{
            type: String,
            required: true,
            enum: ['Male', 'Female', 'Other']
        }
    },
    contactInfo:{
        email: {
            type: String,

            // required: true,
            // unique: true
        },
        mobileNo1: {
            type: String,
            required: true,
            unique: true
        },
        mobileNo2: {
            type: String
        }
    },
    education:[
        {
            title:{
                type: String,
                required: true
            },
            completion:{
                type: Date,
                required: true
            },
            institute:{
                type: String,
                required: true
            },
        }
    ]
});

export default mongoose.models.PersonalDetail || mongoose.model("PersonalDetail", PersonalSchema)