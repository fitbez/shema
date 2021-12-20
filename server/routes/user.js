const router = require("express").Router();

/* Setting up API end points */

router.get("/usertest", (req, res) => {
  res.send("user test is successfull");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  //   console.log(username);
  res.send(username);
});

module.exports = router;
