import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    quantity: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    // reviews
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ]

});

const Product = mongoose.model("Product", productSchema);

export default Product;
