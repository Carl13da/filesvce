import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema(
  {
    questionType: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    alternatives: {
      type: String,
      required: false,
    },
    answer: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Question', QuestionSchema);
