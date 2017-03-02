const express        = require("express");
const authController = express.Router();
const passport       = require("passport");

const User           = require("../models/user");

const bcrypt         = require("bcrypt");
const bcryptSalt     = 19;

authController.post("/signup", (req, res, next) => {
});

authController.post("/login", (req, res, next) => {
});

authController.post("/logout", (req, res) => {
});

authController.get("/loggedin", (req, res) => {
});

module.exports = authController;
