const express = require("express");
const Book = require("../../models/Book");

const router = express.Router();
router.get("/", async (req, res) => {
	const books = await Book.find({});
	res.send(books);
});

router.get("/:id", async (req, res) => {
	let id = req.params.id;
	const book = await Book.findOne({ _id: id });
	res.send(book);
});

router.post("/", async (req, res) => {
	const book = new Book({
		title: req.body.title,
		author: req.body.author,
		summary: req.body.summary,
	});
	await book.save();
	res.send({ msg: "succesfull" });
});

router.delete("/:id", async (req, res) => {
	await Book.deleteOne({ _id: req.params.id });
	res.send({ msg: "succesfull" });
});

router.put("/:id", async (req, res) => {
	await Book.findOneAndUpdate(
		{ _id: req.params.id },
		{ title: req.body.title,author: req.body.author, summary: req.body.summary }
	);
	res.send({ msg: "succesfull" });
});

module.exports = router;
