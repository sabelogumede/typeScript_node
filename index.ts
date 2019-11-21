import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";
import messenger from "./src/controllers/createMessage";
import { Settings } from "./settings";

// require("dotenv").config();

const app = express();

// instance of our class
let messages = new messenger(Settings.PORT);

// function
const dataConnection = (user: string, pass: string): string => {
  return `mongodb://${user}:${pass}@ds037601.mlab.com:37601/linkedin_api`;
};

// database connection string
let database = dataConnection(Settings.mlabUser, Settings.mlabPass);

// mongoose connection
// mongoose.Promise = global.Promise;
mongoose.connect(database, {
  useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// interfaces
// interface Name {
//   firstName: string;
// }

// generics
function nameCreator<T>(name: T): T {
  return name;
}

//  function with interface
// const nameCreator = (name: Name): string => {
//   return `Hello, ${name.firstName} `;
// };

// let myName = { firstName: "Sabelo" };

// users a generic
let myName = nameCreator<string>("Sabelo, ");

// decraration merging
interface Warriors {
  weapon: string;
  skills: number;
}

interface Warriors {
  name: string;
}

let ninja: Warriors = { weapon: "Shuriken", skills: 5, name: "Sabelo" };

// serving static files
app.use(express.static("public"));

app.get("/", (req, res) => res.send(ninja));

// app.listen(Settings.PORT, () =>
//   console.log(nameCreator(myName), messages.messagePrint())
// );

app.listen(Settings.PORT, () => console.log(myName, messages.messagePrint()));
