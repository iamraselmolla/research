const { model, Schema, default: mongoose } = require("mongoose");

const UserSchema =  new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
    role: {
        type: String
    },
    personalDetails: {
        type: Schema.Types.ObjectId,
        ref: 'PersonalDetails',
        default:null
    }
})

export default mongoose.models.User || mongoose.model('User', UserSchema);