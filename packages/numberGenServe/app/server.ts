import * as express from "express";
import { NumberGen } from "../../numberGen/app/numberGen";
const app = express();
const port = 8080; // default port to listen
const number = new NumberGen();
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( number.getNumber);
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );