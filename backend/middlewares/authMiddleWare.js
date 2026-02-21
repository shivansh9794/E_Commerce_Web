// import jwt from "jsonwebtoken"
// import User from "../models/userModel"


// const protect = async (req, res, next) => {
//     let token;

//     if (
//         req.headers.authorization &&
//         req.headers.authorization.startsWith("Bearer")) {
//         token = req.headers.authorization.split(" ")[1];

//         console.log(token);
//     }
// }

// export default protect


import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = async (req, res, next) => {
  let token;

  // 1️⃣ Check Authorization Header
  if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
        console.log("Bearer Token Found")
        token = req.headers.authorization.split(" ")[1];
  }

  // 2️⃣ Check Cookies (if header not present)
  if (!token && req.cookies?.jwt) {
    console.log("Cookie Found")
    token = req.cookies.jwt;
  }

  // 3️⃣ If no token
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // 4️⃣ Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5️⃣ Get user from DB (without password)
    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};

export default protect;