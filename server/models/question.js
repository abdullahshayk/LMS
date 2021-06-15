var mongoose = require("mongoose");
var Schema = mongoose.Schema;


const QuestionSchema = new Schema({
  description: String,
  alternatives: [
      {
          text: {
              type: String,
              required: true
          },
          isCorrect: {
              type: Boolean,
             
          }
      }
  ]
})
module.exports = mongoose.model("Question", QuestionSchema);
