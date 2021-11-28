const express = require("express");

const app = express();

require("./config/connection");

app.get("/", (req, res) => {
	res.send("success");
});

app.listen(5000, console.log("app is run at http://localhost:5000"));
