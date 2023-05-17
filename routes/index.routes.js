const express = require("express");

const router = express.Router();

// views
const mainRouter = require("./views/main.route");
const categoryRouter = require('./views/category.route')
router.use("/", mainRouter);
router.use('/category',categoryRouter)

// api

module.exports = router;
