// import app from "./app.js"
import { listen } from "./app"

const port = process.env.PORT || 3001

listen(port, '0.0.0.0')
