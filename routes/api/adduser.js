const router = require("express").Router();
const usersController = require("../../controllers/usersController");


// Matches with "/api/issues"
router.route("/")
  .post(usersController.create);

// Matches with "/api/issues/:id"
router
  .route("/:id" )
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;