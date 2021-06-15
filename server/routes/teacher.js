var express = require('express');
var router = express.Router();
const controller = require("../controller/quiz");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get(
  '/viewQuiz', 
  controller.viewQuiz
);
router.post(
  '/addQuestion', 
  controller.addQuestion
);
router.delete(
  '/deleteQuestion/:id', 
  controller.deleteQuestion
);



module.exports = router;
