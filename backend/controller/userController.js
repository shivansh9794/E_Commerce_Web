import generateToken from "../config/generateToken.js";
import User from "../models/userModel.js";

export const addUser = async (req, res) => {
    const { name, email, password, profilePic } = req.body || {};
    let { type } = req.body || {};

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("All Fiels are Required")
    }

    const count = await User.estimatedDocumentCount()

    // console.log("Count is : "+count);
    if (count == 0) {
        type = "admin"
    }

    const user = await User.create({
        name,
        email,
        password,
        type,
        profilePic
    })


    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            profilePic: user.profilePic,
            type: user.type
        })
    }
    else { throw new Error("Error While Adding User") }

}

export const getAllUsers = async (req, res) => {
    try {
        const user = await User.find().select("-password");;
        res.status(200).json({ messege: "ALL USERS..", user });
    } catch (error) {
        res.status(400);
        throw new Error("Something went wrong ..")
    }
}

export const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        const p = await user?.matchPassword(password);
        if (p == false) {
            res.status(401).json({ message: "Wrong Password. Login Failed" });
            throw new Error("Wrong Password");
        }
        if (user && p) {
            const token = generateToken(user._id);
            res.cookie("jwt", token, {
                httpOnly: true,
                secure: false,
                maxAge: 7 * 24 * 60 * 60 * 1000
            });
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                pic: user.pic,
                token: token,
            })
            // res.status(200).json({ message: "User Found", user })
        }
        else {
            res.status(401).json({ message: "Wrong Password" })
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ message: "User Doesn't Exist in DB" })
    }

}

export const deleteUser = async (req, res) => {
    try {
        const userId = req?.body?.userId;
        const id = req?.user?._id;

        if (req?.user?.type != "admin") {
            return res.status(403).json({ message: "You are not Authorised to Delete a User" })
        }

        if (!userId) {
            res.status(400).send({ message: "User ID Not Found" })
        }

        if (userId === req.user._id.toString()) {
            return res.status(400).json({ message: "Cannot delete yourself" });
        }

        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            res.status(400).send({ messege: "User not Found in Database" });
        }

        res.status(200).send({ messege: "User Deleted", user });

    } catch (error) {
        res.status(400);
        throw new Error(error);
    }
}

export const getAdmin = async (req, res) => {

    await User.find({ type: "admin" })
        .then((result) => {
            res.status(200).json({ result });
        }).catch((err) => {
            console.log(error);
            res.status(400).json({ messege: "Something went Wrong" })
        });
}

export const getData = async (req, res) => {
    console.log('getData API hitted')
    res.send("getting data...")
}


export const checkProtection = async (req, res) => {
    const user = req.user;
    if (!user) {
        res.status(401);
        throw new Error("You are not authorised");
    }
    res.status(200).json({ message: "You are Logged In", user });
}

export const makeAdmin = async (req, res) => {
    try {
        const id = req.body?.id;
        const userID = req?.user?._id;
        if (!userID) {
            return res.status(400).json({ message: "No User Id detected" })
        }

        if (req?.user?.type != "admin") {
            return res.status(401).json({ message: "Not authorised to make Admin" })
        }

        console.log(id);

        const user = await User.findByIdAndUpdate(id,{type:"admin"},{new:true});

        await user.save();

        if (!user) {
            return res.status(404).json({ message: "No User Found on This Id" })
        }

        res.status(200).json({message:"Selected As Admin Succesfull",user});

    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong" })
    }
}