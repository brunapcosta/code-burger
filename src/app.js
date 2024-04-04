import express from "express"
import routes from "./routes"
import { resolve } from 'path'
import cors from 'cors'
// const express = require ("express");
// const routes = require ("./routes");
// const { resolve } = require ("path");
// const cors = require ("cors");

// const database = require ("./database");

import "./database"

// const corsOptions = {
//   origin: ["https://code-burger-interface-mauve.vercel.app/"],
//   credentials: true,
// }

class App {

  constructor() {
    this.app = express()
    this.app.use(cors(
      {
        "origin": "*",
        "methods": "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
      }
    ))

    //   {
    //   origin: 'http://localhost:3000',
    //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    // }

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
