import express from "express";
import cors from "cors";
import connectdb from "./db/Connection.js";

import web from "./route/web.js"
const app = express()
const port = 5000
const DATABASE_URL = process.env.PORT || "mongodb://localhost:27017";

//load route
app.use(cors({
  origin:'*'
}));

//to handle request of json data
app.use(express.json())

app.use("/",web)


//connection database
connectdb(DATABASE_URL)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})