const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const PORT = 5000;

// PRODUCTS
const products = [
    { id: 1, name: "Halal Chicken Pack", price: 10 },
    { id: 2, name: "Islamic Book Set", price: 15 },
    { id: 3, name: "Halal Perfume", price: 25 },
    { id: 4, name: "Organic Dates", price: 8 }
];

app.get("/api/products", (req, res) => {
    res.json(products);
});

// ORDERS
let orders = [];

app.post("/api/order", (req, res) => {
    const order = req.body;
    orders.push(order);

    res.json({
        message: "Order received successfully",
        order
    });
});

// SERVER START
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
const protect = require("./middleware/authMiddleware");

app.get("/api/profile", protect, (req, res) => {
  res.json({
    message: "This is protected data",
    user: req.user
  });
});


const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);


const cartRoutes = require("./routes/cartRoutes");

app.use("/api/cart", cartRoutes);


const orderRoutes = require("./routes/orderRoutes");

app.use("/api/orders", orderRoutes);


app.get("/api/status", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend is running",
    time: new Date()
  });
});
