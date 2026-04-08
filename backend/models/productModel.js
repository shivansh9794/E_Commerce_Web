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
    }

});

const Product = mongoose.model("Product", productSchema);

export default Product;
