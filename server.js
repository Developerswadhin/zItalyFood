import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import ejs from "ejs";
import expressEJsLayouts from "express-ejs-layouts";

import LoadPageRouter from "./routes/loadPageRoute.js";

//express initialization
const app = express();

//dot env config
dotenv.config();

// var from dotenv
const PORT = process.env.PORT || 3535;

//External Support
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS layout Configuration
app.use(expressEJsLayouts);

//EJS Support
app.set("view engine", "ejs");

//Routing

app.use(LoadPageRouter);
//Public static foolder

app.use(express.static("public"));

//listen server

app.listen(PORT, () => {
  console.log(`Server is runnig on ${PORT} PORT`.bgCyan.white);
});
