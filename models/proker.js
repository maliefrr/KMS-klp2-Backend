const mongoose = require("mongoose");

const proker = mongoose.model("proker", {
	namaDivisi: {
		type: String,
	},
	namaProker: {
		type: String,
	},
	status: {
		type: Boolean,
	},
	penanggungJawab: {
		type: String,
	},
});

module.exports = proker;
