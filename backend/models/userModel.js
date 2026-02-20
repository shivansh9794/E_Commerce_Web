import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: false,
        default: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"

    },
    type: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    }
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

export default User;