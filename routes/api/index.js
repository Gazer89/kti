const router = require("express").Router();
const issueRoutes = require("./issues");
const adduserRoutes = require("./adduser");
const userRoutes = require("./users");
const exampleRoutes = require("./examples");

router.use("/issues", issueRoutes);
router.use("/users", userRoutes);
router.use("/adduser", adduserRoutes);
router.use("/examples", exampleRoutes);

module.exports = router;