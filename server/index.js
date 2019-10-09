const express = require("express");
const {addDestination} = require("./travelController");

const app = express();

app.use(express.json());

const PORT = 5050;

app.post("/api/travel/", addDestination)

app.listen(PORT, () => console.log("Listening on Port 5050"));