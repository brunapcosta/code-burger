// const express = require ("express");
// const routes = require ("./routes");
// const { resolve } = require ("path");
// const cors = require ("cors");

// const database = require ("./database");


import express from "express"
import routes from "./routes.js"
import { resolve } from 'path'
import cors from 'cors'

import'./database/index.js'
class App {

  constructor() {
    this.app = express()
    this.app.use(cors())

    this.milddlewares()
    this.routes()
  }

  milddlewares() {
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
};

// module.exports = { app: new App().app }

export default new App().app
