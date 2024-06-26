const express = require("express");
const routes = require("./routes");
const { resolve } = require("path");
const cors = require("cors");

require("./database/index.js");

const corsOptions = {
  origin: 'https://burger-good.vercel.app',
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
      '/category-file',
      express.static(resolve(__dirname, '..', 'Uploads'))
      )

    this.app.use(
        '/product-file',
        express.static(resolve(__dirname, '..', 'Uploads'))
        )
  }

  routes() {
      this.app.use(routes)
}

}

module.exports =  new App().app;