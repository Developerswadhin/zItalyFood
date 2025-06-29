import express from "express";
import colors from "colors";
import dotenv, { config } from "dotenv";
import path, { resolve } from "path";
import { log } from "console";

//env support
dotenv.config();
const PORT = process.env.PORT || 3500;

//for express js initialize
const app = express();

//support
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routing
app.get("/", (req, res) => {
  res.sendFile(path.join(resolve(), "/public/index.html"));
});

app.get("/staff", (req, res) => {
  res.sendFile(path.join(resolve(), "/public/staff.html"));
});

app.get("/team", (req, res) => {
  res.send("<h2>Team Page</h2>");
});

app.get("/currency", (req, res) => {
  res.sendFile(path.join(resolve(), "/public/currency.html"));
});

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(resolve(), "/public/gallery.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(resolve(), "/public/archive.html"));
});

app.get("/reservation", (req, res) => {
  res.sendFile(path.join(resolve(), "/public/reservation.html"));
});

app.get("/location", (req, res) => {
  res.sendFile(path.join(resolve(), "/public/location.html"));
});

app.get("/menu", (req, res) => {
  res.sendFile(path.join(resolve(), "/public/menu.html"));
});
app.get("/news", (req, res) => {
  res.sendFile(path.join(resolve(), "/public/news.html"));
});

app.get("/marriage_checker", (req, res) => {
  res.sendFile(path.join(resolve(), "/public/marriageChecker.html"));
});
//post data

app.post("/currency-converted", (req, res) => {
  const { amount, fromcurreny, tocurrency } = req.body;
  const rates = {
    TAKA: 1,
    DOLLAR: 0.0082,
    EURO: 0.007,
    POUND: 0.006,
  };

  const fromCurrency = fromcurreny.toUpperCase();
  const toCurrency = tocurrency.toUpperCase();

  if (rates[fromcurreny] && rates[toCurrency]) {
    let cTaka = amount / rates[fromCurrency];
    let ConvertedAmount = (cTaka * rates[toCurrency]).toFixed(2);
    return res.status(200).json({
      amount: amount,
      currenctCurrency: fromCurrency,
      convertCurrency: toCurrency,
      ConvertedAmountf: ConvertedAmount,
    });
  }
});

//MarrageChekcer
app.post("/marrageChecker", (req, res) => {
  let { name, dob, gender } = req.body;
  const birthDate = new Date(dob);
  let today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();

  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDay() - birthDate.getDate();

  if (days < 0) {
    months--;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  console.log(years);

  //marriage Conditions
  if (gender == "female") {
    if (years >= 18) {
      return res.status(200)
        .send(`<div style="width:1200px;height:400px; text-align:center;">
        <img style="width:400px;height:400px;border-radius: 50%; margin:10px 20px" src="https://media.tenor.com/FZ-4CQN3ywsAAAAi/laughing-lol.giff" />
        </br>
        <h1 style="font-size:40px; margin-top:50px; color:green;">Dear ${name},  Congratulations you are of marriageable age</h1>
          
        </div>
          `);
    } else {
      return res.status(200).send(
        `<div style="width:1200px;height:400px; text-align:center;">
        <img style="width:400px;height:400px;border-radius: 50%; margin:10px 20px" src="https://media.tenor.com/z6p1dxC8ItMAAAAi/sad-face-emotional.gif" />
        </br>
        <h1 style="font-size:40px; margin-top:50px; color:red;">Dear ${name}, Sorry you are Not marriageable age You Need to Wait ${
          18 - years
        } years  ${12 - months} Months</h1>
          
        </div>
          `
      );
    }
  } else {
    if (years >= 21) {
      return res.status(200).send(
        `<div style="width:1200px;height:400px; text-align:center;">
        <img style="width:400px;height:400px;border-radius: 50%; margin:10px 20px" src="https://media1.tenor.com/m/OyaPRN6Y1jcAAAAC/spiderman-happy-hands.gif" />
        </br>
        <h1 style="font-size:40px; margin-top:50px; color:green;">Dear ${name},  Congratulations you are of marriageable age</h1>
          
        </div>
          `
      );
    } else {
      return res.status(200).send(
        `<div style="width:1200px;height:400px; text-align:center;">
        <img style="width:400px;height:400px;border-radius: 50%; margin:10px 20px" src="https://media1.tenor.com/m/Jq3OX44XVrsAAAAd/tobey.gif" />
        </br>
        <h1 style="font-size:40px; margin-top:50px; color:red;">Dear ${name}, Sorry you are Not marriageable age You Need to Wait ${
          21 - years
        } years  ${12 - months} Months</h1>
          
        </div>
          `
      );
    }
  }
});
// static folder
app.use(express.static("public"));

//for server listen

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`.bgCyan.white);
});
