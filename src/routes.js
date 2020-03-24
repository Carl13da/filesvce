import { Router } from 'express';
import cors from 'cors';

import QuestionController from './app/controllers/QuestionController';
import ContractController from './app/controllers/ContractController';

const routes = new Router();

routes.get('/questions', QuestionController.index);
routes.post('/questions/add', QuestionController.store);

routes.post('/contract/add-template', cors(), ContractController.store);
routes.put('/contract/update', cors(), ContractController.update);
routes.get('/contract/:id', cors(), ContractController.index);

export default routes;
