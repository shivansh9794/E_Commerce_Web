import Product from "../models/productModel.js"; // path apne hisaab se change kar lena

export const addProduct = async (req, res) => {
    console.log("Add karo naya product")
    try {
        const { name, description, price } = req.body;

        console.log("Req-->", req.user);

        // check seller type
        if (req.user.type !== "seller") {
            return res.status(401).json({
                message: "Bete teri aukaat nhi h ye add karne ki"
            });
        }

        // validation
        if (!name || !description || !price) {
            return res.status(400).json({
                message: "Saare fields bhar bhai"
            });
        }

        // create product
        const product = await Product.create({
            name,
            description,
            price,
            seller: req.user.id
        });

        return res.status(201).json({
            message: "Product add ho gaya 🔥",
            product
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};