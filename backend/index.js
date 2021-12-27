import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";

import postRoutes from "./routes/posts.js";     // The `router` that we'll need for our routing 

const app = express();

// A function from the `dotenv` package. Used for finding the environment variables inside the .env file
config({ path: '../.env' });

// Setting up `bodyParser` so we can appropriately send requests. These two lines are somewhat specific to this app: bodyParser is a needed/useful package for MERN apps, but
// the `{limit: "30mb", extended: true}` values are specific to this app. `limit: "30mb"` is used for the images that will be sent inside of the requests; images can be 
// fairly large in size
app.use(bodyParser.json({limit: "30mb", extended: true})); 
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

// Setting up `cors`
app.use(cors());

// This is using express middleware to connect our routes to our app. The `/posts` is specified as being the starting path for all the routes for our `server/posts.js` file.
// So, anything that deals with post objects will start as http://localhost:${REACT_APP_CONNECTION_PORT}/posts. The second param is setting the routes. This must be defined under
// `app.use(cors())` so that we do not get an error when working in the DOM
app.use("/posts", postRoutes);

// Setting up the application to use MongoDB
const CONNECTION_PORT = process.env.REACT_APP_CONNECTION_PORT || 5000;

// Using `mongoose` to connect our app to the DB. The snippet requires two params: 1). the connection URL; 2). an object w/ all the options - NOTE: the two options used are NOT
// required, but the terminal will display some non-sensical error/warning messages, so it's good practice to include them. The snippet returns a Promise, so we'll need to chain
// `.then()` and `.catch()`
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(CONNECTION_PORT, () => console.log(`Server running on port: ${ CONNECTION_PORT }`)))       // `app.listen` requires 1). the port that we specified; 2). a func to be ran when the app successfully listens
    .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);  This line was mentioned in the tutorial video; it would have also ensured that we don't get any weird errors/warnings inside of the terminal, however according to
//                                           stackoverflow (https://stackoverflow.com/questions/69030963/error-usefindandmodify-is-an-invalid-option) it is depracated and no longer necessary