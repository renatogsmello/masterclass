const os = require("os")

setInterval(() => {
	const { freemem, totalmem } = os

	const total = parseInt(totalmem() / 1024 / 1024)
	const free = parseInt(freemem() / 1204 / 1024)
	const percentage = parseInt((free / total) * 100)

	const stats = {
		total: `${total} MB`,
		free: `${free} MB`,
		percentage: `${percentage}%`,
	}
	console.clear()
	console.log("==== PC Stats =====")
	console.table(stats)
}, 1000)
