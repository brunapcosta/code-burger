import express from "express"
import routes from "./routes"
import { resolve } from 'path'
import cors from 'cors'

import "./database"

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
export default new App().app
