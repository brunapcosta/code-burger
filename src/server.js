// import { app } from "./app.js";

const { app } = require ("./app.js");
const cors = require("cors")

app.use(cors())

app.listen(3001);
