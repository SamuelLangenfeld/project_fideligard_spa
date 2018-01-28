const express = require("express");
const app = express();
const fs = require("fs");
const fetch = require("isomorphic-fetch");
const path = require("path");

// ----------------------------------------
// App Variables
// ----------------------------------------
app.locals.appName = "My App";

// ----------------------------------------
// ENV
// ----------------------------------------
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// ----------------------------------------
// Body Parser
// ----------------------------------------
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// ----------------------------------------
// Sessions/Cookies
// ----------------------------------------
const cookieSession = require("cookie-session");

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET || "secret"]
  })
);

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// ----------------------------------------
// Flash Messages
// ----------------------------------------
const flash = require("express-flash-messages");
app.use(flash());

// ----------------------------------------
// Method Override
// ----------------------------------------
const methodOverride = require("method-override");
const getPostSupport = require("express-method-override-get-post-support");

app.use(
  methodOverride(
    getPostSupport.callback,
    getPostSupport.options // { methods: ['POST', 'GET'] }
  )
);

// ----------------------------------------
// Referrer
// ----------------------------------------
app.use((req, res, next) => {
  req.session.backUrl = req.header("Referer") || "/";
  next();
});

// ----------------------------------------
// Public
// ----------------------------------------

app.use(express.static(path.join(__dirname, "../client/build")));

// ----------------------------------------
// Logging
// ----------------------------------------
const morgan = require("morgan");
const morganToolkit = require("morgan-toolkit")(morgan);

app.use(morganToolkit());

// ----------------------------------------
// Routes
// ----------------------------------------
app.get("/apiCall", (req, res, next) => {
  let symbols = [
    "aapl",
    "tsla",
    "amzn",
    "fb",
    "goog",
    "twtr",
    "t",
    "vz",
    "ge",
    "orcl"
  ];

  let promiseArray = [];
  let time = 1;
  let date = new Date();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let day = date.getDate();

  let endDate = `${year}-${month}-${day}`;
  let startDate = `${year - 1}-${month}-${day}`;

  symbols.forEach(symbol => {
    time += 300;
    promiseArray.push(
      new Promise((res, rej) => {
        setTimeout(() => {
          fetch(
            `https://www.quandl.com/api/v3/datasets/WIKI/${symbol}/data.json?trim_start=${startDate}&trim_end=${endDate}&api_key=${
              process.env.api_key
            }`
          )
            .then(results => results.json())
            .then(results => res(results));
        }, time);
      })
    );
  });

  Promise.all(promiseArray).then(results => {
    results.forEach((result, i) => {
      result.symbol = symbols[i];
    });
    console.log("RECEIVED RESULTS");
    res.append("Access-Control-Allow-Origin", "*");
    res.json(results);
  });
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// ----------------------------------------
// Server
// ----------------------------------------
const port = process.env.PORT || process.argv[2] || 3001;
const host = "localhost";

let args;
process.env.NODE_ENV === "production" ? (args = [port]) : (args = [port, host]);

args.push(() => {
  console.log(`Listening: http://${host}:${port}\n`);
});

if (require.main === module) {
  app.listen.apply(app, args);
}

// ----------------------------------------
// Error Handling
// ----------------------------------------
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.stack) {
    err = err.stack;
  }
  res.status(500).render("errors/500", { error: err });
});

module.exports = app;
