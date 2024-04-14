const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.json({
		card: [
			{
				name: 'Úrabrask',
				manaCost: '{2}{R}',
				cmc: 4,
				colors: ['Red'],
				type: 'Legendary Creature — Phyrexian Praetor',
				types: ['Legendary Creature'],
				subtypes: ['Phyrexian Praetor'],
			},
		],
	})
})

app.get('/isAlive', (req, res) => {
	res.sendStatus(204)
})

app.listen(3000)
console.log(`Server listening on port ${3000}`)
