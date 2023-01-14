const rateLimit = require("express-rate-limit");

const general_limiter = rateLimit({
	max: 2000,
	windowMs: 60 * 60 * 1000,
	message: "You have sent too many requests! Try again in one hour!"
});

const upload_limiter = rateLimit({
	max: 200,
	windowMs: 60 * 60 * 1000,
	message: "You have uploaded too many files! Try again in one hour!"
});

module.exports = {
	general_limiter: general_limiter,
	upload_limiter: upload_limiter,
}