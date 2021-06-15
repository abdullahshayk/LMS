const Question = require("../models/question")




module.exports.addQuestion = async function (req, res, next) {
  try {
    const { description } = req.body
    const { alternatives } = req.body

    const question = await Question.create({
        description,
        alternatives
    })

    return res.status(201).json(question)
} catch (error) {
    return res.status(500).json({"error":error})
}
}

module.exports.viewQuiz = async function (req, res, next) {

  try {
    const quiz = await Question.find()
    return res.status(200).json(quiz)
} catch (error) {
    return res.status(500).json({"error":error})
}
}

module.exports.deleteQuestion = async function (req, res, next) {

 
    try {
        const _id = req.params.id 

        const question = await Question.deleteOne({_id})

        if(question.deletedCount === 0){
            return res.status(404).json()
        }else{
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }


}

  

 
