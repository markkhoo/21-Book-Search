const router = require("express").Router();
const booksRoutes = require("./posts");

// Post routes
router.use("/books", booksRoutes);

module.exports = router;