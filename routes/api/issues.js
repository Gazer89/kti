const router = require("express").Router();
const issuesController = require("../../controllers/issuesController");

// Matches with "/api/issues"
router.route("/", "/Website", "/RNT","/Nettracer","/bagform","/irop","/flyapp","/admin")
  .get(issuesController.findAll)
  .post(issuesController.create);

// Matches with "/api/issues/:id"
router
  .route("/:id","/Website/:id", "/RNT/:id","/Nettracer/:id","/bagform/:id","/irop/:id","/flyapp/:id","/admin/:id" )
  .get(issuesController.findById)
  .put(issuesController.update)
  .delete(issuesController.remove);

module.exports = router;
