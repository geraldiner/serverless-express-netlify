const mongoose = require("mongoose");

const connectDB = async () => {
	const client = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(conn => {
		console.log(`MongoDB is connected: ${conn.connection.host}`);
	});
};

module.exports = connectDB;
