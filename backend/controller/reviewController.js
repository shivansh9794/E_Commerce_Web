import Review from "../models/reviewModel.js";
import Product from "../models/productModel.js";

export const addReview = async (req, res) => {
    try {
        const { productId } = req.params;
        const { rating, comment } = req.body;
        const userId = req.user?._id;

        // 1. Check product
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // 2. Check existing review
        const existingReview = await Review.findOne({
            user: userId,
            product: productId
        });

        if (existingReview) {
            return res.status(400).json({
                message: "You already reviewed this product"
            });
        }

        // 3. Create review
        const review = await Review.create({
            user: userId,
            product: productId,
            rating,
            comment
        });

        // 🔥 4. Push only review ID into product
        await Product.findByIdAndUpdate(productId, {
            $push: { reviews: review._id }
        });

        // 5. Populate user (optional)
        await review.populate("user", "name email");

        res.status(201).json({
            message: "Review added successfully 🔥",
            review
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};