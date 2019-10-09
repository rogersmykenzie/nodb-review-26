const express = require("express");
const {addDestination, getDestination, removeDestination} = require("./travelController");

const app = express();

app.use(express.json());

const PORT = 5050;

app.post("/api/travel", addDestination)
//create an endpoint that will send back all the destinations
app.get("/api/travel", getDestination);

app.delete("/api/travel/:id", removeDestination)

app.listen(PORT, () => console.log("Listening on Port 5050"));