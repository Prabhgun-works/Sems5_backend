const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3030;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// POST endpoint to store user
app.post("/user", (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Received:", email, password);

        res.json({
            success: true,
            message: "Success!",
            data: { email, password }
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Something went wrong"
        });
    }
});