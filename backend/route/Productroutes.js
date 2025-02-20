// Start Making Routes
import express from "express";
import Product from "../model/Product.js";
const router = express.Router();



router.get("/GetAllProduct", async (req, res)  => {
    console.log("Request Come From Axios for Getting Products");
    // Get The All Products From Database
    try {
        const products = await Product.find();
        res.status(201).json(products);
        console.log(products);
        console.log("✅ Success Get Products");
    } catch (error) {
        res.status(500).send({message: "❌ Failed Getting Products"});
        console.log("❌ Failed Getting Products" + error);
    }
});

router.delete("/deleteProduct/:id", async (req, res) => {
    console.log("Request Come From Axios for Deleting Products");
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            console.log("Unfound Product");
            return res.status(200).send({message: "❌ Unfound Product"});
        }
        else {
            console.log("✅ Success Delete Product");
            return res.status(200).send({message: "✅ Success Delete Product"});
        }
    } catch (error) {
        res.status(500).send({message: "❌ Failed Deleting Product"});
        console.log("❌ Failed Deleting Product" + error);
    }
});

router.post("/addProduct/:id", async (req, res) => {
    console.log("Request Come From Axios for Posting Products");
    // Start Add Product To DataBase
    const product = req.body;
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
        console.log("✅ Success Adding Product");
    } catch (error) {
        res.status(500).send({message: "❌ Failed Adding Product"});
        console.log("❌ Failed Adding Product" + error);
    }
});


router.put("/updateProduct/:id", async(req, res) => {
    console.log("🕵️‍♀️ Request From Postman [PUT Method]");
    const id = req.params.id;
    const newProduct = req.body;
    try {
        const UpdatedData = await Product.findByIdAndUpdate(id, newProduct);
        res.status(200).send({message: "✅ Data Updated Succefully"});
        console.log("✅ Data Updated Succefully");
    } catch (error) {
        console.log("❌ Failed Updating Data" + error);
        res.status(500).send({message: "❌ Failed Updating Data"});
    }
});







export default router;