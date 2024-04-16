const express = require('express')

const app = express()

app.get('/cards', (req, res) => {
	req.query.card === 'urabrask'
		? res.json({
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
		: res.send('Item not found')
})

app.listen(3000)
console.log(`Server listening on port ${3000}`)
