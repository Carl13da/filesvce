import Contract from '../schemas/ContractSchema';

class ContractController {
  async store(req, res) {
    const {
      _id,
      contractQuestionJson,
      contractTemplate,
      freezyContract,
    } = req.body;

    await Contract.create({
      _id,
      contractQuestionJson,
      contractTemplate,
      freezyContract,
    });

    return res.json({
      _id,
      contractQuestionJson,
      contractTemplate,
      freezyContract,
    });
  }

  async update(req, res) {
    const {
      _id,
      contractQuestionJson,
      contractTemplate,
      freezyContract,
    } = req.body;

    await Contract.findByIdAndUpdate(_id, {
      contractQuestionJson,
      contractTemplate,
      freezyContract,
    });

    return res.json({
      _id,
      contractQuestionJson,
      contractTemplate,
      freezyContract,
    });
  }

  async index(req, res) {
    console.log(req.params.id);
    const contract = await Contract.findById(req.params.id);

    return res.json(contract);
  }
}

export default new ContractController();
