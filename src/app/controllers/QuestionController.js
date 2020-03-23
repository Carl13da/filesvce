import Question from '../schemas/QuestionSchema';

class QuestionController {
  async store(req, res) {
    const {
      questionType,
      content,
      images,
      alternatives,
      answer,
      explanation,
    } = req.body;

    await Question.create({
      questionType,
      content,
      images,
      alternatives,
      answer,
      explanation,
    });

    return res.json({
      questionType,
      content,
      images,
      alternatives,
      answer,
      explanation,
    });
  }

  async index(req, res) {
    const questions = await Question.find();
    return res.json(questions);
  }
}

export default new QuestionController();
