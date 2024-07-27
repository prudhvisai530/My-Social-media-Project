const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("posts route");
});

module.exports = router;
