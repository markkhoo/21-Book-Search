const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/books"
router
    .route("/")
    .get(postsController.findAll);

// Matches with "/api/books"
router
    .route("/")
    .post(postsController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(postsController.findById)
    .put(postsController.update)
    .delete(postsController.remove);

module.exports = router;