const express = require("express");
const cors = require("cors");

const librariesRouter = require("./app/routes/library.route");
const usersRouter = require("./app/routes/user.route")

const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
	res.json({message: "Wellcome to Rho Library application."});
} );

app.use("/api/libraries", librariesRouter);
app.use("/api/users", usersRouter)

app.use((req, res, next) => {
	
	return next(new ApiError(404, "Resource not found"));
});


app.use((err, req, res, next) => {
	
	return res.status(err.statusCode || 500).json({
	message: err.message || "Internal Server Error",
	});
});
module.exports = app;
