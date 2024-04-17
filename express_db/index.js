const express = require('express')
const morgan = require('morgan')
const { Pool } = require('pg')
require('dotenv').config()

const app = express()

app.set('appName', 'EXPRESS-DB')

app.use(morgan('dev'))

const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME, PORT } = process.env

const pool = new Pool({
	host: `${DB_HOST}`,
	user: `${DB_USER}`,
	password: `${DB_PASSWORD}`,
	database: `${DB_NAME}`,
})

app.get('/', async (req, res) => {
	const result = await pool.query('SELECT * FROM users')
	res.send(result.rows)
})

app.listen(PORT)
console.log(`${app.get('appName')} server listening on port ${PORT}`)
