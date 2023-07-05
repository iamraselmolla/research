const { model, Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    basicInfo: {
        firstName: {
            type: String,
            required: true,
           
        },
        lastName: {
            type: String,
            required: true
        },

        dob: {
            type: Date,
        },
        gender: {
            type: String,
            default: '',
            enum: ['', 'Male', 'Female', 'Other']
        }
    },
    contactInfo: {
        email: {
            type: String
        },
        mobileNo1: {
            type: String
        },
        mobileNo2: {
            type: String
        }
    },
    education: [
        {
            title: {
                type: String
            },
            completion: {
                type: Date
            },
            institute: {
                type: String
            },
        }
    ],
    profilePic: {
        type: String,
        default: './user.png'
    },

    role: {
        type: String,
        enum: ['student', 'faculty', 'admin']
    },
    verification: {
        img: {
            type: String,
            status: "pending"
        },
        file: {
            type: String,
            status: "pending"
        }
    },
    research: [
        {
            file: {
                type: String,
                status: "pending",
            },
            img: {
                type: String,
                status: "pending"
            }
        }
    ],

},
    {
        timestamps: true
    }
)

export default mongoose.models.User || mongoose.model('User', UserSchema);