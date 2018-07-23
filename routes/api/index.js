const router = require("express").Router();
const issueRoutes = require("./issues");
const userRoutes = require("./users");
const exampleRoutes = require("./examples");

router.use("/issues", issueRoutes);
router.use("/users", userRoutes);
router.use("/examples", exampleRoutes);

module.exports = router;