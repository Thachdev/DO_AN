const { ObjectId } = require("mongodb");
class LibraryService {
	constructor(client) {
		this.Library = client.db().collection("libraries");
	};
	extractLibraryData(payload) {
		const library = {
			name: payload.name,
			text: payload.text,
			author: payload.author,
			number : payload.number ,
			image: payload.image,
			phar: payload.phar,
			favorite: payload.favorite,
		};
		Object.keys(library).forEach(
			(key) => library[key] === undefined && delete library[key]
			);
			return library;
	}
	async create(payload) {
		const library = this.extractLibraryData(payload);
		const result = await this.Library.findOneAndUpdate(
			library,
			{ $set: { favorite: library.favorite === true } },
			{ returnDocument: "after", upsert: true }
		);
		return result.value;
	}
	async find(filter) {
		const cursor = await this.Library.find(filter);
		return await cursor.toArray();
		}
		async findByName(name) {
			return await this.find({
				name: { $regex: new RegExp(name), $options: "i" },
		});
	}
	async findById(id) {
		return await this.Library.findOne({
			_id: ObjectId.isValid(id) ? new ObjectId(id) : null,
		});
	}
	async update(id, payload) {
		const filter = {
			_id: ObjectId.isValid(id) ? new ObjectId(id) : null,
		};
		const update = this.extractLibraryData(payload);
		const result = await this.Library.findOneAndUpdate(
			filter,
			{ $set: update },
			{ returnDocument: "after" }
		);
		return result.value;
	}
	async delete(id) {
		const result = await this.Library.findOneAndDelete({
			_id: ObjectId.isValid(id) ? new ObjectId(id) : null,
		});
		return result.value;
	}
	async findFavorite() {
		return await this.find({ favorite: true });
	}
	async deleteAll() {
		const result = await this.Library.deleteMany({});
		return result.deletedCount;
	}
	
}
module.exports =LibraryService;
