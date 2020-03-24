import mongoose from 'mongoose';

const ContractSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  contractQuestionJson: {
    type: String,
    required: true,
  },
  contractTemplate: {
    type: String,
    required: true,
  },
  freezyContract: {
    type: Object,
    required: true,
  },
});

export default mongoose.model('Contract', ContractSchema);
