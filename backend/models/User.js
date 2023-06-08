const { model, Schema } = require("mongoose");

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

const User = model("User", UserSchema);
module.exports = User;
// export default mongoose.models.User || mongoose.model('User', UserSchema);