import { Router } from "express"
import UserController from "./app/controllers/UserController";

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', UserController.store)

export default routes;
