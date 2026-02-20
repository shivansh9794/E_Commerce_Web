import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';

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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcryptjs.hash(this.password, 10);
  next();
});


const User = mongoose.model("User", userSchema);

export default User;