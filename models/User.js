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
    }
})

export default mongoose.models.User || mongoose.model('User', UserSchema);