// const { Router } = require ("express");
// const multer = require ("multer");
// const multerConfig = require ("./config/multer");

// const UserController = require ("./app/controllers/UserController");
// const SessionController = require ("./app/controllers/SessionController");
// const ProductController = require ("./app/controllers/ProductController");
// const CategoryController = require ("./app/controllers/OrderController");
// const OrderController = require ("./app/controllers/OrderController");

// const authMiddleware = require ("./app/middlewares/auth");

import { Router } from "express"
import multer from 'multer'
import multerConfig from './config/multer.js'

import UserController from "./app/controllers/UserController.js";
import SessionController from "./app/controllers/SessionController.js";
import ProductController from "./app/controllers/ProductController.js";
import CategoryController from "./app/controllers/CategoryController.js";
import OrderController from "./app/controllers/OrderController.js";

import authMiddleware from './app/middlewares/auth.js'

const upload = multer(multerConfig);
const routes = new Router();

routes.get('/', (req, res)=>  {
    return res.json({ message: 'Hello to my first API' })
})

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); //será chamado por todas as rotas abaixo

routes.post('/products', upload.single('file'), ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/products/:id', upload.single('file'), ProductController.update);

routes.post('/categories', upload.single('file'), CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.put('/categories/:id', upload.single('file'), CategoryController.update);

routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);
routes.get('/orders', OrderController.index);

// module.exports = routes;

export default routes;
