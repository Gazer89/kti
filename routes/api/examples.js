const router = require("express").Router();
const examplesController = require("../../controllers/examplesController");

// Matches with "/api/issues"
router.route("/")
  .get(examplesController.findAll)
  .post(examplesController.create);

// Matches with "/api/issues/:id"
router
  .route("/:id")
  .get(examplesController.findById)
  .put(examplesController.update)
  .delete(examplesController.remove);

module.exports = router;