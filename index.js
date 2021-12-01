const express = require("express");
const dataProker = require("./models/proker");
const dataSchedule = require("./models/schedule");
const cors = require("cors");

const app = express();

require("./config/connection");

app.use(cors());
app.use(express.json());

//data proker
app.get("/proker", async (req, res) => {
	const proker = await dataProker.find();
	res.send(proker);
});

app.post("/proker", (req, res) => {
	dataProker.insertMany(req.body, res.send("data has been successfully added"));
});

app.get("/proker/:id", async (req, res) => {
	const data = await dataProker.findById(req.params.id);
	res.send(data);
});

app.delete("/proker/:id", async (req, res) => {
	const data = await dataProker.deleteOne({ _id: req.params.id });
	res.json(data);
});

app.put("/proker/:id", async (req, res) => {
	await dataProker.findByIdAndUpdate(req.params.id, {
		$set: req.body,
	});
	res.send("data has been successfully edited");
});

// data jadwal
app.get("/jadwal", async (req, res) => {
	const jadwal = await dataSchedule.find();
	res.send(jadwal);
});

app.post("/jadwal", (req, res) => {
	dataSchedule.insertMany(req.body, res.send("data has been successfully added"));
});

app.listen(5000, console.log("app is run at http://localhost:5000"));
