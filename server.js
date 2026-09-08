require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log("MySQL connection failed:", err);
    } else {
        console.log("MySQL connected successfully!");
    }
});

// Home
app.get("/", (req, res) => {
    res.send("Coffee Management System Backend is running");
});

// Coffee menu
app.get("/api/coffees", (req, res) => {
    res.json([
        { id: 1, name: "Cappuccino", price: 120 },
        { id: 2, name: "Latte", price: 140 },
        { id: 3, name: "Espresso", price: 100 }
    ]);
});

// CREATE ORDER
app.post("/api/orders", (req, res) => {
    const { coffee, quantity } = req.body;

    const sql = "INSERT INTO orders (coffee, quantity) VALUES (?, ?)";

    db.query(sql, [coffee, quantity], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({
            id: result.insertId,
            coffee,
            quantity
        });
    });
});

// READ ORDERS
app.get("/api/orders", (req, res) => {
    const sql = "SELECT * FROM orders";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(results);
    });
});

// UPDATE ORDER
app.put("/api/orders/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { coffee, quantity } = req.body;

    const sql = `
        UPDATE orders
        SET coffee = ?, quantity = ?
        WHERE id = ?
    `;

    db.query(sql, [coffee, quantity, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.json({
            message: "Order updated successfully",
            id,
            coffee,
            quantity
        });
    });
});

// DELETE ORDER
app.delete("/api/orders/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const sql = "DELETE FROM orders WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.json({
            message: "Order deleted successfully"
        });
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});