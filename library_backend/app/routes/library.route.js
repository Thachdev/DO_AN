const express = require("express");
const libraries = require("../controllers/library.controller");

const router = express.Router();

router.route("/")
	.get(libraries.findAll)
	.post(libraries.create)
	.delete(libraries.deleteAll);

router.route("/favorite")
	.get(libraries.findAllFavorite)

router.route("/:id")
	.get(libraries.findOne)
	.put(libraries.update)
	.delete(libraries.delete)

module.exports = router;
