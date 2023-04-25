const ApiError = require("../api-error");
const LibraryService = require("../services/library.service");
const MongoDB = require("../utils/mongodb.util");

exports.create = async (req, res, next) => {
	if(!req.body?.name) {
		return next( new ApiError(400, 'Name can not be empty'))
	}
	try {
		const libraryService = new LibraryService(MongoDB.client)
		const document = await libraryService.create(req.body);
		return res.send(document);
	}catch(error) {
		return next(
			new ApiError(500, 'An error occurred while creating the library')
		);
	}
} 

exports.findAll = async (req, res, next) => {
	let documents = [];
	try {
		const libraryService = new LibraryService(MongoDB.client);
		const { name } = req.query;
		if (name) {
			documents = await libraryService.findByName(name);
		}else {
			documents = await libraryService.find({});
		}
	} catch (error) {
		return next(
			new ApiError (500, "An error occurred while retrieving books")
		)
	}
	return res.send(documents);

} 

exports.findOne = async (req, res,next) => {
	try {
		const libraryService = new LibraryService(MongoDB.client);
		const document = await libraryService.findById(req.params.id);
		if (!document) {
			return next (new ApiError (404, "Book not found"));
		}
		return res.send(document);
	} catch (error) {
		return next(
			new ApiError (
				500,
				`Error retrieving book with id=${req.params.id}`
			)
		)
	} 
}

exports.update = async (req, res, next) => {
	if (Object.keys(req.body).length == 0) {
		return next(new ApiError(400, "Data to update can not be empty"));
	}
		
	try {
		const libraryService = new LibraryService(MongoDB.client) ;
		const document = await libraryService.update(req.params.id, req.body);
		if (!document) {
			return next(new ApiError(404, "Book not found"));
		}
		
		return res.send({ message: "Book was updated successfully" });
	}catch (error) {
		return next(
			new ApiError(500, `Error updating book with id=${req.params.id}` )
		);
	}
}
exports.delete =async (req, res, next) => {
	try {
		const libraryService = new LibraryService(MongoDB.client) ;
		const document = await libraryService.delete(req.params.id);
		if (!document) {
			return next (new ApiError(404, "Book not found"));
		}
		return res.send({ message: "Book was deleted successfully" });
	}catch (error) {
		return next(
			new ApiError(
				500,
				`Could not delete book with id=${req.params.id}`
			)
		)
	}
}

exports.deleteAll = async (_req, res, next) => {
	try{
		const libraryService = new LibraryService(MongoDB.client);
		const deletedCount = await libraryService.deleteAll();
		return res.send({
			message: `${deletedCount} books were deleted successfully`,
		});
	}catch (error) {
		return next(
		new ApiError(588, "An error occurred while removing all books")
		)
	}
} 

exports.findAllFavorite = async (_req, res, next) => {
	try {
		const libraryService = new LibraryService(MongoDB. client);
		const documents = await libraryService.findFavorite();
		return res.send(documents) ;
	}catch(error) {
		return next(
			new ApiError(
				500,
				"An error occurred while retrieving favorite books"
			)
		)
	}
} 
