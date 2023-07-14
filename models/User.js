const { model, Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
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
        default: 'https://asset.cloudinary.com/iamraselmolla/818d2a0829113ba5da7de419bdd11094'
    },

    role: {
        type: String,
        enum: ['student', 'faculty', 'admin']
    },
    verification: {
        img: {
            type: String,
        },
        file: {
            type: String,
        },
        status: {
            type: String,
            default: 'pending'
        }
    },
    research: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Research',
        }
    ],

},
    {
        timestamps: true
    }
)

export default mongoose.models.User || mongoose.model('User', UserSchema);