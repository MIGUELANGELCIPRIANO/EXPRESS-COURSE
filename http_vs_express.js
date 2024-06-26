// HTTP SERVER

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
// 	const read = fs.createReadStream('./static/index.html')
// 	read.pipe(res)
// })

// server.listen(3000)
// console.log(`Server listening on port ${3000}`)

// EXPRESS SERVER

const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.sendFile('./static/public/index.html', {
		root: __dirname,
	})
})

app.listen(3000)
console.log(`Server listening on port ${3000}`)
