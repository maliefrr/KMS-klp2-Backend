const express = require("express");
const dataProker = require("./models/proker");
const cors = require("cors");

const app = express();

require("./config/connection");

app.use(cors());
app.use(express.json());

app.get("/proker", async (req, res) => {
	const proker = await dataProker.find();
	res.send(proker);
});

app.post("/proker", (req, res) => {
	dataProker.insertMany(req.body, res.send("data has been successfully added"));
});

app.listen(5000, console.log("app is run at http://localhost:5000"));
