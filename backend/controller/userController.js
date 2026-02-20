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
    if(count==0){
        type="admin"
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


// 1. `git init`
// 2. `git add .`
// 3. `git commit -m "First Commit"`
// 4. `Create a new repository on GitHub`
// * `Go to https://github.com/new`
// * `Enter a repository name (same as your project name, usually` ).
// * `Choose: Public or Private`
// * `Don’t initialize with a README` 
// * `Click Create repository`
// 5. `Copy the URL GitHub shows you — something like :https://github.com/yourusername/your-repo-name.git`
// 6. `Then run : git remote add origin https://github.com/yourusername/your-repo-name. Git`
// 7. `git branch -M main`
// 8. `git push -u origin main`