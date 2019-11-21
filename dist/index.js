"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./src/routes/crmRoutes");
const createMessage_1 = require("./src/controllers/createMessage");
const settings_1 = require("./settings");
// require("dotenv").config();
const app = express();
// instance of our class
let messages = new createMessage_1.default(settings_1.Settings.PORT);
// function
const dataConnection = (user, pass) => {
    return `mongodb://${user}:${pass}@ds037601.mlab.com:37601/linkedin_api`;
};
// database connection string
let database = dataConnection(settings_1.Settings.mlabUser, settings_1.Settings.mlabPass);
// mongoose connection
// mongoose.Promise = global.Promise;
mongoose.connect(database, {
    useMongoClient: true
});
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
crmRoutes_1.default(app);
// interfaces
// interface Name {
//   firstName: string;
// }
// generics
function nameCreator(name) {
    return name;
}
//  function with interface
// const nameCreator = (name: Name): string => {
//   return `Hello, ${name.firstName} `;
// };
// let myName = { firstName: "Sabelo" };
// users a generic
let myName = nameCreator("Sabelo, ");
let ninja = { weapon: "Shuriken", skills: 5, name: "Sabelo" };
// serving static files
app.use(express.static("public"));
app.get("/", (req, res) => res.send(ninja));
// app.listen(Settings.PORT, () =>
//   console.log(nameCreator(myName), messages.messagePrint())
// );
app.listen(settings_1.Settings.PORT, () => console.log(myName, messages.messagePrint()));
