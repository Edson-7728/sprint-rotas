import express from "express";
import contr from "./controller/controller.js"
import dados from "./database/dbs.js"

const app = express ()
const port = 3000

app.use (express.json())
contr (app, dados)

app.listen (port, () => {
    console.log(`http://localhost:${port}`);
})