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
	let isActive = true
	const subtitle = 'Welcome to the homepage'
	res.render('index', { subtitle, isActive })
})

router.get('/about', (req, res) => {
	res.render('about')
})

router.get('/dashboard', (req, res) => {
	const users = [
		{
			id: 1,
			name: 'Leanne Graham',
		},
		{
			id: 2,
			name: 'Ervin Howell',
		},
		{
			id: 3,
			name: 'Clementine Bauch',
		},
		{
			id: 4,
			name: 'Patricia Lebsack',
		},
		{
			id: 5,
			name: 'Chelsey Dietrich',
		},
		{
			id: 6,
			name: 'Dennis Schulist',
		},
		{
			id: 7,
			name: 'Kurtis Weissnat',
		},
		{
			id: 8,
			name: 'Nicholas Runolfsdottir',
		},
		{
			id: 9,
			name: 'Glenna Reichert',
		},
		{
			id: 10,
			name: 'Clementina DuBuque',
		},
	]
	res.render('dashboard', { users })
})

module.exports = router
