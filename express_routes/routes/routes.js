// METHOD #1

// const Routes = (router) => {
// 	router.get('/', (req, res) => {
// 		res.send('Welcome!')
// 	})

// 	router.get('/about', (req, res) => {
// 		res.send('About')
// 	})

// 	router.get('/dashboard', (req, res) => {
// 		res.send('Dashboard')
// 	})
// }

// module.exports = Routes

// METHOD #2

const express = require('express') // OR `const { Router } = require('express')`

const router = express.Router() // OR `const router = Router()`

router.get('/', (req, res) => {
	const subtitle = 'Welcome to the homepage'
	res.render('index', { subtitle })
})

router.get('/about', (req, res) => {
	res.send('About')
})

router.get('/dashboard', (req, res) => {
	res.send('Dashboard')
})

module.exports = router
