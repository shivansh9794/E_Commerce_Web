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
        const p = await user.matchPassword(password);
        if (user && p) {
            res.status(200).json({ message: "User Found", user })
        } 
        else {
            res.status(401).json({message:"Wrong Password"})
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).json({message:"User Doesn't Exist in DB"})
    }

}

export const deleteUser = async (req, res) => {
    try {
        const userId = req?.body?.userId;

        if (!userId) {
            res.status(400).send({ messege: "User ID Not Found" })
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
