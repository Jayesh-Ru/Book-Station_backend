const express = require("express");
const Book = require("../../models/Book");

const router = express.Router();
router.get("/", async (req, res) => {
	const books = await Book.find({});
	res.send(books);
});

router.get("/:id", async (req, res) => {
	try {
		let id = req.params.id;
		const book = await Book.findOne({ _id: id });
		res.send(book);
	} catch (error) {
		res.status(500).send('no book prsent with this id');
	}
});

router.post("/", async (req, res) => {
	try {
		const book = new Book({
			title: req.body.title,
			author: req.body.author,
			summary: req.body.summary,
		});
		await book.save();
		res.send({ msg: "succesfull" });	
	} catch (error) {
		res.status(500).send('error while creating an entry');
	}
});

router.delete("/:id", async (req, res) => {
	try {
		await Book.deleteOne({ _id: req.params.id });
		res.send({ msg: "succesfull" });	
	} catch (error) {
		res.status(500).send('attempt to delete an entry that is not present');
	}
});

router.put("/:id", async (req, res) => {
	try {
		await Book.findOneAndUpdate(
			{ _id: req.params.id },
			{ title: req.body.title,author: req.body.author, summary: req.body.summary }
		);
		res.send({ msg: "succesfull" });	
	} catch (error) {
		res.status(500).send('attempt to update an entry unsuccesful');
	}
});

module.exports = router;
