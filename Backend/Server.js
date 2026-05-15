// =========================
// HALALTRADEX BACKEND SERVER
// =========================

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


// =========================
// SAMPLE PRODUCTS API
// =========================

const products = [
    { id: 1, name: "Halal Chicken Pack", price: 10 },
    { id: 2, name: "Islamic Book Set", price: 15 },
    { id: 3, name: "Halal Perfume", price: 25 },
    { id: 4, name: "Organic Dates", price: 8 }
];


// GET PRODUCTS
app.get("/api/products", (req, res) => {
    res.json(products);
});


// =========================
// ORDER API (DUMMY)
// =========================

let orders = [];

app.post("/api/order", (req, res) => {

    const order = req.body;

    orders.push(order);

    res.json({
        message: "Order received successfully",
        order
    });

});


// =========================
// START SERVER
// =========================

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});