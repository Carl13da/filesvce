import { Router } from 'express';

import QuestionController from './app/controllers/QuestionController';

const routes = new Router();

routes.get('/questions', QuestionController.index);
routes.post('/questions/add', QuestionController.store);

export default routes;
