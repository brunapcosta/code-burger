// import express from "express"
// import routes from "./routes.js"
// import { fileURLToPath } from 'url'
// import { dirname, resolve } from 'path'
// import cors from 'cors'

// import "./database/index.js"

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const express = require("express");
const routes = require("./routes");
const { resolve } = require("path");
const cors = require("cors");

require("./database");

const corsOptions = {
  origin: 'https://burger-good.vercel.app/',
  credentials: true,
}

class App {

  constructor() {
    this.app = express()
    this.app.use(cors(corsOptions))
    this.middlewares()
    this.routes()

  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'Uploads'))
      ),

    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'Uploads'))
      )
  }

routes() {
  this.app.use(routes)
}

// async Database() {
//   try {
//     await this.database.connect();
//     console.log('Connected to the database');
//   } catch (error) {
//     console.error('Failed to connect to the database:', error);
//   }
// }

}

module.exports =  new App().app;

// export default new App().app;
