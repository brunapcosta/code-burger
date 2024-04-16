// import app from "./app.js"
const App = require("./app")

const port = process.env.PORT || 3001

App.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
