const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
const booksRoute = require("./routes/api/books");
app.use("/api/books", booksRoute);

// Production
if (process.env.NODE_ENV === "production") {
	console.log('inside-0---00');
	// Static folder
	app.use(express.static(__dirname + "/public/"));
	// SPA
	app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

async function start() {
	try {
		const port = process.env.PORT || 5000;
		const mongodb_url = process.env.MONGODB_URL;

		await mongoose
			.connect(mongodb_url, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			})
			.then(() => console.log("Database connected."))
			.catch(e => console.error(e));

		app.listen(port, () =>
			console.log(`Server has been started on port ${port}.`)
		);
	} catch (error) {
		console.error(error);
	}
}

start();
