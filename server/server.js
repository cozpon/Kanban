const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const compression = require('compression');
const passport = require('passport');
const path = require('path');
const session = require('express-session');
const redis = require('connect-redis')(session);

const db = require('./models');
const routes = require('./routes');

const PORT = process.env.PORT || 4567;

const Users = db.User;
const Cards = db.Card;
const Priorities = db.Priority;
const Status = db.Status;

app.use(function (req, res, next) { // allowing front end to talk to back end
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(compression()); // compress all responses
app.use(express.static(path.join(__dirname, '..', '/public')));
app.use(bodyParser.urlencoded({ "extended" : true }));
app.use(bodyParser.json());

app.use(session({
  store: new redis(),
  secret: "rickyrules",
  resave: false,
  saveInitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/api', routes);


app.listen(PORT, function() {
  db.sequelize.sync({ force: false });
  console.log("SWERVER's UP" + `${PORT}`);
});