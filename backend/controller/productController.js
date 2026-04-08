export const addProduct = async (req, res) => {
    const { name, description, price, seller } = req.body;
    console.log(req.body)

    if (req.user.type != "seller") {
        return res.status(401).json({ message: "Bete teri aukaat nhi h ye add karne ki" });
    }


}