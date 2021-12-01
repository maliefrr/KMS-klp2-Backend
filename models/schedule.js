const mongoose = require("mongoose");

const Schedule = mongoose.model("schedule", {
	agenda: {
		type: String,
	},
	waktu: {
		type: String,
	},
});

module.exports = Schedule;
