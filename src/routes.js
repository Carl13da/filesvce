import { Router } from 'express';

import QuestionController from './app/controllers/QuestionController';
import ContractController from './app/controllers/ContractController';

const routes = new Router();

routes.get('/questions', QuestionController.index);
routes.post('/questions/add', QuestionController.store);

routes.post('/contract/add-template', ContractController.store);
routes.put('/contract/update', ContractController.update);
routes.get('/contract/:id', ContractController.index);

export default routes;
