const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcom user");
});

module.exports = router;
